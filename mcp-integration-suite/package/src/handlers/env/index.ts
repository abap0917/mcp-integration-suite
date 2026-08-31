import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { projPath, logInfo } from "../..";
import { McpServerWithMiddleware } from "../../utils/middleware";
import { resetTokenCache } from "../../api/api_destination";
import { resetTokenCacheCPI } from "../../api/cpi_auth";

/**
 * CPI 多环境一键切换：
 *  - cpi-envs/<name>.env  每个环境一份完整凭据（唯一事实来源）
 *  - cpi-envs/active.txt  当前激活环境名
 *  - package/.env         磁盘镜像（进程重启后保持同一环境）
 *
 * 切换 = 热替换 process.env + 清 OAuth token 缓存 + 写 .env / active.txt，
 * 无需重启 MCP 服务。所有输出只回显域名，绝不回显密钥。
 */
const envDir = path.resolve(projPath, "../../cpi-envs");
const envFilePath = path.join(projPath, ".env");
const activeFilePath = path.join(envDir, "active.txt");

/** 需要管理的完整环境变量清单 */
const ENV_KEYS = [
	"API_OAUTH_CLIENT_ID",
	"API_OAUTH_CLIENT_SECRET",
	"API_OAUTH_TOKEN_URL",
	"API_BASE_URL",
	"API_USER",
	"API_PASS",
	"CPI_BASE_URL",
	"CPI_OAUTH_CLIENT_ID",
	"CPI_OAUTH_CLIENT_SECRET",
	"CPI_OAUTH_TOKEN_URL",
] as const;

const exists = async (p: string): Promise<boolean> => {
	try {
		await fs.access(p);
		return true;
	} catch {
		return false;
	}
};

/** 只取 URL 主机名，隐藏路径与凭据 */
const maskUrl = (url?: string): string => {
	if (!url) return "(未设置)";
	try {
		return new URL(url).hostname;
	} catch {
		return "(无效 URL)";
	}
};

/** 简单解析 dotenv 格式（支持注释与引号） */
const parseDotenv = (content: string): Record<string, string> => {
	const result: Record<string, string> = {};
	for (const line of content.split(/\r?\n/)) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;
		const eq = trimmed.indexOf("=");
		if (eq <= 0) continue;
		const key = trimmed.slice(0, eq).trim();
		let value = trimmed.slice(eq + 1).trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		result[key] = value;
	}
	return result;
};

const activeEnv = async (): Promise<string> => {
	try {
		return (await fs.readFile(activeFilePath, "utf-8")).trim() || "(未设置)";
	} catch {
		return "(未设置)";
	}
};

const envSummary = async (): Promise<string> => {
	return [
		`激活环境: ${await activeEnv()}`,
		`API 设计时: ${maskUrl(process.env.API_BASE_URL)}`,
		`Runtime 端点: ${maskUrl(process.env.CPI_BASE_URL)}`,
	].join("\n");
};

/** 应用一个 profile：备份 -> 写 .env -> 热替换 process.env -> 清 token 缓存 -> 记录 active */
const applyProfile = async (name: string): Promise<string> => {
	const profilePath = path.join(envDir, `${name}.env`);
	const content = await fs.readFile(profilePath, "utf-8");
	const parsed = parseDotenv(content);

	// 1) 内容变化时备份现有 .env（沿用 .env.bak-<yyyyMMdd-HHmmss> 约定）
	let backupNote = ".env 与目标一致，未备份";
	if (await exists(envFilePath)) {
		const current = await fs.readFile(envFilePath, "utf-8");
		if (current !== content) {
			const d = new Date();
			const pad = (n: number) => String(n).padStart(2, "0");
			const stamp = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(
				d.getDate()
			)}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
			await fs.copyFile(envFilePath, path.join(projPath, `.env.bak-${stamp}`));
			backupNote = `.env 已备份为 .env.bak-${stamp}`;
		}
	}

	// 2) 写磁盘镜像（进程重启后保持同一环境）
	await fs.writeFile(envFilePath, content, "utf-8");

	// 3) 热替换 process.env；空值/缺失 -> 删除，避免泄漏上一环境的凭据
	for (const key of ENV_KEYS) {
		const value = parsed[key];
		if (value) process.env[key] = value;
		else delete process.env[key];
	}

	// 4) 清 OAuth token 缓存（旧环境 token 立即失效）
	resetTokenCache();
	resetTokenCacheCPI();

	// 5) 记录激活环境
	await fs.writeFile(activeFilePath, name, "utf-8");

	logInfo(`CPI environment switched to ${name}`);
	return backupNote;
};

export const registerEnvHandlers = (server: McpServerWithMiddleware) => {
	server.registerToolIntegrationSuite(
		"switch-environment",
		`Switch the active SAP CPI environment (dev / uat / prod ...) in one step.
Hot-swaps all API_*/CPI_* credentials in-process, clears OAuth token caches,
persists the profile to .env (survives server restarts) and records the active
environment. Use list-environments first to see available names. Secrets are
never echoed back.`,
		{ name: z.string().describe("Environment profile name from cpi-envs, e.g. dev / uat / prod") },
		async (args: { [x: string]: any }) => {
			const name = args.name as string;
			try {
				const profilePath = path.join(envDir, `${name}.env`);
				if (!(await exists(profilePath))) {
					const files = (await fs.readdir(envDir)).filter((f) =>
						f.endsWith(".env")
					);
					const available = files
						.map((f) => f.slice(0, -4))
						.sort()
						.join(", ");
					return {
						isError: true,
						content: [
							{
								type: "text",
								text: `环境 "${name}" 不存在。可用环境: ${available || "(无)"}`,
							},
						],
					};
				}
				const backupNote = await applyProfile(name);
				return {
					content: [
						{
							type: "text",
							text: `✅ 已切换到环境: ${name}\n${backupNote}\n${await envSummary()}`,
						},
					],
				};
			} catch (error) {
				return {
					isError: true,
					content: [
						{
							type: "text",
							text: `切换失败: ${(error as Error).message}`,
						},
					],
				};
			}
		}
	);

	server.registerToolIntegrationSuite(
		"list-environments",
		`List all available CPI environment profiles (from cpi-envs/*.env) and mark
the currently active one. Hosts only, never secrets.`,
		{},
		async () => {
			try {
				const active = await activeEnv();
				const files = (await fs.readdir(envDir))
					.filter((f) => f.endsWith(".env"))
					.sort();
				const rows: string[] = [];
				for (const f of files) {
					const content = await fs.readFile(path.join(envDir, f), "utf-8");
					const parsed = parseDotenv(content);
					const name = f.slice(0, -4);
					rows.push(
						`${name === active ? "★" : " "} ${name.padEnd(6)} API: ${maskUrl(
							parsed.API_BASE_URL
						)}  Runtime: ${maskUrl(parsed.CPI_BASE_URL)}`
					);
				}
				return {
					content: [
						{
							type: "text",
							text: `当前环境: ${active}\n\n可用环境:\n${rows.join("\n")}`,
						},
					],
				};
			} catch (error) {
				return {
					isError: true,
					content: [
						{ type: "text", text: `读取环境列表失败: ${(error as Error).message}` },
					],
				};
			}
		}
	);

	server.registerToolIntegrationSuite(
		"current-environment",
		`Show the currently active CPI environment (hosts only, no secrets).`,
		{},
		async () => {
			return {
				content: [{ type: "text", text: await envSummary() }],
			};
		}
	);
};
