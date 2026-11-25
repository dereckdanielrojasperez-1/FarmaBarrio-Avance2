-- ==============================================================================
-- VERIFICACIÓN DE REPLICACIÓN ASÍNCRONA - APACHE CASSANDRA 5.0
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- CLÚSTER: 3 Nodos Distribuidos Peer-to-Peer (RF=3)
-- INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar / Dereck Daniel Rojas Pérez
-- ==============================================================================

USE farmabarrio;

-- 1. Verificación de Estrategia de Replicación del Keyspace
SELECT keyspace_name, durable_writes, replication 
FROM system_schema.keyspaces 
WHERE keyspace_name = 'farmabarrio';

-- 2. Verificación de Topología de Peers en el Anillo
SELECT peer, data_center, rack, release_version, rpc_address 
FROM system.peers;

-- 3. Prueba de Escritura con Consistencia QUORUM (2 de 3 nodos deben confirmar)
-- Se emplean exclusivamente las columnas reales de ventas_periodo:
CONSISTENCY QUORUM;

INSERT INTO farmabarrio.ventas_periodo (
    farmacia_id, anio_mes, venta_id, codigo_venta,
    fecha_hora, cliente_id, dni_cliente, canal_venta,
    monto_subtotal, monto_igv, monto_total, metodo_pago,
    estado, items_conteo
) VALUES (
    101, '2026-11', 999901, 'VTA-REP-TEST-001',
    toTimestamp(now()), 1001, '40112233', 'marketplace',
    120.00, 21.60, 141.60, 'yape_plin',
    'completada', 3
);

-- 4. Prueba de Lectura con Consistencia ONE (Cualquier réplica responde)
CONSISTENCY ONE;

SELECT farmacia_id, anio_mes, venta_id, codigo_venta, fecha_hora, monto_total, canal_venta
FROM farmabarrio.ventas_periodo 
WHERE farmacia_id = 101 AND anio_mes = '2026-11' AND venta_id = 999901;
