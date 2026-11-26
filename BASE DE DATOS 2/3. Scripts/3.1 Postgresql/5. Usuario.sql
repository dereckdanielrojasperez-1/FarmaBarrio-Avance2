-- ADMINISTRACIÓN DE SEGURIDAD, ROLES Y USUARIOS - POSTGRESQL 18
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- INTEGRANTE RESPONSABLE: Leonardo Josué Wong Villanueva / Maykel Quiñones

-- 1. Creación de Roles de Seguridad (Principio de Mínimo Privilegio - PoLP)
DO $$
BEGIN
    -- Rol Administrador DBA de FarmaBarrio
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'farma_dba') THEN
        CREATE ROLE farma_dba WITH SUPERUSER LOGIN PASSWORD 'FarmaDba2026!';
        COMMENT ON ROLE farma_dba IS 'Administrador total de infraestructura y objetos FarmaBarrio';
    END IF;

    -- Rol Aplicativo Backend / Microservicios
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'farma_app') THEN
        CREATE ROLE farma_app WITH LOGIN PASSWORD 'FarmaApp2026!';
        COMMENT ON ROLE farma_app IS 'Usuario de aplicación con permisos DML de operación diaria';
    END IF;

    -- Rol de Consulta Exclusiva (Auditores, Analistas BI y Reportes)
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'farma_readonly') THEN
        CREATE ROLE farma_readonly WITH LOGIN PASSWORD 'FarmaReadOnly2026!';
        COMMENT ON ROLE farma_readonly IS 'Usuario de solo lectura para auditoría y visualización de reportes';
    END IF;
END
$$;

-- 2. Concesión de Conexión y Uso de Esquemas
GRANT CONNECT ON DATABASE postgres TO farma_app, farma_readonly;
GRANT USAGE ON SCHEMA public TO farma_app, farma_readonly;
GRANT USAGE ON SCHEMA fb_frag TO farma_app, farma_readonly;

-- 3. Privilegios Granulares para farma_app (Operativo DML)
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA fb_frag TO farma_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO farma_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA fb_frag TO farma_app;

-- 4. Privilegios Granulares para farma_readonly (Solo Lectura SELECT)
GRANT SELECT ON ALL TABLES IN SCHEMA public TO farma_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA fb_frag TO farma_readonly;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public FROM farma_readonly;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA fb_frag FROM farma_readonly;

-- 5. VERIFICACIÓN DE SEGURIDAD Y PRUEBA DE ACCESO RESTRINGIDO
-- Demostración formal del Principio de Mínimo Privilegio:
-- El rol farma_readonly tiene permiso para leer, pero si intenta modificar
-- o insertar datos, el motor de PostgreSQL aborta la operación con permission denied.

-- A) Verificación de Lectura Permitida:
SET ROLE farma_readonly;
SELECT COUNT(*) AS total_medicamentos_leidos FROM public.medicamento;

-- B) Intento No Autorizado de Inserción (Provocación Controlada de Error):
-- La siguiente instrucción arroja de forma nativa:
-- ERROR: permission denied for table venta
-- Se ejecuta dentro de un bloque seguro para registrar la evidencia técnica de bloqueo:
DO $$
BEGIN
    INSERT INTO public.venta (codigo_venta, cliente_id, farmacia_id, total, estado)
    VALUES ('FAIL-SEC-001', 1, 1, 150.00, 'PENDIENTE');
EXCEPTION WHEN insufficient_privilege THEN
    RAISE NOTICE '>>> PRUEBA DE SEGURIDAD EXITOSA: Intento de INSERT bloqueado por PostgreSQL (permission denied para rol farma_readonly).';
END $$;

-- C) Restauración de Rol Administrativo:
RESET ROLE;
