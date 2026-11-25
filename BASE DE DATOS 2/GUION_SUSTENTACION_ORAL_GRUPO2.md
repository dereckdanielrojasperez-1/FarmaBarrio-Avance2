# 🎤 GUION DE SUSTENTACIÓN ORAL, LIVE DEMO Y BANCO DE DEFENSA TÉCNICA (20/20)
**Proyecto:** FarmaBarrio — Red Colaborativa de Farmacias Independientes del Perú  
**Curso:** Base de Datos II (Sección 41483) | **Docente:** Mag. José Bustamante  
**Duración Total de Exposición:** 7 a 9 Minutos (+ 2 Minutos de Demostración Práctica)  
**Calificación Objetivo:** 20 / 20 (Evaluación Final)

---

## 👥 ROL Y CRONOGRAMA DE INTERVENCIÓN POR INTEGRANTE

| Minuto | Integrante Responsable | Rol Técnico | Tema Asignado | Láminas PPTX |
|---|---|---|---|---|
| **00:00 - 01:45** | **Quiñones Diego, Maykel Piero** | Líder / Arquitecto de Datos Global | Introducción, Problemática & Arquitectura Global HD | Diapositivas 1, 2, 3, 4 |
| **01:45 - 03:15** | **Wong Villanueva, Leonardo Josué** | Especialista PostgreSQL / Fragmentación | Capa Relacional PostgreSQL 18 & Fragmentación LIST | Diapositivas 5, 9 |
| **03:15 - 04:45** | **Garcia Espejo, Nicole Andrea** | Especialista Oracle XE / PL-SQL & RBAC | Capa Empresarial Oracle XE 21c, RANGE & Seguridad RBAC | Diapositivas 5, 9, 10 |
| **04:45 - 06:15** | **Matencio Paucar, Jorge Fabian** | Especialista NoSQL / MongoDB & Cassandra | Capa NoSQL (MongoDB rs0 & Cassandra RF=3 SAI/UDF) | Diapositivas 6, 7 |
| **06:15 - 07:45** | **Rojas Pérez, Dereck Daniel** | Especialista Big Data / Hadoop & Backups | Capa Big Data Lake Hadoop (5 Tablas Hive) & Backups Reales | Diapositivas 8, 10 |
| **07:45 - 08:30** | **Maykel Quiñones & Equipo** | Todo el Grupo | Conclusiones, Repositorio GitHub & Transición a Demo | Diapositiva 12 |
| **08:30 - 10:30** | **Live Demo (2 min)** | Todo el Grupo | Ejecución de los 5 Comandos Reales (`DEMO_EN_VIVO.bat`) | Diapositiva 11 |

---

# 📜 GUION DETALLADO PALABRA POR PALABRA (100% ALINEADO A LOS SCRIPTS REALES)

### 🗣️ BLOQUE 1: INTRODUCCIÓN Y ARQUITECTURA GLOBAL (00:00 - 01:45)
**Expositor: Maykel Piero Quiñones Diego (Líder / Arquitecto de Datos Global)**

> *"Buenos días, estimado docente Mag. José Bustamante y compañeros presentes. Somos el Grupo 2 y hoy sustentamos la versión final de nuestro proyecto: **FarmaBarrio: Red Colaborativa de Farmacias Independientes del Perú**.*
>
> *En el Perú, las boticas independientes sufren desventaja frente a las grandes cadenas farmacéuticas por falta de compras corporativas consolidadas, quiebres de inventario y nula visibilidad digital. FarmaBarrio resuelve esto integrando un ecosistema federado que conecta el stock barrial con el consumidor final y consolida compras B2B ante laboratorios.*
>
> *Para lograrlo, implementamos una **Arquitectura Multi-Motor Distribuida** con **36 entidades reales** distribuidas estratégicamente (cumpliendo el mínimo de 7 por cada uno de los 5 integrantes):*
> 1. ***PostgreSQL 18 (12 entidades):** 11 tablas transaccionales retail + 1 tabla particionada (`fb_frag.venta_particionada`).*
> 2. ***Oracle Database XE 21c (12 entidades):** 11 tablas base (incluyendo la tabla puente `medicamento_ref`) + 1 particionada (`compra_particionada`).*
> 3. ***MongoDB (4 colecciones):** `ventas_historicas`, `resenas`, `auditoria_eventos`, `logs_marketplace`.*
> 4. ***Apache Cassandra 5.0 (3 tablas):** `ventas_periodo`, `demanda_medicamento_dia`, `precios_historicos`.*
> 5. ***Apache Hadoop 3.3+ / Hive (5 tablas externas):** Data Lake analítico con tablas `hdp_*`.*
>
> *Doy pase a Leonardo Wong para detallar PostgreSQL."*

---

### 🗣️ BLOQUE 2: POSTGRESQL & FRAGMENTACIÓN LIST (01:45 - 03:15)
**Expositor: Leonardo Josué Wong Villanueva (Especialista PostgreSQL / Fragmentación)**

> *"Gracias, Maykel. En **PostgreSQL 18** gestionamos la capa retail B2C. Implementamos **Fragmentación Horizontal por LIST** en el esquema `fb_frag` sobre la tabla `venta_particionada` usando `farmacia_id` como clave:*
> - *`vta_lima_norte` (IDs 101, 102, 105)*
> - *`vta_lima_este` (IDs 103, 106, 108)*
> - *`vta_lima_sur` (IDs 104, 107, 109)*
> - *`vta_otros` (DEFAULT).*
>
> *Esto activa el **Partition Pruning**: las consultas por farmacia leen únicamente su segmento físico, evitando escanear toda la tabla.*
> *Asimismo, programamos funciones y procedimientos PL/pgSQL como `fn_total_ventas_farmacia`, `sp_registrar_entrada_inventario`, `fn_calcular_stock_minimo`, `sp_actualizar_precio_medicamento` y `fn_rotacion_medicamento`, junto con el trigger de auditoría `trg_auditoria_precio` y manejo transaccional con `SAVEPOINT` en `sp_registrar_venta_con_savepoint`.*
>
> *Doy pase a Nicole Garcia para la capa Oracle XE."*

---

### 🗣️ BLOQUE 3: ORACLE DATABASE XE 21c, RANGE & SEGURIDAD RBAC (03:15 - 04:45)
**Expositora: Nicole Andrea Garcia Espejo (Especialista Oracle XE / PL-SQL & RBAC)**

> *"Gracias, Leonardo. En **Oracle Database XE 21c** gestionamos las compras mayoristas B2B, pagos y contabilidad bajo 11 tablas base (incluyendo la tabla espejo `medicamento_ref` para integridad referencial distribuida) más `compra_particionada`.*
>
> *Aplicamos **Fragmentación Horizontal por RANGE** sobre `compra_particionada` por `fecha_compra` en tres segmentos: `P_2024`, `P_2025` y `P_FUTURO` (`MAXVALUE`), facilitando el archivado contable anual SUNAT.*
>
> *En lógica de negocio PL/SQL implementamos procedimientos y funciones reales como `sp_actualizar_compras_vencidas`, `fn_total_compras_proveedor`, `sp_registrar_pago_proveedor` y `fn_saldo_pendiente_proveedor`. En seguridad RBAC, aplicamos el Principio de Mínimo Privilegio creando los usuarios `farma_dba`, `farma_app` y `farma_readonly`, verificando con bloque controlado que `farma_readonly` recibe `ORA-01031: insufficient privileges` al intentar un `DELETE` o `INSERT`.*
>
> *Doy pase a Jorge Matencio para la capa NoSQL."*

---

### 🗣️ BLOQUE 4: CAPA NOSQL: MONGODB & APACHE CASSANDRA (04:45 - 06:15)
**Expositor: Jorge Fabian Matencio Paucar (Especialista NoSQL / MongoDB y Cassandra)**

> *"Gracias, Nicole. En **MongoDB**, creamos `farmabarrio_mongo` con 4 colecciones validadas mediante `$jsonSchema`, 800 documentos BSON válidos (500 en `ventas_historicas` más 300 en reseñas, auditoría y logs) e índices únicos, compuestos y multikey. Configuramos un **Replica Set `rs0` de 3 nodos** (`mongo-node1`, `mongo-node2`, `mongo-node3`) sincronizados vía `oplog`.*
>
> *En **Apache Cassandra 5.0**, diseñamos el keyspace `farmabarrio` con `NetworkTopologyStrategy` y **Factor de Replicación 3 (RF=3)**. Almacenamos 800 registros de series de tiempo (500 en `ventas_periodo`, 150 en `demanda_medicamento_dia` y 150 en `precios_historicos`). La clave primaria compuesta `(farmacia_id), anio_mes, venta_id` permite **acceso directo por Partition Key sin escaneo global del clúster**. Adicionalmente implementamos 5 índices SAI y funciones UDF/UDA en Java (`fn_total_con_igv`, `fn_clasificar_demanda`, `fn_margen_pct`).*
>
> *Doy pase a Dereck Rojas Pérez para Big Data y Respaldos."*

---

### 🗣️ BLOQUE 5: BIG DATA LAKE HADOOP & RESPALDOS REALES (06:15 - 07:45)
**Expositor: Dereck Daniel Rojas Pérez (Especialista Big Data / Hadoop HDFS y Backups)**

> *"Gracias, Jorge. Para analítica masiva sin degradar las bases operacionales, implementamos un **Data Lake sobre Apache Hadoop 3.3+ y Hive** organizado en zonas Bronze, Silver (Parquet/ORC) y Gold, con 5 tablas externas analíticas (`hdp_analitica_ventas_consolidadas`, `hdp_auditoria_seguridad_global`, `hdp_comportamiento_precios_tiempo`, `hdp_demanda_insatisfecha_regional` y `hdp_evaluacion_proveedores_b2b`).*
>
> *En **Respaldos y Backups**, eliminamos todo archivo simulado y reconstruimos respaldos lógicos ejecutables 100% reales: `farmabarrio_postgresql_backup.sql` ordenado secuencialmente, `farmabarrio_oracle_backup.sql`, exportaciones JSON integrales de MongoDB (`800` documentos) y snapshots CSV reales de Cassandra (`800` filas totales), auditados con `Verificar_Restauracion_Total.sql` y `.ps1`.*
>
> *Doy pase a Maykel Quiñones para el cierre y la demostración en vivo."*

---

# ⚡ LIVE DEMO EN VIVO (2 MINUTOS - COMANDOS REALES)

1. **PostgreSQL (Partition Pruning):**
```sql
EXPLAIN ANALYZE SELECT * FROM fb_frag.venta_particionada WHERE farmacia_id = 101;
```
2. **Oracle XE (Función PL/SQL Real):**
```sql
SELECT fn_total_compras_proveedor(1, DATE '2024-01-01', DATE '2026-12-31') AS total_comprado FROM DUAL;
```
3. **MongoDB (Pipeline Analítico):**
```javascript
use farmabarrio_mongo;
db.ventas_historicas.aggregate([
  { $match: { estado: "completada" } },
  { $group: { _id: "$canal_venta", total_ingresos: { $sum: "$total_venta" }, ordenes: { $sum: 1 } } }
]);
```
4. **Cassandra (Acceso Directo por Partition Key):**
```sql
USE farmabarrio;
SELECT farmacia_id, anio_mes, venta_id, codigo_venta, monto_total FROM farmabarrio.ventas_periodo WHERE farmacia_id = 10 AND anio_mes = '2026-01' LIMIT 5;
```
5. **Seguridad RBAC (Permission Denied Real):**
```sql
SET ROLE farma_readonly;
INSERT INTO public.venta (codigo_venta, cliente_id, farmacia_id, total, estado) VALUES ('FAIL-01', 1, 1, 99.90, 'PENDIENTE');
-- Arroja: ERROR: permission denied for table venta
RESET ROLE;
```
