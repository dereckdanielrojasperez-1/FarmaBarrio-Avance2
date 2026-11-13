-- Poblado masivo de compras B2B y finanzas en Oracle XE
-- Carga masiva de datos iniciales

-- 2.1 Proveedores Farmacéuticos
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Distribuidora Farmacéutica Droguería Albis S.A.C.', '20100112233', '(01) 4567890', 'Av. Nicolás Arriola 1250, La Victoria', 'ventas@albis.com.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Química Suiza S.A.C.', '20100144556', '(01) 2114000', 'Av. República de Panamá 2577, La Victoria', 'pedidos@quimicasuiza.com');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Droguería Médica del Perú S.A.', '20100177889', '(01) 3261234', 'Jr. Huaraz 1420, Breña, Lima', 'contacto@drogueriamedica.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Laboratorios Medifarma Mayorista S.A.', '20100018625', '(01) 3192000', 'Jr. Ecuador 787, Cercado de Lima', 'b2b@medifarma.com.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Laboratorios Portugal Distribución S.R.L.', '20100155231', '(054) 232425', 'Calle Muñoz Najar 234, Arequipa', 'ventas@portugal.com.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Laboratorios Bagó Mayorista Perú', '20256847891', '(01) 6118888', 'Av. Jorge Chávez 154, Miraflores', 'corporativo@bago.com.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Droguería Hersil Pharma S.A.', '20100089012', '(01) 7132000', 'Av. Los Frutales 220, Ate Vitarte', 'ventas@hersil.com.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Farmindustria Distribución B2B', '20100034567', '(01) 4193000', 'Av. Mariscal Miller 2151, Lince', 'b2b@farmindustria.com.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Droguería AC Farma Central S.A.', '20334455667', '(01) 6124500', 'Av. Separadora Industrial 1230, Ate', 'ventas@acfarma.pe');
INSERT INTO proveedor (nombre, ruc, telefono, direccion, email) VALUES
('Teva Perú Abastecimiento B2B', '20100345129', '(01) 4116000', 'Av. Venezuela 5415, San Miguel', 'contacto@tevaperu.com.pe');

-- 2.2 Catálogo Espejo de Medicamentos (medicamento_ref)
INSERT INTO medicamento_ref VALUES (1, 'MED-001', 'Paracetamol 500mg - Caja x 100 Tab', 8.50, 1);
INSERT INTO medicamento_ref VALUES (2, 'MED-002', 'Ibuprofeno 400mg - Caja x 100 Tab', 9.20, 1);
INSERT INTO medicamento_ref VALUES (3, 'MED-003', 'Amoxicilina 500mg - Caja x 50 Cap', 14.00, 1);
INSERT INTO medicamento_ref VALUES (4, 'MED-004', 'Azitromicina 500mg - Caja x 3 Tab', 6.80, 1);
INSERT INTO medicamento_ref VALUES (5, 'MED-005', 'Loratadina 10mg - Caja x 30 Tab', 4.50, 1);
INSERT INTO medicamento_ref VALUES (6, 'MED-006', 'Cetirizina 10mg - Caja x 30 Tab', 5.20, 1);
INSERT INTO medicamento_ref VALUES (7, 'MED-007', 'Omeprazol 20mg - Caja x 30 Cap', 7.50, 1);
INSERT INTO medicamento_ref VALUES (8, 'MED-008', 'Naproxeno Sódico 550mg - Caja x 20 Tab', 11.00, 1);
INSERT INTO medicamento_ref VALUES (9, 'MED-009', 'Aspirina 100mg Cardio - Caja x 100 Tab', 18.00, 1);
INSERT INTO medicamento_ref VALUES (10, 'MED-010', 'Panadol Antigripal NF - Caja x 24 Sobres', 22.00, 1);
INSERT INTO medicamento_ref VALUES (11, 'MED-011', 'Apronax 550mg - Caja x 20 Tab Recubiertas', 19.50, 1);
INSERT INTO medicamento_ref VALUES (12, 'MED-012', 'Nastizol Compuesto - Caja x 20 Comprimidos', 16.00, 1);
INSERT INTO medicamento_ref VALUES (13, 'MED-013', 'Bismutol 262mg - Frasco x 120ml Suspensión', 13.00, 1);
INSERT INTO medicamento_ref VALUES (14, 'MED-014', 'Vitamina C 1000mg Redoxon Efervescente x 10', 14.50, 1);
INSERT INTO medicamento_ref VALUES (15, 'MED-015', 'Complejo B Forte - Caja x 30 Tabletas', 12.00, 1);
INSERT INTO medicamento_ref VALUES (16, 'MED-016', 'Salbutamol Inhalador 100mcg - Frasco x 200 Dosis', 8.90, 1);
INSERT INTO medicamento_ref VALUES (17, 'MED-017', 'Diclofenaco Gel 1% - Tubo x 50g Tópico', 6.00, 1);
INSERT INTO medicamento_ref VALUES (18, 'MED-018', 'Alcohol Medicinal 70° - Frasco x 1000ml', 4.50, 1);
INSERT INTO medicamento_ref VALUES (19, 'MED-019', 'Agua Oxigenada 10 Vol - Frasco x 250ml', 2.00, 1);
INSERT INTO medicamento_ref VALUES (20, 'MED-020', 'Ciprofloxacino 500mg - Caja x 10 Tab', 5.50, 1);

-- 2.3 Impuestos
INSERT INTO impuestos (nombre, porcentaje, descripcion) VALUES ('IGV', 18.00, 'Impuesto General a las Ventas de ley');
INSERT INTO impuestos (nombre, porcentaje, descripcion) VALUES ('ISC', 0.00, 'Impuesto Selectivo al Consumo no aplicable');
INSERT INTO impuestos (nombre, porcentaje, descripcion) VALUES ('Retención Renta 3ra Cat', 1.50, 'Retención tributaria a pagos mayoristas');

-- 2.4 Centros de Costo
INSERT INTO centro_costo (codigo, nombre) VALUES ('CC-LOG-01', 'Almacén Central y Cadena de Suministro');
INSERT INTO centro_costo (codigo, nombre) VALUES ('CC-ADM-01', 'Gerencia y Finanzas Corporativas');
INSERT INTO centro_costo (codigo, nombre) VALUES ('CC-OPE-01', 'Operaciones de Distribución Barrial');

-- 2.5 Plan Contable
INSERT INTO cuenta (codigo, nombre, tipo, nivel) VALUES ('6011', 'Mercaderías - Medicamentos y Afines', 'Gasto', 2);
INSERT INTO cuenta (codigo, nombre, tipo, nivel) VALUES ('4011', 'Tributos por Pagar - IGV Cuenta Propia', 'Pasivo', 2);
INSERT INTO cuenta (codigo, nombre, tipo, nivel) VALUES ('4212', 'Cuentas por Pagar Comerciales - Emitidas', 'Pasivo', 2);
INSERT INTO cuenta (codigo, nombre, tipo, nivel) VALUES ('1041', 'Cuentas Corrientes Operativas Banco', 'Activo', 2);

-- 2.6 Órdenes de Compra Masivas: 500 Compras generadas con CONNECT BY LEVEL
INSERT INTO compra (empleado_id, farmacia_id, proveedor_id, fecha_compra, fecha_recepcion, total, estado)
SELECT
    1 + MOD(LEVEL * 3, 20) AS empleado_id,
    1 + MOD(LEVEL * 7, 10) AS farmacia_id,
    1 + MOD(LEVEL * 13, 10) AS proveedor_id,
    DATE '2024-01-01' + MOD(LEVEL * 2, 700) AS fecha_compra,
    DATE '2024-01-05' + MOD(LEVEL * 2, 700) AS fecha_recepcion,
    0.00 AS total,
    CASE 
        WHEN MOD(LEVEL, 10) = 0 THEN 'PENDIENTE'
        WHEN MOD(LEVEL, 25) = 0 THEN 'ANULADA'
        ELSE 'PAGADA'
    END AS estado
FROM dual
CONNECT BY LEVEL <= 500;

-- 2.7 Detalle de Compra: 1,500 Ítems (3 ítems por compra)
INSERT INTO detalle_compra (compra_id, medicamento_id, cantidad, precio_unitario, subtotal)
SELECT
    c.compra_id,
    m.medicamento_id,
    (10 + MOD(c.compra_id * 7 + seq.num, 90)) AS cantidad,
    m.precio_compra,
    ROUND((10 + MOD(c.compra_id * 7 + seq.num, 90)) * m.precio_compra, 2) AS subtotal
FROM compra c
CROSS JOIN (
    SELECT 1 AS num FROM dual UNION ALL SELECT 2 FROM dual UNION ALL SELECT 3 FROM dual
) seq
INNER JOIN medicamento_ref m ON m.medicamento_id = (1 + MOD(c.compra_id + seq.num * 3, 20));

-- 2.8 Actualización de Totales en Cabecera de Compra
MERGE INTO compra c
USING (
    SELECT compra_id, SUM(subtotal) AS total_calculado
    FROM detalle_compra
    GROUP BY compra_id
) t ON (c.compra_id = t.compra_id)
WHEN MATCHED THEN
UPDATE SET c.total = t.total_calculado;

-- 2.9 Pagos a Proveedores Masivos (400 Pagos Registrados)
INSERT INTO pagos_proveedor (proveedor_id, compra_id, monto_pago, fecha_pago, metodo_pago, estado)
SELECT
    c.proveedor_id,
    c.compra_id,
    c.total AS monto_pago,
    c.fecha_compra + 3 AS fecha_pago,
    CASE MOD(c.compra_id, 3)
        WHEN 0 THEN 'TRANSFERENCIA'
        WHEN 1 THEN 'CHEQUE'
        ELSE 'EFECTIVO'
    END AS metodo_pago,
    'PAGADO' AS estado
FROM compra c
WHERE c.estado = 'PAGADA';

-- 2.10 Documentos Tributarios Masivos (Facturas SUNAT correspondientes a las compras)
INSERT INTO documentos_tributarios (compra_id, proveedor_id, tipo_documento, serie, numero, ruc, igv, fecha_emision, monto_total, estado)
SELECT
    c.compra_id,
    c.proveedor_id,
    'FACTURA',
    'F' || LPAD(TO_CHAR(c.proveedor_id), 3, '0'),
    LPAD(TO_CHAR(c.compra_id), 8, '0'),
    p.ruc,
    ROUND(c.total * 0.18, 2),
    c.fecha_compra,
    c.total,
    'EMITIDO'
FROM compra c
INNER JOIN proveedor p ON c.proveedor_id = p.proveedor_id;

-- 2.11 Asientos Contables y Libro Diario (100 Asientos Contables)
INSERT INTO asiento_contable (fecha, descripcion, total_debe, total_haber)
SELECT
    c.fecha_compra,
    'Provisión de compra mayorista de medicamentos Factura F' || LPAD(TO_CHAR(c.proveedor_id), 3, '0') || '-' || c.compra_id,
    c.total,
    c.total
FROM compra c
WHERE ROWNUM <= 100;

-- 2.12 Detalle de Asiento Contable (Partida Doble: Cargo a Mercaderías + IGV, Abono a Cuentas por Pagar)
INSERT INTO detalle_asiento (asiento_id, cuenta_id, centro_costo_id, total_debe, total_haber)
SELECT a.asiento_id, 1, 1, a.total_debe, 0.00 FROM asiento_contable a;

INSERT INTO detalle_asiento (asiento_id, cuenta_id, centro_costo_id, total_debe, total_haber)
SELECT a.asiento_id, 3, 1, 0.00, a.total_haber FROM asiento_contable a;

COMMIT;

--
