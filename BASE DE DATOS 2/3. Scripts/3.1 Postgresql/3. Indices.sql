-- Indices de optimizacion y planes de ejecucion en PostgreSQL
BLOQUE 4: ÍNDICES DE OPTIMIZACIÓN Y PLANES DE EJECUCIÓN (EXPLAIN ANALYZE)

-- 1. Índice compuesto: inventario(medicamento_id, farmacia_id) - Autor: Maykel Quiñones
CREATE INDEX idx_inventario_medicamento_farmacia ON inventario(medicamento_id, farmacia_id);

-- 2. Índice temporal: venta(fecha_venta) - Autor: Leonardo Wong
CREATE INDEX idx_venta_fecha ON venta(fecha_venta);

-- 3. Índice en catálogo: medicamento(nombre) - Autor: Nicole Garcia
CREATE INDEX idx_medicamento_nombre ON medicamento(nombre);

-- 4. Índice de búsqueda: cliente(dni) - Autor: Jorge Matencio
CREATE INDEX idx_cliente_dni ON cliente(dni);

-- 5. Índice de negocio: farmacia(ruc) - Autor: Dereck Rojas
CREATE INDEX idx_farmacia_ruc ON farmacia(ruc);

-- Demostración de optimización (Seq Scan -> Index Scan)
EXPLAIN ANALYZE
SELECT * FROM venta
WHERE fecha_venta BETWEEN '2024-06-01' AND '2024-06-30'
  AND farmacia_id = 1;

EXPLAIN ANALYZE
SELECT * FROM inventario
WHERE medicamento_id = 1 AND farmacia_id = 1;

--
