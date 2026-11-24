-- Creación de Keyspace y Tablas de Series de Tiempo en Apache Cassandra 5.0
-- Keyspace: farmabarrio | Factor de Replicación: 3

CREATE KEYSPACE IF NOT EXISTS farmabarrio
WITH replication = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3
};

USE farmabarrio;

-- 1. Tabla ventas_periodo: Registro histórico de transacciones comerciales ordenadas temporalmente
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

-- 2. Tabla demanda_medicamento_dia: Telemetría diaria de demanda y quiebres de stock
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

-- 3. Tabla precios_historicos: Trazabilidad y evolución de precios farmacéuticos en el tiempo
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
