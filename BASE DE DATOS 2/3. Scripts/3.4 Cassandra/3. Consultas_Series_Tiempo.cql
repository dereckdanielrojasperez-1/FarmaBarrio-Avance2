-- Consultas Analíticas sobre Series de Tiempo en Cassandra
-- Responden a preguntas de negocio con filtros sobre Partition Keys y Clustering Keys
-- Keyspace: farmabarrio

USE farmabarrio;

-- Autor: Quiñones Diego, Maykel Piero
-- Consulta 1: Historial cronológico de ventas de la Botica 1 durante el periodo 2024-10
SELECT venta_id, anio_mes, fecha_hora, canal_venta, monto_total, estado
FROM farmabarrio.ventas_periodo
WHERE farmacia_id = 1 AND anio_mes = '2024-10';

-- Autor: Wong Villanueva, Leonardo Josué
-- Consulta 2: Ventas por canal delivery con estado COMPLETADA en la Botica 2
SELECT venta_id, fecha_hora, canal_venta, monto_total
FROM farmabarrio.ventas_periodo
WHERE farmacia_id = 2 AND canal_venta = 'delivery' AND estado = 'COMPLETADA';

-- Autor: Garcia Espejo, Nicole Andrea
-- Consulta 3: Demanda diaria y tasa de quiebre para el Medicamento 10 (Paracetamol 500mg)
SELECT fecha, farmacia_id, unidades_solicitadas, unidades_atendidas, unidades_perdidas, clasificacion_demanda
FROM farmabarrio.demanda_medicamento_dia
WHERE medicamento_id = 10 AND fecha >= '2024-10-01';

-- Autor: Matencio Paucar, Jorge Fabian
-- Consulta 4: Evolución histórica de precios de venta del Medicamento 15
SELECT fecha_registro, farmacia_id, precio_costo_b2b, precio_venta_mostrador, margen_bruto_pct, motivo_cambio
FROM farmabarrio.precios_historicos
WHERE medicamento_id = 15;

-- Autor: Rojas Pérez, Dereck Daniel
-- Consulta 5: Consulta de medicamentos con alta demanda en farmacias del distrito de Comas
SELECT medicamento_id, fecha, farmacia_id, nombre_medicamento, unidades_solicitadas
FROM farmabarrio.demanda_medicamento_dia
WHERE distrito = 'Comas' AND clasificacion_demanda = 'ALTA';
