# mcp-integration-suite

SAP Cloud Integration (CPI) 的 MCP 服务器与多环境一键切换工具包。

fork 自 SAP 官方 `@iflow-mcp/1nbuc_mcp-integration-suite`，在此基础上增加了 **dev / uat / prod 多环境热切换**能力：
支持在多个 CPI 租户之间一键切换，无需手工改 `.env`、无需重启服务。

## 功能

- **CPI 集成内容管理**：通过 `mcp__sap-cpi__*` 工具管理 Integration Content、发送测试报文、查询消息日志等
- **多环境一键切换**：聊天内对 AI 说"切到 UAT"，或命令行运行 `.\scripts\switch-cpi.ps1 uat`
- **内置文档库**：SAP Integration Suite 官方文档与示例 iFlow（MCP 工具可直接引用）

## 目录结构

```
.
├── cpi-envs\                    ← 环境凭据配置（模板见 *.env.example，真实凭据不入库）
├── scripts\
│   ├── switch-cpi.ps1           ← 一键切换脚本
│   └── cpi-status.ps1           ← 状态查看脚本
├── mcp-integration-suite\
│   └── package\                 ← CPI MCP 服务器本体（src + dist + resources）
└── HANDOVER.md                  ← 完整交接文档（必读）
```

## 快速开始

```powershell
# 1. 安装依赖
cd mcp-integration-suite\package
npm install

# 2. 配置环境凭据
Copy-Item ..\..\cpi-envs\dev.env.example ..\..\cpi-envs\dev.env
# 编辑 cpi-envs\dev.env，填写你自己的 CPI 凭据（OAuth client-credentials 或 Basic）

# 3. 切换环境 / 查看状态
.\scripts\switch-cpi.ps1 dev
.\scripts\cpi-status.ps1
```

## ⚠️ 安全说明

- `cpi-envs\*.env`、`package\.env` 含**明文密钥**，已被 `.gitignore` 排除——请使用 `*.env.example` 模板填写**你自己的**凭据，切勿提交真实密钥。
- 工具输出只回显域名，密钥永不进入会话日志。

完整的使用与交接说明见 [HANDOVER.md](HANDOVER.md)。
