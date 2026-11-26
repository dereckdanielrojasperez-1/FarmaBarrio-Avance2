@echo off
rem Script de Respaldo Lógico y Restauración para MongoDB (FarmaBarrio)
rem Herramientas oficiales: mongodump y mongorestore

set MONGO_HOST=localhost
set MONGO_PORT=27017
set MONGO_DB=farmabarrio_mongo
set BACKUP_DIR=%~dp0..\..\4. Backups\dump_mongodb

echo Iniciando Respaldo Logico con mongodump (%MONGO_DB%)
mongodump --host %MONGO_HOST% --port %MONGO_PORT% --db %MONGO_DB% --out "%BACKUP_DIR%"

echo.
echo Verificando colecciones respaldadas en: "%BACKUP_DIR%\%MONGO_DB%"
dir "%BACKUP_DIR%\%MONGO_DB%"
