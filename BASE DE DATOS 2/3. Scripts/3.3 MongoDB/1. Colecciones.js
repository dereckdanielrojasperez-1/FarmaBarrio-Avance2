// Creación de Base de Datos y Colecciones NoSQL con validación de esquemas $jsonSchema
// Motor: MongoDB 9.0+ | Base de datos: farmabarrio_mongo

use farmabarrio_mongo;

// 1. Colección ventas_historicas: transacciones comerciales desnormalizadas
db.createCollection("ventas_historicas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo_venta", "farmacia_id", "fecha", "cliente", "items", "total_venta", "estado"],
      properties: {
        codigo_venta: { bsonType: "string", description: "Código único de transacción" },
        farmacia_id: { bsonType: "int", description: "ID de la botica barrial" },
        fecha: { bsonType: "date", description: "Timestamp de dispensación" },
        canal_venta: { enum: ["mostrador", "marketplace", "delivery"], description: "Canal de venta" },
        cliente: {
          bsonType: "object",
          required: ["cliente_id", "nombre_completo", "dni_ruc"],
          properties: {
            cliente_id: { bsonType: "int" },
            nombre_completo: { bsonType: "string" },
            dni_ruc: { bsonType: "string" },
            telefono: { bsonType: "string" }
          }
        },
        items: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["medicamento_id", "nombre_comercial", "cantidad", "precio_unitario", "subtotal"],
            properties: {
              medicamento_id: { bsonType: "int" },
              nombre_comercial: { bsonType: "string" },
              cantidad: { bsonType: "int", minimum: 1 },
              precio_unitario: { bsonType: "double", minimum: 0 },
              subtotal: { bsonType: "double", minimum: 0 }
            }
          }
        },
        metodo_pago: { bsonType: "string" },
        total_venta: { bsonType: "double", minimum: 0 },
        estado: { enum: ["completada", "anulada", "en_camino"] }
      }
    }
  }
});

// 2. Colección resenas: opiniones de vecinos y reputación barrial
db.createCollection("resenas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["resena_id", "cliente_id", "farmacia_id", "calificacion", "fecha_resena"],
      properties: {
        resena_id: { bsonType: "string" },
        cliente_id: { bsonType: "int" },
        farmacia_id: { bsonType: "int" },
        medicamento_id: { bsonType: "int" },
        calificacion: { bsonType: "int", minimum: 1, maximum: 5 },
        comentario: { bsonType: "string" },
        fecha_resena: { bsonType: "date" },
        util_conteo: { bsonType: "int", minimum: 0 }
      }
    }
  }
});

// 3. Colección auditoria_eventos: trazabilidad de operaciones de usuarios
db.createCollection("auditoria_eventos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["evento_id", "usuario", "accion", "modulo", "fecha_evento"],
      properties: {
        evento_id: { bsonType: "string" },
        usuario: { bsonType: "string" },
        rol: { bsonType: "string" },
        accion: { bsonType: "string" },
        modulo: { bsonType: "string" },
        entidad_afectada: { bsonType: "string" },
        detalles: { bsonType: "object" },
        fecha_evento: { bsonType: "date" }
      }
    }
  }
});

// 4. Colección logs_marketplace: telemetría de navegación y demanda web
db.createCollection("logs_marketplace", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["log_id", "session_id", "tipo_evento", "timestamp"],
      properties: {
        log_id: { bsonType: "string" },
        session_id: { bsonType: "string" },
        usuario_id: { bsonType: ["int", "null"] },
        tipo_evento: { bsonType: "string" },
        busqueda_texto: { bsonType: "string" },
        farmacia_id: { bsonType: ["int", "null"] },
        medicamento_id: { bsonType: ["int", "null"] },
        duracion_seg: { bsonType: "int" },
        dispositivo: { bsonType: "string" },
        geolocalizacion: {
          bsonType: "object",
          properties: {
            type: { enum: ["Point"] },
            coordinates: { bsonType: "array", minItems: 2, maxItems: 2 }
          }
        },
        timestamp: { bsonType: "date" }
      }
    }
  }
});
