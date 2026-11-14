# FarmaBarrio - Segundo Entregable Oficial (Semana 14)
**Universidad Tecnológica del Perú - Facultad de Ingeniería de Sistemas e Informática**  
**Curso:** Base de Datos II (Sección 41483) | **Docente:** Mag. José Bustamante  
**Proyecto:** FarmaBarrio — Red Colaborativa de Farmacias Independientes del Perú  

### Equipo de Trabajo - Grupo 2:
1. Quiñones Diego, Maykel Piero (Líder / PostgreSQL B2C)
2. Wong Villanueva, Leonardo Josué (DBA Oracle / Finanzas B2B)
3. Garcia Espejo, Nicole Andrea (DBA MongoDB / NoSQL Documental)
4. Matencio Paucar, Jorge Fabian (Big Data Engineer / Cassandra)
5. Rojas Pérez, Dereck Daniel (DBA Cassandra / Series Temporales)

---

## Estructura Oficial del Entregable
```
BASE DE DATOS 2/
├── 1. Informe/
│   ├── 1. Informe_Base_Datos.docx (Informe técnico consolidado con 85 evidencias y 38 tablas)
│   └── 1. Informe_Base_Datos.pdf (Exportación PDF oficial nativa)
├── 2. Anexos/
│   ├── 2.1 Project_Charter.docx
│   └── 2.2 Diccionario_datos.xlsx (Catálogo de 28 entidades en PostgreSQL, Oracle, MongoDB y Cassandra)
├── 3. Scripts/
│   ├── 3.1 Postgresql/
│   │   ├── 1. Base_datos.sql
│   │   ├── 2. Tablas.sql
│   │   ├── 3. Indices.sql
│   │   ├── 4. Procedure_Functions.sql
│   │   ├── 5. Usuario.sql
│   │   ├── 6. Data.sql
│   │   ├── 7. Backups_Restore.sql
│   │   ├── DiagramaLogico.jpg
│   │   └── Fragmentacion/ (01_Fragmentacion, 02_Validaciones, 03_Rollback, Diagrama)
│   ├── 3.2 Oracle/
│   │   ├── 1. Base_datos.sql
│   │   ├── 2. Tablas.sql
│   │   ├── 3. Indices.sql
│   │   ├── 4. Procedure_Functions.sql
│   │   ├── 5. Usuario.sql
│   │   ├── 6. Data.sql
│   │   ├── 7. Backups_Restore.sql
│   │   ├── DiagramaLogico.jpg
│   │   └── Fragmentacion/ (01_Fragmentacion, 02_Validaciones, Diagrama)
│   ├── 3.3 MongoDB/
│   │   ├── 1. Colecciones.js
│   │   ├── 2. Data_500_registros.js
│   │   ├── 3. Consultas_Agregacion.js
│   │   ├── 4. Usuarios_Mongo.js
│   │   ├── 5. Backup_Restore_Mongo.bat
│   │   └── Replicacion/rs_config.js
│   └── 3.4 Cassandra/
│       ├── 1. Keyspace_Tablas.cql
│       ├── 2. Data_500_registros.cql
│       ├── 3. Consultas_Series_Tiempo.cql
│       ├── 4. Usuarios_Cassandra.cql
│       └── 5. Backup_Snapshot.bat
└── 4. Backups/
    ├── farmabarrio_full.backup
    ├── dump_mongodb/farmabarrio_nosql/
    └── snapshot_cassandra/
```
