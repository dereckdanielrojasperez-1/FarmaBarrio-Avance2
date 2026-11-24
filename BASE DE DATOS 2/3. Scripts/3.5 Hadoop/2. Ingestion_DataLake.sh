#!/bin/bash
# Pipeline de Ingestión Masiva Multi-Motor hacia Apache Hadoop HDFS
# FarmaBarrio Big Data Architecture

echo "=== INICIANDO PIPELINE DE INGESTION FARMABARRIO ==="

# 1. Ingestión Relacional desde PostgreSQL hacia HDFS Raw Zone (Sqoop / Spark)
echo "[1/4] Ingestando transacciones retail desde PostgreSQL..."
hdfs dfs -mkdir -p /farmabarrio/datalake/raw/postgres/ventas
hdfs dfs -put -f /opt/data/postgres_exports/*.parquet /farmabarrio/datalake/raw/postgres/ventas/

# 2. Ingestión Corporativa desde Oracle XE hacia HDFS Raw Zone
echo "[2/4] Ingestando compras corporativas B2B desde Oracle XE..."
hdfs dfs -mkdir -p /farmabarrio/datalake/raw/oracle/compras
hdfs dfs -put -f /opt/data/oracle_exports/*.parquet /farmabarrio/datalake/raw/oracle/compras/

# 3. Ingestión Documental desde MongoDB hacia HDFS Raw Zone
echo "[3/4] Ingestando logs de marketplace y reseñas desde MongoDB..."
hdfs dfs -mkdir -p /farmabarrio/datalake/raw/mongodb/marketplace
hdfs dfs -put -f /opt/data/mongo_dumps/*.json /farmabarrio/datalake/raw/mongodb/marketplace/

# 4. Ingestión Series Temporales desde Cassandra hacia HDFS Raw Zone
echo "[4/4] Ingestando telemetría de demanda y precios desde Cassandra..."
hdfs dfs -mkdir -p /farmabarrio/datalake/raw/cassandra/series_tiempo
hdfs dfs -put -f /opt/data/cassandra_exports/*.csv /farmabarrio/datalake/raw/cassandra/series_tiempo/

echo "=== INGESTION COMPLETADA EXITOSAMENTE ==="
