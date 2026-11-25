$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$source = Get-Content "$root/index-source.html" -Raw
$tables = [regex]::Matches($source,'(?s)<table\b.*?</table>') | Where-Object Value -Match 'Type and description'
$links = $tables | ForEach-Object { [regex]::Matches($_.Value,'<a href="([^"]+)"[^>]*>') } | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$folder = "$root/docs"
New-Item -ItemType Directory -Force $folder | Out-Null
$base = [uri]'https://support.microsoft.com/en-us/excel/excel-functions-alphabetical'
$tasks = for ($i=0; $i -lt $links.Count; $i++) { 
    $url = [uri]::new($base,$links[$i])
    if ($url.Host -eq $base.Host) { [pscustomobject]@{ url=$url.AbsoluteUri; path="$folder/$i.html"; link=$links[$i] } }
}
$tasks | ConvertTo-Json -Depth 3 | Set-Content -Encoding utf8 "$root/docs.json"
$tasks | ForEach-Object -Parallel {
    if (!(Test-Path $_.path)) {
        try { Invoke-WebRequest $_.url -TimeoutSec 12 -OutFile $_.path } catch { Write-Warning "$($_.url) $($_.Exception.Message)" }
    }
} -ThrottleLimit 18
