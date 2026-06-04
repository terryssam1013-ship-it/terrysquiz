@echo off
cd /d "%%~dp0"
:LOOP
git status --porcelain > "%C:\Users\Terry\AppData\Local\Temp%\tqs.txt" 2>nul
for %%%%A in ("%C:\Users\Terry\AppData\Local\Temp%\tqs.txt") do set SZ=%%%%~zA
if "%%SZ%%"=="0" (timeout /t 5 /nobreak >nul & goto LOOP)
echo Uploading...
git add -A >nul 2>&1
git commit -m "auto" >nul 2>&1
git push >nul 2>&1
echo [OK] Uploaded.
timeout /t 5 /nobreak >nul
goto LOOP
