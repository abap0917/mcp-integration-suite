<#
.SYNOPSIS
    一键切换 SAP CPI MCP 服务的目标环境（dev / uat / prod ...）。

.DESCRIPTION
    1) 校验 cpi-envs\<EnvName>.env 存在
    2) 若内容有变化，备份 package\.env 为 .env.bak-<时间戳>
    3) 复制 profile 到 package\.env
    4) 更新 cpi-envs\active.txt
    5) 结束 CPI MCP 的 node 进程 —— DSH 的 dsh-mcp-client 会自动拉起新进程读取新 .env
    （等效于一次干净的"重启服务"，无需重启 DSH）

.EXAMPLE
    .\switch-cpi.ps1 dev
    .\switch-cpi.ps1 prod -NoRestart   # 只改配置不重启进程
#>
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$EnvName,

    [switch]$NoRestart
)
$ErrorActionPreference = 'Stop'

$root      = Split-Path -Parent $PSScriptRoot                       # CPI_MCP
$envDir    = Join-Path $root 'cpi-envs'
$profile   = Join-Path $envDir "$EnvName.env"
$envFile   = Join-Path $root 'mcp-integration-suite\package\.env'
$marker    = Join-Path $envDir 'active.txt'

if (-not (Test-Path $profile)) {
    $available = (Get-ChildItem $envDir -Filter '*.env' -File -ErrorAction SilentlyContinue |
        ForEach-Object { $_.BaseName }) -join ', '
    Write-Error "环境 '$EnvName' 不存在。cpi-envs 下可用的环境: $available"
}

# ---- 1/2 备份 + 写入 .env（仅内容变化时） ----
$current = if (Test-Path $envFile) { Get-Content $envFile -Raw } else { '' }
$new     = Get-Content $profile -Raw
if ($current -ne $new) {
    $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    Copy-Item $envFile (Join-Path (Split-Path $envFile) ".env.bak-$stamp")
    Copy-Item $profile $envFile -Force
    Write-Host "已备份旧 .env -> .env.bak-$stamp" -ForegroundColor DarkGray
} else {
    Write-Host '.env 与目标环境一致，跳过写入' -ForegroundColor DarkGray
}
Set-Content -Path $marker -Value $EnvName -NoNewline -Encoding utf8

# ---- 3 重启 MCP 服务（kill 后由 DSH 自动拉起） ----
if (-not $NoRestart) {
    $target = Get-CimInstance Win32_Process -Filter "Name='node.exe'" -ErrorAction SilentlyContinue |
        Where-Object { $_.CommandLine -like '*mcp-integration-suite*package*dist*index.js*' }
    if ($target) {
        $ids = ($target | ForEach-Object { $_.ProcessId }) -join ', '
        $target | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
        Start-Sleep -Milliseconds 800
        Write-Host "已结束 CPI MCP 进程 (PID: $ids)，DSH 正在自动重启服务（约 1-2 秒）..." -ForegroundColor Yellow
    } else {
        Write-Host '未找到运行中的 CPI MCP 进程（服务可能尚未启动，新 .env 将在下次启动时生效）'
    }
}

Write-Host ''
Write-Host "✅ 已切换到环境: $EnvName" -ForegroundColor Green
& (Join-Path $PSScriptRoot 'cpi-status.ps1') -Quiet
