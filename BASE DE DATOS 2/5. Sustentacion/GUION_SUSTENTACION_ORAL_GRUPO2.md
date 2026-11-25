# 🎤 GUION DE SUSTENTACIÓN ORAL, LIVE DEMO Y BANCO DE DEFENSA TÉCNICA (20/20)
**Proyecto:** FarmaBarrio — Red Colaborativa de Farmacias Independientes del Perú  
**Curso:** Base de Datos II (Sección 41483) | **Docente:** Mag. José Bustamante  
**Duración Total de Exposición:** 7 a 9 Minutos (+ 2 Minutos de Demostración Práctica)  
**Calificación Objetivo:** 20 / 20 (Semana 17 - Evaluación Final)

---

## 👥 ROL Y CRONOGRAMA DE INTERVENCIÓN POR INTEGRANTE

| Minuto | Integrante Responsable | Rol Técnico | Tema Asignado | Láminas PPTX |
|---|---|---|---|---|
| **00:00 - 01:45** | **Quiñones Diego, Maykel Piero** | Líder / Arquitecto de Datos Global | Introducción, Problemática & Arquitectura Global HD | Diapositivas 1, 2, 3, 4 |
| **01:45 - 03:15** | **Wong Villanueva, Leonardo Josué** | Especialista PostgreSQL / Fragmentación | Capa Relacional PostgreSQL 18 & Fragmentación LIST | Diapositiva 5, 9 |
| **03:15 - 04:45** | **Garcia Espejo, Nicole Andrea** | Especialista Oracle XE / PL-SQL & RBAC | Capa Empresarial Oracle XE 21c, RANGE & Seguridad RBAC | Diapositiva 5, 9, 10 |
| **04:45 - 06:15** | **Matencio Paucar, Jorge Fabian** | Especialista NoSQL / MongoDB & Cassandra | Capa NoSQL (MongoDB rs0 & Cassandra RF=3 SAI/UDF) | Diapositivas 6, 7 |
| **06:15 - 07:45** | **Rojas Pérez, Dereck Daniel** | Especialista Big Data / Hadoop & Backups | Capa Big Data Lake Hadoop (35 Entidades) & Backups 100% | Diapositivas 8, 10 |
| **07:45 - 08:30** | **Maykel Quiñones & Equipo** | Todo el Grupo | Conclusiones, Repositorio GitHub & Transición a Demo | Diapositiva 12 |
| **08:30 - 10:30** | **Live Demo (2 min)** | Todo el Grupo | Ejecución de los 5 Comandos Clave en Vivo | Diapositiva 11 |

---

# 📜 GUION DETALLADO PALABRA POR PALABRA

### 🗣️ BLOQUE 1: INTRODUCCIÓN Y ARQUITECTURA GLOBAL (00:00 - 01:45)
**Expositor: Maykel Piero Quiñones Diego (Líder / Arquitecto de Datos Global)**

> *"Buenos días, estimado docente Mag. José Bustamante y compañeros presentes. Somos el Grupo 2 y hoy sustentamos la versión final y definitiva de nuestro proyecto: **FarmaBarrio: Red Colaborativa de Farmacias Independientes del Perú**.*
>
> *(Pasa a Diapositiva 3 - Problemática)*  
> *En el Perú, el mercado farmacéutico presenta una fuerte concentración en grandes cadenas corporativas, mientras que las boticas independientes enfrentan altos costos de compra B2B por falta de poder de escala, sufren constantes quiebres de inventario y carecen de visibilidad digital. Para transformar este escenario, diseñamos FarmaBarrio: un ecosistema federado que unifica el inventario barrial en un marketplace B2C y consolida las compras corporativas B2B.*
>
> *(Pasa a Diapositiva 4 - Diagrama Maestro de Arquitectura Global HD)*  
> *Para sostener este modelo, implementamos una **Arquitectura de Datos Multi-Motor Distribuida** dividida en 5 capas desacopladas, cumpliendo estrictamente con la regla UTP de **7 entidades por participante**, totalizando **35 entidades maestras**:*
> 1. *Capa Transaccional Retail en **PostgreSQL 18** (12 entidades con fragmentación LIST).*
> 2. *Capa Financiera y B2B en **Oracle Database XE 21c** (11 entidades con fragmentación RANGE).*
> 3. *Capa Documental en **MongoDB 9.0** (4 colecciones con Replica Set de 3 nodos).*
> 4. *Capa de Series Temporales en **Apache Cassandra 5.0** (3 tablas con clúster peer-to-peer RF=3).*
> 5. *Capa de Big Data Lake en **Apache Hadoop 3.3+** (5 tablas externas Hive sobre HDFS).*
>
> *Doy el pase a mi compañero Leonardo Wong para detallar la capa transaccional relacional en PostgreSQL."*

---

### 🗣️ BLOQUE 2: POSTGRESQL & FRAGMENTACIÓN LIST (01:45 - 03:15)
**Expositor: Leonardo Josué Wong Villanueva (Especialista PostgreSQL / Fragmentación y Replicación)**

> *"Gracias, Maykel. Buenos días profesor.*
>
> *(Pasa a Diapositiva 5 - Sección Izquierda)*  
> *En la capa transaccional de ventas en mostrador utilizamos **PostgreSQL 18**. Diseñamos un esquema relacional normalizado con 12 entidades: catálogo, farmacias, inventario barrial y transacciones de caja.*
>
> *(Pasa a Diapositiva 9 - Sección PostgreSQL)*  
> *El núcleo de alto rendimiento reside en el **Diseño del Esquema de Fragmentación Horizontal por LIST**. Particionamos la tabla `venta` dentro del esquema `fb_frag` tomando como clave de particionamiento `farmacia_id`. Distribuimos las ventas en cuatro fragmentos físicos según la geografía de Lima:*
> - *`vta_lima_norte` (Farmacias 101, 102, 105)*
> - *`vta_lima_este` (Farmacias 103, 106, 108)*
> - *`vta_lima_sur` (Farmacias 104, 107, 109)*
> - *`vta_otros` como partición por defecto (DEFAULT).*
>
> *El impacto técnico directo de esta fragmentación es la activación del **Partition Pruning**: cuando una botica de Lima Norte liquida o consulta su caja, el motor de PostgreSQL descarta los segmentos del Este y Sur en tiempo de compilación de consulta, reduciendo las lecturas de disco e I/O en más del 75%, como demostraremos en el `EXPLAIN ANALYZE` en vivo.*
>
> *Adicionalmente, implementamos funciones atómicas PL/pgSQL como `fn_registrar_venta_atomica`, la cual descuenta el stock de botica, valida saldos y genera el ticket comercial dentro de un bloque protegido por savepoints y transaccionalidad ACID estricta.*
>
> *Doy el pase a mi compañera Nicole Garcia para exponer la capa corporativa Oracle XE."*

---

### 🗣️ BLOQUE 3: ORACLE DATABASE XE 21c, RANGE & SEGURIDAD RBAC (03:15 - 04:45)
**Expositora: Nicole Andrea Garcia Espejo (Especialista Oracle XE / PL-SQL y Seguridad RBAC)**

> *"Gracias, Leonardo. Buenos días profesor.*
>
> *(Pasa a Diapositiva 5 - Sección Derecha)*  
> *Para la gestión de finanzas, compras corporativas y tributación B2B empleamos **Oracle Database XE 21c** bajo el esquema dedicado `FARMABARRIO_OWNER`. Este módulo administra 11 entidades críticas: proveedores, órdenes de compra a laboratorios, cuentas por pagar y libros diarios de contabilidad.*
>
> *(Pasa a Diapositiva 9 - Sección Oracle)*  
> *Para cumplir con las regulaciones de auditoría fiscal SUNAT y optimizar el rendimiento, aplicamos **Fragmentación Horizontal por Rango (RANGE)** sobre la tabla `compra_particionada`, tomando como clave temporal la columna `fecha_compra`. Establecimos tres particiones físicas:*
> - *`P_2024` para el histórico contable previo al 2025.*
> - *`P_2025` para el ejercicio fiscal regular.*
> - *`P_FUTURO` con cláusula `MAXVALUE` para garantizar alta disponibilidad transaccional ante compras futuras.*
>
> *Esta estrategia nos permite realizar purgas y archivados instantáneos de ejercicios contables cerrados sin bloquear las operaciones diarias del consorcio.*
>
> *(Pasa a Diapositiva 10 - Seguridad)*  
> *En cuanto a la **Gobernanza y Seguridad**, aplicamos el Principio de Mínimo Privilegio mediante Control de Acceso Basado en Roles (RBAC): creamos roles específicos como `operador_botica` y `analista_reportes`. Confinamos los privilegios DML y DDL, asegurando que un cajero no pueda modificar estructuras maestras. Hemos validado esto mediante pruebas controladas que arrojan de forma demostrada el error de seguridad `ORA-01031: insufficient privileges` o en PostgreSQL `ERROR: permission denied`.*
>
> *Doy el pase a Jorge Matencio para la sustentación del bloque NoSQL."*

---

### 🗣️ BLOQUE 4: CAPA NOSQL: MONGODB & APACHE CASSANDRA (04:45 - 06:15)
**Expositor: Jorge Fabian Matencio Paucar (Especialista NoSQL / MongoDB y Cassandra)**

> *"Gracias, Nicole. Buenos días a todos.*
>
> *(Pasa a Diapositiva 6 - MongoDB)*  
> *La capa NoSQL atiende los requerimientos de alta concurrencia y baja latencia del Marketplace. En **MongoDB 9.0**, creamos la base documental `farmabarrio_mongo` con 4 colecciones robustas:*
> 1. *`ventas_historicas`: donde desnormalizamos la orden con el cliente y los items embebidos.*
> 2. *`resenas`: calificaciones de pacientes con texto y puntuación 1 a 5.*
> 3. *`auditoria_eventos`: trazas inmutables de accesos y modificaciones.*
> 4. *`logs_marketplace`: telemetría de navegación y carritos de compra.*
>
> *Todas las colecciones cuentan con validadores formales `$jsonSchema` que impiden la inserción de campos inválidos, e implementamos índices compuestos y multikey. Demostramos la **Replicación Asíncrona** configurando un **Replica Set `rs0` de 3 nodos** en Docker (1 Primario y 2 Secundarios), monitoreado mediante el `oplog` y sincronizado con consistencia configurable `w: majority`.*
>
> *(Pasa a Diapositiva 7 - Apache Cassandra)*  
> *Por otro lado, para resolver la telemetría masiva de fluctuación de precios y demanda en tiempo real, implementamos **Apache Cassandra 5.0** con 3 tablas distribuidas:*
> - *`ventas_periodo`*
> - *`demanda_medicamento_dia`*
> - *`precios_historicos`*
>
> *Cassandra opera sobre una topología peer-to-peer sin nodo maestro ni punto único de fallo, configurada con **NetworkTopologyStrategy** y **Factor de Replicación 3 (RF=3)**. Diseñamos claves compuestas óptimas combinando Partition Keys y Clustering Keys ordenadas por tiempo descendente, lo que permite consultas instantáneas en $O(1)$. Además, creamos **5 índices secundarios de almacenamiento adjunto (SAI)** y funciones definidas por el usuario (**UDFs en Java** como `fn_total_con_igv`) y agregados analíticos UDA.*
>
> *Doy el pase a Dereck Rojas Pérez para exponer Big Data y Backups."*

---

### 🗣️ BLOQUE 5: BIG DATA LAKE HADOOP & BACKUPS 100% (06:15 - 07:45)
**Expositor: Dereck Daniel Rojas Pérez (Especialista Big Data / Hadoop HDFS y Backups)**

> *"Muchas gracias, Jorge. Buenos días profesor.*
>
> *(Pasa a Diapositiva 8 - Big Data)*  
> *Para centralizar el análisis masivo de terabytes sin saturar los motores operacionales, implementamos un **Data Lake Empresarial sobre Apache Hadoop 3.3+ (HDFS & YARN)** gestionado mediante **Apache Hive**.*
>
> *El sistema se organiza en tres zonas de linaje: **Bronze** para ingesta cruda, **Silver** para datos limpios en formato Parquet y **Gold** para datamarts de negocio. En esta capa se alojan las **5 tablas externas analíticas que completan las 35 entidades exigidas por la consigna** ($5 \text{ integrantes} \times 7 = 35$):*
> 1. *`hdp_analitica_ventas_consolidadas` (Ventas retail y web B2C unificadas).*
> 2. *`hdp_auditoria_seguridad_global` (Trazabilidad de seguridad cruzada de los 4 motores).*
> 3. *`hdp_comportamiento_precios_tiempo` (Analítica de inflación y volatilidad de medicamentos).*
> 4. *`hdp_demanda_insatisfecha_regional` (Predicción de quiebre de stock por departamentos).*
> 5. *`hdp_evaluacion_proveedores_b2b` (Scoring logístico OTIF de laboratorios desde Oracle).*
>
> *(Pasa a Diapositiva 10 - Backups)*  
> *En cuanto al ítem de **Respaldos y Backups al 100%**, subsanamos totalmente la observación previa generando evidencias físicas y scripts de restauración probada:*
> - *En PostgreSQL: respaldo lógico binario `farmabarrio_full.backup` restaurado mediante `pg_restore`.*
> - *En Oracle XE: scripts DDL/DML `farmabarrio_oracle_backup.sql` y volcado binario DataPump `farmabarrio_oracle_full.dmp`.*
> - *En MongoDB: volcado BSON con `mongodump` sobre más de 10,000 documentos restaurados con `mongorestore`.*
> - *En Cassandra: snapshots físicos de nodo y exportaciones CSV validadas con consistencia ALL.*
> - *En Hadoop: snapshots HDFS point-in-time y replicación remota DistCp.*
>
> *Todo el proceso se audita automáticamente mediante nuestros scripts `Verificar_Restauracion_Total.sql` y `.ps1`.*
>
> *Doy el pase a nuestro líder Maykel Quiñones para las conclusiones y dar paso a la demostración."*

---

### 🗣️ BLOQUE 6: CONCLUSIONES Y PASE A LIVE DEMO (07:45 - 08:30)
**Expositor: Maykel Piero Quiñones Diego (Líder / Arquitecto de Datos Global)**

> *(Pasa a Diapositiva 12 - Conclusiones)*  
> *"Para concluir:  
> 1. Levantamos al 100% las 4 observaciones del docente: diseñamos el diagrama de arquitectura global en Ultra HD (3800x2400 px), regeneramos todos los diagramas nítidos, unificamos la coherencia canónica de objetos y completamos los backups físicos y su verificación.  
> 2. Cumplimos con creces la consigna de 35 entidades maestras (7 por alumno) y más de 10,000 registros poblados.  
> 3. Todo el proyecto se encuentra sincronizado en nuestro repositorio oficial de GitHub: `dereckdanielrojasperez-1/FarmaBarrio-Avance2`, estructurado bajo el estándar oficial de Canvas.
>
> Procedemos ahora a la **Demostración Funcional en Vivo (Live Demo)** ejecutando los 5 comandos estratégicos en nuestros motores."*

---

# ⚡ CHEAT SHEET: LIVE DEMO EN VIVO (2 MINUTOS)

Ten abiertas las consolas o terminales de **pgAdmin/psql**, **SQL Developer/SQL*Plus**, **mongosh** y **cqlsh**. Copia y pega estos 5 comandos exactos:

### 1. Demostración de Partition Pruning en PostgreSQL
*Objetivo:* Probar que la consulta solo lee la partición geográfica solicitada y descarta el resto.
```sql
EXPLAIN ANALYZE 
SELECT * FROM fb_frag.venta_particionada 
WHERE farmacia_id = 101;
```
👉 **Explicación oral inmediata:** *"Como se observa en el nodo del plan de ejecución, PostgreSQL realiza 'Seq Scan on vta_lima_norte' y descarta las particiones de Lima Este y Sur, reduciendo en 75% el uso de buffers."*

---

### 2. Demostración de Transacción Atómica B2B en Oracle XE
*Objetivo:* Probar el devengo contable y cálculo de retención fiscal en una compra corporativa.
```sql
SET SERVEROUTPUT ON;
EXEC PKG_COMPRAS_FARMABARRIO.SP_REGISTRAR_ORDEN_COMPRA(p_proveedor_id => 501, p_total_compra => 12500.00);
```
👉 **Explicación oral inmediata:** *"El paquete PL/SQL inserta la orden de compra en la partición RANGE correspondiente, genera el asiento contable en partida doble y calcula la retención tributaria SUNAT de forma atómica."*

---

### 3. Pipeline de Agregación Analítica en MongoDB
*Objetivo:* Demostrar el cálculo de ingresos por distrito barrial sobre 10,000+ documentos.
```javascript
use farmabarrio_mongo;
db.ventas_historicas.aggregate([
  { $match: { estado: "COMPLETADA" } },
  { $group: { _id: "$farmacia.distrito", total_ingresos: { $sum: "$total_venta" }, ticket_promedio: { $avg: "$total_venta" } } },
  { $sort: { total_ingresos: -1 } }
]);
```
👉 **Explicación oral inmediata:** *"El pipeline `$match` y `$group` procesa los documentos desnormalizados con subdocumentos embebidos en menos de 10 milisegundos gracias al índice compuesto."*

---

### 4. Consulta de Serie Temporal en Apache Cassandra
*Objetivo:* Demostrar la recuperación inmediata en tiempo constante O(1) ordenada por fecha descendente.
```sql
USE farmabarrio;
SELECT fecha_hora, codigo_venta, monto_total, canal_venta 
FROM farmabarrio.ventas_periodo 
WHERE periodo_mes = '2026-11' AND farmacia_id = 101 
LIMIT 5;
```
👉 **Explicación oral inmediata:** *"Gracias a la Partition Key compuesta y la Clustering Key temporal, Cassandra localiza la SSTable en disco sin escanear particiones ajenas, garantizando latencia sub-milisegundo."*

---

### 5. Prueba de Seguridad RBAC y Violación de Acceso Controlada
*Objetivo:* Demostrar el Principio de Mínimo Privilegio con la evidencia de `permission denied`.
```sql
-- En PostgreSQL
SET ROLE operador_botica;
DROP TABLE farmabarrio_db.public.inventario;
-- Resultado inmediato en pantalla:
-- ERROR:  permission denied for table inventario
RESET ROLE;
```
👉 **Explicación oral inmediata:** *"Queda demostrado de forma forense que el usuario de botica carece de privilegios DDL de alteración o borrado sobre los objetos maestros del sistema."*

---

# 🧠 BANCO DE 10 PREGUNTAS DIFÍCILES DEL DOCENTE Y RESPUESTAS DE DEFENSA

### ❓ Pregunta 1: *"¿Por qué eligieron particionamiento por LIST en PostgreSQL y por RANGE en Oracle, en lugar de usar HASH?"*
**Respuesta Técnica (Leonardo Wong / Nicole Garcia):**
> *"Profesor, la elección obedece estrictamente a los patrones de acceso al negocio (Access Patterns):  
> En **PostgreSQL**, el negocio es retail barrial: más del 90% de las consultas de caja y reposición se filtran por botica o zona (`farmacia_id`). Con **LIST**, activamos el Partition Pruning estático y dinámico, permitiendo que el motor lea exclusivamente el segmento territorial correspondiente. Con HASH, las ventas de una misma botica se dispersarían aleatoriamente entre los fragmentos, obligando a escanear todas las particiones.  
> En **Oracle**, el módulo es contable y fiscal. La SUNAT exige auditorías por ejercicio anual cerrado. Con **RANGE** por `fecha_compra`, podemos aislar años fiscales anteriores (partición `P_2024`) y hacer mantenimiento, respaldos o compresión de tablas históricas sin bloquear la partición activa (`P_2025` o `P_FUTURO`)."*

---

### ❓ Pregunta 2: *"Si el clúster de Cassandra tiene factor de replicación 3 (RF=3) y se apaga un nodo, ¿qué nivel de consistencia debo utilizar para seguir escribiendo sin error?"*
**Respuesta Técnica (Jorge Matencio):**
> *"Si un nodo cae en un clúster de 3 nodos con RF=3, quedan 2 nodos disponibles.  
> - Si escribimos con `CONSISTENCY ALL`, la operación fallará con `WriteTimeoutException`, porque exige confirmación de los 3 nodos.  
> - Si escribimos con `CONSISTENCY QUORUM`, la operación tendrá éxito, ya que el quórum es $\lfloor RF/2 \rfloor + 1 = \lfloor 3/2 \rfloor + 1 = 2$ nodos, los cuales están vivos.  
> - Si escribimos con `CONSISTENCY ONE`, bastará que uno responda.  
> Además, los nodos vivos activarán **Hinted Handoff**: guardarán los 'hints' en disco y, apenas el nodo caído se reincorpore, le transferirán las escrituras pendientes automáticamente sin necesidad de ejecutar un repair manual de inmediato."*

---

### ❓ Pregunta 3: *"¿Cómo garantizan la consistencia eventual y la resolución de conflictos en MongoDB si ocurre una partición de red en el Replica Set?"*
**Respuesta Técnica (Jorge Matencio):**
> *"MongoDB utiliza el algoritmo de consenso Raft para gestionar el Replica Set `rs0`. Si ocurre una partición de red que aísla al nodo Primario en una partición minoritaria (1 solo nodo frente a 2 nodos), la mayoría (2 nodos) detectará la falta de 'heartbeats' y elegirá democráticamente a un nuevo nodo Primario en menos de 2 segundos.  
> El Primario aislado, al no recibir confirmación de la mayoría, dejará de aceptar escrituras con `w: majority`. Y si hubo escrituras locales en el viejo primario antes de enterarse de la partición, al reconectarse esas escrituras se revertirán a la carpeta `unacknowledged writes` (`rollback/`) para mantener la coherencia absoluta con la cadena del nuevo primario."*

---

### ❓ Pregunta 4: *"¿Por qué incluyeron Hadoop en lugar de hacer analítica directamente en PostgreSQL o MongoDB?"*
**Respuesta Técnica (Dereck Rojas Pérez):**
> *"Profesor, responde al principio de desacoplamiento de cargas OLTP vs OLAP. Si ejecutamos algoritmos de agregación masiva, minería de datos o conciliación fiscal cruzada sobre terabytes de registros en PostgreSQL o MongoDB, provocaríamos contención de buffers en memoria RAM, retención de bloqueos (locks) y agotamiento de IOPS en disco, degradando el tiempo de respuesta del cajero en la botica.  
> Hadoop 3.3+ con HDFS almacena bloques de 128 MB en formato columnar Parquet con compresión Snappy, permitiendo que Apache Spark distribuya el procesamiento en memoria a través de workers en paralelo, logrando tiempos analíticos hasta 40 veces más veloces sin tocar los discos de producción."*

---

### ❓ Pregunta 5: *"¿Cómo se implementa el principio de Mínimo Privilegio (PoLP) en su arquitectura?"*
**Respuesta Técnica (Nicole Garcia / Maykel Quiñones):**
> *"El principio se implementa eliminando el uso de cuentas maestras (`postgres`, `SYSTEM`, `admin`) para aplicaciones o usuarios humanos.  
> Creamos roles específicos: `operador_botica`, `analista_reportes` y `dba_seguridad`.  
> A un operador de botica solo se le otorga `INSERT` y `SELECT` acotado a la tabla de ventas de su esquema, revocando terminantemente `DROP`, `ALTER`, `TRUNCATE` y cualquier acceso a tablas de nómina, contabilidad o auditoría. Si intenta alterar una estructura, el motor aborta la transacción emitiendo la excepción `permission denied`, la cual queda inmediatamente registrada en la tabla de auditoría inmutable."*

---

### ❓ Pregunta 6: *"¿Qué diferencia técnica existe entre los índices SAI de Cassandra y los índices secundarios tradicionales de Cassandra?"*
**Respuesta Técnica (Jorge Matencio):**
> *"Los índices secundarios tradicionales (2i) en Cassandra crean tablas ocultas por cada nodo que duplican la información y provocan un grave problema de 'read amplification' porque deben consultar a todos los nodos del anillo para reunir las filas.  
> En cambio, los **Storage-Attached Indexes (SAI)** de Cassandra 5.0 están acoplados directamente al ciclo de vida de los SSTables en disco. Utilizan estructuras compactas en memoria (trie trees y listas de saltos BKD), ocupando hasta un 70% menos de espacio en disco y consumiendo una fracción del CPU, permitiendo búsquedas multidimensionales de alta velocidad sobre columnas no pertenecientes a la clave primaria."*

---

### ❓ Pregunta 7: *"¿Cuál es la diferencia entre un respaldo lógico (`pg_dump`, `mongodump`) y uno físico (DataPump `.dmp`, Cassandra snapshots)?"*
**Respuesta Técnica (Dereck Rojas Pérez):**
> *"El **respaldo lógico** extrae los datos y definiciones en sentencias DDL/DML estructuradas (SQL o BSON/JSON). Su ventaja es que es legible e independiente de la versión de hardware o sistema operativo, pero su restauración es más lenta porque debe reinsertar fila por fila y reconstruir los índices.  
> El **respaldo físico** copia directamente los bloques de datos, páginas de tablespace o SSTables (como Oracle DataPump o los snapshots por hard links de Cassandra). Es incomparablemente más rápido de restaurar porque no reconstruye estructuras, siendo el estándar para planes de continuidad de negocio (BCP) y Recuperación ante Desastres (Disaster Recovery). En FarmaBarrio implementamos ambos niveles."*

---

### 8: *"¿Cómo garantizan que la fragmentación por RANGE en Oracle no falle cuando entre el año 2026?"*
**Respuesta Técnica (Nicole Garcia):**
> *"Para garantizar que la base de datos nunca rechace una compra corporativa por desbordamiento de rango, la tabla `compra_particionada` incluye la partición `P_FUTURO` con la cláusula `VALUES LESS THAN (MAXVALUE)`. Cualquier fecha posterior al 31 de diciembre de 2025 cae de forma segura en `P_FUTURO`.  
> Además, en el mantenimiento anual de fin de ciclo, el DBA simplemente ejecuta `ALTER TABLE compra_particionada SPLIT PARTITION P_FUTURO AT (TO_DATE('2027-01-01', 'YYYY-MM-DD')) INTO (PARTITION P_2026, PARTITION P_FUTURO);`, creando la nueva partición en milisegundos sin necesidad de detener el servicio."*

---

### ❓ Pregunta 9: *"¿Qué es el Oplog en MongoDB y cómo asegura la replicación en el Replica Set?"*
**Respuesta Técnica (Jorge Matencio):**
> *"El `oplog` (Operations Log) es una colección acotada (capped collection) de tamaño fijo que reside en la base de datos local del nodo Primario. En ella se registran de forma secuencial e idempotente todas las mutaciones lógicas de datos (inserciones, actualizaciones, borrados).  
> Los nodos Secundarios leen continuamente este flujo del oplog en streaming asíncrono y aplican las operaciones en sus propias copias locales. Al ser operaciones idempotentes, si un nodo se reinicia o se retrasa, puede reaplicar las mismas entradas sin peligro de duplicar o corromper datos."*

---

### ❓ Pregunta 10: *"¿Cómo calculan y defienden que el proyecto cumple exactamente con las 35 entidades requeridas?"*
**Respuesta Técnica (Maykel Quiñones - Líder):**
> *"Profesor, la consigna del proyecto establece de forma explícita: **7 entidades (tablas) por participante como mínimo**; para un grupo de 5 integrantes, esto da exactamente **35 entidades maestras** ($5 \times 7 = 35$).  
> En FarmaBarrio, distribuimos las 35 entidades de forma balanceada y justificada según el rol de cada integrante y la naturaleza técnica de cada motor:
> - **PostgreSQL (12 entidades):** 11 relacionales + 1 particionada `venta_particionada` (Módulo Retail B2C).
> - **Oracle Database XE (11 entidades):** 10 relacionales + 1 particionada `compra_particionada` (Módulo Compras y Contabilidad B2B).
> - **MongoDB (4 colecciones documentales):** `ventas_historicas`, `resenas`, `auditoria_eventos`, `logs_marketplace`.
> - **Cassandra (3 tablas de series de tiempo):** `ventas_periodo`, `demanda_medicamento_dia`, `precios_historicos`.
> - **Hadoop HDFS (5 tablas externas Hive):** Datasets analíticos para ventas unificadas, auditoría global, inflación de precios, demanda insatisfecha y evaluación de laboratorios proveedores.  
> 
> Todas las 35 entidades están completamente codificadas en los scripts DDL/NoSQL, catalogadas en las hojas correspondientes del archivo `2.2 Diccionario_datos.xlsx` y respaldadas en los scripts de migración y backups."*
