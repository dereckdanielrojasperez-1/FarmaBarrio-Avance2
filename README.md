# FarmaBarrio — Red Colaborativa de Farmacias Independientes del Perú
## Proyecto Final de Base de Datos II (Semana 17 — Sustentación Final)
**Universidad Tecnológica del Perú | Sección 41483**  
**Docente:** Mag. José Bustamante  
**Calificación Previa:** 17.5 / 20 | **Meta:** 20 / 20 (Subsanación Total al 100%)

### Equipo de Trabajo — Grupo 2:
1. Quiñones Diego, Maykel Piero (Líder / PostgreSQL B2C)
2. Wong Villanueva, Leonardo Josué (DBA Oracle / Finanzas B2B)
3. Garcia Espejo, Nicole Andrea (DBA MongoDB / NoSQL Documental)
4. Matencio Paucar, Jorge Fabian (Big Data Engineer / Cassandra Series Temporales)
5. Rojas Pérez, Dereck Daniel (DBA Cassandra / Replicación y Respaldo)

---

### Subsanación de las 4 Observaciones del Docente:
1. **Diagrama de Arquitectura Global:** Diseñado e integrado en Ultra HD (3800x2400 px, 300 DPI) reflejando los 5 componentes (PostgreSQL 18 LIST, Oracle XE 21c RANGE, MongoDB 9.0 Replica Set rs0, Cassandra 5.0 Peer-to-Peer Ring RF=3 y Apache Hadoop 3.3+ Data Lake Bronze/Silver/Gold).
2. **Reemplazo de Diagramas Borrosos:** Todos los diagramas lógicos y de fragmentación fueron re-renderizados en Ultra HD (2500x1600 a 3800x2400 px) con texto grande y tipografía nítida.
3. **Coherencia y Unificación Total:** Eliminadas referencias obsoletas. Estandarización de `farmabarrio_db`, `FARMABARRIO_OWNER`, `farmabarrio_mongo` (4 colecciones) y `farmabarrio` (3 tablas).
4. **Respaldos y Verificación:** Se incorporó el respaldo de Oracle XE (`farmabarrio_oracle_backup.sql` y `.dmp`), dumps BSON canónicos de MongoDB, snapshots CSV de Cassandra y el script maestro de verificación `Verificar_Restauracion_Total.sql` y `.ps1`.

---

### Estructura del Repositorio:
```text
BASE DE DATOS 2/
├── 1. Informe/
│   ├── 1. Informe_Base_Datos.docx
│   └── 1. Informe_Base_Datos.pdf
├── 2. Anexos/
│   ├── 2.1 Project_Charter.docx
│   └── 2.2 Diccionario_datos.xlsx (30 entidades oficiales)
├── 3. Scripts/
│   ├── Arquitectura_Global_FarmaBarrio_HD.png (3800x2400 px)
│   ├── 3.1 Postgresql/ (DDL, DML 11 tablas, Fragmentacion LIST)
│   ├── 3.2 Oracle/ (DDL, DML 10 tablas, Fragmentacion RANGE)
│   ├── 3.3 MongoDB/ (4 colecciones canonicas, 500 docs, indices, replica set)
│   └── 3.4 Cassandra/ (3 tablas canonicas, 500 registros, SAI, UDFs, ring RF=3)
├── 4. Backups/
│   ├── farmabarrio_full.backup (PostgreSQL)
│   ├── farmabarrio_oracle_backup.sql & farmabarrio_oracle_full.dmp (Oracle XE)
│   ├── dump_mongodb/farmabarrio_mongo/ (4 colecciones BSON + JSON)
│   ├── snapshot_cassandra/ (3 tablas CSV + schema.cql)
│   ├── Verificar_Restauracion_Total.sql
│   └── Verificar_Restauracion_Total.ps1
├── 1. Informe_Base_Datos.docx
├── 1. Informe_Base_Datos.pdf
└── Arquitectura_Global_FarmaBarrio_HD.png
```
