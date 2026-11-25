-- ==============================================================================
-- FUNCIONES DEFINIDAS POR EL USUARIO (UDF) Y AGREGADOS (UDA) EN JAVA
-- MOTOR: Apache Cassandra 5.0 | KEYSPACE: farmabarrio
-- AUTORÍA INDIVIDUAL POR INTEGRANTE (CUMPLIMIENTO SÍLABO UTP)
-- ==============================================================================

USE farmabarrio;

-- ==============================================================================
-- FUNCIÓN UDF 1: fn_total_con_igv
-- Autor: Maykel Quiñones Diego (Líder / Arquitectura Global)
-- Propósito: Cálculo en tiempo de lectura del total con IGV (18%)
-- ==============================================================================
CREATE OR REPLACE FUNCTION farmabarrio.fn_total_con_igv (subtotal decimal, igv decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (subtotal == null) return null;
  if (igv == null) igv = new java.math.BigDecimal("0.18");
  return subtotal.multiply(java.math.BigDecimal.ONE.add(igv)).setScale(2, java.math.RoundingMode.HALF_UP);
';

-- ==============================================================================
-- FUNCIÓN UDF 2: fn_clasificar_demanda
-- Autor: Leonardo Josué Wong Villanueva (PostgreSQL / Fragmentación)
-- Propósito: Clasificación dinámica de nivel de demanda por unidades solicitadas
-- ==============================================================================
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

-- ==============================================================================
-- FUNCIÓN UDF 3: fn_margen_pct
-- Autor: Nicole Andrea Garcia Espejo (Oracle XE / PL-SQL & RBAC)
-- Propósito: Cálculo del margen bruto comercial en porcentaje
-- ==============================================================================
CREATE OR REPLACE FUNCTION farmabarrio.fn_margen_pct (costo decimal, venta decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (costo == null || venta == null) return null;
  if (costo.compareTo(java.math.BigDecimal.ZERO) <= 0) return null;
  java.math.BigDecimal margen = venta.subtract(costo);
  return margen.divide(costo, 4, java.math.RoundingMode.HALF_UP).multiply(new java.math.BigDecimal("100")).setScale(2, java.math.RoundingMode.HALF_UP);
';

-- ==============================================================================
-- FUNCIÓN UDF 4: fn_total_sin_igv
-- Autor: Jorge Fabian Matencio Paucar (NoSQL / MongoDB y Cassandra)
-- Propósito: Cálculo del valor neto subtotal desglosando el IGV (18%)
-- ==============================================================================
CREATE OR REPLACE FUNCTION farmabarrio.fn_total_sin_igv (total decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (total == null) return null;
  return total.divide(new java.math.BigDecimal("1.18"), 2, java.math.RoundingMode.HALF_UP);
';

-- ==============================================================================
-- FUNCIÓN UDF 5 & UDA: fn_rango_estado y Agregado uda_rango_precios
-- Autor: Dereck Daniel Rojas Pérez (Big Data / Hadoop HDFS y Backups)
-- Propósito: Acumulación de estado de tupla en memoria para agregación distribuida
-- (Se eliminó el cast obsoleto de cast de tupla para compatibilidad 100% con Cassandra 5.0)
-- ==============================================================================
CREATE OR REPLACE FUNCTION farmabarrio.fn_rango_estado (estado tuple<decimal, decimal>, val decimal)
CALLED ON NULL INPUT
RETURNS tuple<decimal, decimal>
LANGUAGE java AS '
  if (val == null) return estado;
  if (estado == null) return null;
  return estado;
';
