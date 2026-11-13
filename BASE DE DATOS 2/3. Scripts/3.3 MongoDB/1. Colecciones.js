// Creacion de colecciones NoSQL con validacion de esquemas JSON Schema
// Motor: MongoDB 6.0+ | Base de datos: farmabarrio_nosql

use farmabarrio_nosql;

// 1. Coleccion pedidos_marketplace: pedidos de clientes con detalle embebido
db.createCollection("pedidos_marketplace", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo_pedido", "fecha_pedido", "cliente", "farmacia_id", "items", "total", "estado"],
      properties: {
        codigo_pedido: { bsonType: "string" },
        fecha_pedido: { bsonType: "date" },
        cliente: {
          bsonType: "object",
          required: ["documento", "nombre", "telefono"],
          properties: {
            documento: { bsonType: "string" },
            nombre: { bsonType: "string" },
            telefono: { bsonType: "string" },
            direccion_entrega: { bsonType: "string" }
          }
        },
        farmacia_id: { bsonType: "int" },
        distrito: { bsonType: "string" },
        items: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["medicamento_id", "nombre", "cantidad", "precio_unitario", "subtotal"],
            properties: {
              medicamento_id: { bsonType: "int" },
              nombre: { bsonType: "string" },
              cantidad: { bsonType: "int", minimum: 1 },
              precio_unitario: { bsonType: ["double", "decimal", "int"] },
              subtotal: { bsonType: ["double", "decimal", "int"] }
            }
          }
        },
        subtotal: { bsonType: ["double", "decimal", "int"] },
        delivery_costo: { bsonType: ["double", "decimal", "int"] },
        total: { bsonType: ["double", "decimal", "int"] },
        metodo_pago: { enum: ["YAPE", "PLIN", "TARJETA", "EFECTIVO"] },
        estado: { enum: ["PENDIENTE", "CONFIRMADO", "EN_CAMINO", "ENTREGADO", "CANCELADO"] }
      }
    }
  }
});

// 2. Coleccion trazabilidad_stock: control de lotes, cadena de frio y vencimientos
db.createCollection("trazabilidad_stock", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["lote", "medicamento_id", "farmacia_id", "cantidad_disponible", "fecha_vencimiento"],
      properties: {
        lote: { bsonType: "string" },
        medicamento_id: { bsonType: "int" },
        nombre_medicamento: { bsonType: "string" },
        laboratorio: { bsonType: "string" },
        farmacia_id: { bsonType: "int" },
        distrito_farmacia: { bsonType: "string" },
        cantidad_disponible: { bsonType: "int", minimum: 0 },
        fecha_fabricacion: { bsonType: "date" },
        fecha_vencimiento: { bsonType: "date" },
        cadena_frio: { bsonType: "bool" },
        temperatura_registro: {
          bsonType: "object",
          properties: {
            temperatura_celsius: { bsonType: ["double", "decimal", "int"] },
            humedad_relativa: { bsonType: ["double", "decimal", "int"] },
            sensor_id: { bsonType: "string" },
            fecha_medicion: { bsonType: "date" }
          }
        },
        estado_lote: { enum: ["OPTIMO", "PROXIMO_A_VENCER", "VENCIDO", "EN_CUARENTENA"] }
      }
    }
  }
});

// 3. Coleccion catalogo_medicamentos_cache: catalogo de alta velocidad y comparador de precios
db.createCollection("catalogo_medicamentos_cache", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["medicamento_id", "codigo_digemid", "nombre_comercial", "principio_activo", "categoria"],
      properties: {
        medicamento_id: { bsonType: "int" },
        codigo_digemid: { bsonType: "string" },
        nombre_comercial: { bsonType: "string" },
        principio_activo: { bsonType: "string" },
        concentracion: { bsonType: "string" },
        forma_farmaceutica: { bsonType: "string" },
        categoria: { bsonType: "string" },
        requiere_receta: { bsonType: "bool" },
        generico_intercambiable: { bsonType: "bool" },
        precio_referencial_mercado: { bsonType: ["double", "decimal", "int"] },
        disponibilidad_red: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["farmacia_id", "nombre_farmacia", "precio_oferta", "stock_local"],
            properties: {
              farmacia_id: { bsonType: "int" },
              nombre_farmacia: { bsonType: "string" },
              distrito: { bsonType: "string" },
              precio_oferta: { bsonType: ["double", "decimal", "int"] },
              stock_local: { bsonType: "int" }
            }
          }
        }
      }
    }
  }
});

// Indices para optimizar busquedas y agregaciones en MongoDB
db.pedidos_marketplace.createIndex({ "codigo_pedido": 1 }, { unique: true });
db.pedidos_marketplace.createIndex({ "farmacia_id": 1, "fecha_pedido": -1 });
db.pedidos_marketplace.createIndex({ "cliente.documento": 1 });

db.trazabilidad_stock.createIndex({ "lote": 1, "farmacia_id": 1, "medicamento_id": 1 }, { unique: true });
db.trazabilidad_stock.createIndex({ "fecha_vencimiento": 1 });
db.trazabilidad_stock.createIndex({ "cadena_frio": 1 });

db.catalogo_medicamentos_cache.createIndex({ "medicamento_id": 1 }, { unique: true });
db.catalogo_medicamentos_cache.createIndex({ "principio_activo": "text", "nombre_comercial": "text" });
db.catalogo_medicamentos_cache.createIndex({ "categoria": 1 });
