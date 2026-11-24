# Script de respaldo snapshot y exportacion CSV para Cassandra FarmaBarrio
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$backupDir = Join-Path $scriptDir "..\..\4. Backups\snapshot_cassandra"

Write-Host "Ejecutando nodetool snapshot sobre farmabarrio..." -ForegroundColor Cyan
& nodetool snapshot -t farmabarrio_final farmabarrio

Write-Host "Exportando CSVs canonicos a: $backupDir" -ForegroundColor Green
& cqlsh localhost -e "COPY farmabarrio.ventas_periodo TO '$backupDir\ventas_periodo.csv' WITH HEADER = TRUE;"
& cqlsh localhost -e "COPY farmabarrio.demanda_medicamento_dia TO '$backupDir\demanda_medicamento_dia.csv' WITH HEADER = TRUE;"
& cqlsh localhost -e "COPY farmabarrio.precios_historicos TO '$backupDir\precios_historicos.csv' WITH HEADER = TRUE;"
