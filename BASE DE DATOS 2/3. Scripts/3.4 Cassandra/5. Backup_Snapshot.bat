@echo off
rem Script de respaldo fisico mediante snapshots y exportacion para Cassandra
rem Herramientas oficiales: nodetool snapshot y cqlsh COPY

set CASSANDRA_HOST=localhost
set CASSANDRA_KEYSPACE=farmabarrio_ks
set SNAPSHOT_NAME=FarmaBarrio_Avance2_Semana14
set BACKUP_DIR=C:\Users\Computecno\Documents\Bd2\BASE DE DATOS 2\4. Backups\snapshot_cassandra

echo Creando Snapshot fisico de Cassandra (%CASSANDRA_KEYSPACE%)...
nodetool snapshot -t %SNAPSHOT_NAME% %CASSANDRA_KEYSPACE%

echo.
echo Exportando tablas en formato delimitado para contingencia logica...
cqlsh %CASSANDRA_HOST% -e "COPY %CASSANDRA_KEYSPACE%.precios_historicos_por_farmacia TO '%BACKUP_DIR%\precios_historicos.csv' WITH HEADER = TRUE;"
cqlsh %CASSANDRA_HOST% -e "COPY %CASSANDRA_KEYSPACE%.demanda_medicamento_distrito TO '%BACKUP_DIR%\demanda_distrito.csv' WITH HEADER = TRUE;"
cqlsh %CASSANDRA_HOST% -e "COPY %CASSANDRA_KEYSPACE%.visitas_marketplace_log TO '%BACKUP_DIR%\visitas_log.csv' WITH HEADER = TRUE;"

echo.
echo Respaldo completado. Archivos generados en %BACKUP_DIR%:
dir "%BACKUP_DIR%"
