# Script de respaldo y restauracion MongoDB FarmaBarrio
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$backupDir = Join-Path $scriptDir "..\..\4. Backups\dump_mongodb"

Write-Host "Iniciando mongodump hacia: $backupDir"
& mongodump --host localhost --port 27017 --db farmabarrio_nosql --out $backupDir

Write-Host "Verificando directorio de respaldo..."
Get-ChildItem -Path (Join-Path $backupDir "farmabarrio_nosql")
