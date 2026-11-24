-- ==============================================================================
-- CAPA BIG DATA ANALYTICS: APACHE HADOOP 3.3+ & APACHE HIVE / SPARK SQL
-- PROYECTO: FarmaBarrio - Data Lake Empresarial
-- INTEGRANTE RESPONSABLE: Dereck Daniel Rojas Pérez (Big Data / Hadoop HDFS y Backups)
-- ==============================================================================

CREATE DATABASE IF NOT EXISTS farmabarrio_datalake
COMMENT 'Data Lake Corporativo de FarmaBarrio para Inteligencia de Negocios y Machine Learning'
LOCATION '/farmabarrio/datalake/analytics';

USE farmabarrio_datalake;

-- 1. TABLA EXTERNA 31: Ventas Consolidadas Multi-Motor (PostgreSQL + Mongo)
CREATE EXTERNAL TABLE IF NOT EXISTS hdp_analitica_ventas_consolidadas (
    venta_id STRING,
    codigo_venta STRING,
    fecha_operacion TIMESTAMP,
    farmacia_id INT,
    nombre_farmacia STRING,
    region_geografica STRING,
    cliente_id INT,
    tipo_cliente STRING,
    monto_subtotal DECIMAL(12,2),
    monto_igv DECIMAL(12,2),
    monto_total DECIMAL(12,2),
    canal_venta STRING,
    metodo_pago STRING,
    tiempo_entrega_minutos INT,
    calificacion_servicio INT
)
PARTITIONED BY (anio INT, mes INT)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY '\t'
STORED AS PARQUET
LOCATION '/farmabarrio/datalake/curated/ventas_consolidadas';

-- 2. TABLA EXTERNA 32: Auditoría y Seguridad Global Unificada
CREATE EXTERNAL TABLE IF NOT EXISTS hdp_auditoria_seguridad_global (
    log_id STRING,
    timestamp_evento TIMESTAMP,
    motor_origen STRING,
    usuario_db STRING,
    direccion_ip STRING,
    tipo_evento STRING,
    objeto_afectado STRING,
    sentencia_ejecutada STRING,
    resultado_seguridad STRING,
    nivel_severidad STRING
)
PARTITIONED BY (fecha_log DATE)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS ORC
LOCATION '/farmabarrio/datalake/curated/auditoria_seguridad';

-- 3. TABLA EXTERNA 33: Comportamiento y Variación Histórica de Precios
CREATE EXTERNAL TABLE IF NOT EXISTS hdp_comportamiento_precios_tiempo (
    registro_id STRING,
    medicamento_id INT,
    codigo_atc STRING,
    nombre_comercial STRING,
    laboratorio STRING,
    periodo_mes STRING,
    precio_minimo DECIMAL(10,2),
    precio_maximo DECIMAL(10,2),
    precio_promedio DECIMAL(10,2),
    variacion_mensual_pct DECIMAL(5,2),
    indice_inflacion_medica DECIMAL(5,2)
)
PARTITIONED BY (categoria_terapeutica STRING)
STORED AS PARQUET
LOCATION '/farmabarrio/datalake/curated/precios_historicos';

-- 4. TABLA EXTERNA 34: Demanda Insatisfecha y Quiebre de Stock Regional
CREATE EXTERNAL TABLE IF NOT EXISTS hdp_demanda_insatisfecha_regional (
    demanda_id STRING,
    fecha_analisis DATE,
    region STRING,
    departamento STRING,
    medicamento_id INT,
    demanda_unidades INT,
    stock_disponible_red INT,
    unidades_insatisfechas INT,
    impacto_economico_estimado DECIMAL(12,2),
    prioridad_reabastecimiento STRING
)
PARTITIONED BY (region STRING)
STORED AS PARQUET
LOCATION '/farmabarrio/datalake/curated/demanda_insatisfecha';

-- 5. TABLA EXTERNA 35: Evaluación y Rendimiento de Proveedores B2B (Oracle XE)
CREATE EXTERNAL TABLE IF NOT EXISTS hdp_evaluacion_proveedores_b2b (
    evaluacion_id STRING,
    proveedor_id INT,
    razon_social STRING,
    ruc_proveedor STRING,
    total_ordenes_compra INT,
    monto_facturado_acumulado DECIMAL(14,2),
    tasa_cumplimiento_otif_pct DECIMAL(5,2),
    promedio_dias_despacho DECIMAL(4,1),
    incidentes_calidad INT,
    calificacion_scoring STRING
)
STORED AS PARQUET
LOCATION '/farmabarrio/datalake/curated/evaluacion_proveedores';
