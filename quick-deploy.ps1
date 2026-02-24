# Quick deployment script
$env:NODE_OPTIONS='--openssl-legacy-provider'

Write-Host "Building..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deploying..." -ForegroundColor Green
    npm run deploy
    Write-Host "Done! App will be live at https://mahithesh.github.io/Shoppy-Store/" -ForegroundColor Green
} else {
    Write-Host "Build failed!" -ForegroundColor Red
}
