-- Administracion de seguridad y roles en Apache Cassandra
-- Autenticacion basada en PasswordAuthenticator y autorizacion granular con GRANT

-- 1. Rol de Administrador de Seguridad (Superusuario)
CREATE ROLE IF NOT EXISTS farma_sec_admin
WITH PASSWORD = 'CassandraAdmin2026#'
AND SUPERUSER = true
AND LOGIN = true;

-- 2. Rol para aplicacion backend FarmaBarrio (Lectura y Escritura operativa)
CREATE ROLE IF NOT EXISTS farma_cql_app
WITH PASSWORD = 'CqlAppUser2026#'
AND SUPERUSER = false
AND LOGIN = true;

GRANT MODIFY ON KEYSPACE farmabarrio_ks TO farma_cql_app;
GRANT SELECT ON KEYSPACE farmabarrio_ks TO farma_cql_app;

-- 3. Rol de Auditoria y Consultas Analiticas (Solo Lectura)
CREATE ROLE IF NOT EXISTS farma_cql_audit
WITH PASSWORD = 'CqlAuditUser2026#'
AND SUPERUSER = false
AND LOGIN = true;

GRANT SELECT ON KEYSPACE farmabarrio_ks TO farma_cql_audit;

-- 4. Prueba de seguridad y acceso restringido (Subsanacion de Observacion)
-- Conectandose con cqlsh -u farma_cql_audit -p CqlAuditUser2026#
-- La lectura opera correctamente:
-- SELECT COUNT(*) FROM farmabarrio_ks.precios_historicos_por_farmacia;
--
-- Un intento de insercion o alteracion provocara error por privilegios insuficientes:
-- INSERT INTO farmabarrio_ks.precios_historicos_por_farmacia (farmacia_id, medicamento_id, fecha_actualizacion, canal) VALUES (99, 99, toTimestamp(now()), 'HACK');
-- Error esperado: UnauthorizedException: User farma_cql_audit has no MODIFY permission on <table farmabarrio_ks.precios_historicos_por_farmacia>
