# localize-framer.ps1
# Downloads all statically declared Framer CDN assets (fonts, favicons) and
# rewrites register.html to use local paths.
#
# Usage: run from the project root:
#   .\localize-framer.ps1

$ErrorActionPreference = "Stop"
$ProjectRoot = $PSScriptRoot

$HtmlPath = Join-Path $ProjectRoot "src\pages\evo\register.html"
$OutFonts  = Join-Path $ProjectRoot "public\evo\fonts"
$OutIcons  = Join-Path $ProjectRoot "public\evo\icons"

# Create output dirs (they likely already exist, no-op if so)
New-Item -ItemType Directory -Force -Path $OutFonts | Out-Null
New-Item -ItemType Directory -Force -Path $OutIcons | Out-Null

$html = [System.IO.File]::ReadAllText($HtmlPath, [System.Text.Encoding]::UTF8)

# Helper: download one URL, return local file name
function Download-Asset {
    param([string]$Url, [string]$DestDir)
    $filename = ($Url -split '/')[-1] -replace '\?.*', ''
    $dest = Join-Path $DestDir $filename
    if (Test-Path $dest) {
        Write-Host "  SKIP (exists) $filename"
    } else {
        Write-Host "  GET  $Url"
        try {
            Invoke-WebRequest -Uri $Url -OutFile $dest -UseBasicParsing -TimeoutSec 30
            Write-Host "       -> saved as $filename"
        } catch {
            Write-Warning "FAILED: $Url -- $_"
        }
    }
    return $filename
}

# 1. Extract & download woff2 font URLs
Write-Host "`n=== Downloading fonts ==="
$fontUrls = [regex]::Matches($html, 'url\("?(https://(?:framerusercontent\.com/assets|fonts\.gstatic\.com)/[^"\)]+\.woff2)"?\)') |
            ForEach-Object { $_.Groups[1].Value } |
            Sort-Object -Unique

foreach ($url in $fontUrls) {
    $fname = Download-Asset -Url $url -DestDir $OutFonts
    $localPath = "/evo/fonts/$fname"
    $html = $html.Replace($url, $localPath)
}
Write-Host "  -> $($fontUrls.Count) font URL(s) processed."

# 2. Download favicons
Write-Host "`n=== Downloading icons ==="
$iconMap = [ordered]@{
    "https://framerusercontent.com/sites/icons/default-favicon-light.v1.png" = "favicon-light.png"
    "https://framerusercontent.com/sites/icons/default-favicon-dark.v1.png"  = "favicon-dark.png"
    "https://framerusercontent.com/sites/icons/default-touch-icon.v3.png"    = "touch-icon.png"
}
foreach ($entry in $iconMap.GetEnumerator()) {
    $url   = $entry.Key
    $fname = $entry.Value
    $dest  = Join-Path $OutIcons $fname
    if (Test-Path $dest) {
        Write-Host "  SKIP (exists) $fname"
    } else {
        Write-Host "  GET  $url"
        try {
            Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 30
            Write-Host "       -> saved as $fname"
        } catch {
            Write-Warning "FAILED: $url -- $_"
        }
    }
    $localPath = "/evo/icons/$fname"
    $html = $html.Replace($url, $localPath)
}

# 3. Remove unnecessary Framer-internal tags
Write-Host "`n=== Patching HTML ==="

# Remove framer-search-index meta tags (both primary and fallback)
$html = $html -replace '\s*<meta name="framer-search-index[^"]*"[^>]+>', ''

# Remove fonts.gstatic.com preconnect
$html = $html -replace '\s*<link href="https://fonts\.gstatic\.com"[^>]+>', ''

# Remove the Framer editor-bar bootstrap script
$html = $html -replace '(?s)\s*<script>try\{if\(localStorage\.getItem\("__framer_force_showing_editorbar_since"\).+?</script>', ''

# Remove Framer analytics script
$html = $html -replace '\s*<script async src="https://events\.framer\.com/script[^>]+></script>', ''

Write-Host "  Removed: framer-search-index meta tags"
Write-Host "  Removed: fonts.gstatic.com preconnect"
Write-Host "  Removed: Framer editor-bar bootstrap script"
Write-Host "  Removed: Framer analytics script"

# 4. Save patched HTML (no BOM)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($HtmlPath, $html, $utf8NoBom)
Write-Host "`n=== Done! ==="
Write-Host "HTML saved: $HtmlPath"
Write-Host "Fonts dir:  $OutFonts"
Write-Host "Icons dir:  $OutIcons"

# 5. Verification
Write-Host "`n=== Verification ==="
$remaining = [regex]::Matches($html, 'framerusercontent\.com/assets|fonts\.gstatic\.com')
if ($remaining.Count -eq 0) {
    Write-Host "  PASS: No CDN font/icon references remain."
} else {
    Write-Warning "  FAIL: $($remaining.Count) CDN reference(s) still found."
}
