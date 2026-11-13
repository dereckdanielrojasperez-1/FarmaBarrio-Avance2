-- Procedimientos, funciones y paquetes PL/SQL en Oracle (1 por integrante)
-- Funciones y procedimientos almacenados

-- PROCEDIMIENTO 1: sp_actualizar_compras_vencidas
-- Autor: Maykel Quiñones
-- Anula automáticamente órdenes de compra pendientes con más de 90 días.
CREATE OR REPLACE PROCEDURE sp_actualizar_compras_vencidas
IS
    v_count NUMBER := 0;
BEGIN
    UPDATE compra
    SET estado = 'ANULADA',
        updated_at = SYSTIMESTAMP
    WHERE estado = 'PENDIENTE'
      AND fecha_compra < SYSDATE - 90;

    v_count := SQL%ROWCOUNT;
    DBMS_OUTPUT.PUT_LINE('Compras vencidas anuladas automáticamente: ' || v_count);
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error al anular compras vencidas: ' || SQLERRM);
END sp_actualizar_compras_vencidas;
/

-- FUNCIÓN 2: fn_total_compras_proveedor
-- Autor: Leonardo Wong
-- Calcula el acumulado anual de compras a un proveedor específico.
CREATE OR REPLACE FUNCTION fn_total_compras_proveedor(
    p_proveedor_id IN NUMBER,
    p_anio         IN NUMBER
) RETURN NUMBER
IS
    v_total NUMBER(10,2) := 0;
BEGIN
    SELECT NVL(SUM(total), 0)
    INTO v_total
    FROM compra
    WHERE proveedor_id = p_proveedor_id
      AND EXTRACT(YEAR FROM fecha_compra) = p_anio
      AND estado != 'ANULADA';

    RETURN ROUND(v_total, 2);
EXCEPTION
    WHEN OTHERS THEN
        RETURN 0;
END fn_total_compras_proveedor;
/

-- FUNCIÓN 3: fn_promedio_compras_mes
-- Autor: Nicole Garcia
-- Retorna el promedio del monto de compras realizadas en un mes y año dados.
CREATE OR REPLACE FUNCTION fn_promedio_compras_mes(
    p_mes  IN NUMBER,
    p_anio IN NUMBER
) RETURN NUMBER
IS
    v_promedio NUMBER(10,2) := 0;
BEGIN
    SELECT NVL(AVG(total), 0)
    INTO v_promedio
    FROM compra
    WHERE EXTRACT(MONTH FROM fecha_compra) = p_mes
      AND EXTRACT(YEAR FROM fecha_compra) = p_anio
      AND estado != 'ANULADA';

    RETURN ROUND(v_promedio, 2);
EXCEPTION
    WHEN OTHERS THEN
        RETURN 0;
END fn_promedio_compras_mes;
/

-- PROCEDIMIENTO 4: sp_registrar_pago_proveedor
-- Autor: Jorge Matencio
-- Registra un abono a proveedor y si cubre el total, actualiza compra a 'PAGADA'.
CREATE OR REPLACE PROCEDURE sp_registrar_pago_proveedor(
    p_proveedor_id IN NUMBER,
    p_compra_id    IN NUMBER,
    p_monto        IN NUMBER,
    p_metodo_pago  IN VARCHAR2
)
IS
    v_nuevo_id      NUMBER;
    v_total_compra  NUMBER(10,2);
    v_total_pagado  NUMBER(10,2);
BEGIN
    IF p_monto <= 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'El monto del abono debe ser estrictamente mayor a 0');
    END IF;

    SELECT NVL(MAX(pago_id), 0) + 1 INTO v_nuevo_id FROM pagos_proveedor;

    INSERT INTO pagos_proveedor (
        pago_id, proveedor_id, compra_id, monto_pago,
        fecha_pago, metodo_pago, estado, created_at, updated_at
    ) VALUES (
        v_nuevo_id, p_proveedor_id, p_compra_id, p_monto,
        SYSDATE, p_metodo_pago, 'PAGADO', SYSTIMESTAMP, SYSTIMESTAMP
    );

    SELECT total INTO v_total_compra FROM compra WHERE compra_id = p_compra_id;
    
    SELECT NVL(SUM(monto_pago), 0) INTO v_total_pagado
    FROM pagos_proveedor
    WHERE compra_id = p_compra_id AND estado = 'PAGADO';

    IF v_total_pagado >= v_total_compra THEN
        UPDATE compra 
        SET estado = 'PAGADA', updated_at = SYSTIMESTAMP 
        WHERE compra_id = p_compra_id;
    END IF;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Pago registrado exitosamente. ID Pago: ' || v_nuevo_id);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20002, 'Error al registrar abono a proveedor: ' || SQLERRM);
END sp_registrar_pago_proveedor;
/

-- FUNCIÓN 5: fn_saldo_pendiente_proveedor
-- Autor: Dereck Rojas
-- Calcula la deuda viva pendiente restando total de compras menos pagos recibidos.
CREATE OR REPLACE FUNCTION fn_saldo_pendiente_proveedor(
    p_proveedor_id IN NUMBER
) RETURN NUMBER
IS
    v_total_compras NUMBER(10,2) := 0;
    v_total_pagos   NUMBER(10,2) := 0;
    v_saldo         NUMBER(10,2) := 0;
BEGIN
    SELECT NVL(SUM(total), 0)
    INTO v_total_compras
    FROM compra
    WHERE proveedor_id = p_proveedor_id
      AND estado != 'ANULADA';

    SELECT NVL(SUM(monto_pago), 0)
    INTO v_total_pagos
    FROM pagos_proveedor
    WHERE proveedor_id = p_proveedor_id
      AND estado = 'PAGADO';

    v_saldo := v_total_compras - v_total_pagos;

    IF v_saldo < 0 THEN
        v_saldo := 0;
    END IF;

    RETURN ROUND(v_saldo, 2);
EXCEPTION
    WHEN OTHERS THEN
        RETURN 0;
END fn_saldo_pendiente_proveedor;
/

--
