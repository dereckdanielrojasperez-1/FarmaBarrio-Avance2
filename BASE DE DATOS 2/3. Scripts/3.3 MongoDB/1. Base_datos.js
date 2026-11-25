// ==============================================================================
// INICIALIZACIÓN Y CONFIGURACIÓN DEL ENTORNO NOSQL - MONGODB 7.0+ / 8.0+ / 9.0+
// PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
// BASE DE DATOS CANÓNICA: farmabarrio_mongo
// INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar (Especialista NoSQL)
// ==============================================================================

// 1. Selección y Conexión al Contexto de Base de Datos
use farmabarrio_mongo;

// 2. Limpieza de Colecciones Previas (para ejecuciones idempotentes)
db.ventas_historicas.drop();
db.resenas.drop();
db.auditoria_eventos.drop();
db.logs_marketplace.drop();

// 3. Configuración del Nivel de Profiling para Auditoría de Rendimiento
// Registra operaciones lentas (> 50 ms) para optimización de queries analíticas
db.setProfilingLevel(1, { slowms: 50 });

// 4. Verificación de Estado de la Base de Datos
print("==================================================================");
print("Base de datos farmabarrio_mongo inicializada con éxito.");
print("Servidor MongoDB: " + db.version());
print("Perfil de auditoría slowms establecido en 50 ms.");
print("==================================================================");
