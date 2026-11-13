-- Indices de optimizacion B-tree en Oracle XE 21c
BLOQUE 4: ÍNDICES DE OPTIMIZACIÓN (RESOLUCIÓN CRÍTICA DE ERROR ORA-01408)
-- NOTA TÉCNICA: En Oracle, definir una restricción UNIQUE en la columna 'ruc' de 'proveedor'
-- crea automáticamente un índice único interno. Intentar crear otro índice manual sobre 'ruc'
-- genera el error ORA-01408 ("such column list already indexed"). Por buenas prácticas, se
-- indexan las llaves foráneas y columnas de filtro frecuente:

-- 1. Índice compuesto en compra(proveedor_id, estado) - Autor: Maykel Quiñones
CREATE INDEX idx_compra_proveedor_estado ON compra(proveedor_id, estado);

-- 2. Índice en fecha_compra - Autor: Leonardo Wong
CREATE INDEX idx_compra_fecha ON compra(fecha_compra);

-- 3. Índice en pagos_proveedor(proveedor_id) - Autor: Nicole Garcia
CREATE INDEX idx_pago_proveedor ON pagos_proveedor(proveedor_id);

-- 4. Índice en documentos_tributarios(ruc) - Autor: Jorge Matencio
CREATE INDEX idx_documento_ruc ON documentos_tributarios(ruc);

-- 5. Índice en detalle_compra(medicamento_id) - Autor: Dereck Rojas
CREATE INDEX idx_detcompra_medicamento ON detalle_compra(medicamento_id);

-- Demostración de Plan de Ejecución (DBMS_XPLAN)
EXPLAIN PLAN FOR
SELECT c.compra_id, c.fecha_compra, p.nombre, c.total
FROM compra c
INNER JOIN proveedor p ON c.proveedor_id = p.proveedor_id
WHERE c.proveedor_id = 1 AND c.estado = 'PAGADA';

SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY());

--
