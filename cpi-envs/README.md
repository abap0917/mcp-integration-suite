# cpi-envs —— CPI 多环境配置

本目录是 CPI 多环境一键切换的"凭据唯一真源"。**每个环境一份完整配置**（`API_*` + `CPI_*` 共 10 个变量）。

## 使用方法

1. 将 `dev.env.example` / `uat.env.example` / `prod.env.example` 复制为对应的 `<环境名>.env`：
   ```powershell
   Copy-Item .\cpi-envs\dev.env.example .\cpi-envs\dev.env
   ```
2. 编辑 `cpi-envs\<环境名>.env`，填写你自己的凭据（参考 `mcp-integration-suite\package\.env.example` 的变量说明）。
3. 切换环境（二选一）：
   - 命令行：`.\scripts\switch-cpi.ps1 <dev|uat|prod>`
   - 聊天内：对 AI 说"切到 UAT"，AI 调用 `switch-environment` 工具

## ⚠️ 安全

- `cpi-envs\*.env` 与 `package\.env` 含**明文密钥**：已被 `.gitignore` 排除，**切勿强制提交、切勿外发**。
- 留空的变量在切换时会自动清除，不会泄漏上一环境。
- 工具输出只回显域名，密钥永不进入会话日志。

详见仓库根目录的 `HANDOVER.md`。
