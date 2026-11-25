-- =============================================================================
-- SCRIPT MAESTRO DE AUDITORÍA Y VERIFICACIÓN TOTAL DE RESTAURACIÓN
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes (Grupo 2)
-- Comprueba el 100% de las tablas, colecciones y particiones reales del repositorio.
-- =============================================================================

-- =============================================================================
-- 1. VERIFICACIÓN EN POSTGRESQL (farmabarrio_db - 11 Tablas Base + Auditoría + 4 Particiones)
-- =============================================================================
\c farmabarrio_db;

SELECT '1. POSTGRESQL: categoria' AS entidad, count(*) AS total_registros FROM public.categoria
UNION ALL
SELECT '2. POSTGRESQL: marca', count(*) FROM public.marca
UNION ALL
SELECT '3. POSTGRESQL: laboratorio', count(*) FROM public.laboratorio
UNION ALL
SELECT '4. POSTGRESQL: medicamento', count(*) FROM public.medicamento
UNION ALL
SELECT '5. POSTGRESQL: farmacia', count(*) FROM public.farmacia
UNION ALL
SELECT '6. POSTGRESQL: inventario', count(*) FROM public.inventario
UNION ALL
SELECT '7. POSTGRESQL: movimiento_inventario', count(*) FROM public.movimiento_inventario
UNION ALL
SELECT '8. POSTGRESQL: cliente', count(*) FROM public.cliente
UNION ALL
SELECT '9. POSTGRESQL: empleado', count(*) FROM public.empleado
UNION ALL
SELECT '10. POSTGRESQL: venta (Monolítica)', count(*) FROM public.venta
UNION ALL
SELECT '11. POSTGRESQL: detalle_venta', count(*) FROM public.detalle_venta
UNION ALL
SELECT '12. POSTGRESQL PART: fb_frag.venta_particionada', count(*) FROM fb_frag.venta_particionada
UNION ALL
SELECT '    -> Partición Norte (vta_lima_norte)', count(*) FROM fb_frag.vta_lima_norte
UNION ALL
SELECT '    -> Partición Este (vta_lima_este)', count(*) FROM fb_frag.vta_lima_este
UNION ALL
SELECT '    -> Partición Sur (vta_lima_sur)', count(*) FROM fb_frag.vta_lima_sur
UNION ALL
SELECT '    -> Partición Otros (vta_otros)', count(*) FROM fb_frag.vta_otros;

-- =============================================================================
-- 2. VERIFICACIÓN EN ORACLE DATABASE XE (11 Tablas Base + 3 Particiones RANGE)
-- Ejecutar en SQL*Plus / SQL Developer conectado como FARMABARRIO_OWNER
-- =============================================================================
/*
SELECT '1. ORACLE: PROVEEDOR' AS entidad, COUNT(*) AS total FROM proveedor
UNION ALL SELECT '2. ORACLE: CENTRO_COSTO', COUNT(*) FROM centro_costo
UNION ALL SELECT '3. ORACLE: CUENTA', COUNT(*) FROM cuenta
UNION ALL SELECT '4. ORACLE: MEDICAMENTO_REF', COUNT(*) FROM medicamento_ref
UNION ALL SELECT '5. ORACLE: COMPRA', COUNT(*) FROM compra
UNION ALL SELECT '6. ORACLE: DETALLE_COMPRA', COUNT(*) FROM detalle_compra
UNION ALL SELECT '7. ORACLE: PAGOS_PROVEEDOR', COUNT(*) FROM pagos_proveedor
UNION ALL SELECT '8. ORACLE: DOCUMENTOS_TRIBUTARIOS', COUNT(*) FROM documentos_tributarios
UNION ALL SELECT '9. ORACLE: ASIENTO_CONTABLE', COUNT(*) FROM asiento_contable
UNION ALL SELECT '10. ORACLE: DETALLE_ASIENTO', COUNT(*) FROM detalle_asiento
UNION ALL SELECT '11. ORACLE: IMPUESTOS', COUNT(*) FROM impuestos
UNION ALL SELECT '12. ORACLE PART: COMPRA_PARTICIONADA', COUNT(*) FROM compra_particionada
UNION ALL SELECT '    -> Partición P_2024', COUNT(*) FROM compra_particionada PARTITION (P_2024)
UNION ALL SELECT '    -> Partición P_2025', COUNT(*) FROM compra_particionada PARTITION (P_2025)
UNION ALL SELECT '    -> Partición P_FUTURO', COUNT(*) FROM compra_particionada PARTITION (P_FUTURO);
*/
