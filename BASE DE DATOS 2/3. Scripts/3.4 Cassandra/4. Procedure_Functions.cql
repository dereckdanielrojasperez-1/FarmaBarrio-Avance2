-- Funciones Definidas por el Usuario (UDF) y Agregados (UDA) en Java
-- Keyspace: farmabarrio

USE farmabarrio;

-- 1. UDF: Cálculo del total con IGV (18%)
CREATE OR REPLACE FUNCTION farmabarrio.fn_total_con_igv (subtotal decimal, igv decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (subtotal == null) return null;
  if (igv == null) igv = new java.math.BigDecimal("0.18");
  return subtotal.multiply(java.math.BigDecimal.ONE.add(igv)).setScale(2, java.math.RoundingMode.HALF_UP);
';

-- 2. UDF: Clasificación de Demanda según volumen
CREATE OR REPLACE FUNCTION farmabarrio.fn_clasificar_demanda (unidades int)
CALLED ON NULL INPUT
RETURNS text
LANGUAGE java AS '
  if (unidades == null) return "DESCONOCIDA";
  if (unidades >= 100) return "ALTA";
  if (unidades >= 30) return "MEDIA";
  return "BAJA";
';

-- 3. UDF: Cálculo del Margen Comercial Porcentual
CREATE OR REPLACE FUNCTION farmabarrio.fn_margen_pct (costo decimal, venta decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (costo == null || venta == null || venta.compareTo(java.math.BigDecimal.ZERO) == 0) return null;
  java.math.BigDecimal diff = venta.subtract(costo);
  return diff.divide(venta, 4, java.math.RoundingMode.HALF_UP).multiply(new java.math.BigDecimal("100")).setScale(2, java.math.RoundingMode.HALF_UP);
';

-- 4. UDF: Desglose de base imponible sin IGV
CREATE OR REPLACE FUNCTION farmabarrio.fn_total_sin_igv (total decimal)
CALLED ON NULL INPUT
RETURNS decimal
LANGUAGE java AS '
  if (total == null) return null;
  return total.divide(new java.math.BigDecimal("1.18"), 2, java.math.RoundingMode.HALF_UP);
';

-- 5. Funciones auxiliares para el Agregado UDA
CREATE OR REPLACE FUNCTION farmabarrio.fn_rango_estado (estado tuple<decimal, decimal>, val decimal)
CALLED ON NULL INPUT
RETURNS tuple<decimal, decimal>
LANGUAGE java AS '
  if (val == null) return estado;
  if (estado == null) return com.datastax.oss.driver.api.core.data.TupleValue.class.cast(null);
  return estado;
';
