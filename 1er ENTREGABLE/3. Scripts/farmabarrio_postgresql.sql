-- PROYECTO: FARMABARRIO - RED DE FARMACIAS INDEPENDIENTES DEL PERÚ
-- CURSO: BASE DE DATOS II (UTP) - 1ER ENTREGABLE
-- MOTOR: POSTGRESQL (NÚCLEO OPERATIVO Y TRANSACCIONAL B2C)
-- ESQUEMA: public | BASE DE DATOS: farmabarrio_db
-- AUTORES:
--   1. QUIÑONES DIEGO, MAYKEL PIERO (Líder / Data Architect)
--   2. WONG VILLANUEVA, LEONARDO JOSUÉ (DBA Oracle / Analista Financiero)
--   3. GARCIA ESPEJO, NICOLE ANDREA (DBA MongoDB / Analista NoSQL)
--   4. MATENCIO PAUCAR, JORGE FABIAN (Big Data Engineer / Analista Hadoop)
--   5. ROJAS PÉREZ, DERECK (DBA Cassandra / Analista Series Temporales)

-- Limpieza de tablas previas en orden de dependencias
DROP TABLE IF EXISTS detalle_venta CASCADE;
DROP TABLE IF EXISTS venta CASCADE;
DROP TABLE IF EXISTS movimiento_inventario CASCADE;
DROP TABLE IF EXISTS inventario CASCADE;
DROP TABLE IF EXISTS empleado CASCADE;
DROP TABLE IF EXISTS cliente CASCADE;
DROP TABLE IF EXISTS farmacia CASCADE;
DROP TABLE IF EXISTS medicamento CASCADE;
DROP TABLE IF EXISTS laboratorio CASCADE;
DROP TABLE IF EXISTS marca CASCADE;
DROP TABLE IF EXISTS categoria CASCADE;

-- Limpieza de funciones y procedimientos previos si existiesen
DROP FUNCTION IF EXISTS fn_total_ventas_farmacia(INT, DATE, DATE) CASCADE;
DROP PROCEDURE IF EXISTS sp_registrar_entrada_inventario(INT, INT, INT, VARCHAR) CASCADE;
DROP FUNCTION IF EXISTS fn_calcular_stock_minimo(INT, INT) CASCADE;
DROP PROCEDURE IF EXISTS sp_actualizar_precio_medicamento(INT, DECIMAL, DECIMAL) CASCADE;
DROP FUNCTION IF EXISTS fn_rotacion_medicamento(INT, INT) CASCADE;

-- Definicion de tablas del modelo relacional

-- 1. TABLA: categoria
CREATE TABLE categoria (
    categoria_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABLA: marca
CREATE TABLE marca (
    marca_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    pais_origen VARCHAR(50),
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABLA: laboratorio
CREATE TABLE laboratorio (
    laboratorio_id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    ruc VARCHAR(11) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    direccion VARCHAR(200),
    email VARCHAR(100),
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. TABLA: medicamento (Catálogo central de productos)
CREATE TABLE medicamento (
    medicamento_id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    precio_compra DECIMAL(10,2) NOT NULL CHECK (precio_compra > 0),
    precio_venta DECIMAL(10,2) NOT NULL CHECK (precio_venta > 0),
    stock_minimo INT NOT NULL DEFAULT 10,
    stock_maximo INT NOT NULL DEFAULT 1000,
    requiere_receta BOOLEAN NOT NULL DEFAULT FALSE,
    categoria_id INT NOT NULL REFERENCES categoria(categoria_id),
    marca_id INT NOT NULL REFERENCES marca(marca_id),
    laboratorio_id INT NOT NULL REFERENCES laboratorio(laboratorio_id),
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_precio_margen CHECK (precio_venta >= precio_compra)
);

-- 5. TABLA: farmacia (Red de boticas y farmacias barriales asociadas)
CREATE TABLE farmacia (
    farmacia_id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    ruc VARCHAR(11) NOT NULL UNIQUE,
    direccion VARCHAR(200) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100),
    latitud DECIMAL(10,8),
    longitud DECIMAL(11,8),
    horario_apertura TIME DEFAULT '07:00:00',
    horario_cierre TIME DEFAULT '23:00:00',
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 6. TABLA: inventario (Stock físico descentralizado por sucursal)
CREATE TABLE inventario (
    inventario_id SERIAL PRIMARY KEY,
    medicamento_id INT NOT NULL REFERENCES medicamento(medicamento_id),
    farmacia_id INT NOT NULL REFERENCES farmacia(farmacia_id),
    cantidad INT NOT NULL DEFAULT 0 CHECK (cantidad >= 0),
    fecha_ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_inventario_medicamento_farmacia UNIQUE (medicamento_id, farmacia_id)
);

-- 7. TABLA: movimiento_inventario (Auditoría y trazabilidad histórica de stock)
CREATE TABLE movimiento_inventario (
    movimiento_id SERIAL PRIMARY KEY,
    inventario_id INT NOT NULL REFERENCES inventario(inventario_id),
    tipo_movimiento VARCHAR(20) NOT NULL CHECK (tipo_movimiento IN ('ENTRADA', 'SALIDA', 'AJUSTE')),
    cantidad INT NOT NULL CHECK (cantidad > 0),
    stock_anterior INT NOT NULL,
    stock_nuevo INT NOT NULL,
    motivo VARCHAR(200),
    fecha_movimiento TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 8. TABLA: cliente (Usuarios del marketplace barrial)
CREATE TABLE cliente (
    cliente_id SERIAL PRIMARY KEY,
    dni VARCHAR(8) NOT NULL UNIQUE,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100),
    direccion VARCHAR(200),
    fecha_nacimiento DATE,
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 9. TABLA: empleado (Personal técnico y administrativo de cada botica)
CREATE TABLE empleado (
    empleado_id SERIAL PRIMARY KEY,
    dni VARCHAR(8) NOT NULL UNIQUE,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    farmacia_id INT NOT NULL REFERENCES farmacia(farmacia_id),
    telefono VARCHAR(20),
    email VARCHAR(100),
    fecha_contratacion DATE DEFAULT CURRENT_DATE,
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 10. TABLA: venta (Cabecera de transacciones de venta diarias)
CREATE TABLE venta (
    venta_id SERIAL PRIMARY KEY,
    codigo_venta VARCHAR(20) NOT NULL UNIQUE,
    cliente_id INT NOT NULL REFERENCES cliente(cliente_id),
    farmacia_id INT NOT NULL REFERENCES farmacia(farmacia_id),
    empleado_id INT REFERENCES empleado(empleado_id),
    fecha_venta TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    subtotal DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    igv DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    metodo_pago VARCHAR(20) CHECK (metodo_pago IN ('EFECTIVO', 'TARJETA', 'YAPE', 'PLIN')),
    estado VARCHAR(20) NOT NULL DEFAULT 'COMPLETADA' CHECK (estado IN ('COMPLETADA', 'ANULADA', 'PENDIENTE')),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 11. TABLA: detalle_venta (Ítems individuales facturados por transacción)
CREATE TABLE detalle_venta (
    detalle_venta_id SERIAL PRIMARY KEY,
    venta_id INT NOT NULL REFERENCES venta(venta_id) ON DELETE CASCADE,
    medicamento_id INT NOT NULL REFERENCES medicamento(medicamento_id),
    cantidad INT NOT NULL CHECK (cantidad > 0),
    precio_unitario DECIMAL(10,2) NOT NULL CHECK (precio_unitario > 0),
    descuento DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    subtotal DECIMAL(10,2) NOT NULL
);

-- Carga masiva de datos iniciales

-- 2.1 Categorías
INSERT INTO categoria (nombre, descripcion) VALUES
('Analgésicos y Antipiréticos', 'Alivio del dolor de leve a moderado y control de fiebre'),
('Antibióticos y Antimicrobianos', 'Tratamiento de infecciones bacterianas bajo prescripción médica'),
('Antiinflamatorios No Esteroideos', 'Reducción de inflamación, dolores musculares y articulares'),
('Antihistamínicos y Antialérgicos', 'Alivio de rinitis, alergias cutáneas y síntomas respiratorios'),
('Gastrointestinales y Antiácidos', 'Protección gástrica, reflujo, diarreas y estreñimiento'),
('Antigripales y Descongestionantes', 'Alivio integral de resfriado común y estados gripales'),
('Vitaminas y Suplementos Nutricionales', 'Fortalecimiento inmunitario, minerales y multivitamínicos'),
('Dermatológicos y Antisépticos', 'Cuidado de la piel, cicatrizantes y desinfectantes tópicos'),
('Cardiovasculares y Antihipertensivos', 'Control de presión arterial y salud cardíaca'),
('Salud y Cuidado Personal', 'Higiene, prevención sanitaria y bienestar diario');

-- 2.2 Marcas comerciales reconocidas
INSERT INTO marca (nombre, pais_origen) VALUES
('Bayer', 'Alemania'),
('Pfizer', 'Estados Unidos'),
('Sanofi', 'Francia'),
('Genfar', 'Colombia'),
('Laboratorios Bagó', 'Argentina'),
('Medifarma', 'Perú'),
('Laboratorios Portugal', 'Perú'),
('Abbott Laboratories', 'Estados Unidos'),
('Novartis', 'Suiza'),
('GlaxoSmithKline (GSK)', 'Reino Unido');

-- 2.3 Laboratorios fabricantes en Perú
INSERT INTO laboratorio (nombre, ruc, telefono, direccion, email) VALUES
('Laboratorios Portugal S.R.L.', '20100155231', '(054) 232425', 'Calle Manuel Muñoz Najar 234, Arequipa', 'contacto@portugal.com.pe'),
('Medifarma S.A.', '20100018625', '(01) 3192000', 'Jr. Ecuador 787, Lima Cercado', 'ventas@medifarma.com.pe'),
('Laboratorios Bagó del Perú S.A.', '20256847891', '(01) 6118888', 'Av. Jorge Chávez 154, Miraflores, Lima', 'consultas@bago.com.pe'),
('Farmindustria S.A.', '20100034567', '(01) 4193000', 'Av. Mariscal Miller 2151, Lince, Lima', 'atencionalcliente@farmindustria.com.pe'),
('Laboratorios Hersil S.A.C.', '20100089012', '(01) 7132000', 'Av. Los Frutales 220, Ate Vitarte, Lima', 'corporativo@hersil.com.pe'),
('Tecnofarma S.A.', '20100123984', '(01) 6175000', 'Calle Las Begonias 441, San Isidro, Lima', 'ventas@tecnofarma.com.pe'),
('Laboratorios AC Farma S.A.', '20334455667', '(01) 6124500', 'Av. Separadora Industrial 1230, Ate, Lima', 'ventas@acfarma.com.pe'),
('Teva Perú S.A.', '20100345129', '(01) 4116000', 'Av. Venezuela 5415, San Miguel, Lima', 'contacto@tevaperu.com.pe');

-- 2.4 Catálogo Maestro de Medicamentos (40 Medicamentos de alta demanda)
INSERT INTO medicamento (codigo, nombre, descripcion, precio_compra, precio_venta, stock_minimo, stock_maximo, requiere_receta, categoria_id, marca_id, laboratorio_id) VALUES
('MED-001', 'Paracetamol 500mg - Caja x 100 Tab', 'Analgésico antipirético eficaz contra dolor y fiebre', 8.50, 15.00, 20, 500, FALSE, 1, 7, 1),
('MED-002', 'Ibuprofeno 400mg - Caja x 100 Tab', 'Antiinflamatorio no esteroideo para dolores musculares', 9.20, 16.50, 20, 600, FALSE, 3, 6, 2),
('MED-003', 'Amoxicilina 500mg - Caja x 50 Cap', 'Antibiótico bactericida de amplio espectro', 14.00, 25.00, 15, 300, TRUE, 2, 4, 2),
('MED-004', 'Azitromicina 500mg - Caja x 3 Tab', 'Antibiótico macrólido para infecciones respiratorias', 6.80, 14.00, 10, 200, TRUE, 2, 2, 2),
('MED-005', 'Loratadina 10mg - Caja x 30 Tab', 'Antihistamínico no sedante de acción prolongada', 4.50, 9.90, 15, 400, FALSE, 4, 6, 2),
('MED-006', 'Cetirizina 10mg - Caja x 30 Tab', 'Antialérgico para alivio rápido de urticaria y rinitis', 5.20, 11.00, 15, 350, FALSE, 4, 7, 1),
('MED-007', 'Omeprazol 20mg - Caja x 30 Cap', 'Inhibidor de bomba de protones para acidez y gastritis', 7.50, 15.00, 20, 500, FALSE, 5, 6, 2),
('MED-008', 'Naproxeno Sódico 550mg - Caja x 20 Tab', 'Potente antiinflamatorio y analgésico articular', 11.00, 22.00, 15, 300, FALSE, 3, 1, 3),
('MED-009', 'Aspirina 100mg Cardio - Caja x 100 Tab', 'Antiagregante plaquetario preventivo cardiovascular', 18.00, 32.00, 10, 250, TRUE, 9, 1, 1),
('MED-010', 'Panadol Antigripal NF - Caja x 24 Sobres', 'Alivio sintomático del resfriado común y congestión', 22.00, 38.00, 20, 400, FALSE, 6, 10, 4),
('MED-011', 'Apronax 550mg - Caja x 20 Tab Recubiertas', 'Alivio rápido de inflamaciones dentales y dolores agudos', 19.50, 34.00, 15, 300, FALSE, 3, 1, 3),
('MED-012', 'Nastizol Compuesto - Caja x 20 Comprimidos', 'Antihistamínico y descongestionante descongestivo potente', 16.00, 28.50, 15, 350, FALSE, 6, 5, 3),
('MED-013', 'Bismutol 262mg - Frasco x 120ml Suspensión', 'Subsalicilato de bismuto protector gástrico y antidiarreico', 13.00, 22.90, 10, 200, FALSE, 5, 6, 2),
('MED-014', 'Vitamina C 1000mg Redoxon Efervescente x 10', 'Refuerzo de defensas y antioxidante corporal', 14.50, 24.90, 25, 450, FALSE, 7, 1, 1),
('MED-015', 'Complejo B Forte - Caja x 30 Tabletas', 'Vitaminas B1, B6 y B12 para salud nerviosa y energía', 12.00, 21.00, 15, 300, FALSE, 7, 7, 1),
('MED-016', 'Salbutamol Inhalador 100mcg - Frasco x 200 Dosis', 'Broncodilatador de acción rápida para crisis asmáticas', 8.90, 17.50, 10, 150, TRUE, 6, 10, 4),
('MED-017', 'Diclofenaco Gel 1% - Tubo x 50g Tópico', 'Alivio localizado de torceduras, golpes y tendinitis', 6.00, 12.50, 15, 250, FALSE, 3, 4, 2),
('MED-018', 'Alcohol Medicinal 70° - Frasco x 1000ml', 'Antiséptico de uso externo para desinfección general', 4.50, 8.50, 30, 800, FALSE, 8, 7, 1),
('MED-019', 'Agua Oxigenada 10 Vol - Frasco x 250ml', 'Desinfectante y limpiador de heridas superficiales', 2.00, 4.50, 20, 400, FALSE, 8, 7, 1),
('MED-020', 'Ciprofloxacino 500mg - Caja x 10 Tab', 'Antibiótico fluoroquinolona para infecciones urinarias', 5.50, 11.90, 10, 200, TRUE, 2, 4, 2),
('MED-021', 'Losartán Potásico 50mg - Caja x 30 Tab', 'Antihipertensivo antagonista receptor de angiotensina II', 6.80, 14.00, 20, 500, TRUE, 9, 6, 2),
('MED-022', 'Enalapril 10mg - Caja x 30 Tab', 'Inhibidor ECA para tratamiento de hipertensión arterial', 4.20, 8.90, 20, 400, TRUE, 9, 6, 2),
('MED-023', 'Metformina 850mg - Caja x 60 Tab', 'Hipoglucemiante oral para control de diabetes tipo 2', 9.00, 18.00, 25, 600, TRUE, 9, 6, 2),
('MED-024', 'Atorvastatina 20mg - Caja x 30 Tab', 'Tratamiento de dislipidemias y reducción de colesterol', 11.50, 23.00, 15, 350, TRUE, 9, 8, 6),
('MED-025', 'Dexametasona 4mg/2ml - Ampolla x 1 Inyectable', 'Corticosteroide antiinflamatorio e inmunosupresor potente', 2.10, 5.00, 15, 300, TRUE, 3, 7, 1),
('MED-026', 'Prednisona 20mg - Caja x 20 Tab', 'Corticosteroide oral para alergias severas y artritis', 7.00, 14.50, 10, 250, TRUE, 3, 6, 2),
('MED-027', 'Ranitidina 150mg - Caja x 30 Tab', 'Antagonista H2 para reflujo gastroesofágico leve', 5.00, 10.00, 10, 200, FALSE, 5, 4, 2),
('MED-028', 'Suero Oral Rehidratante Electrolitos x 500ml', 'Prevención y tratamiento de la deshidratación aguda', 3.80, 7.50, 30, 500, FALSE, 5, 8, 5),
('MED-029', 'Clotrimazol Crema 1% - Tubo x 20g', 'Antimicótico tópico para infecciones por hongos cutáneos', 4.00, 8.90, 15, 300, FALSE, 8, 1, 1),
('MED-030', 'Sulfadiazina de Plata 1% - Pote x 50g', 'Antibacteriano cicatrizante especializado en quemaduras', 9.50, 18.50, 10, 180, FALSE, 8, 7, 1),
('MED-031', 'Multivitamínico con Ginseng - Frasco x 30 Cápsulas', 'Revitalizante físico y mental con oligoelementos', 18.00, 32.00, 15, 250, FALSE, 7, 5, 3),
('MED-032', 'Colirio Antialérgico Nafazolina 15ml', 'Alivio rápido de la irritación ocular y conjuntivitis', 7.50, 14.50, 15, 200, FALSE, 4, 6, 2),
('MED-033', 'Ibuprofeno Infantil Suspensión 100mg/5ml x 120ml', 'Control de fiebre y dolor pediátrico con dosificador', 8.00, 15.50, 20, 350, FALSE, 1, 6, 2),
('MED-034', 'Paracetamol Infantil Jarabe 120mg/5ml x 120ml', 'Analgésico suave de alta tolerancia gástrica en niños', 6.50, 12.90, 20, 400, FALSE, 1, 7, 1),
('MED-035', 'Levotiroxina 100mcg - Caja x 50 Tab', 'Terapia de reemplazo hormonal tiroideo estricto', 15.00, 29.00, 15, 300, TRUE, 9, 8, 6),
('MED-036', 'Fluconazol 150mg - Caja x 1 Cápsula', 'Tratamiento monodosis oral para candidiasis', 3.50, 8.00, 15, 250, FALSE, 2, 4, 2),
('MED-037', 'Simeticona 80mg Masticable - Caja x 20 Tab', 'Antiflatulento antiflatulento de acción mecánica gástrica', 5.00, 10.50, 15, 300, FALSE, 5, 6, 2),
('MED-038', 'Ungüento Mentolado Descongestivo x 50g', 'Bálsamo aromático para frotaciones torácicas nocturnas', 5.80, 11.90, 20, 350, FALSE, 6, 7, 1),
('MED-039', 'Gasa Estéril Fraccionada 10x10cm - Sobre x 5 un.', 'Material quirúrgico estéril para curación higiénica', 1.20, 2.80, 50, 1000, FALSE, 10, 7, 1),
('MED-040', 'Termómetro Clínico Digital con Alarma Sonora', 'Medición precisa y segura de temperatura axilar/oral', 8.50, 17.00, 15, 200, FALSE, 10, 8, 5);

-- 2.5 Red de 10 Farmacias Barriales Afiliadas en Lima Metropolitana
INSERT INTO farmacia (nombre, ruc, direccion, telefono, email, latitud, longitud) VALUES
('FarmaBarrio Sucursal 01 - San Juan de Lurigancho', '20601234561', 'Av. Próceres de la Independencia 1420', '(01) 3761234', 'sjl@farmabarrio.pe', -11.9928100, -76.9984200),
('FarmaBarrio Sucursal 02 - Comas Túpac Amaru', '20601234562', 'Av. Túpac Amaru 3450, Comas', '(01) 5429871', 'comas@farmabarrio.pe', -11.9341200, -77.0512300),
('FarmaBarrio Sucursal 03 - Los Olivos Antúnez de Mayolo', '20601234563', 'Av. Antúnez de Mayolo 890, Los Olivos', '(01) 5214563', 'losolivos@farmabarrio.pe', -11.9892100, -77.0715600),
('FarmaBarrio Sucursal 04 - Ate Vitarte Central', '20601234564', 'Carretera Central Km 7.5, Ate', '(01) 3512349', 'ate@farmabarrio.pe', -12.0234100, -76.9213400),
('FarmaBarrio Sucursal 05 - Villa El Salvador Revolución', '20601234565', 'Av. Revolución 1280, Villa El Salvador', '(01) 2874512', 'ves@farmabarrio.pe', -12.2134500, -76.9345100),
('FarmaBarrio Sucursal 06 - San Martín de Porres Habich', '20601234566', 'Av. Eduardo de Habich 412, SMP', '(01) 4819023', 'smp@farmabarrio.pe', -12.0213400, -77.0543200),
('FarmaBarrio Sucursal 07 - Villa María del Triunfo Salvador', '20601234567', 'Av. Salvador Allende 920, VMT', '(01) 2831290', 'vmt@farmabarrio.pe', -12.1643200, -76.9456700),
('FarmaBarrio Sucursal 08 - Santa Anita Los Ficus', '20601234568', 'Av. Los Ficus 320, Santa Anita', '(01) 3624519', 'santaanita@farmabarrio.pe', -12.0456100, -76.9712300),
('FarmaBarrio Sucursal 09 - Chorrillos Huaylas', '20601234569', 'Av. Defensores del Morro 1540, Chorrillos', '(01) 2516782', 'chorrillos@farmabarrio.pe', -12.1892100, -77.0145600),
('FarmaBarrio Sucursal 10 - Puente Piedra Panamericana', '20601234570', 'Panamericana Norte Km 30.5, Puente Piedra', '(01) 5489012', 'puentepiedra@farmabarrio.pe', -11.8654300, -77.0789100);

-- 2.6 Personal Farmacéutico y de Ventas (20 Empleados asignados a farmacias)
INSERT INTO empleado (dni, nombres, apellidos, cargo, farmacia_id, telefono, email, fecha_contratacion) VALUES
('45892134', 'Carlos Alberto', 'Gutiérrez Mendoza', 'Químico Farmacéutico', 1, '987123456', 'cgutierrez@farmabarrio.pe', '2023-01-15'),
('47891245', 'Rosa María', 'Flores Salazar', 'Técnico de Farmacia', 1, '986543210', 'rflores@farmabarrio.pe', '2023-03-20'),
('43981256', 'Miguel Ángel', 'Paredes Cárdenas', 'Químico Farmacéutico', 2, '985432109', 'mparedes@farmabarrio.pe', '2023-02-10'),
('48901267', 'Ana Lucía', 'Torres Espinoza', 'Cajero Vendedor', 2, '984321098', 'atorres@farmabarrio.pe', '2023-05-12'),
('42109878', 'Jorge Luis', 'Vargas Huamán', 'Químico Farmacéutico', 3, '983210987', 'jvargas@farmabarrio.pe', '2023-01-20'),
('46781290', 'Diana Carolina', 'Ramos Chumpitaz', 'Técnico de Farmacia', 3, '982109876', 'dramos@farmabarrio.pe', '2023-04-18'),
('44567891', 'Fernando José', 'Morales Benítez', 'Químico Farmacéutico', 4, '981098765', 'fmorales@farmabarrio.pe', '2023-03-01'),
('49012345', 'Patricia Elena', 'Sánchez Quispe', 'Cajero Vendedor', 4, '980987654', 'psanchez@farmabarrio.pe', '2023-06-15'),
('41234567', 'Luis Enrique', 'Castro Velásquez', 'Químico Farmacéutico', 5, '979876543', 'lcastro@farmabarrio.pe', '2023-02-15'),
('47890123', 'Carmen Rosa', 'Medina Córdova', 'Técnico de Farmacia', 5, '978765432', 'cmedina@farmabarrio.pe', '2023-05-01'),
('43456789', 'Hugo Daniel', 'Ríos Alarcón', 'Químico Farmacéutico', 6, '977654321', 'hrios@farmabarrio.pe', '2023-01-10'),
('48123456', 'Verónica Isabel', 'Navarro Peña', 'Cajero Vendedor', 6, '976543210', 'vnavarro@farmabarrio.pe', '2023-04-22'),
('42345678', 'Raúl Andrés', 'Ortega Silva', 'Químico Farmacéutico', 7, '975432109', 'rortega@farmabarrio.pe', '2023-03-11'),
('46901234', 'Silvia Janet', 'Cabrera Montoya', 'Técnico de Farmacia', 7, '974321088', 'scabrera@farmabarrio.pe', '2023-07-01'),
('44678901', 'Pedro Pablo', 'Villanueva Vera', 'Químico Farmacéutico', 8, '973210977', 'pvillanueva@farmabarrio.pe', '2023-02-28'),
('49123456', 'Claudia Beatriz', 'Rojas Palomino', 'Cajero Vendedor', 8, '972109866', 'crojas@farmabarrio.pe', '2023-06-05'),
('41456789', 'Gonzalo Martín', 'Aguilar Zúñiga', 'Químico Farmacéutico', 9, '971098755', 'gaguilar@farmabarrio.pe', '2023-01-25'),
('47012345', 'Mónica Cecilia', 'Pacheco Guerra', 'Técnico de Farmacia', 9, '970987644', 'mpacheco@farmabarrio.pe', '2023-05-18'),
('43678901', 'Óscar Eduardo', 'Bravo Quiroz', 'Químico Farmacéutico', 10, '969876533', 'obravo@farmabarrio.pe', '2023-03-15'),
('48345678', 'Lucía Fernanda', 'Campos Valdivia', 'Cajero Vendedor', 10, '968765422', 'lcampos@farmabarrio.pe', '2023-06-25');

-- 2.7 Poblado Masivo de Clientes: 500 Clientes con generate_series
INSERT INTO cliente (dni, nombres, apellidos, telefono, email, direccion, fecha_nacimiento, fecha_registro)
SELECT
    LPAD((10000000 + s)::TEXT, 8, '0') AS dni,
    (ARRAY['Juan', 'Carlos', 'Luis', 'Pedro', 'José', 'Manuel', 'Jorge', 'César', 'Víctor', 'Ángel',
           'María', 'Rosa', 'Carmen', 'Ana', 'Lucía', 'Elena', 'Patricia', 'Diana', 'Claudia', 'Silvia'])[1 + MOD(s, 20)] AS nombres,
    (ARRAY['Quispe', 'Flores', 'Rodríguez', 'Sánchez', 'García', 'Rojas', 'Díaz', 'Torres', 'López', 'Gonzales',
           'Pérez', 'Chávez', 'Vásquez', 'Ramos', 'Ramírez', 'Mendoza', 'Espinoza', 'Castro', 'Vargas', 'Morales'])[1 + MOD(s * 7, 20)] || ' ' ||
    (ARRAY['Huamán', 'Mamani', 'Castillo', 'Romero', 'Fernández', 'Gutiérrez', 'Medina', 'Herrera', 'Silva', 'Cárdenas'])[1 + MOD(s * 13, 10)] AS apellidos,
    '9' || LPAD((80000000 + MOD(s * 314159, 19999999))::TEXT, 8, '0') AS telefono,
    'cliente' || s || '@gmail.com' AS email,
    'Av. Los Próceres ' || (100 + MOD(s * 17, 900)) || ', Lima' AS direccion,
    (DATE '1960-01-01' + (MOD(s * 73, 15000)) * INTERVAL '1 day')::DATE AS fecha_nacimiento,
    (TIMESTAMP '2024-01-01 08:00:00' + (s * INTERVAL '10 hours')) AS fecha_registro
FROM generate_series(1, 500) s;

-- 2.8 Inventario Inicial: CROSS JOIN entre 40 medicamentos y 10 farmacias (400 registros)
INSERT INTO inventario (medicamento_id, farmacia_id, cantidad, fecha_ultima_actualizacion)
SELECT
    m.medicamento_id,
    f.farmacia_id,
    (50 + MOD((m.medicamento_id * 37 + f.farmacia_id * 53), 250)) AS cantidad,
    CURRENT_TIMESTAMP
FROM medicamento m
CROSS JOIN farmacia f;

-- 2.9 Trazabilidad Inicial de Stock: 400 Movimientos de Inventario
INSERT INTO movimiento_inventario (inventario_id, tipo_movimiento, cantidad, stock_anterior, stock_nuevo, motivo, fecha_movimiento)
SELECT
    i.inventario_id,
    'ENTRADA',
    i.cantidad,
    0,
    i.cantidad,
    'Carga inicial de stock para apertura de sucursal',
    CURRENT_TIMESTAMP - INTERVAL '30 days'
FROM inventario i;

-- 2.10 Poblado Masivo de Ventas: 5,000 Transacciones de Venta
INSERT INTO venta (codigo_venta, cliente_id, farmacia_id, empleado_id, fecha_venta, metodo_pago, estado)
SELECT
    'VTA-' || TO_CHAR(CURRENT_DATE, 'YYYYMM') || '-' || LPAD(s::TEXT, 6, '0') AS codigo_venta,
    (1 + MOD(s * 17, 500)) AS cliente_id,
    (1 + MOD(s * 7, 10)) AS farmacia_id,
    (1 + MOD(s * 11, 20)) AS empleado_id,
    (TIMESTAMP '2024-06-01 08:00:00' + (s * INTERVAL '15 minutes')) AS fecha_venta,
    (ARRAY['EFECTIVO', 'TARJETA', 'YAPE', 'PLIN'])[1 + MOD(s, 4)] AS metodo_pago,
    CASE WHEN MOD(s, 30) = 0 THEN 'ANULADA' ELSE 'COMPLETADA' END AS estado
FROM generate_series(1, 5000) s;

-- 2.11 Poblado Masivo de Detalle de Venta: 15,000 Ítems (3 ítems aleatorios por venta)
INSERT INTO detalle_venta (venta_id, medicamento_id, cantidad, precio_unitario, descuento, subtotal)
SELECT
    v.venta_id,
    m.medicamento_id,
    item.cantidad,
    m.precio_venta,
    0.00 AS descuento,
    ROUND((item.cantidad * m.precio_venta), 2) AS subtotal
FROM venta v
CROSS JOIN LATERAL (
    SELECT
        (1 + MOD(v.venta_id + seq, 40)) AS med_id,
        (1 + MOD(v.venta_id * 3 + seq, 4)) AS cantidad
    FROM generate_series(1, 3) seq
) item
INNER JOIN medicamento m ON m.medicamento_id = item.med_id;

-- 2.12 Actualización de Totales en Cabecera de Ventas (subtotal, IGV 18% y total calculado)
UPDATE venta v
SET subtotal = dt.sum_subtotal,
    igv = ROUND(dt.sum_subtotal * 0.18, 2),
    total = ROUND(dt.sum_subtotal * 1.18, 2)
FROM (
    SELECT venta_id, SUM(subtotal) AS sum_subtotal
    FROM detalle_venta
    GROUP BY venta_id
) dt
WHERE v.venta_id = dt.venta_id;

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

-- Indices de optimizacion de consultas

-- 1. Índice compuesto: inventario(medicamento_id, farmacia_id) - Autor: Maykel Quiñones
CREATE INDEX idx_inventario_medicamento_farmacia ON inventario(medicamento_id, farmacia_id);

-- 2. Índice temporal: venta(fecha_venta) - Autor: Leonardo Wong
CREATE INDEX idx_venta_fecha ON venta(fecha_venta);

-- 3. Índice en catálogo: medicamento(nombre) - Autor: Nicole Garcia
CREATE INDEX idx_medicamento_nombre ON medicamento(nombre);

-- 4. Índice de búsqueda: cliente(dni) - Autor: Jorge Matencio
CREATE INDEX idx_cliente_dni ON cliente(dni);

-- 5. Índice de negocio: farmacia(ruc) - Autor: Dereck Rojas
CREATE INDEX idx_farmacia_ruc ON farmacia(ruc);

-- Demostración de optimización (Seq Scan -> Index Scan)
EXPLAIN ANALYZE
SELECT * FROM venta
WHERE fecha_venta BETWEEN '2024-06-01' AND '2024-06-30'
  AND farmacia_id = 1;

EXPLAIN ANALYZE
SELECT * FROM inventario
WHERE medicamento_id = 1 AND farmacia_id = 1;

-- Administracion de seguridad, roles y usuarios
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'farma_dba') THEN
        CREATE ROLE farma_dba WITH SUPERUSER LOGIN PASSWORD 'FarmaDba2026!';
    END IF;

    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'farma_app') THEN
        CREATE ROLE farma_app WITH LOGIN PASSWORD 'FarmaApp2026!';
    END IF;

    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'farma_readonly') THEN
        CREATE ROLE farma_readonly WITH LOGIN PASSWORD 'FarmaReadOnly2026!';
    END IF;
END
$$;

-- Asignación de permisos granulares
GRANT CONNECT ON DATABASE postgres TO farma_app, farma_readonly;
GRANT USAGE ON SCHEMA public TO farma_app, farma_readonly;

-- farma_app: Privilegios DML operativos
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO farma_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO farma_app;

-- farma_readonly: Solo consulta para auditoría y reportes
GRANT SELECT ON ALL TABLES IN SCHEMA public TO farma_readonly;

-- Pruebas de ejecucion de procedimientos y funciones
-- Prueba 1 (Maykel Quiñones):
SELECT fn_total_ventas_farmacia(1, '2024-01-01', '2026-12-31') AS total_ventas_farmacia_1;

-- Prueba 2 (Leonardo Wong):
CALL sp_registrar_entrada_inventario(1, 1, 50, 'Reposición de stock mayorista por alta demanda');

-- Prueba 3 (Nicole Garcia):
SELECT fn_calcular_stock_minimo(1, 1) AS alerta_stock_bajo;

-- Prueba 4 (Jorge Matencio):
CALL sp_actualizar_precio_medicamento(1, 9.00, 16.50);

-- Prueba 5 (Dereck Rojas):
SELECT fn_rotacion_medicamento(1, 1) AS indice_rotacion_medicamento;

-- VERIFICACIÓN FINAL DE REGISTROS INSERTADOS
SELECT 'categoria' AS tabla, COUNT(*) AS total_registros FROM categoria
UNION ALL SELECT 'marca', COUNT(*) FROM marca
UNION ALL SELECT 'laboratorio', COUNT(*) FROM laboratorio
UNION ALL SELECT 'medicamento', COUNT(*) FROM medicamento
UNION ALL SELECT 'farmacia', COUNT(*) FROM farmacia
UNION ALL SELECT 'inventario', COUNT(*) FROM inventario
UNION ALL SELECT 'movimiento_inventario', COUNT(*) FROM movimiento_inventario
UNION ALL SELECT 'cliente', COUNT(*) FROM cliente
UNION ALL SELECT 'empleado', COUNT(*) FROM empleado
UNION ALL SELECT 'venta', COUNT(*) FROM venta
UNION ALL SELECT 'detalle_venta', COUNT(*) FROM detalle_venta;
