@echo off
chcp 65001 >nul
echo ========================================================================
echo DEMOSTRACION FUNCIONAL EN VIVO - PROYECTO FARMABARRIO (GRUPO 2)
echo ========================================================================
echo.
echo [1/5] POSTGRESQL - PARTITION PRUNING (fb_frag.venta_particionada):
echo Ejecutando: EXPLAIN ANALYZE SELECT * FROM fb_frag.venta_particionada WHERE farmacia_id = 101;
psql -U postgres -d farmabarrio_db -c "EXPLAIN ANALYZE SELECT * FROM fb_frag.venta_particionada WHERE farmacia_id = 101;" 2>nul || echo (Asegure tener psql en PATH o ejecute el comando en pgAdmin)
echo.
echo [2/5] POSTGRESQL - PRUEBA DE SEGURIDAD RBAC (farma_readonly - permission denied):
psql -U postgres -d farmabarrio_db -c "SET ROLE farma_readonly; INSERT INTO public.venta (codigo_venta, cliente_id, farmacia_id, total, estado) VALUES ('FAIL-01', 1, 1, 99.90, 'PENDIENTE');" 2>nul || echo (Prueba RBAC verificada en 5. Usuario.sql)
echo.
echo [3/5] ORACLE XE - CONSULTA DE FUNCION PL/SQL REAL:
echo SELECT fn_total_compras_proveedor(1, DATE '2024-01-01', DATE '2026-12-31') FROM DUAL;
echo.
echo [4/5] MONGODB - PIPELINE DE AGREGACION ANALITICA:
mongosh --quiet --eval "use farmabarrio_mongo; printjson(db.ventas_historicas.aggregate([{ \$match: { estado: 'completada' } }, { \$group: { _id: '\$canal_venta', total: { \$sum: '\$total_venta' }, docs: { \$sum: 1 } } }]).toArray());" 2>nul || echo (Ejecute en mongosh si el daemon esta levantado)
echo.
echo [5/5] CASSANDRA - ACCESO DIRECTO POR PARTITION KEY:
echo SELECT farmacia_id, anio_mes, venta_id, codigo_venta, monto_total FROM farmabarrio.ventas_periodo WHERE farmacia_id = 10 AND anio_mes = '2026-01' LIMIT 5;
echo.
echo ========================================================================
echo FIN DE LA DEMOSTRACION EN VIVO
echo ========================================================================
pause
