-- Funciones y procedimientos almacenados en PostgreSQL (1 por integrante)
-- Funciones y procedimientos almacenados

-- FUNCIÓN 1: fn_total_ventas_farmacia
-- Autor: Maykel Quiñones
-- Calcula el total de ventas completadas de una farmacia entre dos fechas.
CREATE OR REPLACE FUNCTION fn_total_ventas_farmacia(
    p_farmacia_id INT,
    p_fecha_inicio DATE,
    p_fecha_fin DATE
) RETURNS DECIMAL(10,2) AS $$
DECLARE
    v_total DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(total), 0) INTO v_total
    FROM venta
    WHERE farmacia_id = p_farmacia_id
      AND fecha_venta::DATE BETWEEN p_fecha_inicio AND p_fecha_fin
      AND estado = 'COMPLETADA';
    RETURN v_total;
END;
$$ LANGUAGE plpgsql;

-- PROCEDIMIENTO 2: sp_registrar_entrada_inventario
-- Autor: Leonardo Wong
-- Registra entrada de mercadería, actualiza stock y genera traza de movimiento.
CREATE OR REPLACE PROCEDURE sp_registrar_entrada_inventario(
    p_medicamento_id INT,
    p_farmacia_id    INT,
    p_cantidad       INT,
    p_motivo         VARCHAR
) LANGUAGE plpgsql AS $$
DECLARE
    v_inventario_id INT;
    v_stock_anterior INT;
    v_stock_nuevo INT;
BEGIN
    IF p_cantidad <= 0 THEN
        RAISE EXCEPTION 'La cantidad de entrada debe ser estrictamente mayor a 0';
    END IF;

    SELECT inventario_id, cantidad INTO v_inventario_id, v_stock_anterior
    FROM inventario
    WHERE medicamento_id = p_medicamento_id AND farmacia_id = p_farmacia_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'No existe inventario configurado para medicamento % en farmacia %', p_medicamento_id, p_farmacia_id;
    END IF;

    v_stock_nuevo := v_stock_anterior + p_cantidad;

    UPDATE inventario
    SET cantidad = v_stock_nuevo,
        fecha_ultima_actualizacion = CURRENT_TIMESTAMP
    WHERE inventario_id = v_inventario_id;

    INSERT INTO movimiento_inventario (
        inventario_id, tipo_movimiento, cantidad,
        stock_anterior, stock_nuevo, motivo, fecha_movimiento
    ) VALUES (
        v_inventario_id, 'ENTRADA', p_cantidad,
        v_stock_anterior, v_stock_nuevo, p_motivo, CURRENT_TIMESTAMP
    );

    RAISE NOTICE 'Entrada registrada con éxito: +% unidades de medicamento ID % en farmacia %', p_cantidad, p_medicamento_id, p_farmacia_id;
END;
$$;

-- FUNCIÓN 3: fn_calcular_stock_minimo
-- Autor: Nicole Garcia
-- Valida si el stock actual está por debajo del umbral mínimo configurado.
CREATE OR REPLACE FUNCTION fn_calcular_stock_minimo(
    p_medicamento_id INT,
    p_farmacia_id    INT
) RETURNS BOOLEAN AS $$
DECLARE
    v_cantidad INT;
    v_stock_minimo INT;
BEGIN
    SELECT i.cantidad, m.stock_minimo
    INTO v_cantidad, v_stock_minimo
    FROM inventario i
    INNER JOIN medicamento m ON i.medicamento_id = m.medicamento_id
    WHERE i.medicamento_id = p_medicamento_id
      AND i.farmacia_id = p_farmacia_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'No existe registro para medicamento % en farmacia %', p_medicamento_id, p_farmacia_id;
    END IF;

    IF v_cantidad < v_stock_minimo THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- PROCEDIMIENTO 4: sp_actualizar_precio_medicamento
-- Autor: Jorge Matencio
-- Actualiza precios de compra/venta asegurando margen positivo de ganancia.
CREATE OR REPLACE PROCEDURE sp_actualizar_precio_medicamento(
    p_medicamento_id     INT,
    p_nuevo_precio_compra DECIMAL(10,2),
    p_nuevo_precio_venta  DECIMAL(10,2)
) LANGUAGE plpgsql AS $$
BEGIN
    IF p_nuevo_precio_compra <= 0 OR p_nuevo_precio_venta <= 0 THEN
        RAISE EXCEPTION 'Los precios deben ser estrictamente superiores a 0.00';
    END IF;

    IF p_nuevo_precio_venta <= p_nuevo_precio_compra THEN
        RAISE EXCEPTION 'El precio de venta (S/ %) debe superar al precio de compra (S/ %)', p_nuevo_precio_venta, p_nuevo_precio_compra;
    END IF;

    UPDATE medicamento
    SET precio_compra = p_nuevo_precio_compra,
        precio_venta  = p_nuevo_precio_venta,
        updated_at    = CURRENT_TIMESTAMP
    WHERE medicamento_id = p_medicamento_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'El medicamento con ID % no existe en el catálogo', p_medicamento_id;
    END IF;

    RAISE NOTICE 'Precios actualizados: Medicamento ID % -> Compra: S/ %, Venta: S/ %', p_medicamento_id, p_nuevo_precio_compra, p_nuevo_precio_venta;
END;
$$;

-- FUNCIÓN 5: fn_rotacion_medicamento
-- Autor: Dereck Rojas
-- Calcula el índice de rotación de stock (unidades vendidas / stock actual).
CREATE OR REPLACE FUNCTION fn_rotacion_medicamento(
    p_medicamento_id INT,
    p_farmacia_id    INT
) RETURNS DECIMAL(10,2) AS $$
DECLARE
    v_unidades_vendidas INT;
    v_stock_actual      INT;
    v_rotacion          DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(dv.cantidad), 0)
    INTO v_unidades_vendidas
    FROM detalle_venta dv
    INNER JOIN venta v ON dv.venta_id = v.venta_id
    WHERE dv.medicamento_id = p_medicamento_id
      AND v.farmacia_id = p_farmacia_id
      AND v.estado = 'COMPLETADA';

    SELECT COALESCE(cantidad, 0)
    INTO v_stock_actual
    FROM inventario
    WHERE medicamento_id = p_medicamento_id
      AND farmacia_id = p_farmacia_id;

    IF v_stock_actual = 0 AND v_unidades_vendidas = 0 THEN
        RETURN 0.00;
    ELSIF v_stock_actual = 0 THEN
        RETURN v_unidades_vendidas::DECIMAL(10,2);
    ELSE
        v_rotacion := ROUND(v_unidades_vendidas::DECIMAL / v_stock_actual::DECIMAL, 2);
        RETURN v_rotacion;
    END IF;
END;
$$ LANGUAGE plpgsql;

--
