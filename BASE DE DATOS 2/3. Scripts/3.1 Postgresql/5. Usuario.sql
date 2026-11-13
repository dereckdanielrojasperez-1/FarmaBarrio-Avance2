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

--

-- Verificacion de seguridad y prueba de acceso restringido para rol de consulta
-- Intento no autorizado de modificacion que genera ERROR: permission denied for table venta
SET ROLE usr_consulta;
SELECT COUNT(*) AS total_medicamentos_leidos FROM medicamento;
-- La siguiente instruccion ejecutada por usr_consulta fallara por falta de privilegios:
-- INSERT INTO venta (codigo_venta, cliente_id, farmacia_id, total) VALUES ('FAIL-001', 1, 1, 99.90);
RESET ROLE;
