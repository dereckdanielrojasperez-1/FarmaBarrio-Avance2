@echo off
rem Script de Respaldo Snapshot y Exportación CSV para Apache Cassandra (FarmaBarrio)
rem Keyspace: farmabarrio

set CASSANDRA_HOST=localhost
set CASSANDRA_KEYSPACE=farmabarrio
set BACKUP_DIR=%~dp0..\..\4. Backups\snapshot_cassandra

echo 1. Generando Snapshot del Keyspace (%CASSANDRA_KEYSPACE%)
nodetool snapshot -t farmabarrio_final %CASSANDRA_KEYSPACE%

echo.
echo 2. Exportando Tablas a Archivos CSV para Contingencia
cqlsh %CASSANDRA_HOST% -e "COPY %CASSANDRA_KEYSPACE%.ventas_periodo TO '%BACKUP_DIR%\ventas_periodo.csv' WITH HEADER = TRUE;"
cqlsh %CASSANDRA_HOST% -e "COPY %CASSANDRA_KEYSPACE%.demanda_medicamento_dia TO '%BACKUP_DIR%\demanda_medicamento_dia.csv' WITH HEADER = TRUE;"
cqlsh %CASSANDRA_HOST% -e "COPY %CASSANDRA_KEYSPACE%.precios_historicos TO '%BACKUP_DIR%\precios_historicos.csv' WITH HEADER = TRUE;"

echo.
echo Respaldo de Cassandra completado con exito en: %BACKUP_DIR%
