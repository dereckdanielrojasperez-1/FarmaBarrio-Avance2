-- ÍNDICES SECUNDARIOS DE ALMACENAMIENTO ADJUNTO (SAI - STORAGE-ATTACHED INDEXES)
-- MOTOR: Apache Cassandra 5.0 | KEYSPACE: farmabarrio
-- AUTORÍA INDIVIDUAL POR INTEGRANTE (CUMPLIMIENTO SÍLABO UTP)

USE farmabarrio;

-- ÍNDICE SAI 1: idx_ventas_canal en ventas_periodo
-- Autor: Maykel Quiñones Diego (Líder / Arquitectura Global)
-- Propósito: Filtrado de transacciones por canal comercial (mostrador, marketplace, delivery)
CREATE CUSTOM INDEX IF NOT EXISTS idx_ventas_canal 
ON farmabarrio.ventas_periodo (canal_venta) 
USING 'StorageAttachedIndex';

-- ÍNDICE SAI 2: idx_ventas_estado en ventas_periodo
-- Autor: Leonardo Josué Wong Villanueva (PostgreSQL / Fragmentación)
-- Propósito: Auditoría de órdenes completadas frente a canceladas sin escaneo global
CREATE CUSTOM INDEX IF NOT EXISTS idx_ventas_estado 
ON farmabarrio.ventas_periodo (estado) 
USING 'StorageAttachedIndex';

-- ÍNDICE SAI 3: idx_ventas_codigo en ventas_periodo
-- Autor: Nicole Andrea Garcia Espejo (Oracle XE / PL-SQL & RBAC)
-- Propósito: Localización sub-milisegundo por código de ticket alfanumérico
CREATE CUSTOM INDEX IF NOT EXISTS idx_ventas_codigo 
ON farmabarrio.ventas_periodo (codigo_venta) 
USING 'StorageAttachedIndex';

-- ÍNDICE SAI 4: idx_demanda_clasificacion en demanda_medicamento_dia
-- Autor: Jorge Fabian Matencio Paucar (NoSQL / MongoDB y Cassandra)
-- Propósito: Filtrado directo de medicamentos con clasificación ALTA_ROTACION o CRITICA
CREATE CUSTOM INDEX IF NOT EXISTS idx_demanda_clasificacion 
ON farmabarrio.demanda_medicamento_dia (clasificacion_demanda) 
USING 'StorageAttachedIndex';

-- ÍNDICE SAI 5: idx_precios_usuario en precios_historicos
-- Autor: Dereck Daniel Rojas Pérez (Big Data / Hadoop HDFS y Backups)
-- Propósito: Auditoría de usuario responsable de modificaciones tarifarias
CREATE CUSTOM INDEX IF NOT EXISTS idx_precios_usuario 
ON farmabarrio.precios_historicos (usuario_modifico) 
USING 'StorageAttachedIndex';
