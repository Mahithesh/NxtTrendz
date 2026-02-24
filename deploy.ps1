# Deployment script for Shoppy Store

# Set Node options for compatibility
$env:NODE_OPTIONS='--openssl-legacy-provider'

Write-Host "Fetching latest changes..." -ForegroundColor Cyan
git fetch origin

Write-Host "Merging changes..." -ForegroundColor Cyan
git merge origin/main --no-edit --strategy-option=theirs 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "No conflicts or already up to date" -ForegroundColor Yellow
}

Write-Host "Building the application..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Deploying to GitHub Pages..." -ForegroundColor Green
    npm run deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Deployment successful!" -ForegroundColor Green
        Write-Host "Your app will be available at: https://mahithesh.github.io/Shoppy-Store" -ForegroundColor Cyan
    } else {
        Write-Host "Deployment failed!" -ForegroundColor Red
    }
} else {
    Write-Host "Build failed! Please fix the errors and try again." -ForegroundColor Red
}
