<#
.SYNOPSIS
    查看当前 CPI MCP 服务激活的环境及所有可用环境（只显示域名，不显示密钥）。

.PARAMETER Quiet
    只输出一行简洁结果（供 switch-cpi.ps1 调用）。
#>
param([switch]$Quiet)
$ErrorActionPreference = 'Stop'

$root    = Split-Path -Parent $PSScriptRoot
$envDir  = Join-Path $root 'cpi-envs'
$marker  = Join-Path $envDir 'active.txt'
$envFile = Join-Path $root 'mcp-integration-suite\package\.env'

function Get-HostShort {
    param([string]$url)
    if (-not $url) { return '(未填)' }
    try {
        $u = [uri]$url
        if ($u.Host) { return $u.Host }
        return '(未填)'
    } catch { return '(占位符)' }
}

$active = if (Test-Path $marker) { (Get-Content $marker -Raw).Trim() } else { '(未设置)' }

if ($Quiet) {
    Write-Host "当前环境: $active"
    return
}

Write-Host ''
Write-Host "═══ CPI 环境状态 ═══" -ForegroundColor Cyan
Write-Host ("当前激活环境 : {0}" -f $active)

# 磁盘上的 .env 与哪个 profile 一致？
$diskHash = if (Test-Path $envFile) { (Get-FileHash $envFile -Algorithm SHA256).Hash } else { '' }
Get-ChildItem $envDir -Filter '*.env' -File | Sort-Object BaseName | ForEach-Object {
    $hash = (Get-FileHash $_.FullName -Algorithm SHA256).Hash
    $same = if ($hash -eq $diskHash) { ' ◀ .env 与此一致' } else { '' }
    # 提取 API_BASE_URL / CPI_BASE_URL 域名（不回显密钥）
    $apiHost = (Select-String -Path $_.FullName -Pattern '^API_BASE_URL=(.+)$' -ErrorAction SilentlyContinue |
        ForEach-Object { $_.Matches[0].Groups[1].Value } | Select-Object -First 1)
    $cpiHost = (Select-String -Path $_.FullName -Pattern '^CPI_BASE_URL=(.+)$' -ErrorAction SilentlyContinue |
        ForEach-Object { $_.Matches[0].Groups[1].Value } | Select-Object -First 1)
    $apiShort = Get-HostShort $apiHost
    $cpiShort = Get-HostShort $cpiHost
    $mark = if ($_.BaseName -eq $active) { ' ★' } else { '  ' }
    Write-Host ("  {0}{1,-6} API: {2}  |  Runtime: {3}{4}" -f $mark, $_.BaseName, $apiShort, $cpiShort, $same)
}
Write-Host ''
Write-Host '切换: .\scripts\switch-cpi.ps1 <dev|uat|prod>' -ForegroundColor DarkGray
