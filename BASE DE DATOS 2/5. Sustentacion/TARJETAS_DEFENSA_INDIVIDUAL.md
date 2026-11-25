# 📇 TARJETAS DE DEFENSA INDIVIDUAL Y PREGUNTAS TÉCNICAS (GRUPO 2)
**Proyecto:** FarmaBarrio — Red Colaborativa de Farmacias Independientes del Perú  
**Curso:** Base de Datos II (Sección 41483) | **Docente:** Mag. José Bustamante  
**Objetivo:** Guía rápida de apoyo visual durante la sustentación oral (Semana 17-18)

---

## 🎯 INTEGRANTE 1: MAYKEL PIERO QUIÑONES DIEGO (LÍDER)
* **Rol Técnico:** Arquitecto de Datos Global / Modelado Políglota
* **Tiempo asignado:** 00:00 - 01:45 (1 min 45 s)
* **Láminas PPTX:** Diapositivas 1 (Carátula), 2 (Agenda), 3 (Caso de Negocio), 4 (Arquitectura Global HD) y 12 (Conclusiones).
* **Mensaje clave que debe transmitir:**
  * En el Perú, las boticas independientes quiebran o pierden margen frente a las grandes cadenas por falta de escala y aislamiento tecnológico.
  * FarmaBarrio integra 5 capas desacopladas (PostgreSQL, Oracle, MongoDB, Cassandra y Hadoop).
  * Se cumple formalmente la consigna UTP de **7 entidades por participante = 35 entidades totales**.
* **Preguntas probables del jurado y respuestas de 30 segundos:**
  1. *¿Por qué usar una arquitectura políglota y no un solo motor relacional grande?*  
     👉 *"Porque ningún motor individual optimiza a la vez transacciones ACID de alta integridad financiera, consultas de catálogos desnormalizados en JSON, escrituras masivas de series temporales a latencia sub-milisegundo y minería de Big Data en terabytes sin saturar el rendimiento de caja en las farmacias."*
  2. *¿Cómo garantizan que las 35 entidades estén justificadas y no sean relleno?*  
     👉 *"Cada entidad responde a un módulo específico del negocio: 12 en PostgreSQL para venta minorista y stock barrial, 11 en Oracle para compras corporativas B2B y tributación SUNAT, 4 colecciones en MongoDB para el marketplace B2C, 3 tablas en Cassandra para series de tiempo de precios, y 5 tablas analíticas en Hadoop Hive para el Data Lake corporativo."*

---

## 🎯 INTEGRANTE 2: LEONARDO JOSUÉ WONG VILLANUEVA
* **Rol Técnico:** Especialista PostgreSQL / Fragmentación y Replicación Física
* **Tiempo asignado:** 01:45 - 03:15 (1 min 30 s)
* **Láminas PPTX:** Diapositiva 5 (Capa Relacional) y Diapositiva 9 (Fragmentación LIST).
* **Mensaje clave que debe transmitir:**
  * PostgreSQL 18 maneja 12 entidades del módulo de mostrador/POS.
  * La fragmentación horizontal por LIST sobre `farmacia_id` divide las ventas en `vta_lima_norte`, `vta_lima_este`, `vta_lima_sur` y `vta_otros`.
  * Demostración con `EXPLAIN ANALYZE`: Partition Pruning ahorra más del 75% de lecturas de buffers de memoria.
* **Preguntas probables del jurado y respuestas de 30 segundos:**
  1. *¿Por qué eligieron LIST y no HASH o RANGE en PostgreSQL?*  
     👉 *"Porque el acceso al negocio en farmacias es estrictamente territorial: las boticas consultan y cierran caja por sucursal (`farmacia_id`). Con LIST, el optimizador activa el Partition Pruning estático y dinámico leyendo un único fragmento. Con HASH, las transacciones de una misma botica se dispersarían en todos los discos obligando a escanear todo el clúster."*
  2. *¿Qué pasa si una farmacia nueva no pertenece a Lima Norte, Este ni Sur?*  
     👉 *"La tabla cuenta con la partición `fb_frag.venta_otros` definida como `DEFAULT`. Ninguna venta se pierde jamás, asegurando alta disponibilidad transaccional."*

---

## 🎯 INTEGRANTE 3: NICOLE ANDREA GARCIA ESPEJO
* **Rol Técnico:** Especialista Oracle XE / PL-SQL y Seguridad RBAC
* **Tiempo asignado:** 03:15 - 04:45 (1 min 30 s)
* **Láminas PPTX:** Diapositiva 5 (Oracle XE), Diapositiva 9 (RANGE) y Diapositiva 10 (Seguridad RBAC).
* **Mensaje clave que debe transmitir:**
  * Oracle XE 21c administra 11 entidades corporativas B2B (proveedores, órdenes de compra a laboratorios, cuentas por pagar y contabilidad).
  * Fragmentación por RANGE sobre `fecha_compra`: particiones `P_2024`, `P_2025` y `P_FUTURO` (`MAXVALUE`).
  * Seguridad RBAC: Principio de Mínimo Privilegio. Usuarios de aplicación no tienen privilegios DDL.
* **Preguntas probables del jurado y respuestas de 30 segundos:**
  1. *¿Por qué usaron RANGE en Oracle y no en PostgreSQL?*  
     👉 *"Porque en Oracle administramos el ejercicio fiscal y contable exigido por SUNAT. Las auditorías tributarias se realizan por año fiscal cerrado. Al particionar por RANGE, podemos aislar el año 2024 para auditoría o archivado sin generar bloqueos en el año activo 2025."*
  2. *¿Cómo demostraron que la seguridad RBAC funciona?*  
     👉 *"Asignamos roles como `operador_botica` y ejecutamos pruebas controladas de alteración estructural (`DROP TABLE` o `ALTER`). El motor aborta inmediatamente lanzando la excepción `ORA-01031: insufficient privileges`, registrando el intento en la bitácora de auditoría."*

---

## 🎯 INTEGRANTE 4: JORGE FABIAN MATENCIO PAUCAR
* **Rol Técnico:** Especialista NoSQL / MongoDB y Cassandra
* **Tiempo asignado:** 04:45 - 06:15 (1 min 30 s)
* **Láminas PPTX:** Diapositiva 6 (MongoDB 9.0) y Diapositiva 7 (Apache Cassandra 5.0).
* **Mensaje clave que debe transmitir:**
  * MongoDB gestiona 4 colecciones con `$jsonSchema`: `ventas_historicas`, `resenas`, `auditoria_eventos` y `logs_marketplace`.
  * Replica Set `rs0` de 3 nodos en Docker con consistencia configurable `w: majority`.
  * Cassandra 5.0 administra 3 tablas de series temporales en arquitectura peer-to-peer con Factor de Replicación 3 (RF=3) e índices SAI de alto rendimiento.
* **Preguntas probables del jurado y respuestas de 30 segundos:**
  1. *¿Cuál es la diferencia entre el modelo CAP de MongoDB y Cassandra?*  
     👉 *"MongoDB prioriza la Consistencia y Tolerancia a Particiones (CP) mediante un Primario único que serializa escrituras por Raft; si el primario cae, hay una ventana de 2 segundos de elección. Cassandra es un sistema AP (Disponibilidad y Tolerancia a Particiones) basado en Dynamo: no existe maestro, todos los nodos reciben escrituras y la consistencia es ajustable (QUORUM, ONE, ALL) con replicación entre pares."*
  2. *¿Qué ventaja ofrecen los índices SAI sobre los secundarios tradicionales en Cassandra?*  
     👉 *"Los Storage-Attached Indexes (SAI) están acoplados directamente al ciclo de vida de los SSTables en disco. Ocupan hasta 70% menos espacio y eliminan la amplificación de lectura, permitiendo búsquedas rápidas sobre columnas que no son clave de partición."*

---

## 🎯 INTEGRANTE 5: DERECK DANIEL ROJAS PÉREZ
* **Rol Técnico:** Especialista Big Data / Hadoop HDFS y Backups
* **Tiempo asignado:** 06:15 - 07:45 (1 min 30 s)
* **Láminas PPTX:** Diapositiva 8 (Big Data Lake Hadoop) y Diapositiva 10 (Estrategia de Backups 100%).
* **Mensaje clave que debe transmitir:**
  * Apache Hadoop 3.3+ (HDFS & YARN) centraliza el Data Lake corporativo en 3 zonas (Bronze, Silver y Gold).
  * Alberga las 5 tablas analíticas externas Hive que completan las 35 entidades requeridas.
  * Estrategia de backups al 100% probada: scripts de validación integral (`Verificar_Restauracion_Total.sql` y `.ps1`) en los 4 motores.
* **Preguntas probables del jurado y respuestas de 30 segundos:**
  1. *¿Qué diferencia hay entre NameNode y DataNode en HDFS?*  
     👉 *"El NameNode es el maestro que gestiona el árbol de directorios y los metadatos de los bloques en memoria RAM. Los DataNodes son los workers distribuidos que almacenan los bloques físicos de 128 MB con factor de replicación 3 en sus discos locales."*
  2. *¿Por qué tienen respaldos lógicos y respaldos físicos?*  
     👉 *"El respaldo lógico (`.sql`, BSON) garantiza portabilidad e independencia de plataforma para auditorías externas; el respaldo físico (volcados DataPump y snapshots por hard-links de Cassandra) asegura una restauración casi instantánea ante desastres de hardware (RTO cercano a cero)."*
