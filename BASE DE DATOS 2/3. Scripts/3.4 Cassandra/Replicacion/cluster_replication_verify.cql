-- Verificacion de Replicacion Asincrona en Apache Cassandra 5.0 (3 Nodos, RF=3)
USE farmabarrio;

SELECT keyspace_name, replication FROM system_schema.keyspaces WHERE keyspace_name = 'farmabarrio';
SELECT peer, data_center, rack, release_version, rpc_address FROM system.peers;

CONSISTENCY QUORUM;
INSERT INTO farmabarrio.ventas_periodo (periodo_mes, farmacia_id, fecha_hora, codigo_venta, cliente_id, monto_total, items_count, canal_venta)
VALUES ('2026-11', 101, toTimestamp(now()), 'VTA-REP-TEST-001', 501, 145.50, 3, 'ONLINE');

CONSISTENCY ONE;
SELECT * FROM farmabarrio.ventas_periodo WHERE periodo_mes = '2026-11' AND farmacia_id = 101;
