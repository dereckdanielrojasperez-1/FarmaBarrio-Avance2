-- FARMABARRIO - VALIDACIONES DE FRAGMENTACIÓN (SOLO LECTURA)
-- Ejecutar después de 01, conectado a la base farmabarrio_db.

-- V1: Confirmar base y versión.
SELECT current_database() AS base_actual, version() AS version_postgresql;

-- V2: Listado de la tabla padre y sus particiones físicas.
SELECT relid::regclass AS objeto,
       parentrelid::regclass AS padre,
       isleaf AS es_particion_final,
       level AS nivel
FROM pg_partition_tree('fb_frag.venta_particionada'::regclass)
ORDER BY level, relid::text;

-- V3: Conteos y total monetario por fragmento.
SELECT tableoid::regclass AS fragmento,
       COUNT(*) AS cantidad_ventas,
       SUM(total) AS total_soles
FROM fb_frag.venta_particionada
GROUP BY tableoid
ORDER BY 1;

-- V4: Comparar la cantidad y los totales entre fuente y copia.
SELECT 'ORIGINAL' AS conjunto, COUNT(*) AS ventas,
       SUM(subtotal) AS subtotal, SUM(igv) AS igv,
       SUM(total) AS total
FROM public.venta
UNION ALL
SELECT 'PARTICIONADA', COUNT(*), SUM(subtotal), SUM(igv), SUM(total)
FROM fb_frag.venta_particionada;

-- V5: Diferencias fila a fila (EXCEPT ALL detecta faltantes/duplicados).
-- RESULTADO CORRECTO: faltantes = 0 y sobrantes = 0.
WITH faltantes AS (
    SELECT venta_id, codigo_venta, cliente_id, farmacia_id, empleado_id,
           fecha_venta, subtotal, igv, total, metodo_pago, estado, created_at, updated_at
    FROM public.venta
    EXCEPT ALL
    SELECT venta_id, codigo_venta, cliente_id, farmacia_id, empleado_id,
           fecha_venta, subtotal, igv, total, metodo_pago, estado, created_at, updated_at
    FROM fb_frag.venta_particionada
),
sobrantes AS (
    SELECT venta_id, codigo_venta, cliente_id, farmacia_id, empleado_id,
           fecha_venta, subtotal, igv, total, metodo_pago, estado, created_at, updated_at
    FROM fb_frag.venta_particionada
    EXCEPT ALL
    SELECT venta_id, codigo_venta, cliente_id, farmacia_id, empleado_id,
           fecha_venta, subtotal, igv, total, metodo_pago, estado, created_at, updated_at
    FROM public.venta
)
SELECT (SELECT COUNT(*) FROM faltantes) AS faltantes,
       (SELECT COUNT(*) FROM sobrantes) AS sobrantes;

-- V6: Verificar los criterios de pertenencia (deben ser 0 registros mal asignados).
SELECT COUNT(*) AS mal_ubicadas
FROM fb_frag.venta_particionada
WHERE NOT (
      (tableoid = 'fb_frag.venta_norte'::regclass AND farmacia_id IN (2,3,6,10))
   OR (tableoid = 'fb_frag.venta_este'::regclass AND farmacia_id IN (1,4,8))
   OR (tableoid = 'fb_frag.venta_sur'::regclass AND farmacia_id IN (5,7,9))
   OR (tableoid = 'fb_frag.venta_otros'::regclass AND farmacia_id NOT IN (1,2,3,4,5,6,7,8,9,10))
);

-- V7: Mostrar cada farmacia original con su partición.
SELECT f.farmacia_id, f.nombre AS farmacia,
       COALESCE(p.fragmento, 'sin ventas') AS fragmento,
       COALESCE(p.ventas, 0) AS ventas
FROM public.farmacia AS f
LEFT JOIN (
    SELECT farmacia_id, tableoid::regclass::text AS fragmento,
           COUNT(*) AS ventas
    FROM fb_frag.venta_particionada
    GROUP BY farmacia_id, tableoid
) AS p ON p.farmacia_id = f.farmacia_id
ORDER BY f.farmacia_id;

-- V8: Consulta de negocio: ventas de Ate (farmacia_id = 4), sin escanear
-- particiones de Norte y Sur; EXPLAIN debe mostrar la partición Este.
EXPLAIN (ANALYZE, BUFFERS)
SELECT farmacia_id, COUNT(*) AS transacciones,
       SUM(total) AS importe_total
FROM fb_frag.venta_particionada
WHERE farmacia_id = 4
GROUP BY farmacia_id;

-- V9: Comparar las ventas completadas por zona (consistencia de negocio).
SELECT tableoid::regclass AS zona,
       COUNT(*) AS ventas_completadas,
       SUM(total) AS total_completado
FROM fb_frag.venta_particionada
WHERE estado = 'COMPLETADA'
GROUP BY tableoid
ORDER BY 1;