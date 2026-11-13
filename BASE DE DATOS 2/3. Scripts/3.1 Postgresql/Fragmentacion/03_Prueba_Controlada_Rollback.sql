-- FARMABARRIO - PRUEBA CONTROLADA DE ENRUTAMIENTO DE UNA VENTA
-- NO PERMANENTE: todo el ejemplo se revierte al final con ROLLBACK.
-- Requisito: public.venta contiene por lo menos una venta en farmacia 4.
BEGIN;

INSERT INTO fb_frag.venta_particionada (
    venta_id, codigo_venta, cliente_id, farmacia_id, empleado_id,
    fecha_venta, subtotal, igv, total, metodo_pago, estado, created_at, updated_at
)
SELECT
    venta_id + 1000000,
    'PRUEBA-' || venta_id::text,
    cliente_id, farmacia_id, empleado_id,
    CURRENT_TIMESTAMP, subtotal, igv, total,
    metodo_pago, estado, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
FROM public.venta
WHERE farmacia_id = 4
ORDER BY venta_id
LIMIT 1;

-- Debe aparecer en fb_frag.venta_este (no en Norte ni Sur).
SELECT tableoid::regclass AS particion_asignada,
       venta_id, codigo_venta, farmacia_id
FROM fb_frag.venta_particionada
WHERE codigo_venta LIKE 'PRUEBA-%';

ROLLBACK;

-- La prueba no debe permanecer en la tabla (esperado = 0).
SELECT COUNT(*) AS pruebas_temporales_restantes
FROM fb_frag.venta_particionada
WHERE codigo_venta LIKE 'PRUEBA-%';