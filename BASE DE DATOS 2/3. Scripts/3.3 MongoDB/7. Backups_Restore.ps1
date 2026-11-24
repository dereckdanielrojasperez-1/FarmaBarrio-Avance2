# Script de respaldo y restauracion MongoDB FarmaBarrio
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$backupDir = Join-Path $scriptDir "..\..\4. Backups\dump_mongodb"

Write-Host "Iniciando mongodump de farmabarrio_mongo hacia: $backupDir" -ForegroundColor Cyan
& mongodump --host localhost --port 27017 --db farmabarrio_mongo --out $backupDir

Write-Host "Verificando directorio de respaldo..." -ForegroundColor Green
Get-ChildItem -Path (Join-Path $backupDir "farmabarrio_mongo") | Select-Object Name, Length
