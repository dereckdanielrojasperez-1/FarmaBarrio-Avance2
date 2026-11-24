-- Creación de Roles y Usuarios en Apache Cassandra con Mínimo Privilegio
-- Keyspace: farmabarrio

-- 1. Rol Administrador del Clúster
CREATE ROLE IF NOT EXISTS farma_admin WITH PASSWORD = 'CassandraAdmin2026#Secure' AND SUPERUSER = true AND LOGIN = true;

-- 2. Rol de Respaldo y Snapshots
CREATE ROLE IF NOT EXISTS farma_respaldo WITH PASSWORD = 'BackupCassandra2026#Secure' AND SUPERUSER = false AND LOGIN = true;
GRANT SELECT ON KEYSPACE farmabarrio TO farma_respaldo;

-- 3. Rol de Solo Lectura para Reportería
CREATE ROLE IF NOT EXISTS farma_consulta WITH PASSWORD = 'ConsultaCassandra2026#Secure' AND SUPERUSER = false AND LOGIN = true;
GRANT SELECT ON KEYSPACE farmabarrio TO farma_consulta;

-- 4. Rol Operativo de Aplicación (Lectura y Escritura de Series Temporales)
CREATE ROLE IF NOT EXISTS farma_operacion WITH PASSWORD = 'AppCassandra2026#Secure' AND SUPERUSER = false AND LOGIN = true;
GRANT SELECT, MODIFY ON KEYSPACE farmabarrio TO farma_operacion;
