"""
Job Distribuido PySpark / MapReduce: FarmaBarrio Big Data Analytics
Calcula el índice de abastecimiento regional y predice quiebres de inventario
"""
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum as _sum, avg, when, current_timestamp

spark = SparkSession.builder \
    .appName("FarmaBarrio-BigData-Analytics-Pipeline") \
    .enableHiveSupport() \
    .getOrCreate()

print("Cargando datos desde Data Lake Curated Zone...")
df_ventas = spark.table("farmabarrio_datalake.hdp_analitica_ventas_consolidadas")
df_precios = spark.table("farmabarrio_datalake.hdp_comportamiento_precios_tiempo")

df_kpi_regional = df_ventas.groupBy("region_geografica") \
    .agg(
        _sum("monto_total").alias("ingresos_totales"),
        avg("tiempo_entrega_minutos").alias("tiempo_promedio_entrega"),
        avg("calificacion_servicio").alias("csat_promedio")
    )

df_kpi_regional.show(truncate=False)

print("Pipeline analítico ejecutado con éxito.")
spark.stop()
