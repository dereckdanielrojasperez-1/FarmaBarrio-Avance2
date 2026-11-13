-- Tablas del modelo relacional FarmaBarrio (11 tablas en esquema public)
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

-- 
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

--
