-- ==============================================================================
-- MODELO DE DATOS DE SERIES TEMPORALES (TIME SERIES) - APACHE CASSANDRA 5.0
-- KEYSPACE: farmabarrio
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar (Especialista NoSQL)
-- ==============================================================================

USE farmabarrio;

-- 1. TABLA: ventas_periodo
-- Registro histórico de transacciones comerciales ordenadas temporalmente
-- Partition Key: ((farmacia_id), anio_mes, venta_id)
-- Clustering Key: anio_mes DESC, venta_id ASC
CREATE TABLE IF NOT EXISTS farmabarrio.ventas_periodo (
    farmacia_id int,
    anio_mes text,
    venta_id bigint,
    codigo_venta text,
    fecha_hora timestamp,
    cliente_id int,
    dni_cliente text,
    canal_venta text,
    monto_subtotal decimal,
    monto_igv decimal,
    monto_total decimal,
    metodo_pago text,
    estado text,
    items_conteo int,
    PRIMARY KEY ((farmacia_id), anio_mes, venta_id)
) WITH CLUSTERING ORDER BY (anio_mes DESC, venta_id ASC)
AND comment = 'Serie de tiempo de ventas por botica con ordenamiento cronologico';

-- 2. TABLA: demanda_medicamento_dia
-- Telemetría diaria de demanda y detección de quiebres de stock
-- Partition Key: ((medicamento_id), fecha, farmacia_id)
-- Clustering Key: fecha DESC, farmacia_id ASC
CREATE TABLE IF NOT EXISTS farmabarrio.demanda_medicamento_dia (
    medicamento_id int,
    fecha date,
    farmacia_id int,
    nombre_medicamento text,
    categoria_id int,
    unidades_solicitadas int,
    unidades_atendidas int,
    unidades_perdidas int,
    tasa_quiebre_pct decimal,
    monto_vendido decimal,
    distrito text,
    clasificacion_demanda text,
    ultima_actualizacion timestamp,
    PRIMARY KEY ((medicamento_id), fecha, farmacia_id)
) WITH CLUSTERING ORDER BY (fecha DESC, farmacia_id ASC)
AND comment = 'Telemetria diaria de demanda para prediccion de reabastecimiento barrial';

-- 3. TABLA: precios_historicos
-- Trazabilidad y evolución de precios farmacéuticos en el tiempo
-- Partition Key: ((medicamento_id), fecha_registro, farmacia_id)
-- Clustering Key: fecha_registro DESC, farmacia_id ASC
CREATE TABLE IF NOT EXISTS farmabarrio.precios_historicos (
    medicamento_id int,
    fecha_registro date,
    farmacia_id int,
    nombre_medicamento text,
    precio_costo_b2b decimal,
    precio_venta_mostrador decimal,
    margen_bruto_pct decimal,
    motivo_cambio text,
    usuario_modifico text,
    PRIMARY KEY ((medicamento_id), fecha_registro, farmacia_id)
) WITH CLUSTERING ORDER BY (fecha_registro DESC, farmacia_id ASC)
AND comment = 'Historial de variacion de precios para auditoria y analisis de elasticidad';
