# 🪪 TARJETAS DE DEFENSA INDIVIDUAL — GRUPO 2 (FARMABARRIO)

## 1. Quiñones Diego, Maykel Piero (Líder / Arquitectura Global)
- **Objeto Propio en PostgreSQL:** `fn_total_ventas_farmacia(p_farmacia_id, p_fecha_inicio, p_fecha_fin)` y `sp_registrar_venta_con_savepoint`
- **Objeto Propio en MongoDB:** Índice único `idx_codigo_venta_unique` en `ventas_historicas`
- **Objeto Propio en Cassandra:** Índice SAI `idx_ventas_canal` y UDF `fn_total_con_igv`
- **Pregunta clave:** *"¿Cómo justificas 5 motores?"* -> Desacoplamiento por patrón de acceso: ACID transaccional (PostgreSQL/Oracle), flexibilidad documental (MongoDB), series de tiempo de alta escritura (Cassandra) y analítica OLAP masiva (Hadoop).

## 2. Wong Villanueva, Leonardo Josué (PostgreSQL / Fragmentación)
- **Objeto Propio en PostgreSQL:** `sp_registrar_entrada_inventario`, `trg_auditoria_precio` y esquema `fb_frag.venta_particionada` (LIST por `farmacia_id`)
- **Objeto Propio en MongoDB:** Índice compuesto `idx_ventas_farmacia_fecha`
- **Objeto Propio en Cassandra:** Índice SAI `idx_ventas_estado` y UDF `fn_clasificar_demanda`
- **Pregunta clave:** *"¿Por qué LIST y no HASH?"* -> Porque las consultas barriales filtran por `farmacia_id`. LIST habilita Partition Pruning geográfico, mientras HASH dispersaría una misma farmacia entre múltiples particiones.

## 3. Garcia Espejo, Nicole Andrea (Oracle XE / PL-SQL & RBAC)
- **Objeto Propio en PostgreSQL:** `fn_calcular_stock_minimo`
- **Objeto Propio en Oracle:** `compra_particionada` (RANGE por `fecha_compra`), `sp_registrar_pago_proveedor`, `fn_total_compras_proveedor`, usuarios `farma_dba`, `farma_app`, `farma_readonly` (ORA-01031)
- **Objeto Propio en Cassandra:** Índice SAI `idx_ventas_codigo` y UDF `fn_margen_pct`
- **Pregunta clave:** *"¿Cómo evitas rechazo de compras en 2026?"* -> Con la partición `P_FUTURO VALUES LESS THAN (MAXVALUE)` y luego `SPLIT PARTITION` anual sin downtime.

## 4. Matencio Paucar, Jorge Fabian (NoSQL / MongoDB y Cassandra)
- **Objeto Propio en PostgreSQL:** `sp_actualizar_precio_medicamento`
- **Objeto Propio en MongoDB:** Colecciones con `$jsonSchema`, Replica Set `rs0` (3 nodos) e índice `idx_resenas_farmacia_calificacion`
- **Objeto Propio en Cassandra:** Keyspace `farmabarrio` (RF=3), tablas time-series, índice SAI `idx_demanda_clasificacion` y UDF `fn_total_sin_igv`
- **Pregunta clave:** *"¿Qué pasa si cae un nodo en Cassandra RF=3?"* -> Con `CONSISTENCY QUORUM` (2/3 nodos) sigue operando normalmente y el nodo caído recibe los datos al volver mediante Hinted Handoff.

## 5. Rojas Pérez, Dereck Daniel (Big Data / Hadoop HDFS y Backups)
- **Objeto Propio en PostgreSQL:** `fn_rotacion_medicamento`
- **Objeto Propio en Cassandra:** Índice SAI `idx_precios_usuario`, UDF `fn_rango_estado`
- **Objeto Propio en Hadoop:** Las 5 tablas externas Hive (`hdp_analitica_ventas_consolidadas`, `hdp_auditoria_seguridad_global`, `hdp_comportamiento_precios_tiempo`, `hdp_demanda_insatisfecha_regional`, `hdp_evaluacion_proveedores_b2b`), scripts PySpark y Backups reales verificados.
- **Pregunta clave:** *"¿Por qué no hacer analítica directa en PostgreSQL?"* -> Para no degradar las cajas de botica (contención de IOPS y RAM); Hadoop/Hive separa OLTP de OLAP usando formatos columnares Parquet y ORC.
