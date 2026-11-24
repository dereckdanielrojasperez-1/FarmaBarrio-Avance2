-- =============================================================================
-- RESPALDO LOGICO INTEGRAL DE BASE DE DATOS ORACLE DATABASE XE 21C
-- Esquema: FARMABARRIO_OWNER
-- Motor: Oracle Database 21c Express Edition
-- Modulo: Finanzas Corporativas B2B, Compras y Plan Contable General (PCGE)
-- Fecha de Generacion: 2026-11-24 | Tipo: FULL SCHEMA EXPORT DDL + DML
-- =============================================================================

ALTER SESSION SET CURRENT_SCHEMA = FARMABARRIO_OWNER;
SET DEFINE OFF;

-- -----------------------------------------------------------------------------
-- 1. ESTRUCTURAS DDL (TABLES & SEQUENCES)
-- -----------------------------------------------------------------------------

CREATE SEQUENCE seq_proveedor START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_orden_compra START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_detalle_compra START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_recepcion START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_cuenta_pagar START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_pago START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_cuenta_contable START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_asiento START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_detalle_asiento START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE seq_periodo START WITH 1 INCREMENT BY 1 NOCACHE;

-- 1. Tabla: proveedor
CREATE TABLE proveedor (
    proveedor_id NUMBER(10) DEFAULT seq_proveedor.NEXTVAL PRIMARY KEY,
    ruc VARCHAR2(11) NOT NULL UNIQUE,
    razon_social VARCHAR2(150) NOT NULL,
    nombre_contacto VARCHAR2(100),
    telefono VARCHAR2(20),
    email VARCHAR2(100),
    direccion VARCHAR2(200),
    condicion_pago VARCHAR2(30) DEFAULT 'CREDITO_30_DIAS',
    estado VARCHAR2(20) DEFAULT 'ACTIVO'
);

-- 2. Tabla: orden_compra (Particionada por Rango de fecha_compra)
CREATE TABLE orden_compra (
    orden_id NUMBER(10) DEFAULT seq_orden_compra.NEXTVAL,
    proveedor_id NUMBER(10) NOT NULL,
    farmacia_id NUMBER(10) NOT NULL,
    fecha_compra DATE NOT NULL,
    monto_subtotal NUMBER(12,2) NOT NULL,
    monto_igv NUMBER(12,2) NOT NULL,
    monto_total NUMBER(12,2) NOT NULL,
    numero_factura VARCHAR2(30),
    estado VARCHAR2(20) DEFAULT 'PENDIENTE',
    CONSTRAINT pk_orden_compra PRIMARY KEY (orden_id, fecha_compra),
    CONSTRAINT fk_orden_proveedor FOREIGN KEY (proveedor_id) REFERENCES proveedor(proveedor_id)
)
PARTITION BY RANGE (fecha_compra) (
    PARTITION P_2024 VALUES LESS THAN (TO_DATE('2025-01-01', 'YYYY-MM-DD')),
    PARTITION P_2025 VALUES LESS THAN (TO_DATE('2026-01-01', 'YYYY-MM-DD')),
    PARTITION P_FUTURO VALUES LESS THAN (MAXVALUE)
);

-- 3. Tabla: detalle_compra
CREATE TABLE detalle_compra (
    detalle_id NUMBER(10) DEFAULT seq_detalle_compra.NEXTVAL PRIMARY KEY,
    orden_id NUMBER(10) NOT NULL,
    fecha_compra DATE NOT NULL,
    medicamento_id NUMBER(10) NOT NULL,
    nombre_medicamento VARCHAR2(150) NOT NULL,
    cantidad_comprada NUMBER(8) NOT NULL,
    precio_unitario_b2b NUMBER(10,2) NOT NULL,
    subtotal NUMBER(12,2) NOT NULL,
    CONSTRAINT fk_detalle_orden FOREIGN KEY (orden_id, fecha_compra) REFERENCES orden_compra(orden_id, fecha_compra)
);

-- 4. Tabla: recepcion_mercaderia
CREATE TABLE recepcion_mercaderia (
    recepcion_id NUMBER(10) DEFAULT seq_recepcion.NEXTVAL PRIMARY KEY,
    orden_id NUMBER(10) NOT NULL,
    fecha_compra DATE NOT NULL,
    fecha_recepcion DATE NOT NULL,
    farmacia_id NUMBER(10) NOT NULL,
    lote VARCHAR2(50) NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    responsable_almacen VARCHAR2(100),
    estado_inspeccion VARCHAR2(20) DEFAULT 'CONFORME',
    CONSTRAINT fk_recep_orden FOREIGN KEY (orden_id, fecha_compra) REFERENCES orden_compra(orden_id, fecha_compra)
);

-- 5. Tabla: cuenta_por_pagar
CREATE TABLE cuenta_por_pagar (
    cuenta_pagar_id NUMBER(10) DEFAULT seq_cuenta_pagar.NEXTVAL PRIMARY KEY,
    orden_id NUMBER(10) NOT NULL,
    fecha_compra DATE NOT NULL,
    proveedor_id NUMBER(10) NOT NULL,
    monto_total NUMBER(12,2) NOT NULL,
    saldo_pendiente NUMBER(12,2) NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    estado VARCHAR2(20) DEFAULT 'PENDIENTE',
    CONSTRAINT fk_cxp_orden FOREIGN KEY (orden_id, fecha_compra) REFERENCES orden_compra(orden_id, fecha_compra),
    CONSTRAINT fk_cxp_prov FOREIGN KEY (proveedor_id) REFERENCES proveedor(proveedor_id)
);

-- 6. Tabla: pago_proveedor
CREATE TABLE pago_proveedor (
    pago_id NUMBER(10) DEFAULT seq_pago.NEXTVAL PRIMARY KEY,
    cuenta_pagar_id NUMBER(10) NOT NULL,
    fecha_pago DATE NOT NULL,
    monto_pagado NUMBER(12,2) NOT NULL,
    medio_pago VARCHAR2(30) DEFAULT 'TRANSFERENCIA_BANCARIA',
    banco_origen VARCHAR2(50),
    numero_operacion VARCHAR2(50) NOT NULL,
    CONSTRAINT fk_pago_cxp FOREIGN KEY (cuenta_pagar_id) REFERENCES cuenta_por_pagar(cuenta_pagar_id)
);

-- 7. Tabla: cuenta_contable (PCGE Oficial)
CREATE TABLE cuenta_contable (
    cuenta_id NUMBER(10) DEFAULT seq_cuenta_contable.NEXTVAL PRIMARY KEY,
    codigo_cuenta VARCHAR2(20) NOT NULL UNIQUE,
    denominacion VARCHAR2(150) NOT NULL,
    elemento NUMBER(1) NOT NULL,
    naturaleza VARCHAR2(10) NOT NULL,
    estado VARCHAR2(20) DEFAULT 'ACTIVA'
);

-- 8. Tabla: asiento_contable
CREATE TABLE asiento_contable (
    asiento_id NUMBER(10) DEFAULT seq_asiento.NEXTVAL PRIMARY KEY,
    numero_asiento VARCHAR2(30) NOT NULL UNIQUE,
    fecha_contable DATE NOT NULL,
    glosa VARCHAR2(250) NOT NULL,
    modulo_origen VARCHAR2(30) DEFAULT 'COMPRAS_B2B',
    total_debe NUMBER(12,2) NOT NULL,
    total_haber NUMBER(12,2) NOT NULL,
    estado VARCHAR2(20) DEFAULT 'CUADRADO'
);

-- 9. Tabla: detalle_asiento
CREATE TABLE detalle_asiento (
    detalle_asiento_id NUMBER(10) DEFAULT seq_detalle_asiento.NEXTVAL PRIMARY KEY,
    asiento_id NUMBER(10) NOT NULL,
    cuenta_id NUMBER(10) NOT NULL,
    monto_debe NUMBER(12,2) DEFAULT 0,
    monto_haber NUMBER(12,2) DEFAULT 0,
    referencia VARCHAR2(100),
    CONSTRAINT fk_det_asiento FOREIGN KEY (asiento_id) REFERENCES asiento_contable(asiento_id),
    CONSTRAINT fk_det_cuenta FOREIGN KEY (cuenta_id) REFERENCES cuenta_contable(cuenta_id)
);

-- 10. Tabla: periodo_fiscal
CREATE TABLE periodo_fiscal (
    periodo_id NUMBER(10) DEFAULT seq_periodo.NEXTVAL PRIMARY KEY,
    codigo_periodo VARCHAR2(10) NOT NULL UNIQUE,
    anio NUMBER(4) NOT NULL,
    mes NUMBER(2) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado VARCHAR2(20) DEFAULT 'ABIERTO'
);

-- -----------------------------------------------------------------------------
-- 2. POBLADO DE DATOS FINANCIEROS Y CONTABLES (DML)
-- -----------------------------------------------------------------------------

-- Proveedores (Laboratorios y Distribuidoras)
INSERT INTO proveedor (ruc, razon_social, nombre_contacto, telefono, email, direccion) VALUES 
('20100035441', 'DROGUERIA Y DISTRIBUIDORA ALBIS S.A.C.', 'Carlos Ramirez', '01-4198000', 'ventas@albis.com.pe', 'Av. Venezuela 2450, Lima');
INSERT INTO proveedor (ruc, razon_social, nombre_contacto, telefono, email, direccion) VALUES 
('20512874123', 'MEDIFARMA S.A.', 'Elena Montes', '01-3156000', 'corporativo@medifarma.pe', 'Jr. Ecuador 787, Lima');
INSERT INTO proveedor (ruc, razon_social, nombre_contacto, telefono, email, direccion) VALUES 
('20100108936', 'LABORATORIOS ROE S.A.', 'Jorge Valdivia', '01-5136666', 'contacto@roe.com.pe', 'Av. Republica de Panama 3065, San Isidro');
INSERT INTO proveedor (ruc, razon_social, nombre_contacto, telefono, email, direccion) VALUES 
('20387462819', 'DISTRIBUIDORA CONTINENTAL MEDIC S.A.C.', 'Mariana Quispe', '01-6148800', 'pedidos@dcontinental.pe', 'Av. Elmer Faucett 1920, Callao');
INSERT INTO proveedor (ruc, razon_social, nombre_contacto, telefono, email, direccion) VALUES 
('20509876543', 'FARMAINDUSTRIA S.A.', 'Roberto Chang', '01-7104000', 'atencion@farmaindustria.com.pe', 'Av. Javier Prado Este 4450, Surco');

-- Cuentas Contables PCGE
INSERT INTO cuenta_contable (codigo_cuenta, denominacion, elemento, naturaleza) VALUES ('6011', 'Mercaderías manufacturadas', 6, 'DEUDORA');
INSERT INTO cuenta_contable (codigo_cuenta, denominacion, elemento, naturaleza) VALUES ('40111', 'IGV - Cuenta propia', 4, 'DEUDORA');
INSERT INTO cuenta_contable (codigo_cuenta, denominacion, elemento, naturaleza) VALUES ('4212', 'Emitidas - Facturas por pagar', 4, 'ACREEDORA');
INSERT INTO cuenta_contable (codigo_cuenta, denominacion, elemento, naturaleza) VALUES ('1041', 'Cuentas corrientes operativas', 1, 'DEUDORA');
INSERT INTO cuenta_contable (codigo_cuenta, denominacion, elemento, naturaleza) VALUES ('20111', 'Mercaderías manufacturadas - Costo', 2, 'DEUDORA');
INSERT INTO cuenta_contable (codigo_cuenta, denominacion, elemento, naturaleza) VALUES ('6111', 'Variación de mercaderías', 6, 'ACREEDORA');

-- Periodos Fiscales
INSERT INTO periodo_fiscal (codigo_periodo, anio, mes, fecha_inicio, fecha_fin, estado) VALUES ('2024-10', 2024, 10, TO_DATE('2024-10-01','YYYY-MM-DD'), TO_DATE('2024-10-31','YYYY-MM-DD'), 'CERRADO');
INSERT INTO periodo_fiscal (codigo_periodo, anio, mes, fecha_inicio, fecha_fin, estado) VALUES ('2024-11', 2024, 11, TO_DATE('2024-11-01','YYYY-MM-DD'), TO_DATE('2024-11-30','YYYY-MM-DD'), 'ABIERTO');
INSERT INTO periodo_fiscal (codigo_periodo, anio, mes, fecha_inicio, fecha_fin, estado) VALUES ('2025-01', 2025, 1, TO_DATE('2025-01-01','YYYY-MM-DD'), TO_DATE('2025-01-31','YYYY-MM-DD'), 'ABIERTO');

-- Órdenes de Compra en Partición P_2024
INSERT INTO orden_compra (proveedor_id, farmacia_id, fecha_compra, monto_subtotal, monto_igv, monto_total, numero_factura, estado) VALUES
(1, 1, TO_DATE('2024-10-15', 'YYYY-MM-DD'), 15000.00, 2700.00, 17700.00, 'F001-0004521', 'PAGADA');
INSERT INTO orden_compra (proveedor_id, farmacia_id, fecha_compra, monto_subtotal, monto_igv, monto_total, numero_factura, estado) VALUES
(2, 2, TO_DATE('2024-10-20', 'YYYY-MM-DD'), 22000.00, 3960.00, 25960.00, 'F002-0018942', 'PAGADA');

-- Órdenes de Compra en Partición P_2025
INSERT INTO orden_compra (proveedor_id, farmacia_id, fecha_compra, monto_subtotal, monto_igv, monto_total, numero_factura, estado) VALUES
(3, 1, TO_DATE('2025-01-10', 'YYYY-MM-DD'), 18500.00, 3330.00, 21830.00, 'F003-0009214', 'PENDIENTE');

-- Detalles de Compra
INSERT INTO detalle_compra (orden_id, fecha_compra, medicamento_id, nombre_medicamento, cantidad_comprada, precio_unitario_b2b, subtotal) VALUES
(1, TO_DATE('2024-10-15', 'YYYY-MM-DD'), 1, 'Paracetamol 500mg Tab', 5000, 0.80, 4000.00);
INSERT INTO detalle_compra (orden_id, fecha_compra, medicamento_id, nombre_medicamento, cantidad_comprada, precio_unitario_b2b, subtotal) VALUES
(1, TO_DATE('2024-10-15', 'YYYY-MM-DD'), 2, 'Amoxicilina 500mg Cap', 3000, 1.80, 5400.00);
INSERT INTO detalle_compra (orden_id, fecha_compra, medicamento_id, nombre_medicamento, cantidad_comprada, precio_unitario_b2b, subtotal) VALUES
(1, TO_DATE('2024-10-15', 'YYYY-MM-DD'), 3, 'Ibuprofeno 400mg Tab', 5600, 1.00, 5600.00);

-- Recepción de Mercadería
INSERT INTO recepcion_mercaderia (orden_id, fecha_compra, fecha_recepcion, farmacia_id, lote, fecha_vencimiento, responsable_almacen, estado_inspeccion) VALUES
(1, TO_DATE('2024-10-15', 'YYYY-MM-DD'), TO_DATE('2024-10-17', 'YYYY-MM-DD'), 1, 'LOTE-MED-202410-A', TO_DATE('2026-10-15', 'YYYY-MM-DD'), 'Juan Perez Almacen', 'CONFORME');

-- Cuenta por Pagar y Pago
INSERT INTO cuenta_por_pagar (orden_id, fecha_compra, proveedor_id, monto_total, saldo_pendiente, fecha_vencimiento, estado) VALUES
(1, TO_DATE('2024-10-15', 'YYYY-MM-DD'), 1, 17700.00, 0.00, TO_DATE('2024-11-15', 'YYYY-MM-DD'), 'PAGADO');
INSERT INTO pago_proveedor (cuenta_pagar_id, fecha_pago, monto_pagado, medio_pago, banco_origen, numero_operacion) VALUES
(1, TO_DATE('2024-11-10', 'YYYY-MM-DD'), 17700.00, 'TRANSFERENCIA_BCP', 'BCP_CTA_CTE_SOLES', 'OP-98234123');

-- Asiento Contable PCGE (Partida Doble)
INSERT INTO asiento_contable (numero_asiento, fecha_contable, glosa, modulo_origen, total_debe, total_haber, estado) VALUES
('AS-202410-001', TO_DATE('2024-10-15', 'YYYY-MM-DD'), 'Por la compra consolidada de mercaderia farmaceutica Factura F001-0004521', 'COMPRAS_B2B', 17700.00, 17700.00, 'CUADRADO');

INSERT INTO detalle_asiento (asiento_id, cuenta_id, monto_debe, monto_haber, referencia) VALUES
(1, 1, 15000.00, 0.00, 'Cuenta 6011 Mercaderias');
INSERT INTO detalle_asiento (asiento_id, cuenta_id, monto_debe, monto_haber, referencia) VALUES
(1, 2, 2700.00, 0.00, 'Cuenta 40111 IGV 18%');
INSERT INTO detalle_asiento (asiento_id, cuenta_id, monto_debe, monto_haber, referencia) VALUES
(1, 3, 0.00, 17700.00, 'Cuenta 4212 Facturas por Pagar Albis');

COMMIT;
