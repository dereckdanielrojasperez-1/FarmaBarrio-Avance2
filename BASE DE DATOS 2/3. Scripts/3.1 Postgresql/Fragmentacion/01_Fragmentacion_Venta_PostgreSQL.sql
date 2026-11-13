-- FARMABARRIO / GRUPO 2 / AVANCE 2 / FRAGMENTACIÓN POSTGRESQL
-- Archivo: 01_Fragmentacion_Venta_PostgreSQL.sql
-- Tipo: HORIZONTAL / LIST (farmacia_id)
-- Compatibilidad prevista: PostgreSQL 15+; ejecutar en farmabarrio_db
-- FUENTE: tabla public.venta del SQL entregado en Avance 1.
-- IMPORTANTE: no modifica, no renombra ni elimina tablas del Avance 1.
-- Crea una COPIA PARTICIONADA de demostración en esquema fb_frag.
-- La copia se recarga desde public.venta en cada ejecución.

BEGIN;

CREATE SCHEMA IF NOT EXISTS fb_frag;

-- Tabla lógica padre. La estructura respeta los 13 campos de public.venta.
-- A diferencia de la tabla original, la PK/UNIQUE DEBEN incluir farmacia_id,
-- porque PostgreSQL requiere que toda restricción de unicidad de la tabla
-- particionada incorpore la columna de partición.
CREATE TABLE IF NOT EXISTS fb_frag.venta_particionada (
    venta_id       INTEGER NOT NULL,
    codigo_venta   VARCHAR(20) NOT NULL,
    cliente_id     INTEGER NOT NULL REFERENCES public.cliente(cliente_id),
    farmacia_id    INTEGER NOT NULL REFERENCES public.farmacia(farmacia_id),
    empleado_id    INTEGER REFERENCES public.empleado(empleado_id),
    fecha_venta    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    subtotal       NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    igv            NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    total          NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    metodo_pago    VARCHAR(20) CHECK (metodo_pago IN ('EFECTIVO', 'TARJETA', 'YAPE', 'PLIN')),
    estado         VARCHAR(20) NOT NULL DEFAULT 'COMPLETADA'
                   CHECK (estado IN ('COMPLETADA', 'ANULADA', 'PENDIENTE')),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_venta_particionada PRIMARY KEY (venta_id, farmacia_id),
    CONSTRAINT uq_venta_part_codigo_farmacia UNIQUE (codigo_venta, farmacia_id)
) PARTITION BY LIST (farmacia_id);

-- Criterios extraídos de las 10 farmacias que aparecen en el SQL original:
-- NORTE: 2 Comas, 3 Los Olivos, 6 San Martín de Porres, 10 Puente Piedra.
CREATE TABLE IF NOT EXISTS fb_frag.venta_norte
    PARTITION OF fb_frag.venta_particionada
    FOR VALUES IN (2, 3, 6, 10);

-- ESTE: 1 San Juan de Lurigancho, 4 Ate, 8 Santa Anita.
CREATE TABLE IF NOT EXISTS fb_frag.venta_este
    PARTITION OF fb_frag.venta_particionada
    FOR VALUES IN (1, 4, 8);

-- SUR: 5 Villa El Salvador, 7 Villa María del Triunfo, 9 Chorrillos.
CREATE TABLE IF NOT EXISTS fb_frag.venta_sur
    PARTITION OF fb_frag.venta_particionada
    FOR VALUES IN (5, 7, 9);

-- Fallback seguro: nuevas farmacias cuyo ID aún no está clasificado.
CREATE TABLE IF NOT EXISTS fb_frag.venta_otros
    PARTITION OF fb_frag.venta_particionada DEFAULT;

-- Índice para reportes de una farmacia ordenados por fecha.
-- PostgreSQL creará índices asociados en las particiones.
CREATE INDEX IF NOT EXISTS ix_vp_farmacia_fecha
    ON fb_frag.venta_particionada (farmacia_id, fecha_venta DESC);

-- RECONSTRUCCIÓN de la COPIA. No toca public.venta ni public.detalle_venta.
TRUNCATE TABLE fb_frag.venta_particionada;

INSERT INTO fb_frag.venta_particionada (
    venta_id, codigo_venta, cliente_id, farmacia_id, empleado_id,
    fecha_venta, subtotal, igv, total, metodo_pago, estado, created_at, updated_at
)
SELECT
    venta_id, codigo_venta, cliente_id, farmacia_id, empleado_id,
    fecha_venta, subtotal, igv, total, metodo_pago, estado, created_at, updated_at
FROM public.venta;

ANALYZE fb_frag.venta_particionada;

COMMIT;

-- Comprobación rápida (las validaciones exhaustivas van en el archivo 02)
SELECT 'original_public_venta' AS origen, COUNT(*) AS cantidad FROM public.venta
UNION ALL
SELECT 'copia_particionada', COUNT(*) FROM fb_frag.venta_particionada;

SELECT tableoid::regclass AS fragmento, COUNT(*) AS ventas
FROM fb_frag.venta_particionada
GROUP BY tableoid
ORDER BY 1;