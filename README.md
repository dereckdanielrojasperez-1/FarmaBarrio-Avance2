# FarmaBarrio — Red Colaborativa de Farmacias Independientes del Perú
### Proyecto Final y Sustentación (Semana 17) | Universidad Tecnológica del Perú (UTP)
**Curso:** Base de Datos II (Sección 41483)  
**Docente:** Mag. José Bustamante  
**Equipo:** Grupo 2 (Objetivo de Calificación: 20/20)

---

## 👥 Integrantes del Grupo y Roles Oficiales
| N° | Apellidos y Nombres | Rol Técnico Especializado | Asignación de Entidades |
|---|---|---|---|
| 1 | **Quiñones Diego, Maykel Piero** | Líder / Arquitecto de Datos Global | Arquitectura Global + PostgreSQL Catálogo (1..7) |
| 2 | **Wong Villanueva, Leonardo Josué** | Especialista PostgreSQL / Fragmentación | PostgreSQL Retail & Fragmentación (8..12) + Oracle Compras B2B (13, 14) |
| 3 | **Garcia Espejo, Nicole Andrea** | Especialista Oracle XE / PL-SQL & RBAC | Oracle Finanzas B2B, Tributario & RBAC (15..21) |
| 4 | **Matencio Paucar, Jorge Fabian** | Especialista NoSQL / MongoDB & Cassandra | Oracle Fragmentación (22, 23) + MongoDB NoSQL (24..27) + Cassandra (28) |
| 5 | **Rojas Pérez, Dereck Daniel** | Especialista Big Data / Hadoop HDFS & Backups | Cassandra Series Temporales (29, 30) + Hadoop HDFS Data Lake (31..35) |

---

## 🏛️ Topología de Arquitectura Multi-Motor (35 Entidades en Total)
El ecosistema implementa la regla formal UTP de **7 entidades por participante** ($5 \times 7 = 35$ entidades maestras):
1. **PostgreSQL 18 (12 Entidades):** Transaccional Retail B2C con fragmentación horizontal `PARTITION BY LIST` por `farmacia_id` (Norte, Este, Sur, Otros) en esquema `fb_frag`.
2. **Oracle Database XE 21c (11 Entidades):** Módulo Financiero, Compras B2B y Libros Contables con fragmentación horizontal `PARTITION BY RANGE` por `fecha_compra` en esquema `FARMABARRIO_OWNER`.
3. **MongoDB 9.0 (4 Colecciones):** Marketplace B2C, Catálogo desnormalizado con validación `$jsonSchema`, índices analíticos y clúster Replica Set `rs0` (1 Primario + 2 Secundarios).
4. **Apache Cassandra 5.0 (3 Tablas):** Series de tiempo de telemetría de precios y demanda, clúster P2P sin líder (RF=3), índices Storage-Attached (SAI) y UDFs en Java.
5. **Apache Hadoop 3.3+ (5 Tablas Externas Hive):** Big Data Lake empresarial sobre HDFS y YARN con zonas Bronze, Silver y Gold para análisis masivo distribuido.

---

## 📁 Estructura Oficial del Repositorio (Canvas UTP)
```text
BASE DE DATOS 2/
├── 1. Informe_Base_Datos.docx      # Informe técnico oficial en formato Word
├── 1. Informe_Base_Datos.pdf       # Informe técnico oficial compilado a PDF (56 páginas)
├── Sustentacion_FarmaBarrio_Grupo2.pptx # Diapositivas de sustentación oral (12 láminas 16:9)
├── 2. Anexos/
│   ├── 2.1 Project_Charter.docx    # Documento de constitución formal del proyecto
│   └── 2.2 Diccionario_datos.xlsx  # Catálogo oficial de las 35 entidades (Hojas: Hoja1, PostgreSQL, Oracle, MongoDB, Cassandra, Hadoop)
├── 3. Scripts/
│   ├── Arquitectura_Global_FarmaBarrio_HD.png # Diagrama maestro Ultra HD (3800x2400 px, 300 DPI)
│   ├── 3.1 Postgresql/             # Scripts numerados 1..7, DiagramaLogico.jpg y Fragmentación LIST
│   ├── 3.2 Oracle/                 # Scripts numerados 1..7, DiagramaLogico.jpg y Fragmentación RANGE
│   ├── 3.3 MongoDB/                # Scripts numerados 1..7, DiagramaLogico.jpg y Réplica Set rs0
│   ├── 3.4 Cassandra/              # Scripts numerados 1..7, DiagramaLogico.jpg y Clúster RF=3
│   └── 3.5 Hadoop/                 # Hive External Tables (31..35), Ingestión Data Lake y PySpark
└── 4. Backups/                     # Respaldos físicos (farmabarrio_full.backup, Oracle DMP/SQL, MongoDB dump, Cassandra snapshots y verificación)
```

---

## 🚀 Entregables y Enlaces de Acceso
- **Repositorio GitHub:** [dereckdanielrojasperez-1/FarmaBarrio-Avance2](https://github.com/dereckdanielrojasperez-1/FarmaBarrio-Avance2)
- **Informe Técnico PDF:** [1. Informe_Base_Datos.pdf](file:///BASE%20DE%20DATOS%202/1.%20Informe_Base_Datos.pdf)
- **Diccionario de Datos Excel:** [2.2 Diccionario_datos.xlsx](file:///BASE%20DE%20DATOS%202/2.%20Anexos/2.2%20Diccionario_datos.xlsx)
- **Diapositivas de Sustentación:** [Sustentacion_FarmaBarrio_Grupo2.pptx](file:///Sustentacion_FarmaBarrio_Grupo2.pptx)
