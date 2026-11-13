-- Creacion de la base de datos principal FarmaBarrio en PostgreSQL 18
-- Motor: PostgreSQL 18 | Esquema: public

DROP DATABASE IF EXISTS farmabarrio_db;
CREATE DATABASE farmabarrio_db
    WITH OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

\c farmabarrio_db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
