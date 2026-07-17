# localize-framer-js.ps1
# Downloads all CDN JS modules for register.html and rewrites the HTML
# to use fully local paths — making the page independent from Framer CDN.
#
# Usage: run from the project root:
#   .\localize-framer-js.ps1

$ErrorActionPreference = "Stop"
$ProjectRoot = $PSScriptRoot
$HtmlPath    = Join-Path $ProjectRoot "src\pages\evo\register.html"
$OutJs       = Join-Path $ProjectRoot "public\evo\register\_framer\js"
$UrlPrefix   = "/evo/register/_framer/js"

New-Item -ItemType Directory -Force -Path $OutJs | Out-Null

$html = [System.IO.File]::ReadAllText($HtmlPath, [System.Text.Encoding]::UTF8)

# ---------------------------------------------------------------------------
# Helper: download one JS file, skip if already exists
# ---------------------------------------------------------------------------
function Download-Js {
    param([string]$Url, [string]$Filename)
    $dest = Join-Path $OutJs $Filename
    if (Test-Path $dest) {
        $kb = [Math]::Round((Get-Item $dest).Length / 1KB, 1)
        Write-Host "  SKIP (exists) $Filename  ($kb KB)"
    } else {
        Write-Host "  GET  $Url"
        try {
            Invoke-WebRequest -Uri $Url -OutFile $dest -UseBasicParsing -TimeoutSec 120
            $kb = [Math]::Round((Get-Item $dest).Length / 1KB, 1)
            Write-Host "       -> $Filename  ($kb KB)"
        } catch {
            Write-Warning "FAILED: $Url -- $_"
        }
    }
    return "$UrlPrefix/$Filename"
}

# ---------------------------------------------------------------------------
# 1. Define every CDN module to download
# ---------------------------------------------------------------------------
$modules = [ordered]@{
    # ES Module Shims polyfill (loaded via <script src>)
    "es-module-shims.js"       = "https://ga.jspm.io/npm:es-module-shims@1.6.3/dist/es-module-shims.js"

    # Framer runtime
    "framer.mjs"               = "https://app.framerstatic.com/framer.VCH2ZBXI.mjs"
    "framer-motion.mjs"        = "https://app.framerstatic.com/framer-motion.FWN53QE3.mjs"

    # React ecosystem
    "react.js"                 = "https://ga.jspm.io/npm:react@18.2.0/index.js"
    "react-dom.js"             = "https://ga.jspm.io/npm:react-dom@18.2.0/index.js"
    "react-dom-client.js"      = "https://ga.jspm.io/npm:react-dom@18.2.0/client.js"
    "react-dom-server.js"      = "https://ga.jspm.io/npm:react-dom@18.2.0/server.browser.js"
    "react-jsx-runtime.js"     = "https://ga.jspm.io/npm:react@18.2.0/jsx-runtime.js"
    "scheduler.js"             = "https://ga.jspm.io/npm:scheduler@0.23.0/index.js"

    # Polyfill stubs for Node built-ins (fs, process)
    "empty.js"                 = "https://framer.com/m/framer/empty.js@0.1.0"

    # Framer page modules
    "not-found-page.js"        = "https://framer.com/m/framer/SitesNotFoundPage.js@1.4.0"
    "screen-augiA20Il.js"      = "https://framerusercontent.com/modules/i7BOQ4zpynETlNO7GCiw/iaOpbSDrUKVhymxLJKO4/augiA20Il.js"
    "siteMetadata.js"          = "https://framerusercontent.com/modules/hGWQ6DoocusTRlKjXbzF/itczqvbEqpED3jEVlLGI/siteMetadata.js"
    "snippets.js"              = "https://framerusercontent.com/modules/Q74MFx2K23ViC3DeZN0e/xAAkGd02j0ebN0yhJdxb/snippets.js"
    "webPageMetadata.js"       = "https://framerusercontent.com/modules/84arWUDq0TWqp6Gd7671/m91S2koZCArSRT4J83af/augiA20Il.js"
}

Write-Host "`n=== Downloading JS modules ==="
$local = @{}
foreach ($entry in $modules.GetEnumerator()) {
    $local[$entry.Key] = Download-Js -Url $entry.Value -Filename $entry.Key
}

# ---------------------------------------------------------------------------
# 2. Build replacement importmap
#    - All bare specifiers now point to local files
#    - fs/process/scheduler moved to top-level imports (no longer scoped)
#    - __framer-badge omitted (badge already removed)
# ---------------------------------------------------------------------------
Write-Host "`n=== Rewriting importmap ==="

$newImportmap = [ordered]@{
    imports = [ordered]@{
        "__framer-not-found-page"                                  = $local["not-found-page.js"]
        "#framer/local/screen/augiA20Il/augiA20Il.js"             = $local["screen-augiA20Il.js"]
        "#framer/local/siteMetadata/siteMetadata/siteMetadata.js" = $local["siteMetadata.js"]
        "#framer/local/snippets/snippets/snippets.js"             = $local["snippets.js"]
        "#framer/local/webPageMetadata/augiA20Il/augiA20Il.js"    = $local["webPageMetadata.js"]
        "framer"                                                   = $local["framer.mjs"]
        "framer-motion"                                            = $local["framer-motion.mjs"]
        "react"                                                    = $local["react.js"]
        "react-dom"                                                = $local["react-dom.js"]
        "react-dom/client"                                         = $local["react-dom-client.js"]
        "react-dom/server"                                         = $local["react-dom-server.js"]
        "react/jsx-runtime"                                        = $local["react-jsx-runtime.js"]
        "fs"                                                       = $local["empty.js"]
        "process"                                                  = $local["empty.js"]
        "scheduler"                                                = $local["scheduler.js"]
    }
}

$newImportmapJson = $newImportmap | ConvertTo-Json -Depth 5 -Compress

# Replace the entire <script type="importmap" ...>...</script> block
$replacement = '<script type="importmap">' + $newImportmapJson + '</script>'
$html = $html -replace '(?s)<script type="importmap"[^>]*>.*?</script>', $replacement
Write-Host "  Updated importmap -> all $($newImportmap.imports.Count) entries point to local files"

# ---------------------------------------------------------------------------
# 3. Rewrite remaining CDN URLs in the HTML body
# ---------------------------------------------------------------------------
Write-Host "`n=== Patching inline CDN URLs ==="

# es-module-shims <script src>
$old = "https://ga.jspm.io/npm:es-module-shims@1.6.3/dist/es-module-shims.js"
$html = $html.Replace($old, $local["es-module-shims.js"])
Write-Host "  es-module-shims <script src> -> local"

# routes: dynamic import of page screen module
$old = "https://framerusercontent.com/modules/i7BOQ4zpynETlNO7GCiw/iaOpbSDrUKVhymxLJKO4/augiA20Il.js"
$html = $html.Replace($old, $local["screen-augiA20Il.js"])
Write-Host "  routes page module -> local"

# loadSnippetsModule: dynamic import of snippets
$old = "https://framerusercontent.com/modules/Q74MFx2K23ViC3DeZN0e/xAAkGd02j0ebN0yhJdxb/snippets.js"
$html = $html.Replace($old, $local["snippets.js"])
Write-Host "  snippets module -> local"

# Framer editor bar (lazy, only loads for Framer editors - nullify it)
$html = $html -replace '(?s)typeof window !== "undefined" \? \(\(\) => \{.*?EditorBar: \r?\n\s*typeof window.*?\} : undefined\r?\n\s*,', 'EditorBar: undefined,'

# ---------------------------------------------------------------------------
# 4. Save patched HTML
# ---------------------------------------------------------------------------
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($HtmlPath, $html, $utf8NoBom)
Write-Host "`n=== Saved: $HtmlPath ==="

# ---------------------------------------------------------------------------
# 5. Verification
# ---------------------------------------------------------------------------
Write-Host "`n=== Verification ==="
$cdnPatterns = @(
    "framerusercontent\.com",
    "app\.framerstatic\.com",
    "ga\.jspm\.io",
    "framer\.com/m/framer",
    "framer\.com/edit"
)
$remaining = 0
foreach ($pattern in $cdnPatterns) {
    $matches = [regex]::Matches($html, $pattern)
    if ($matches.Count -gt 0) {
        Write-Warning "  $($matches.Count) reference(s) to $pattern"
        $remaining += $matches.Count
    }
}
if ($remaining -eq 0) {
    Write-Host "  PASS: No CDN JS references remain. Page is fully self-hosted!"
} else {
    Write-Warning "  $remaining total CDN reference(s) still found - review manually."
}

$totalKb = [Math]::Round((Get-ChildItem $OutJs | Measure-Object -Property Length -Sum).Sum / 1KB, 0)
Write-Host "`n  JS output dir : $OutJs"
Write-Host "  Total size    : $totalKb KB"
$fileCount = (Get-ChildItem $OutJs).Count
Write-Host "  Files         : $fileCount"
