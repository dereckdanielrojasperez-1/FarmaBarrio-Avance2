# Script de respaldo snapshot y exportacion CSV para Cassandra
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$backupDir = Join-Path $scriptDir "..\..\4. Backups\snapshot_cassandra"

Write-Host "Ejecutando nodetool snapshot..."
& nodetool snapshot -t FarmaBarrio_Semana14 farmabarrio_ks

Write-Host "Exportando CSVs a: $backupDir"
& cqlsh localhost -e "COPY farmabarrio_ks.precios_historicos_por_farmacia TO '$backupDir\precios_historicos.csv' WITH HEADER = TRUE;"
& cqlsh localhost -e "COPY farmabarrio_ks.demanda_medicamento_distrito TO '$backupDir\demanda_distrito.csv' WITH HEADER = TRUE;"
& cqlsh localhost -e "COPY farmabarrio_ks.visitas_marketplace_log TO '$backupDir\visitas_log.csv' WITH HEADER = TRUE;"
