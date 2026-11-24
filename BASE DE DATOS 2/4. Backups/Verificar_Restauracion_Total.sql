-- =============================================================================
-- SCRIPT MAESTRO DE AUDITORÍA Y VERIFICACIÓN TOTAL DE RESTAURACIÓN (SEMANA 17)
-- Comprueba ante el docente Mag. José Bustamante la recuperación del 100% de datos
-- En los 4 motores de la plataforma empresarial FarmaBarrio
-- =============================================================================

-- =============================================================================
-- 1. VERIFICACIÓN EN POSTGRESQL (farmabarrio_db - 11 Tablas + 4 Particiones)
-- =============================================================================
\c farmabarrio_db;

SELECT '1. POSTGRESQL: farmacia' AS entidad, count(*) AS total_registros FROM farmacia
UNION ALL
SELECT '2. POSTGRESQL: empleado', count(*) FROM empleado
UNION ALL
SELECT '3. POSTGRESQL: categoria', count(*) FROM categoria
UNION ALL
SELECT '4. POSTGRESQL: laboratorio', count(*) FROM laboratorio
UNION ALL
SELECT '5. POSTGRESQL: medicamento', count(*) FROM medicamento
UNION ALL
SELECT '6. POSTGRESQL: inventario', count(*) FROM inventario
UNION ALL
SELECT '7. POSTGRESQL: cliente', count(*) FROM cliente
UNION ALL
SELECT '8. POSTGRESQL: receta_medica', count(*) FROM receta_medica
UNION ALL
SELECT '9. POSTGRESQL: venta (Monolitica)', count(*) FROM venta
UNION ALL
SELECT '10. POSTGRESQL: detalle_venta', count(*) FROM detalle_venta
UNION ALL
SELECT '11. POSTGRESQL: metodo_pago', count(*) FROM metodo_pago
UNION ALL
SELECT '12. POSTGRESQL PART: fb_frag.venta_norte', count(*) FROM fb_frag.venta_norte
UNION ALL
SELECT '13. POSTGRESQL PART: fb_frag.venta_este', count(*) FROM fb_frag.venta_este
UNION ALL
SELECT '14. POSTGRESQL PART: fb_frag.venta_sur', count(*) FROM fb_frag.venta_sur
UNION ALL
SELECT '15. POSTGRESQL PART: fb_frag.venta_otros', count(*) FROM fb_frag.venta_otros;

-- =============================================================================
-- 2. VERIFICACIÓN EN ORACLE DATABASE XE 21C (FARMABARRIO_OWNER - 10 Tablas)
-- =============================================================================
-- Ejecutar en SQL*Plus o SQL Developer conectado como FARMABARRIO_OWNER:
/*
SELECT '1. ORACLE: PROVEEDOR' AS ENTIDAD, COUNT(*) AS TOTAL FROM proveedor
UNION ALL
SELECT '2. ORACLE: ORDEN_COMPRA', COUNT(*) FROM orden_compra
UNION ALL
SELECT '3. ORACLE PART: ORDEN_COMPRA P_2024', COUNT(*) FROM orden_compra PARTITION (P_2024)
UNION ALL
SELECT '4. ORACLE PART: ORDEN_COMPRA P_2025', COUNT(*) FROM orden_compra PARTITION (P_2025)
UNION ALL
SELECT '5. ORACLE: DETALLE_COMPRA', COUNT(*) FROM detalle_compra
UNION ALL
SELECT '6. ORACLE: RECEPCION_MERCADERIA', COUNT(*) FROM recepcion_mercaderia
UNION ALL
SELECT '7. ORACLE: CUENTA_POR_PAGAR', COUNT(*) FROM cuenta_por_pagar
UNION ALL
SELECT '8. ORACLE: PAGO_PROVEEDOR', COUNT(*) FROM pago_proveedor
UNION ALL
SELECT '9. ORACLE: CUENTA_CONTABLE', COUNT(*) FROM cuenta_contable
UNION ALL
SELECT '10. ORACLE: ASIENTO_CONTABLE', COUNT(*) FROM asiento_contable
UNION ALL
SELECT '11. ORACLE: DETALLE_ASIENTO', COUNT(*) FROM detalle_asiento
UNION ALL
SELECT '12. ORACLE: PERIODO_FISCAL', COUNT(*) FROM periodo_fiscal;
*/

-- =============================================================================
-- 3. VERIFICACIÓN EN MONGODB 9.0 (farmabarrio_mongo - 4 Colecciones)
-- =============================================================================
// Ejecutar en mongosh:
/*
use farmabarrio_mongo;
print("1. MONGODB ventas_historicas: " + db.ventas_historicas.countDocuments());
print("2. MONGODB resenas: " + db.resenas.countDocuments());
print("3. MONGODB auditoria_eventos: " + db.auditoria_eventos.countDocuments());
print("4. MONGODB logs_marketplace: " + db.logs_marketplace.countDocuments());
*/

-- =============================================================================
-- 4. VERIFICACIÓN EN APACHE CASSANDRA 5.0 (farmabarrio - 3 Tablas)
-- =============================================================================
-- Ejecutar en cqlsh:
/*
USE farmabarrio;
CONSISTENCY ALL;
SELECT '1. CASSANDRA: ventas_periodo' AS tabla, count(*) AS total FROM farmabarrio.ventas_periodo;
SELECT '2. CASSANDRA: demanda_medicamento_dia' AS tabla, count(*) AS total FROM farmabarrio.demanda_medicamento_dia;
SELECT '3. CASSANDRA: precios_historicos' AS tabla, count(*) AS total FROM farmabarrio.precios_historicos;
*/
