@echo off
echo ========================================
echo Shoppy Store - GitHub Pages Deployment
echo ========================================
echo.

REM Set Node options for compatibility
set NODE_OPTIONS=--openssl-legacy-provider

echo [1/5] Staging changes...
git add .

echo [2/5] Committing changes...
git commit -m "Fix GitHub Pages routing with basename and 404 handler"

echo [3/5] Pushing to GitHub...
git push origin main

echo [4/5] Building production bundle...
call npm run build

if errorlevel 1 (
    echo Build failed! Please check the errors above.
    pause
    exit /b 1
)

echo [5/5] Deploying to GitHub Pages...
call npm run deploy

if errorlevel 1 (
    echo Deployment failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo Your app will be available at:
echo https://mahithesh.github.io/Shoppy-Store
echo.
echo Note: It may take 1-2 minutes for changes to appear.
echo ========================================
pause
