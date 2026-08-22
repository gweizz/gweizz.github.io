@echo off
title Deploy - Campeonato Pangare de Kart para GitHub Pages
echo ========================================================
echo Publicando Campeonato Pangare de Kart no GitHub Pages
echo Destino: https://github.com/gweizz/gweizz.github.io.git
echo ========================================================
echo.

set PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%LOCALAPPDATA%\Programs\MinGit\mingw64\bin;%PATH%

cd /d "c:\0 - Projetos\Sites\Pangares"

git add -A
git commit -m "Deploy Campeonato Pangare de Kart Oficial - 54 Campeonato (2026/2)" 2>nul
git branch -M gh-pages
git remote set-url origin https://github.com/gweizz/gweizz.github.io.git

echo.
echo Realizando o push (substituindo arquivos antigos)...
git push -u origin gh-pages --force

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo SUCESSO! O site foi publicado com exito!
    echo Acesse em alguns instantes: https://gweizz.github.io/
    echo ========================================================
) else (
    echo ========================================================
    echo Houve um erro no envio. Verifique suas credenciais do GitHub.
    echo ========================================================
)
echo.
pause
