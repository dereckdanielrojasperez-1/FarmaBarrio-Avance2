-- ==============================================================================
-- ADMINISTRACIÓN DE SEGURIDAD, ROLES Y USUARIOS - ORACLE DATABASE XE 21c
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- INTEGRANTE RESPONSABLE: Nicole Andrea Garcia Espejo (Oracle XE / PL-SQL & RBAC)
-- NOTA: Estos comandos DDL administrativos se ejecutan conectados como SYSTEM o SYS
-- ==============================================================================

-- 1. Creación de Roles de Seguridad Institucional (RBAC)
CREATE ROLE rol_farma_admin;
CREATE ROLE rol_farma_operador;
CREATE ROLE rol_farma_consulta;

-- Privilegios de Sistema para Roles
GRANT CREATE SESSION, CREATE TABLE, CREATE VIEW, CREATE PROCEDURE, CREATE SEQUENCE, CREATE TRIGGER TO rol_farma_admin;
GRANT CREATE SESSION TO rol_farma_operador;
GRANT CREATE SESSION TO rol_farma_consulta;

-- 2. Creación de Usuarios con Cuotas Asignadas en Tablespace
-- A) Usuario DBA / Administrador Técnico
CREATE USER farma_dba IDENTIFIED BY "FarmaDba2026!"
DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP 
QUOTA UNLIMITED ON USERS;
GRANT rol_farma_admin TO farma_dba;
GRANT DBA TO farma_dba;

-- B) Usuario Operativo de Aplicación (Backend Microservicios Compras B2B)
CREATE USER farma_app IDENTIFIED BY "FarmaApp2026!"
DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP 
QUOTA 500M ON USERS;
GRANT rol_farma_operador TO farma_app;

-- Privilegios DML granulares para farma_app
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.compra TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.detalle_compra TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.pagos_proveedor TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.documentos_tributarios TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.asiento_contable TO farma_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON farmabarrio_owner.detalle_asiento TO farma_app;
GRANT SELECT ON farmabarrio_owner.proveedor TO farma_app;
GRANT SELECT ON farmabarrio_owner.medicamento_ref TO farma_app;
GRANT SELECT ON farmabarrio_owner.impuestos TO farma_app;
GRANT SELECT ON farmabarrio_owner.centro_costo TO farma_app;
GRANT SELECT ON farmabarrio_owner.cuenta TO farma_app;

-- C) Usuario de Consulta y Auditoría Fiscal (Solo Lectura SELECT)
CREATE USER farma_readonly IDENTIFIED BY "FarmaReadOnly2026!"
DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP
QUOTA 0 ON USERS;
GRANT rol_farma_consulta TO farma_readonly;

-- Privilegios SELECT estrictos para farma_readonly
GRANT SELECT ON farmabarrio_owner.compra TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.detalle_compra TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.proveedor TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.pagos_proveedor TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.asiento_contable TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.detalle_asiento TO farma_readonly;
GRANT SELECT ON farmabarrio_owner.documentos_tributarios TO farma_readonly;

-- ==============================================================================
-- 3. VERIFICACIÓN DE SEGURIDAD Y PRUEBA DE ACCESO RESTRINGIDO
-- Demostración de Mínimo Privilegio:
-- Al conectar como farma_readonly e intentar ejecutar un comando DML (DELETE/INSERT)
-- sobre una tabla protegida, Oracle rechaza la operación con ORA-01031.
-- ==============================================================================

-- A) Consulta de lectura permitida (SELECT):
-- CONNECT farma_readonly/"FarmaReadOnly2026!";
-- SELECT COUNT(*) AS total_asientos FROM farmabarrio_owner.asiento_contable;

-- B) Bloque anónimo de prueba que captura ORA-01031 (Insufficient Privileges):
DECLARE
    v_error_code NUMBER;
    v_error_msg  VARCHAR2(500);
BEGIN
    -- Se intenta ejecutar una sentencia de modificación no autorizada como farma_readonly
    EXECUTE IMMEDIATE 'DELETE FROM farmabarrio_owner.asiento_contable WHERE ROWNUM = 1';
EXCEPTION
    WHEN OTHERS THEN
        v_error_code := SQLCODE;
        v_error_msg  := SQLERRM;
        IF v_error_code = -1031 THEN
            DBMS_OUTPUT.PUT_LINE('>>> SEGURIDAD VERIFICADA EN ORACLE XE: Acceso denegado con éxito (ORA-01031: insufficient privileges) para el usuario farma_readonly.');
        ELSE
            DBMS_OUTPUT.PUT_LINE('Código de excepción capturado: ' || v_error_code || ' - ' || v_error_msg);
        END IF;
END;
/
