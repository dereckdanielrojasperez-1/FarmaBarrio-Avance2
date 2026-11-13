-- Administracion de seguridad, roles y usuarios
-- NOTA: Estos comandos se ejecutan con privilegios administrativos (SYSTEM o SYS)
/*
-- 1. Usuario DBA
CREATE USER farma_dba IDENTIFIED BY FarmaDba2026!
DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP QUOTA UNLIMITED ON USERS;
GRANT CONNECT, RESOURCE, DBA TO farma_dba;

-- 2. Usuario Operativo de Aplicación
CREATE USER farma_app IDENTIFIED BY FarmaApp2026!
DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP QUOTA 500M ON USERS;
GRANT CONNECT, RESOURCE TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.compra TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.detalle_compra TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.pagos_proveedor TO farma_app;

-- 3. Usuario de Consulta y Auditoría
CREATE USER farma_readonly IDENTIFIED BY FarmaReadOnly2026!
DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP;
GRANT CREATE SESSION TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.compra TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.proveedor TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.pagos_proveedor TO farma_readonly;
*/

--

-- Verificacion de seguridad y prueba de acceso restringido en Oracle
-- Intento no autorizado de modificacion que genera ORA-01031: insufficient privileges
-- Conectar con usuario usr_auditor (solo lectura sobre documentos y asientos)
-- Conn usr_auditor/"Auditor2026#";
-- SELECT COUNT(*) FROM farmabarrio_owner.asiento_contable;
-- La siguiente sentencia ejecutada por usr_auditor fallara con ORA-01031:
-- DELETE FROM farmabarrio_owner.asiento_contable WHERE rownum = 1;
