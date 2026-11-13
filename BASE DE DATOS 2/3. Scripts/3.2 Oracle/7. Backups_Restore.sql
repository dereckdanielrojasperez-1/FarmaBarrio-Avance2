-- Procedimientos de respaldo y recuperacion logica en Oracle XE Data Pump
-- Comandos expdp e impdp con sentencias de validacion

-- 1. Configuracion del directorio de respaldo en Oracle (ejecutar como SYSTEM)
-- CREATE OR REPLACE DIRECTORY dpump_farmabarrio AS 'C:\Users\Computecno\Documents\Bd2\BASE DE DATOS 2\4. Backups';
-- GRANT READ, WRITE ON DIRECTORY dpump_farmabarrio TO farmabarrio_owner;

-- 2. Comando de Exportacion Logica (Backup completo del esquema)
-- expdp farmabarrio_owner/"FarmaBarrio2026#"@localhost:1521/XEPDB1 schemas=FARMABARRIO_OWNER directory=dpump_farmabarrio dumpfile=farmabarrio_oracle.dmp logfile=expdp_farmabarrio.log

-- 3. Comando de Importacion y Restauracion
-- impdp SYSTEM/"Admin2026#"@localhost:1521/XEPDB1 directory=dpump_farmabarrio dumpfile=farmabarrio_oracle.dmp remap_schema=FARMABARRIO_OWNER:FARMABARRIO_RESTOR logfile=impdp_farmabarrio.log

-- 4. Verificacion de consistencia post-restauracion
SELECT table_name, num_rows
FROM all_tables
WHERE owner = 'FARMABARRIO_OWNER'
ORDER BY table_name;
