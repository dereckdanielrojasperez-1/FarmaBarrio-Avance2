-- PROCEDIMIENTOS, FUNCIONES Y DISPARADORES (TRIGGERS) - POSTGRESQL 18
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- CUMPLIMIENTO SÍLABO UTP: UNIDAD 2 (PL/pgSQL, Triggers y Manejo Transaccional)

-- FUNCIÓN 1: fn_total_ventas_farmacia
-- Autor: Maykel Quiñones Diego (Líder / Arquitectura Global)
-- Propósito: Calcula el total de ventas completadas de una farmacia entre dos fechas.
CREATE OR REPLACE FUNCTION fn_total_ventas_farmacia(
    p_farmacia_id INT,
    p_fecha_inicio DATE,
    p_fecha_fin DATE
) RETURNS DECIMAL(10,2) AS $$
DECLARE
    v_total DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(total), 0.00) INTO v_total
    FROM public.venta
    WHERE farmacia_id = p_farmacia_id
      AND fecha_venta::DATE BETWEEN p_fecha_inicio AND p_fecha_fin
      AND estado = 'COMPLETADA';
    RETURN v_total;
END;
$$ LANGUAGE plpgsql;

-- PROCEDIMIENTO 2: sp_registrar_entrada_inventario
-- Autor: Leonardo Josué Wong Villanueva (PostgreSQL / Fragmentación)
-- Propósito: Registra entrada de mercadería, actualiza stock y genera traza en movimiento_inventario.
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
        RAISE EXCEPTION 'La cantidad de entrada debe ser estrictamente mayor a 0 (recibido: %)', p_cantidad;
    END IF;

    SELECT inventario_id, cantidad INTO v_inventario_id, v_stock_anterior
    FROM public.inventario
    WHERE medicamento_id = p_medicamento_id AND farmacia_id = p_farmacia_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'No existe registro de inventario configurado para medicamento ID % en farmacia ID %', p_medicamento_id, p_farmacia_id;
    END IF;

    v_stock_nuevo := v_stock_anterior + p_cantidad;

    UPDATE public.inventario
    SET cantidad = v_stock_nuevo,
        fecha_ultima_actualizacion = CURRENT_TIMESTAMP
    WHERE inventario_id = v_inventario_id;

    INSERT INTO public.movimiento_inventario (
        inventario_id, tipo_movimiento, cantidad,
        stock_anterior, stock_nuevo, motivo, fecha_movimiento
    ) VALUES (
        v_inventario_id, 'ENTRADA', p_cantidad,
        v_stock_anterior, v_stock_nuevo, p_motivo, CURRENT_TIMESTAMP
    );

    RAISE NOTICE 'Entrada registrada con éxito: +% unidades de medicamento ID % en farmacia ID %', p_cantidad, p_medicamento_id, p_farmacia_id;
END;
$$;

-- FUNCIÓN 3: fn_calcular_stock_minimo
-- Autor: Nicole Andrea Garcia Espejo (Oracle XE / PL-SQL & RBAC)
-- Propósito: Valida si el stock actual está por debajo del umbral mínimo configurado.
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
    FROM public.inventario i
    INNER JOIN public.medicamento m ON i.medicamento_id = m.medicamento_id
    WHERE i.medicamento_id = p_medicamento_id
      AND i.farmacia_id = p_farmacia_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'No existe registro para medicamento ID % en farmacia ID %', p_medicamento_id, p_farmacia_id;
    END IF;

    IF v_cantidad < v_stock_minimo THEN
        RETURN TRUE; -- Requiere alerta de reabastecimiento
    ELSE
        RETURN FALSE;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- PROCEDIMIENTO 4: sp_actualizar_precio_medicamento
-- Autor: Jorge Fabian Matencio Paucar (NoSQL / MongoDB y Cassandra)
-- Propósito: Actualiza precios de compra/venta asegurando margen positivo de ganancia.
CREATE OR REPLACE PROCEDURE sp_actualizar_precio_medicamento(
    p_medicamento_id      INT,
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

    UPDATE public.medicamento
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
-- Autor: Dereck Daniel Rojas Pérez (Big Data / Hadoop HDFS y Backups)
-- Propósito: Calcula el índice de rotación de stock (unidades vendidas / stock actual).
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
    FROM public.detalle_venta dv
    INNER JOIN public.venta v ON dv.venta_id = v.venta_id
    WHERE dv.medicamento_id = p_medicamento_id
      AND v.farmacia_id = p_farmacia_id
      AND v.estado = 'COMPLETADA';

    SELECT COALESCE(cantidad, 0)
    INTO v_stock_actual
    FROM public.inventario
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

-- 6. DISPARADOR (TRIGGER) DE AUDITORÍA DE PRECIOS
-- Autor: Leonardo Josué Wong Villanueva
-- Propósito: Registrar de forma inmutable cualquier cambio en los precios de catálogo.

-- A) Tabla de Auditoría de Precios
CREATE TABLE IF NOT EXISTS public.auditoria_precio_medicamento (
    auditoria_id        SERIAL PRIMARY KEY,
    medicamento_id      INT NOT NULL REFERENCES public.medicamento(medicamento_id),
    precio_compra_ant   DECIMAL(10,2) NOT NULL,
    precio_compra_nuevo DECIMAL(10,2) NOT NULL,
    precio_venta_ant    DECIMAL(10,2) NOT NULL,
    precio_venta_nuevo  DECIMAL(10,2) NOT NULL,
    usuario_db          VARCHAR(64) DEFAULT CURRENT_USER,
    fecha_modificacion  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    motivo_cambio       VARCHAR(255) DEFAULT 'Actualización vía procedimiento o DML'
);

-- B) Función Trigger
CREATE OR REPLACE FUNCTION fn_trg_auditoria_precio()
RETURNS TRIGGER AS $$
BEGIN
    -- Se dispara solo si hubo alteración real en precio de compra o venta
    IF (OLD.precio_compra IS DISTINCT FROM NEW.precio_compra) OR 
       (OLD.precio_venta IS DISTINCT FROM NEW.precio_venta) THEN
        INSERT INTO public.auditoria_precio_medicamento (
            medicamento_id, precio_compra_ant, precio_compra_nuevo,
            precio_venta_ant, precio_venta_nuevo, usuario_db, fecha_modificacion
        ) VALUES (
            OLD.medicamento_id, OLD.precio_compra, NEW.precio_compra,
            OLD.precio_venta, NEW.precio_venta, CURRENT_USER, CURRENT_TIMESTAMP
        );
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- C) Declaración del Trigger
DROP TRIGGER IF EXISTS trg_auditoria_precio ON public.medicamento;
CREATE TRIGGER trg_auditoria_precio
AFTER UPDATE OF precio_compra, precio_venta ON public.medicamento
FOR EACH ROW
EXECUTE FUNCTION fn_trg_auditoria_precio();

-- 7. PROCEDIMIENTO TRANSACCIONAL CON SAVEPOINT
-- Autor: Maykel Quiñones Diego / Leonardo Wong Villanueva
-- Propósito: Demostrar manejo transaccional robusto con puntos de recuperación
-- (SAVEPOINT) ante contingencias de inventario sin abortar toda la operación.
CREATE OR REPLACE PROCEDURE sp_registrar_venta_con_savepoint(
    p_codigo_venta   VARCHAR,
    p_cliente_id     INT,
    p_farmacia_id    INT,
    p_medicamento_id INT,
    p_cantidad       INT
) LANGUAGE plpgsql AS $$
DECLARE
    v_venta_id     INT;
    v_precio_venta DECIMAL(10,2);
    v_subtotal     DECIMAL(10,2);
    v_stock_actual INT;
BEGIN
    -- Validar parámetros
    IF p_cantidad <= 0 THEN
        RAISE EXCEPTION 'La cantidad solicitada debe ser mayor a 0';
    END IF;

    SELECT precio_venta INTO v_precio_venta
    FROM public.medicamento WHERE medicamento_id = p_medicamento_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Medicamento ID % inexistente', p_medicamento_id;
    END IF;

    v_subtotal := v_precio_venta * p_cantidad;

    -- Inicio de cabecera de venta
    INSERT INTO public.venta (
        codigo_venta, cliente_id, farmacia_id, total, estado, fecha_venta
    ) VALUES (
        p_codigo_venta, p_cliente_id, p_farmacia_id, v_subtotal, 'PROCESANDO', CURRENT_TIMESTAMP
    ) RETURNING venta_id INTO v_venta_id;

    -- PUNTO DE CONTROL (SAVEPOINT) PARA VERIFICACIÓN DE STOCK
    -- Si el descuento de stock falla, se revierte solo el detalle manteniendo la auditoría
    BEGIN
        SELECT cantidad INTO v_stock_actual
        FROM public.inventario
        WHERE medicamento_id = p_medicamento_id AND farmacia_id = p_farmacia_id;

        IF v_stock_actual < p_cantidad THEN
            RAISE EXCEPTION 'Stock insuficiente (disponible: %, solicitado: %)', v_stock_actual, p_cantidad;
        END IF;

        -- Descontar inventario
        UPDATE public.inventario
        SET cantidad = cantidad - p_cantidad,
            fecha_ultima_actualizacion = CURRENT_TIMESTAMP
        WHERE medicamento_id = p_medicamento_id AND farmacia_id = p_farmacia_id;

        -- Insertar detalle de venta
        INSERT INTO public.detalle_venta (
            venta_id, medicamento_id, cantidad, precio_unitario, subtotal
        ) VALUES (
            v_venta_id, p_medicamento_id, p_cantidad, v_precio_venta, v_subtotal
        );

        -- Confirmar venta como COMPLETADA
        UPDATE public.venta SET estado = 'COMPLETADA' WHERE venta_id = v_venta_id;
        RAISE NOTICE 'Venta % procesada exitosamente con SAVEPOINT validado.', p_codigo_venta;

    EXCEPTION WHEN OTHERS THEN
        -- Recuperación tras fallo en subtransacción (Rollback al punto de guardado)
        UPDATE public.venta SET estado = 'CANCELADA' WHERE venta_id = v_venta_id;
        RAISE WARNING 'Transacción revertida parcialmente a SAVEPOINT: %', SQLERRM;
    END;
END;
$$;
