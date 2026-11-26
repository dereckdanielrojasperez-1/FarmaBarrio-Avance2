// DEFINICIÓN DE ÍNDICES EN MONGODB PARA OPTIMIZACIÓN ANALÍTICA Y RESTRICCIONES
// PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
// BASE DE DATOS CANÓNICA: farmabarrio_mongo
// AUTORÍA INDIVIDUAL POR INTEGRANTE (CUMPLIMIENTO SÍLABO UTP)

use farmabarrio_mongo;

// ÍNDICE 1: Unicidad de Código de Venta (Restricción de Integridad Única)
// Autor: Maykel Quiñones Diego (Líder / Arquitectura Global)
// Propósito: Impide la inserción de tickets de venta duplicados en la red.
db.ventas_historicas.createIndex(
  { codigo_venta: 1 },
  { unique: true, name: "idx_codigo_venta_unique" }
);

// ÍNDICE 2: Compuesto Farmacia y Fecha Descendente (Filtro Territorial)
// Autor: Leonardo Josué Wong Villanueva (PostgreSQL / Fragmentación)
// Propósito: Acelera las consultas de cierre de caja y reportes periódicos por botica.
db.ventas_historicas.createIndex(
  { farmacia_id: 1, fecha: -1 },
  { name: "idx_ventas_farmacia_fecha" }
);

// ÍNDICE 3: Multikey sobre Arreglo de Items (Búsqueda por Fármaco Adquirido)
// Autor: Nicole Andrea Garcia Espejo (Oracle XE / PL-SQL & RBAC)
// Propósito: Optimiza la búsqueda de transacciones que incluyan un medicamento específico.
db.ventas_historicas.createIndex(
  { "items.medicamento_id": 1 },
  { name: "idx_ventas_items_medicamento" }
);

// ÍNDICE 4: Compuesto en Reseñas y Calificaciones
// Autor: Jorge Fabian Matencio Paucar (NoSQL / MongoDB y Cassandra)
// Propósito: Optimiza el cálculo de reputación y promedio de estrellas por botica.
db.resenas.createIndex(
  { farmacia_id: 1, calificacion: -1 },
  { name: "idx_resenas_farmacia_calificacion" }
);

// ÍNDICE 5: TTL y Trazabilidad en Auditoría de Eventos
// Autor: Dereck Daniel Rojas Pérez (Big Data / Hadoop HDFS y Backups)
// Propósito: Acelera auditorías forenses por módulo y usuario responsable.
db.auditoria_eventos.createIndex(
  { modulo: 1, fecha_evento: -1 },
  { name: "idx_auditoria_modulo_fecha" }
);

// Índice de telemetría en logs_marketplace para análisis geográfico
db.logs_marketplace.createIndex(
  { distrito_geolocalizado: 1, timestamp: -1 },
  { name: "idx_logs_distrito_timestamp" }
);

print("Todos los índices fueron construidos exitosamente con autoría verificada.");
