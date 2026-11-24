// Definición de Índices en MongoDB para optimización analítica y restricciones de unicidad
// Base de datos: farmabarrio_mongo

use farmabarrio_mongo;

// --- Índices en ventas_historicas ---
// 1. Índice Único de Código de Venta
db.ventas_historicas.createIndex({ codigo_venta: 1 }, { unique: true, name: "idx_codigo_venta_unique" });

// 2. Índice Compuesto por Farmacia y Fecha (acelera reportes territoriales)
db.ventas_historicas.createIndex({ farmacia_id: 1, fecha: -1 }, { name: "idx_ventas_farmacia_fecha" });

// 3. Índice Multikey sobre medicamentos embebidos en el arreglo de items
db.ventas_historicas.createIndex({ "items.medicamento_id": 1 }, { name: "idx_items_medicamento_multikey" });

// 4. Índice Simple por Estado de Venta
db.ventas_historicas.createIndex({ estado: 1 }, { name: "idx_ventas_estado" });

// --- Índices en resenas ---
db.resenas.createIndex({ resena_id: 1 }, { unique: true, name: "idx_resena_id_unique" });
db.resenas.createIndex({ farmacia_id: 1, calificacion: -1 }, { name: "idx_resenas_farmacia_calificacion" });
db.resenas.createIndex({ medicamento_id: 1 }, { name: "idx_resenas_medicamento" });

// --- Índices en auditoria_eventos ---
db.auditoria_eventos.createIndex({ evento_id: 1 }, { unique: true, name: "idx_evento_id_unique" });
db.auditoria_eventos.createIndex({ usuario: 1, fecha_evento: -1 }, { name: "idx_auditoria_usuario_fecha" });
db.auditoria_eventos.createIndex({ accion: 1, modulo: 1 }, { name: "idx_auditoria_accion_modulo" });

// --- Índices en logs_marketplace ---
db.logs_marketplace.createIndex({ log_id: 1 }, { unique: true, name: "idx_log_id_unique" });
db.logs_marketplace.createIndex({ session_id: 1, timestamp: -1 }, { name: "idx_logs_session_time" });
db.logs_marketplace.createIndex({ busqueda_texto: "text" }, { name: "idx_logs_busqueda_fulltext" });
db.logs_marketplace.createIndex({ geolocalizacion: "2dsphere" }, { name: "idx_logs_geolocalizacion" });
