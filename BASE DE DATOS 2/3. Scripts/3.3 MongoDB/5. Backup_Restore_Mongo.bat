@echo off
rem Script de respaldo logico y recuperacion para MongoDB FarmaBarrio
rem Herramientas oficiales: mongodump y mongorestore

set MONGO_HOST=localhost
set MONGO_PORT=27017
set MONGO_DB=farmabarrio_nosql
set BACKUP_DIR=C:\Users\Computecno\Documents\Bd2\BASE DE DATOS 2\4. Backups\dump_mongodb

echo Iniciando Respaldo de MongoDB (farmabarrio_nosql)...
mongodump --host %MONGO_HOST% --port %MONGO_PORT% --db %MONGO_DB% --out "%BACKUP_DIR%"

echo.
echo Respaldo completado. Verificando estructura en disco:
dir "%BACKUP_DIR%\%MONGO_DB%"

echo.
echo Para restaurar en caso de contingencia o desastre:
echo mongorestore --host %MONGO_HOST% --port %MONGO_PORT% --db %MONGO_DB%_restored "%BACKUP_DIR%\%MONGO_DB%"
