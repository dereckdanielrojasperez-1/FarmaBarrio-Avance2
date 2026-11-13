-- Consultas analiticas sobre Apache Cassandra optimizadas para particionamiento
-- Cada consulta aprovecha la Partition Key y el Clustering Order para maxima velocidad

USE farmabarrio_ks;

-- Autor: Maykel Quiñones
-- Consulta 1: Evolucion y tendencia de precios de Paracetamol en Botica San Juan (Farmacia 1)
-- Aprovecha la clave de particion (farmacia_id, medicamento_id) y clustering descendente
SELECT fecha_actualizacion, canal, precio_regular, precio_promocional, descuento_porcentaje, motivo_cambio
FROM precios_historicos_por_farmacia
WHERE farmacia_id = 1
  AND medicamento_id = 1
LIMIT 10;

-- Autor: Leonardo Wong
-- Consulta 2: Descuentos y variacion de precios en canal delivery para Losartan en Farmacia SMP
-- Filtrado con partition key fija y rango cronologico acotado
SELECT fecha_actualizacion, canal, precio_promocional, descuento_porcentaje
FROM precios_historicos_por_farmacia
WHERE farmacia_id = 6
  AND medicamento_id = 6
  AND fecha_actualizacion >= '2026-10-01 00:00:00+0000'
  AND fecha_actualizacion <= '2026-10-31 23:59:59+0000';

-- Autor: Nicole Garcia
-- Consulta 3: Monitoreo de picos de demanda no atendida de antibioticos en San Juan de Lurigancho
-- Permite detectar desabastecimiento local filtrando por partition key (ubigeo, categoria)
SELECT fecha_hora, pedido_id, nombre_medicamento, cantidad_solicitada, total_soles
FROM demanda_medicamento_distrito
WHERE ubigeo_distrito = '150132'
  AND categoria = 'ANTIBIOTICOS'
  AND fecha_hora >= '2026-10-10 00:00:00+0000'
LIMIT 20;

-- Autor: Jorge Matencio
-- Consulta 4: Deteccion de demanda urgente en horario nocturno para analgesicos en Comas
-- Analisis de rotacion en franja de guardia y emergencias barriales
SELECT fecha_hora, pedido_id, nombre_medicamento, cantidad_solicitada, atendido
FROM demanda_medicamento_distrito
WHERE ubigeo_distrito = '150106'
  AND categoria = 'ANALGESICOS'
ORDER BY fecha_hora DESC
LIMIT 15;

-- Autor: Dereck Rojas
-- Consulta 5: Tasa de conversion y telemetria de busqueda en tiempo real desde la aplicacion movil
-- Clave de particion fija (fecha_dia, canal_acceso) con ordenamiento descendente por timestamp
SELECT timestamp_visita, sesion_id, distrito_origen, termino_busqueda, tiempo_permanencia_seg, convirtio_compra
FROM visitas_marketplace_log
WHERE fecha_dia = '2026-10-15'
  AND canal_acceso = 'APP_MOVIL'
ORDER BY timestamp_visita DESC
LIMIT 25;
