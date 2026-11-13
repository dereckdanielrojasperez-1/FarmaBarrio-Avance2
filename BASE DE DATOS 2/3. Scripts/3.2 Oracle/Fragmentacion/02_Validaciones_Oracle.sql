-- FARMABARRIO - AVANCE 2 / ORACLE XE 21c
-- Archivo 02 - VALIDACIONES DE FRAGMENTACION POR RANGE
-- Requiere: COMPRA y COMPRA_PARTICIONADA en FARMABARRIO_OWNER.
-- Todas las consultas son de lectura; no eliminan ni alteran datos.
-- Resultado documentado a partir de capturas de SQL Developer.

-- V1. Verificar las tres particiones: P_2024, P_2025, P_FUTURO.
SELECT partition_name, partition_position
FROM user_tab_partitions
WHERE table_name = 'COMPRA_PARTICIONADA'
ORDER BY partition_position;

-- V2. Contar las compras por particion: 333, 167 y 0.
SELECT 'P_2024' AS particion, COUNT(*) AS total_compras
FROM compra_particionada PARTITION (p_2024)
UNION ALL
SELECT 'P_2025', COUNT(*)
FROM compra_particionada PARTITION (p_2025)
UNION ALL
SELECT 'P_FUTURO', COUNT(*)
FROM compra_particionada PARTITION (p_futuro);

-- V3. Verificar el total en origen y destino (500 / 500).
SELECT (SELECT COUNT(*) FROM compra) AS compras_originales,
       (SELECT COUNT(*) FROM compra_particionada) AS compras_particionadas
FROM dual;

-- V4. Comparar todas las columnas mediante MINUS (0 / 0).
-- MINUS devuelve filas DISTINTAS; no detecta diferencias de
-- multiplicidad por si solo. Se acompana de V3 y V4B.
WITH faltantes AS (
    SELECT * FROM compra
    MINUS
    SELECT * FROM compra_particionada
),
sobrantes AS (
    SELECT * FROM compra_particionada
    MINUS
    SELECT * FROM compra
)
SELECT (SELECT COUNT(*) FROM compra) AS compras_originales,
       (SELECT COUNT(*) FROM compra_particionada) AS compras_particionadas,
       (SELECT COUNT(*) FROM faltantes) AS faltantes,
       (SELECT COUNT(*) FROM sobrantes) AS sobrantes
FROM dual;

-- V4B. Control adicional de identificadores duplicados en copia.
-- Se agrega para fortalecer el analisis; no se documenta como ejecutado.
SELECT compra_id, COUNT(*) AS repeticiones
FROM compra_particionada
GROUP BY compra_id
HAVING COUNT(*) > 1;

-- V5. Verificar que cada fecha pertenezca a su rango (0).
SELECT
    (SELECT COUNT(*)
     FROM compra_particionada PARTITION (p_2024)
     WHERE fecha_compra >= DATE '2025-01-01'
        OR fecha_compra IS NULL)
  + (SELECT COUNT(*)
     FROM compra_particionada PARTITION (p_2025)
     WHERE fecha_compra < DATE '2025-01-01'
        OR fecha_compra >= DATE '2026-01-01'
        OR fecha_compra IS NULL)
  + (SELECT COUNT(*)
     FROM compra_particionada PARTITION (p_futuro)
     WHERE fecha_compra < DATE '2026-01-01'
        OR fecha_compra IS NULL)
    AS compras_mal_ubicadas
FROM dual;

-- V6. EXPLAIN PLAN: comprobar partition pruning para el anio 2025.
-- Ejecutar primero EXPLAIN PLAN, despues DBMS_XPLAN.DISPLAY.
EXPLAIN PLAN FOR
SELECT *
FROM compra_particionada
WHERE fecha_compra >= DATE '2025-01-01'
  AND fecha_compra < DATE '2026-01-01';

SELECT *
FROM TABLE(DBMS_XPLAN.DISPLAY(NULL, NULL, 'TYPICAL +PARTITION'));
-- Captura real: PARTITION RANGE SINGLE; PSTART=2; PSTOP=2.
-- Rows estimadas=239 (no confundir con 167 compras reales en 2025).