// DEFINICIÓN DE COLECCIONES Y ESQUEMAS FORMALES $jsonSchema - MONGODB
// PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
// BASE DE DATOS CANÓNICA: farmabarrio_mongo
// INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar (Especialista NoSQL)

use farmabarrio_mongo;

// 1. COLECCIÓN: ventas_historicas (Transacciones comerciales desnormalizadas B2C)
db.createCollection("ventas_historicas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo_venta", "farmacia_id", "fecha", "cliente", "items", "total_venta", "estado"],
      properties: {
        codigo_venta: {
          bsonType: "string",
          description: "Código de ticket único de la venta (ej. VTA-MK-1001)"
        },
        farmacia_id: {
          bsonType: ["int", "double"],
          description: "Identificador de la botica emisora"
        },
        fecha: {
          bsonType: "date",
          description: "Fecha y hora BSON obligatoria de la transacción"
        },
        canal_venta: {
          bsonType: "string",
          enum: ["mostrador", "marketplace", "delivery"],
          description: "Canal comercial de atención"
        },
        cliente: {
          bsonType: "object",
          required: ["cliente_id", "nombre_completo"],
          properties: {
            cliente_id: { bsonType: ["int", "double"] },
            nombre_completo: { bsonType: "string" },
            dni_ruc: { bsonType: "string" },
            telefono: { bsonType: "string" }
          }
        },
        items: {
          bsonType: "array",
          minItems: 1,
          description: "Arreglo de medicamentos adquiridos",
          items: {
            bsonType: "object",
            required: ["medicamento_id", "nombre_comercial", "cantidad", "precio_unitario", "subtotal"],
            properties: {
              medicamento_id: { bsonType: ["int", "double"] },
              nombre_comercial: { bsonType: "string" },
              cantidad: { bsonType: ["int", "double"], minimum: 1 },
              precio_unitario: { bsonType: ["double", "int"], minimum: 0 },
              subtotal: { bsonType: ["double", "int"], minimum: 0 }
            }
          }
        },
        metodo_pago: {
          bsonType: "string",
          enum: ["efectivo", "tarjeta", "yape_plin", "transferencia"]
        },
        total_venta: {
          bsonType: ["double", "int"],
          minimum: 0,
          description: "Importe total liquidado de la orden"
        },
        estado: {
          bsonType: "string",
          enum: ["completada", "anulada", "en_proceso"]
        }
      }
    }
  },
  validationLevel: "moderate",
  validationAction: "error"
});

// 2. COLECCIÓN: resenas (Valoraciones y reputación de boticas por pacientes)
db.createCollection("resenas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["resena_id", "farmacia_id", "cliente_id", "calificacion", "fecha_resena"],
      properties: {
        resena_id: { bsonType: "string" },
        farmacia_id: { bsonType: ["int", "double"] },
        cliente_id: { bsonType: ["int", "double"] },
        cliente_nombre: { bsonType: "string" },
        calificacion: { bsonType: ["int", "double"], minimum: 1, maximum: 5 },
        comentario: { bsonType: "string" },
        fecha_resena: { bsonType: "date" },
        compra_verificada: { bsonType: "bool" }
      }
    }
  }
});

// 3. COLECCIÓN: auditoria_eventos (Trazas inmutables de seguridad y accesos)
db.createCollection("auditoria_eventos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["evento_id", "fecha_evento", "modulo", "usuario", "accion", "resultado"],
      properties: {
        evento_id: { bsonType: "string" },
        fecha_evento: { bsonType: "date" },
        modulo: { bsonType: "string" },
        usuario: { bsonType: "string" },
        ip_origen: { bsonType: "string" },
        accion: { bsonType: "string" },
        resultado: { bsonType: "string", enum: ["SUCCESS", "DENIED", "ERROR"] },
        detalles: { bsonType: "string" }
      }
    }
  }
});

// 4. COLECCIÓN: logs_marketplace (Telemetría de navegación y conversión en la web)
db.createCollection("logs_marketplace", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["log_id", "timestamp", "session_id", "endpoint", "metodo_http", "codigo_estado"],
      properties: {
        log_id: { bsonType: "string" },
        timestamp: { bsonType: "date" },
        session_id: { bsonType: "string" },
        endpoint: { bsonType: "string" },
        metodo_http: { bsonType: "string", enum: ["GET", "POST", "PUT", "DELETE"] },
        codigo_estado: { bsonType: ["int", "double"] },
        tiempo_respuesta_ms: { bsonType: ["int", "double"] },
        distrito_geolocalizado: { bsonType: "string" }
      }
    }
  }
});

print("Las 4 colecciones con validadores $jsonSchema fueron creadas con éxito.");
