# CPI 多环境一键切换 —— 使用与交接文档

> 适用对象：SAP Cloud Integration (CPI) 开发/运维同事
> 最后更新：2026-08-30

---

## 1. 这是什么

给 SAP CPI 的 MCP 助手（`mcp__sap-cpi__*` 工具）增加了一套 **多环境一键切换** 能力：
支持在 **dev / uat / prod** 等 CPI 租户之间热切换，无需手工改 `.env`、无需重启服务。

两种切换入口：
- **聊天内切换（推荐）**：直接对 AI 说"切到 UAT"，AI 调用 `switch-environment` 工具完成；
- **命令行切换**：运行 `scripts\switch-cpi.ps1 <env>`。

---

## 2. 目录结构

```
CPI_MCP\
├── cpi-envs\                      ← 环境凭据"唯一真源"（⚠️ 含明文密钥，勿外发/勿提交 git）
│   ├── dev.env                    ← 每个环境一份完整配置（API_* + CPI_* 共 10 个变量）
│   ├── uat.env
│   ├── prod.env
│   └── active.txt                 ← 当前激活环境名（如 dev）
├── scripts\
│   ├── switch-cpi.ps1             ← 一键切换脚本（备份 .env → 写入 → 重启 MCP 服务）
│   └── cpi-status.ps1             ← 状态查看脚本（显示当前环境 + 所有环境域名）
├── mcp-integration-suite\
│   └── package\                   ← CPI MCP 服务器本体
│       ├── src\                   ← TypeScript 源码（含新增 handlers\env\index.ts）
│       ├── dist\                  ← 编译产物（DSH 实际运行的就是 dist\index.js）
│       └── .env                   ← 磁盘镜像 = 当前激活环境的配置（由切换工具维护）
└── HANDOVER.md                    ← 本文档
```

**关键约束：`cpi-envs` 必须与 `mcp-integration-suite` 同级**（工具用相对路径 `../../cpi-envs` 定位）。

---

## 3. 前置条件

| 依赖 | 要求 | 说明 |
|---|---|---|
| Node.js | ≥ 18（本机 v24） | MCP 服务器运行环境 |
| DSH 桌面版 | 已安装并登录 | MCP 客户端宿主 |
| Windows PowerShell | 5.1+ | 脚本使用 |
| CPI 凭据 | dev / uat / prod 各一套 | OAuth client-credentials 或 Basic |

---

## 4. 切换操作手册

### 4.1 方式 A：聊天内切换（推荐，零等待）

在 DSH 对话中直接说：

```
切到 UAT 环境
现在在哪个环境？
有哪些环境可用？
```

AI 会调用对应工具：

| 工具 | 作用 |
|---|---|
| `mcp__sap-cpi__switch-environment` | 切换环境（热替换凭据 + 清 token 缓存 + 持久化） |
| `mcp__sap-cpi__list-environments` | 列出所有环境，★ 标记当前项 |
| `mcp__sap-cpi__current-environment` | 查看当前环境（只显示域名） |

切换立即生效，**无需重启**。

### 4.2 方式 B：命令行切换

```powershell
# 查看当前环境
.\scripts\cpi-status.ps1

# 一键切换到 UAT（自动备份旧 .env 并重启 MCP 服务，约 2~3 秒）
.\scripts\switch-cpi.ps1 uat

# 只改配置不重启进程
.\scripts\switch-cpi.ps1 uat -NoRestart
```

脚本重启原理：结束 CPI MCP 的 node 进程，DSH 的 `dsh-mcp-client` 检测到连接断开后会自动拉起新进程读取新 `.env`。

### 4.3 来回切换与回滚

- **来回切换**：任意顺序反复执行即可（dev → uat → prod → dev ...）。
- **回滚**：每次切换都会把旧 `.env` 备份为 `mcp-integration-suite\package\.env.bak-<yyyyMMdd-HHmmss>`。
  回滚 = 用备份文件覆盖 `.env`，再执行一次脚本/工具（或直接切回目标环境，profile 本身就是真源）。
- ⚠️ **安全习惯**：做任何"破坏性/生产"操作（部署 iflow、发真实报文）前，先 `current-environment` 确认当前环境。

---

## 5. 移交给同事（交接清单）

### 步骤 1：复制文件

**最小交接集**（保持相对布局不变）：

```
CPI_MCP\
├── cpi-envs\
├── scripts\
└── mcp-integration-suite\package\     ← 建议连 node_modules 一起拷（省去 npm install）
```

> 体积大可用压缩包/移动硬盘/共享盘。若只要精简包，可在 package 目录执行 `npm pack` 重新打包 tgz（会包含新 dist，但同事仍需 `npm install` 装依赖）。

### 步骤 2：在同事机器上注册 MCP 服务器

同事需在自己机器的 DSH 配置 `C:\Users\<同事用户名>\.dsh\profiles\desktop\cordis.patch.yml` 中追加（**路径换成自己机器的**），然后重启 DSH：

```yaml
- insert:
    - id: mcp-sap-cpi
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        transport: stdio
        serverName: sap-cpi
        command: 'C:\Program Files\nodejs\node.exe'
        args:
          - 'C:\Users\<用户名>\Desktop\CPI_MCP\mcp-integration-suite\package\dist\index.js'
        cwd: 'C:\Users\<用户名>\Desktop\CPI_MCP\mcp-integration-suite\package'
        env: {}
        toolCallTimeoutMs: 60000
        failOnStartupError: false
        reconnect:
          enabled: true
          initialDelayMs: 1000
          maxDelayMs: 30000
          maxAttempts: 5
```

> ⚠️ 若同事的 DSH 用 web/headless profile，把同样内容加到对应的 `cordis.patch.yml`。

### 步骤 3：填写各自环境的凭据

- **dev**：trial 租户凭据通常**绑定个人账号**，同事需要填自己的 trial 凭据；
- **uat / prod**：若为团队共享服务账号，可直接复制；否则各填各的。
- 填法：编辑 `cpi-envs\<env>.env`，补齐 `API_*` / `CPI_*` 变量（可参考 `mcp-integration-suite\package\.env.example`）。留空的变量在切换时会自动清除，不会泄漏上一环境。

### 步骤 4：验证

```powershell
.\scripts\cpi-status.ps1        # 能看到所有环境域名
```
然后在聊天里执行 `list-environments`，确认 3 个环境 + ★ 当前项都正常。

---

## 6. 凭据与安全

- `cpi-envs\*.env` 与 `package\.env` 含**明文密钥**：禁止提交 git、禁止外发截图/聊天记录。
- 建议在仓库根放 `.gitignore`（如果建 git 仓库）：
  ```gitignore
  cpi-envs/*.env
  cpi-envs/active.txt
  mcp-integration-suite/package/.env
  mcp-integration-suite/package/.env.bak-*
  ```
- 所有工具输出**只回显域名**，密钥永不进入会话日志。

---

## 7. 常见问题（FAQ）

| 现象 | 处理 |
|---|---|
| 工具列表里看不到 `switch-environment` | 服务器已重启但当前会话工具面板未刷新：刷新页面或新开会话 |
| 切换后调用接口报 401/403 | 属正常一次现象？不——工具已自动清 token 缓存；若仍报错，检查该环境凭据是否已填 |
| 运行脚本报"字符串缺少终止符" | 脚本必须是 UTF-8 带 BOM（已内置）；用记事本另存时勿改编码 |
| `.env` 与某个 profile 内容不一致 | 正常，`.env` 只是当前环境的镜像；执行一次切换即同步 |
| 想改 MCP 服务器代码 | 改 `package\src`，然后在 `package` 目录执行 `npm run build`（生成客户端用本地 edmx，无需联网），重启服务生效 |
| 同事机器 `switch-cpi.ps1` 找不到进程 | 检查注册的 `cwd`/`args` 路径是否与同事机器一致；脚本按命令行含 `dist\index.js` 匹配进程 |

---

## 8. 附录：环境变量清单（每份 .env 文件包含）

```
API_OAUTH_CLIENT_ID=          # 设计时 OData API（Integration Content）
API_OAUTH_CLIENT_SECRET=
API_OAUTH_TOKEN_URL=https://<subaccount>.authentication.<tenant>.hana.ondemand.com/oauth/token
API_BASE_URL=https://<cpi uri>.<tenant>.hana.ondemand.com/api/v1
API_USER=                     # 可选：Basic 认证
API_PASS=
CPI_BASE_URL=https://<cpi url>.<tenant>.hana.ondemand.com
CPI_OAUTH_CLIENT_ID=          # 运行时 IFlow 端点（发送测试报文）
CPI_OAUTH_CLIENT_SECRET=
CPI_OAUTH_TOKEN_URL=https://<subaccount>.authentication.<tenant>.hana.ondemand.com/oauth/token
```
