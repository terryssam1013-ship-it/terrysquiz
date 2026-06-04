@echo off
cd /d "%~dp0"

echo.
echo  ============================================
echo    Terry's Quiz - First-time Setup
echo  ============================================
echo.

git --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] Git is not installed.
    echo  Please install Git first: https://git-scm.com/download/win
    echo.
    pause
    exit /b
)

if exist ".git" (
    echo  Already connected to GitHub. Skipping setup.
    echo  You can now run auto-upload.bat
    echo.
    pause
    exit /b
)

echo  Connecting to GitHub repository...
git init
git branch -M main
git remote add origin https://github.com/terryssam1013-ship-it/terrysquiz.git

echo.
echo  Downloading existing files from GitHub...
git fetch origin main
git checkout -b main origin/main

echo.
echo  ============================================
echo    SETUP COMPLETE!
echo    Now run auto-upload.bat to start
echo    automatic uploading.
echo  ============================================
echo.
echo  A GitHub login window may appear the first time.
echo  Sign in with your GitHub account when it does.
echo.
pause
