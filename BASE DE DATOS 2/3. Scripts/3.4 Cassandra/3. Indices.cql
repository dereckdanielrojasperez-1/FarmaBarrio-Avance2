-- Creación de Índices Secundarios de Almacenamiento Adjunto (Storage-Attached Indexes - SAI)
-- Motor: Apache Cassandra 5.0 | Keyspace: farmabarrio

USE farmabarrio;

-- Índices SAI en ventas_periodo
CREATE CUSTOM INDEX IF NOT EXISTS idx_ventas_canal 
ON farmabarrio.ventas_periodo (canal_venta) 
USING 'StorageAttachedIndex';

CREATE CUSTOM INDEX IF NOT EXISTS idx_ventas_estado 
ON farmabarrio.ventas_periodo (estado) 
USING 'StorageAttachedIndex';

CREATE CUSTOM INDEX IF NOT EXISTS idx_ventas_codigo 
ON farmabarrio.ventas_periodo (codigo_venta) 
USING 'StorageAttachedIndex';

-- Índices SAI en demanda_medicamento_dia
CREATE CUSTOM INDEX IF NOT EXISTS idx_demanda_categoria 
ON farmabarrio.demanda_medicamento_dia (categoria_id) 
USING 'StorageAttachedIndex';

CREATE CUSTOM INDEX IF NOT EXISTS idx_demanda_distrito 
ON farmabarrio.demanda_medicamento_dia (distrito) 
USING 'StorageAttachedIndex';

CREATE CUSTOM INDEX IF NOT EXISTS idx_demanda_clasificacion 
ON farmabarrio.demanda_medicamento_dia (clasificacion_demanda) 
USING 'StorageAttachedIndex';

-- Índices SAI en precios_historicos
CREATE CUSTOM INDEX IF NOT EXISTS idx_precios_mostrador 
ON farmabarrio.precios_historicos (precio_venta_mostrador) 
USING 'StorageAttachedIndex';

CREATE CUSTOM INDEX IF NOT EXISTS idx_precios_motivo 
ON farmabarrio.precios_historicos (motivo_cambio) 
USING 'StorageAttachedIndex';
