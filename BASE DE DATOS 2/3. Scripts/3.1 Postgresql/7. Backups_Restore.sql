-- Procedimientos de respaldo logico y restauracion en PostgreSQL
-- Comandos CLI para pg_dump y pg_restore con verificacion de integridad

-- 1. Comando de Respaldo Completo ejecutado en PowerShell o CMD
-- pg_dump -U postgres -F c -b -v -f "C:\Users\Computecno\Documents\Bd2\BASE DE DATOS 2\4. Backups\farmabarrio_full.backup" farmabarrio_db

-- 2. Comando de Restauracion en Base de Datos de Contingencia
-- createdb -U postgres farmabarrio_restored
-- pg_restore -U postgres -d farmabarrio_restored -v "C:\Users\Computecno\Documents\Bd2\BASE DE DATOS 2\4. Backups\farmabarrio_full.backup"

-- 3. Verificacion de consistencia y conteo de filas post-restauracion
SELECT 'farmacia' AS tabla, COUNT(*) AS total_filas FROM farmacia
UNION ALL
SELECT 'categoria', COUNT(*) FROM categoria
UNION ALL
SELECT 'laboratorio', COUNT(*) FROM laboratorio
UNION ALL
SELECT 'medicamento', COUNT(*) FROM medicamento
UNION ALL
SELECT 'inventario', COUNT(*) FROM inventario
UNION ALL
SELECT 'movimiento_inventario', COUNT(*) FROM movimiento_inventario
UNION ALL
SELECT 'cliente', COUNT(*) FROM cliente
UNION ALL
SELECT 'empleado', COUNT(*) FROM empleado
UNION ALL
SELECT 'venta', COUNT(*) FROM venta
UNION ALL
SELECT 'detalle_venta', COUNT(*) FROM detalle_venta;
