-- FARMABARRIO - AVANCE 2 / ORACLE XE 21c / FRAGMENTACION POR RANGE
-- Archivo 01 - CREACION DE COMPRA_PARTICIONADA
-- Conexion requerida: FARMABARRIO_OWNER, servicio XEPDB1
-- IMPORTANTE: EJECUTAR SOLO UNA VEZ. YA FUE EJECUTADO EN CLASE.
-- NO EJECUTAR DE NUEVO si COMPRA_PARTICIONADA ya existe (ORA-00955).
-- No elimina ni altera la tabla original COMPRA.

-- Comprobaciones previas (solo lectura)
SELECT USER AS usuario_actual,
       SYS_CONTEXT('USERENV', 'CON_NAME') AS contenedor
FROM dual;

SELECT COUNT(*) AS compras_fuente FROM compra;

-- Verificar ANTES si ya fue creada la tabla de demostracion:
SELECT table_name FROM user_tables
WHERE table_name = 'COMPRA_PARTICIONADA';

-- EJECUTAR ESTA SENTENCIA SOLO SI NO EXISTE COMPRA_PARTICIONADA.
-- PARTITION BY RANGE crea fragmentos locales por fecha de compra.
-- CTAS (AS SELECT) copia 500 compras, pero NO replica PK/FK/indices.
CREATE TABLE compra_particionada
PARTITION BY RANGE (fecha_compra)
(
    PARTITION p_2024
        VALUES LESS THAN (DATE '2025-01-01'),
    PARTITION p_2025
        VALUES LESS THAN (DATE '2026-01-01'),
    PARTITION p_futuro
        VALUES LESS THAN (MAXVALUE)
)
AS
SELECT * FROM compra;

-- Comprobacion posterior (solo lectura)
SELECT partition_name, partition_position
FROM user_tab_partitions
WHERE table_name = 'COMPRA_PARTICIONADA'
ORDER BY partition_position;