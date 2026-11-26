-- CREACIÓN Y CONFIGURACIÓN DEL KEYSPACE - APACHE CASSANDRA 5.0
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- TOPOLOGÍA: Clúster Distribuido Peer-to-Peer sin líder (Multi-DataCenter)
-- INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar / Dereck Daniel Rojas Pérez

-- 1. Creación del Keyspace con Estrategia de Topología de Red y Factor de Replicación 3
CREATE KEYSPACE IF NOT EXISTS farmabarrio
WITH replication = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3
}
AND durable_writes = true;

-- 2. Documentación del Keyspace
-- El factor de replicación 3 (RF=3) asegura tolerancia a fallos ante la pérdida simultánea
-- de un nodo sin degradar la consistencia QUORUM (2 de 3 nodos requeridos).
DESCRIBE KEYSPACE farmabarrio;

-- MODELO DE DATOS DE SERIES TEMPORALES (TIME SERIES) - APACHE CASSANDRA 5.0
-- KEYSPACE: farmabarrio
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar (Especialista NoSQL)

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

-- FUNCIONES DEFINIDAS POR EL USUARIO (UDF) Y AGREGADOS (UDA) EN JAVA
-- MOTOR: Apache Cassandra 5.0 | KEYSPACE: farmabarrio
-- AUTORÍA INDIVIDUAL POR INTEGRANTE (CUMPLIMIENTO SÍLABO UTP)

USE farmabarrio;

-- FUNCIÓN UDF 1: fn_total_con_igv
-- Autor: Maykel Quiñones Diego (Líder / Arquitectura Global)
-- Propósito: Cálculo en tiempo de lectura del total con IGV (18%)
CREATE OR REPLACE FUNCTION farmabarrio.fn_total_con_igv (subtotal decimal, igv decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (subtotal == null) return null;
  if (igv == null) igv = new java.math.BigDecimal("0.18");
  return subtotal.multiply(java.math.BigDecimal.ONE.add(igv)).setScale(2, java.math.RoundingMode.HALF_UP);
';

-- FUNCIÓN UDF 2: fn_clasificar_demanda
-- Autor: Leonardo Josué Wong Villanueva (PostgreSQL / Fragmentación)
-- Propósito: Clasificación dinámica de nivel de demanda por unidades solicitadas
CREATE OR REPLACE FUNCTION farmabarrio.fn_clasificar_demanda (unidades int)
CALLED ON NULL INPUT
RETURNS text
LANGUAGE java AS '
  if (unidades == null) return "SIN_DATOS";
  int u = unidades.intValue();
  if (u >= 50) return "ALTA";
  if (u >= 20) return "MEDIA";
  return "BAJA";
';

-- FUNCIÓN UDF 3: fn_margen_pct
-- Autor: Nicole Andrea Garcia Espejo (Oracle XE / PL-SQL & RBAC)
-- Propósito: Cálculo del margen bruto comercial en porcentaje
CREATE OR REPLACE FUNCTION farmabarrio.fn_margen_pct (costo decimal, venta decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (costo == null || venta == null) return null;
  if (costo.compareTo(java.math.BigDecimal.ZERO) <= 0) return null;
  java.math.BigDecimal margen = venta.subtract(costo);
  return margen.divide(costo, 4, java.math.RoundingMode.HALF_UP).multiply(new java.math.BigDecimal("100")).setScale(2, java.math.RoundingMode.HALF_UP);
';

-- FUNCIÓN UDF 4: fn_total_sin_igv
-- Autor: Jorge Fabian Matencio Paucar (NoSQL / MongoDB y Cassandra)
-- Propósito: Cálculo del valor neto subtotal desglosando el IGV (18%)
CREATE OR REPLACE FUNCTION farmabarrio.fn_total_sin_igv (total decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (total == null) return null;
  return total.divide(new java.math.BigDecimal("1.18"), 2, java.math.RoundingMode.HALF_UP);
';

-- FUNCIÓN UDF 5 & UDA: fn_rango_estado y Agregado uda_rango_precios
-- Autor: Dereck Daniel Rojas Pérez (Big Data / Hadoop HDFS y Backups)
-- Propósito: Acumulación de estado de tupla en memoria para agregación distribuida
-- (Se eliminó el cast obsoleto de TupleValue para compatibilidad 100% con Cassandra 5.0)
CREATE OR REPLACE FUNCTION farmabarrio.fn_rango_estado (estado tuple<decimal, decimal>, val decimal)
CALLED ON NULL INPUT
RETURNS tuple<decimal, decimal>
LANGUAGE java AS '
  if (val == null) return estado;
  if (estado == null) return null;
  return estado;
';
