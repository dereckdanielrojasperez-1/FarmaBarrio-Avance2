-- Definicion de Keyspace y Tablas distribuidas en Apache Cassandra 4.0+
-- Proyecto FarmaBarrio / Modulo Analitico de Series Temporales y Alta Concurrencia

-- 1. Keyspace para entorno de desarrollo y pruebas locales (SimpleStrategy)
CREATE KEYSPACE IF NOT EXISTS farmabarrio_ks
WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 3
};

-- Para despliegue multisede en produccion se utilizaria NetworkTopologyStrategy:
-- CREATE KEYSPACE farmabarrio_prod_ks
-- WITH replication = {
--     'class': 'NetworkTopologyStrategy',
--     'datacenter_lima_norte': 3,
--     'datacenter_lima_sur': 2
-- };

USE farmabarrio_ks;

-- 2. Tabla 1: Historico de variacion de precios por farmacia y producto
-- Clave de particion compuesta: (farmacia_id, medicamento_id) para aislar consultas por producto en botica
-- Claves de agrupacion: fecha_actualizacion (orden descendente) y canal de venta
CREATE TABLE IF NOT EXISTS precios_historicos_por_farmacia (
    farmacia_id int,
    medicamento_id int,
    nombre_medicamento text,
    nombre_farmacia text,
    fecha_actualizacion timestamp,
    canal text,
    precio_regular decimal,
    precio_promocional decimal,
    descuento_porcentaje decimal,
    motivo_cambio text,
    PRIMARY KEY ((farmacia_id, medicamento_id), fecha_actualizacion, canal)
) WITH CLUSTERING ORDER BY (fecha_actualizacion DESC, canal ASC);

-- 3. Tabla 2: Demanda temporal de medicamentos agregada por distrito
-- Clave de particion: (ubigeo_distrito, categoria) para analisis de demanda regional
-- Claves de agrupacion: fecha_hora y pedido_id para seguimiento cronologico
CREATE TABLE IF NOT EXISTS demanda_medicamento_distrito (
    ubigeo_distrito text,
    categoria text,
    fecha_hora timestamp,
    pedido_id text,
    medicamento_id int,
    nombre_medicamento text,
    cantidad_solicitada int,
    total_soles decimal,
    atendido boolean,
    PRIMARY KEY ((ubigeo_distrito, categoria), fecha_hora, pedido_id)
) WITH CLUSTERING ORDER BY (fecha_hora DESC, pedido_id ASC);

-- 4. Tabla 3: Telemetria y registro de visitas a la plataforma marketplace
-- Clave de particion: (fecha_dia, canal_acceso) para distribuir trafico web/app eficientemente
-- Claves de agrupacion: timestamp_visita y sesion_id
CREATE TABLE IF NOT EXISTS visitas_marketplace_log (
    fecha_dia date,
    canal_acceso text,
    timestamp_visita timestamp,
    sesion_id text,
    ip_origen text,
    dispositivo text,
    distrito_origen text,
    termino_busqueda text,
    tiempo_permanencia_seg int,
    convirtio_compra boolean,
    PRIMARY KEY ((fecha_dia, canal_acceso), timestamp_visita, sesion_id)
) WITH CLUSTERING ORDER BY (timestamp_visita DESC, sesion_id ASC);
