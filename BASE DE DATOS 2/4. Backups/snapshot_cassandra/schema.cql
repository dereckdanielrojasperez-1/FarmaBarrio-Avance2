-- Schema Snapshot Oficial de Apache Cassandra 5.0
-- Keyspace: farmabarrio
CREATE KEYSPACE IF NOT EXISTS farmabarrio WITH replication = {'class': 'NetworkTopologyStrategy', 'datacenter1': 3};
USE farmabarrio;

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
) WITH CLUSTERING ORDER BY (anio_mes DESC, venta_id ASC);

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
) WITH CLUSTERING ORDER BY (fecha DESC, farmacia_id ASC);

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
) WITH CLUSTERING ORDER BY (fecha_registro DESC, farmacia_id ASC);
