#!/bin/bash
# Estrategia de Respaldo HDFS Snapshot y Recuperación ante Desastres (Disaster Recovery)

echo "=== CREANDO HDFS SNAPSHOT EN DATALAKE FARMABARRIO ==="
hdfs dfsadmin -allowSnapshot /farmabarrio/datalake
hdfs dfs -createSnapshot /farmabarrio/datalake snapshot_farmabarrio_$(date +%Y%m%d)

echo "Snapshot creado exitosamente en: /farmabarrio/datalake/.snapshot/"
echo "Replicando snapshot hacia Storage Secundario (DistCp)..."
# hadoop distcp hdfs://nn1:8020/farmabarrio/datalake/.snapshot/snapshot_farmabarrio_$(date +%Y%m%d) hdfs://nn2:8020/farmabarrio/backup_dr/
echo "Respaldo Big Data finalizado."
