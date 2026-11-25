// ==============================================================================
// CARGA MASIVA OFICIAL DE DATOS NOSQL - MONGODB 7.0+ / 8.0+ / 9.0+
// TOTAL REGISTROS: 500 Documentos en ventas_historicas (100 por participante)
// + 100 resenas, + 100 auditoria_eventos, + 100 logs_marketplace = 800 Documentos
// FORMATO: Fechas BSON nativas new Date(...) y tipos validados para $jsonSchema
// ==============================================================================

use farmabarrio_mongo;

// ------------------------------------------------------------------------------
// INTEGRANTE 1: Maykel Quiñones (100 Ventas Históricas)
// ------------------------------------------------------------------------------
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-MK-1001",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-02T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1001,
      "nombre_completo": "Paciente Vecino 1001",
      "dni_ruc": "40001001",
      "telefono": "987001001"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1002",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-03T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1002,
      "nombre_completo": "Paciente Vecino 1002",
      "dni_ruc": "40001002",
      "telefono": "987001002"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1003",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-04T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1003,
      "nombre_completo": "Paciente Vecino 1003",
      "dni_ruc": "40001003",
      "telefono": "987001003"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1004",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-05T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1004,
      "nombre_completo": "Paciente Vecino 1004",
      "dni_ruc": "40001004",
      "telefono": "987001004"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1005",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-06T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1005,
      "nombre_completo": "Paciente Vecino 1005",
      "dni_ruc": "40001005",
      "telefono": "987001005"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1006",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-07T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1006,
      "nombre_completo": "Paciente Vecino 1006",
      "dni_ruc": "40001006",
      "telefono": "987001006"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1007",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-08T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1007,
      "nombre_completo": "Paciente Vecino 1007",
      "dni_ruc": "40001007",
      "telefono": "987001007"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1008",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-09T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1008,
      "nombre_completo": "Paciente Vecino 1008",
      "dni_ruc": "40001008",
      "telefono": "987001008"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1009",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-10T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1009,
      "nombre_completo": "Paciente Vecino 1009",
      "dni_ruc": "40001009",
      "telefono": "987001009"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1010",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-11T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1010,
      "nombre_completo": "Paciente Vecino 1010",
      "dni_ruc": "40001010",
      "telefono": "987001010"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1011",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-12T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1011,
      "nombre_completo": "Paciente Vecino 1011",
      "dni_ruc": "40001011",
      "telefono": "987001011"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1012",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-13T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1012,
      "nombre_completo": "Paciente Vecino 1012",
      "dni_ruc": "40001012",
      "telefono": "987001012"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1013",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-14T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1013,
      "nombre_completo": "Paciente Vecino 1013",
      "dni_ruc": "40001013",
      "telefono": "987001013"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1014",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-15T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1014,
      "nombre_completo": "Paciente Vecino 1014",
      "dni_ruc": "40001014",
      "telefono": "987001014"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1015",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-16T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1015,
      "nombre_completo": "Paciente Vecino 1015",
      "dni_ruc": "40001015",
      "telefono": "987001015"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1016",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-17T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1016,
      "nombre_completo": "Paciente Vecino 1016",
      "dni_ruc": "40001016",
      "telefono": "987001016"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1017",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-18T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1017,
      "nombre_completo": "Paciente Vecino 1017",
      "dni_ruc": "40001017",
      "telefono": "987001017"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1018",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-19T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1018,
      "nombre_completo": "Paciente Vecino 1018",
      "dni_ruc": "40001018",
      "telefono": "987001018"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1019",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-20T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1019,
      "nombre_completo": "Paciente Vecino 1019",
      "dni_ruc": "40001019",
      "telefono": "987001019"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1020",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-21T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1020,
      "nombre_completo": "Paciente Vecino 1020",
      "dni_ruc": "40001020",
      "telefono": "987001020"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1021",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-22T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1021,
      "nombre_completo": "Paciente Vecino 1021",
      "dni_ruc": "40001021",
      "telefono": "987001021"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1022",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-23T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1022,
      "nombre_completo": "Paciente Vecino 1022",
      "dni_ruc": "40001022",
      "telefono": "987001022"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1023",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-24T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1023,
      "nombre_completo": "Paciente Vecino 1023",
      "dni_ruc": "40001023",
      "telefono": "987001023"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1024",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-25T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1024,
      "nombre_completo": "Paciente Vecino 1024",
      "dni_ruc": "40001024",
      "telefono": "987001024"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1025",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-26T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1025,
      "nombre_completo": "Paciente Vecino 1025",
      "dni_ruc": "40001025",
      "telefono": "987001025"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1026",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-27T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1026,
      "nombre_completo": "Paciente Vecino 1026",
      "dni_ruc": "40001026",
      "telefono": "987001026"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1027",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-28T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1027,
      "nombre_completo": "Paciente Vecino 1027",
      "dni_ruc": "40001027",
      "telefono": "987001027"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1028",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-01T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1028,
      "nombre_completo": "Paciente Vecino 1028",
      "dni_ruc": "40001028",
      "telefono": "987001028"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1029",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-02T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1029,
      "nombre_completo": "Paciente Vecino 1029",
      "dni_ruc": "40001029",
      "telefono": "987001029"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1030",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-03T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1030,
      "nombre_completo": "Paciente Vecino 1030",
      "dni_ruc": "40001030",
      "telefono": "987001030"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1031",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-04T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1031,
      "nombre_completo": "Paciente Vecino 1031",
      "dni_ruc": "40001031",
      "telefono": "987001031"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1032",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-05T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1032,
      "nombre_completo": "Paciente Vecino 1032",
      "dni_ruc": "40001032",
      "telefono": "987001032"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1033",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-06T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1033,
      "nombre_completo": "Paciente Vecino 1033",
      "dni_ruc": "40001033",
      "telefono": "987001033"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1034",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-07T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1034,
      "nombre_completo": "Paciente Vecino 1034",
      "dni_ruc": "40001034",
      "telefono": "987001034"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1035",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-08T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1035,
      "nombre_completo": "Paciente Vecino 1035",
      "dni_ruc": "40001035",
      "telefono": "987001035"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1036",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-09T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1036,
      "nombre_completo": "Paciente Vecino 1036",
      "dni_ruc": "40001036",
      "telefono": "987001036"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1037",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-10T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1037,
      "nombre_completo": "Paciente Vecino 1037",
      "dni_ruc": "40001037",
      "telefono": "987001037"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1038",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-11T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1038,
      "nombre_completo": "Paciente Vecino 1038",
      "dni_ruc": "40001038",
      "telefono": "987001038"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1039",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-12T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1039,
      "nombre_completo": "Paciente Vecino 1039",
      "dni_ruc": "40001039",
      "telefono": "987001039"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1040",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-13T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1040,
      "nombre_completo": "Paciente Vecino 1040",
      "dni_ruc": "40001040",
      "telefono": "987001040"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1041",
    "farmacia_id": 2,
    "fecha": new Date("2026-06-14T10:47:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1041,
      "nombre_completo": "Paciente Vecino 1041",
      "dni_ruc": "40001041",
      "telefono": "987001041"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1042",
    "farmacia_id": 3,
    "fecha": new Date("2026-07-15T10:54:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1042,
      "nombre_completo": "Paciente Vecino 1042",
      "dni_ruc": "40001042",
      "telefono": "987001042"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 8.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1043",
    "farmacia_id": 4,
    "fecha": new Date("2026-08-16T10:01:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1043,
      "nombre_completo": "Paciente Vecino 1043",
      "dni_ruc": "40001043",
      "telefono": "987001043"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1044",
    "farmacia_id": 5,
    "fecha": new Date("2026-09-17T10:08:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1044,
      "nombre_completo": "Paciente Vecino 1044",
      "dni_ruc": "40001044",
      "telefono": "987001044"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 14.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1045",
    "farmacia_id": 6,
    "fecha": new Date("2026-10-18T10:15:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1045,
      "nombre_completo": "Paciente Vecino 1045",
      "dni_ruc": "40001045",
      "telefono": "987001045"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1046",
    "farmacia_id": 7,
    "fecha": new Date("2026-11-19T10:22:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1046,
      "nombre_completo": "Paciente Vecino 1046",
      "dni_ruc": "40001046",
      "telefono": "987001046"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 37.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1047",
    "farmacia_id": 8,
    "fecha": new Date("2026-12-20T10:29:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1047,
      "nombre_completo": "Paciente Vecino 1047",
      "dni_ruc": "40001047",
      "telefono": "987001047"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1048",
    "farmacia_id": 9,
    "fecha": new Date("2026-01-21T10:36:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1048,
      "nombre_completo": "Paciente Vecino 1048",
      "dni_ruc": "40001048",
      "telefono": "987001048"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 21.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1049",
    "farmacia_id": 10,
    "fecha": new Date("2026-02-22T10:43:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1049,
      "nombre_completo": "Paciente Vecino 1049",
      "dni_ruc": "40001049",
      "telefono": "987001049"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1050",
    "farmacia_id": 1,
    "fecha": new Date("2026-03-23T10:50:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1050,
      "nombre_completo": "Paciente Vecino 1050",
      "dni_ruc": "40001050",
      "telefono": "987001050"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1051",
    "farmacia_id": 2,
    "fecha": new Date("2026-04-24T10:57:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1051,
      "nombre_completo": "Paciente Vecino 1051",
      "dni_ruc": "40001051",
      "telefono": "987001051"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1052",
    "farmacia_id": 3,
    "fecha": new Date("2026-05-25T10:04:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1052,
      "nombre_completo": "Paciente Vecino 1052",
      "dni_ruc": "40001052",
      "telefono": "987001052"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 5.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1053",
    "farmacia_id": 4,
    "fecha": new Date("2026-06-26T10:11:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1053,
      "nombre_completo": "Paciente Vecino 1053",
      "dni_ruc": "40001053",
      "telefono": "987001053"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1054",
    "farmacia_id": 5,
    "fecha": new Date("2026-07-27T10:18:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1054,
      "nombre_completo": "Paciente Vecino 1054",
      "dni_ruc": "40001054",
      "telefono": "987001054"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1055",
    "farmacia_id": 6,
    "fecha": new Date("2026-08-28T10:25:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1055,
      "nombre_completo": "Paciente Vecino 1055",
      "dni_ruc": "40001055",
      "telefono": "987001055"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1056",
    "farmacia_id": 7,
    "fecha": new Date("2026-09-01T10:32:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1056,
      "nombre_completo": "Paciente Vecino 1056",
      "dni_ruc": "40001056",
      "telefono": "987001056"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 40.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1057",
    "farmacia_id": 8,
    "fecha": new Date("2026-10-02T10:39:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1057,
      "nombre_completo": "Paciente Vecino 1057",
      "dni_ruc": "40001057",
      "telefono": "987001057"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1058",
    "farmacia_id": 9,
    "fecha": new Date("2026-11-03T10:46:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1058,
      "nombre_completo": "Paciente Vecino 1058",
      "dni_ruc": "40001058",
      "telefono": "987001058"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 61.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1059",
    "farmacia_id": 10,
    "fecha": new Date("2026-12-04T10:53:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1059,
      "nombre_completo": "Paciente Vecino 1059",
      "dni_ruc": "40001059",
      "telefono": "987001059"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1060",
    "farmacia_id": 1,
    "fecha": new Date("2026-01-05T10:00:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1060,
      "nombre_completo": "Paciente Vecino 1060",
      "dni_ruc": "40001060",
      "telefono": "987001060"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1061",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-06T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1061,
      "nombre_completo": "Paciente Vecino 1061",
      "dni_ruc": "40001061",
      "telefono": "987001061"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1062",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-07T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1062,
      "nombre_completo": "Paciente Vecino 1062",
      "dni_ruc": "40001062",
      "telefono": "987001062"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1063",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-08T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1063,
      "nombre_completo": "Paciente Vecino 1063",
      "dni_ruc": "40001063",
      "telefono": "987001063"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1064",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-09T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1064,
      "nombre_completo": "Paciente Vecino 1064",
      "dni_ruc": "40001064",
      "telefono": "987001064"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1065",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-10T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1065,
      "nombre_completo": "Paciente Vecino 1065",
      "dni_ruc": "40001065",
      "telefono": "987001065"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1066",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-11T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1066,
      "nombre_completo": "Paciente Vecino 1066",
      "dni_ruc": "40001066",
      "telefono": "987001066"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1067",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-12T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1067,
      "nombre_completo": "Paciente Vecino 1067",
      "dni_ruc": "40001067",
      "telefono": "987001067"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1068",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-13T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1068,
      "nombre_completo": "Paciente Vecino 1068",
      "dni_ruc": "40001068",
      "telefono": "987001068"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1069",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-14T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1069,
      "nombre_completo": "Paciente Vecino 1069",
      "dni_ruc": "40001069",
      "telefono": "987001069"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1070",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-15T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1070,
      "nombre_completo": "Paciente Vecino 1070",
      "dni_ruc": "40001070",
      "telefono": "987001070"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1071",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-16T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1071,
      "nombre_completo": "Paciente Vecino 1071",
      "dni_ruc": "40001071",
      "telefono": "987001071"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1072",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-17T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1072,
      "nombre_completo": "Paciente Vecino 1072",
      "dni_ruc": "40001072",
      "telefono": "987001072"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1073",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-18T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1073,
      "nombre_completo": "Paciente Vecino 1073",
      "dni_ruc": "40001073",
      "telefono": "987001073"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1074",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-19T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1074,
      "nombre_completo": "Paciente Vecino 1074",
      "dni_ruc": "40001074",
      "telefono": "987001074"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1075",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-20T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1075,
      "nombre_completo": "Paciente Vecino 1075",
      "dni_ruc": "40001075",
      "telefono": "987001075"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1076",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-21T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1076,
      "nombre_completo": "Paciente Vecino 1076",
      "dni_ruc": "40001076",
      "telefono": "987001076"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1077",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-22T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1077,
      "nombre_completo": "Paciente Vecino 1077",
      "dni_ruc": "40001077",
      "telefono": "987001077"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1078",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-23T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1078,
      "nombre_completo": "Paciente Vecino 1078",
      "dni_ruc": "40001078",
      "telefono": "987001078"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1079",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-24T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1079,
      "nombre_completo": "Paciente Vecino 1079",
      "dni_ruc": "40001079",
      "telefono": "987001079"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1080",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-25T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1080,
      "nombre_completo": "Paciente Vecino 1080",
      "dni_ruc": "40001080",
      "telefono": "987001080"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1081",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-26T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1081,
      "nombre_completo": "Paciente Vecino 1081",
      "dni_ruc": "40001081",
      "telefono": "987001081"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1082",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-27T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1082,
      "nombre_completo": "Paciente Vecino 1082",
      "dni_ruc": "40001082",
      "telefono": "987001082"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1083",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-28T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1083,
      "nombre_completo": "Paciente Vecino 1083",
      "dni_ruc": "40001083",
      "telefono": "987001083"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1084",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-01T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1084,
      "nombre_completo": "Paciente Vecino 1084",
      "dni_ruc": "40001084",
      "telefono": "987001084"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1085",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-02T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1085,
      "nombre_completo": "Paciente Vecino 1085",
      "dni_ruc": "40001085",
      "telefono": "987001085"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1086",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-03T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1086,
      "nombre_completo": "Paciente Vecino 1086",
      "dni_ruc": "40001086",
      "telefono": "987001086"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1087",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-04T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1087,
      "nombre_completo": "Paciente Vecino 1087",
      "dni_ruc": "40001087",
      "telefono": "987001087"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1088",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-05T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1088,
      "nombre_completo": "Paciente Vecino 1088",
      "dni_ruc": "40001088",
      "telefono": "987001088"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1089",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-06T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1089,
      "nombre_completo": "Paciente Vecino 1089",
      "dni_ruc": "40001089",
      "telefono": "987001089"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1090",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-07T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1090,
      "nombre_completo": "Paciente Vecino 1090",
      "dni_ruc": "40001090",
      "telefono": "987001090"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1091",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-08T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1091,
      "nombre_completo": "Paciente Vecino 1091",
      "dni_ruc": "40001091",
      "telefono": "987001091"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1092",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-09T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1092,
      "nombre_completo": "Paciente Vecino 1092",
      "dni_ruc": "40001092",
      "telefono": "987001092"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1093",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-10T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1093,
      "nombre_completo": "Paciente Vecino 1093",
      "dni_ruc": "40001093",
      "telefono": "987001093"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1094",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-11T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1094,
      "nombre_completo": "Paciente Vecino 1094",
      "dni_ruc": "40001094",
      "telefono": "987001094"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1095",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-12T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1095,
      "nombre_completo": "Paciente Vecino 1095",
      "dni_ruc": "40001095",
      "telefono": "987001095"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1096",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-13T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1096,
      "nombre_completo": "Paciente Vecino 1096",
      "dni_ruc": "40001096",
      "telefono": "987001096"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1097",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-14T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1097,
      "nombre_completo": "Paciente Vecino 1097",
      "dni_ruc": "40001097",
      "telefono": "987001097"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1098",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-15T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1098,
      "nombre_completo": "Paciente Vecino 1098",
      "dni_ruc": "40001098",
      "telefono": "987001098"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1099",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-16T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1099,
      "nombre_completo": "Paciente Vecino 1099",
      "dni_ruc": "40001099",
      "telefono": "987001099"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1100",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-17T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1100,
      "nombre_completo": "Paciente Vecino 1100",
      "dni_ruc": "40001100",
      "telefono": "987001100"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  }
]);

// ------------------------------------------------------------------------------
// INTEGRANTE 2: Leonardo Wong (100 Ventas Históricas)
// ------------------------------------------------------------------------------
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-LW-2001",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-02T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2001,
      "nombre_completo": "Paciente Vecino 2001",
      "dni_ruc": "40002001",
      "telefono": "987002001"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2002",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-03T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2002,
      "nombre_completo": "Paciente Vecino 2002",
      "dni_ruc": "40002002",
      "telefono": "987002002"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2003",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-04T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2003,
      "nombre_completo": "Paciente Vecino 2003",
      "dni_ruc": "40002003",
      "telefono": "987002003"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2004",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-05T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2004,
      "nombre_completo": "Paciente Vecino 2004",
      "dni_ruc": "40002004",
      "telefono": "987002004"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2005",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-06T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2005,
      "nombre_completo": "Paciente Vecino 2005",
      "dni_ruc": "40002005",
      "telefono": "987002005"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2006",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-07T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2006,
      "nombre_completo": "Paciente Vecino 2006",
      "dni_ruc": "40002006",
      "telefono": "987002006"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2007",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-08T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2007,
      "nombre_completo": "Paciente Vecino 2007",
      "dni_ruc": "40002007",
      "telefono": "987002007"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2008",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-09T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2008,
      "nombre_completo": "Paciente Vecino 2008",
      "dni_ruc": "40002008",
      "telefono": "987002008"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2009",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-10T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2009,
      "nombre_completo": "Paciente Vecino 2009",
      "dni_ruc": "40002009",
      "telefono": "987002009"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2010",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-11T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2010,
      "nombre_completo": "Paciente Vecino 2010",
      "dni_ruc": "40002010",
      "telefono": "987002010"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2011",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-12T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2011,
      "nombre_completo": "Paciente Vecino 2011",
      "dni_ruc": "40002011",
      "telefono": "987002011"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2012",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-13T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2012,
      "nombre_completo": "Paciente Vecino 2012",
      "dni_ruc": "40002012",
      "telefono": "987002012"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2013",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-14T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2013,
      "nombre_completo": "Paciente Vecino 2013",
      "dni_ruc": "40002013",
      "telefono": "987002013"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2014",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-15T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2014,
      "nombre_completo": "Paciente Vecino 2014",
      "dni_ruc": "40002014",
      "telefono": "987002014"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2015",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-16T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2015,
      "nombre_completo": "Paciente Vecino 2015",
      "dni_ruc": "40002015",
      "telefono": "987002015"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2016",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-17T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2016,
      "nombre_completo": "Paciente Vecino 2016",
      "dni_ruc": "40002016",
      "telefono": "987002016"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2017",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-18T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2017,
      "nombre_completo": "Paciente Vecino 2017",
      "dni_ruc": "40002017",
      "telefono": "987002017"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2018",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-19T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2018,
      "nombre_completo": "Paciente Vecino 2018",
      "dni_ruc": "40002018",
      "telefono": "987002018"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2019",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-20T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2019,
      "nombre_completo": "Paciente Vecino 2019",
      "dni_ruc": "40002019",
      "telefono": "987002019"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2020",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-21T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2020,
      "nombre_completo": "Paciente Vecino 2020",
      "dni_ruc": "40002020",
      "telefono": "987002020"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2021",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-22T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2021,
      "nombre_completo": "Paciente Vecino 2021",
      "dni_ruc": "40002021",
      "telefono": "987002021"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2022",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-23T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2022,
      "nombre_completo": "Paciente Vecino 2022",
      "dni_ruc": "40002022",
      "telefono": "987002022"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2023",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-24T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2023,
      "nombre_completo": "Paciente Vecino 2023",
      "dni_ruc": "40002023",
      "telefono": "987002023"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2024",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-25T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2024,
      "nombre_completo": "Paciente Vecino 2024",
      "dni_ruc": "40002024",
      "telefono": "987002024"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2025",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-26T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2025,
      "nombre_completo": "Paciente Vecino 2025",
      "dni_ruc": "40002025",
      "telefono": "987002025"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2026",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-27T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2026,
      "nombre_completo": "Paciente Vecino 2026",
      "dni_ruc": "40002026",
      "telefono": "987002026"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2027",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-28T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2027,
      "nombre_completo": "Paciente Vecino 2027",
      "dni_ruc": "40002027",
      "telefono": "987002027"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2028",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-01T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2028,
      "nombre_completo": "Paciente Vecino 2028",
      "dni_ruc": "40002028",
      "telefono": "987002028"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2029",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-02T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2029,
      "nombre_completo": "Paciente Vecino 2029",
      "dni_ruc": "40002029",
      "telefono": "987002029"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2030",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-03T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2030,
      "nombre_completo": "Paciente Vecino 2030",
      "dni_ruc": "40002030",
      "telefono": "987002030"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2031",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-04T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2031,
      "nombre_completo": "Paciente Vecino 2031",
      "dni_ruc": "40002031",
      "telefono": "987002031"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2032",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-05T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2032,
      "nombre_completo": "Paciente Vecino 2032",
      "dni_ruc": "40002032",
      "telefono": "987002032"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2033",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-06T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2033,
      "nombre_completo": "Paciente Vecino 2033",
      "dni_ruc": "40002033",
      "telefono": "987002033"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2034",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-07T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2034,
      "nombre_completo": "Paciente Vecino 2034",
      "dni_ruc": "40002034",
      "telefono": "987002034"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2035",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-08T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2035,
      "nombre_completo": "Paciente Vecino 2035",
      "dni_ruc": "40002035",
      "telefono": "987002035"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2036",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-09T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2036,
      "nombre_completo": "Paciente Vecino 2036",
      "dni_ruc": "40002036",
      "telefono": "987002036"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2037",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-10T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2037,
      "nombre_completo": "Paciente Vecino 2037",
      "dni_ruc": "40002037",
      "telefono": "987002037"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2038",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-11T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2038,
      "nombre_completo": "Paciente Vecino 2038",
      "dni_ruc": "40002038",
      "telefono": "987002038"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2039",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-12T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2039,
      "nombre_completo": "Paciente Vecino 2039",
      "dni_ruc": "40002039",
      "telefono": "987002039"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2040",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-13T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2040,
      "nombre_completo": "Paciente Vecino 2040",
      "dni_ruc": "40002040",
      "telefono": "987002040"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2041",
    "farmacia_id": 2,
    "fecha": new Date("2026-06-14T10:47:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2041,
      "nombre_completo": "Paciente Vecino 2041",
      "dni_ruc": "40002041",
      "telefono": "987002041"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2042",
    "farmacia_id": 3,
    "fecha": new Date("2026-07-15T10:54:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2042,
      "nombre_completo": "Paciente Vecino 2042",
      "dni_ruc": "40002042",
      "telefono": "987002042"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 8.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2043",
    "farmacia_id": 4,
    "fecha": new Date("2026-08-16T10:01:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2043,
      "nombre_completo": "Paciente Vecino 2043",
      "dni_ruc": "40002043",
      "telefono": "987002043"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2044",
    "farmacia_id": 5,
    "fecha": new Date("2026-09-17T10:08:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2044,
      "nombre_completo": "Paciente Vecino 2044",
      "dni_ruc": "40002044",
      "telefono": "987002044"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 14.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2045",
    "farmacia_id": 6,
    "fecha": new Date("2026-10-18T10:15:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2045,
      "nombre_completo": "Paciente Vecino 2045",
      "dni_ruc": "40002045",
      "telefono": "987002045"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2046",
    "farmacia_id": 7,
    "fecha": new Date("2026-11-19T10:22:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2046,
      "nombre_completo": "Paciente Vecino 2046",
      "dni_ruc": "40002046",
      "telefono": "987002046"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 37.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2047",
    "farmacia_id": 8,
    "fecha": new Date("2026-12-20T10:29:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2047,
      "nombre_completo": "Paciente Vecino 2047",
      "dni_ruc": "40002047",
      "telefono": "987002047"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2048",
    "farmacia_id": 9,
    "fecha": new Date("2026-01-21T10:36:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2048,
      "nombre_completo": "Paciente Vecino 2048",
      "dni_ruc": "40002048",
      "telefono": "987002048"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 21.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2049",
    "farmacia_id": 10,
    "fecha": new Date("2026-02-22T10:43:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2049,
      "nombre_completo": "Paciente Vecino 2049",
      "dni_ruc": "40002049",
      "telefono": "987002049"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2050",
    "farmacia_id": 1,
    "fecha": new Date("2026-03-23T10:50:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2050,
      "nombre_completo": "Paciente Vecino 2050",
      "dni_ruc": "40002050",
      "telefono": "987002050"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2051",
    "farmacia_id": 2,
    "fecha": new Date("2026-04-24T10:57:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2051,
      "nombre_completo": "Paciente Vecino 2051",
      "dni_ruc": "40002051",
      "telefono": "987002051"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2052",
    "farmacia_id": 3,
    "fecha": new Date("2026-05-25T10:04:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2052,
      "nombre_completo": "Paciente Vecino 2052",
      "dni_ruc": "40002052",
      "telefono": "987002052"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 5.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2053",
    "farmacia_id": 4,
    "fecha": new Date("2026-06-26T10:11:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2053,
      "nombre_completo": "Paciente Vecino 2053",
      "dni_ruc": "40002053",
      "telefono": "987002053"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2054",
    "farmacia_id": 5,
    "fecha": new Date("2026-07-27T10:18:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2054,
      "nombre_completo": "Paciente Vecino 2054",
      "dni_ruc": "40002054",
      "telefono": "987002054"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2055",
    "farmacia_id": 6,
    "fecha": new Date("2026-08-28T10:25:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2055,
      "nombre_completo": "Paciente Vecino 2055",
      "dni_ruc": "40002055",
      "telefono": "987002055"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2056",
    "farmacia_id": 7,
    "fecha": new Date("2026-09-01T10:32:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2056,
      "nombre_completo": "Paciente Vecino 2056",
      "dni_ruc": "40002056",
      "telefono": "987002056"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 40.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2057",
    "farmacia_id": 8,
    "fecha": new Date("2026-10-02T10:39:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2057,
      "nombre_completo": "Paciente Vecino 2057",
      "dni_ruc": "40002057",
      "telefono": "987002057"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2058",
    "farmacia_id": 9,
    "fecha": new Date("2026-11-03T10:46:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2058,
      "nombre_completo": "Paciente Vecino 2058",
      "dni_ruc": "40002058",
      "telefono": "987002058"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 61.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2059",
    "farmacia_id": 10,
    "fecha": new Date("2026-12-04T10:53:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2059,
      "nombre_completo": "Paciente Vecino 2059",
      "dni_ruc": "40002059",
      "telefono": "987002059"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2060",
    "farmacia_id": 1,
    "fecha": new Date("2026-01-05T10:00:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2060,
      "nombre_completo": "Paciente Vecino 2060",
      "dni_ruc": "40002060",
      "telefono": "987002060"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2061",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-06T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2061,
      "nombre_completo": "Paciente Vecino 2061",
      "dni_ruc": "40002061",
      "telefono": "987002061"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2062",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-07T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2062,
      "nombre_completo": "Paciente Vecino 2062",
      "dni_ruc": "40002062",
      "telefono": "987002062"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2063",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-08T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2063,
      "nombre_completo": "Paciente Vecino 2063",
      "dni_ruc": "40002063",
      "telefono": "987002063"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2064",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-09T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2064,
      "nombre_completo": "Paciente Vecino 2064",
      "dni_ruc": "40002064",
      "telefono": "987002064"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2065",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-10T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2065,
      "nombre_completo": "Paciente Vecino 2065",
      "dni_ruc": "40002065",
      "telefono": "987002065"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2066",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-11T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2066,
      "nombre_completo": "Paciente Vecino 2066",
      "dni_ruc": "40002066",
      "telefono": "987002066"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2067",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-12T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2067,
      "nombre_completo": "Paciente Vecino 2067",
      "dni_ruc": "40002067",
      "telefono": "987002067"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2068",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-13T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2068,
      "nombre_completo": "Paciente Vecino 2068",
      "dni_ruc": "40002068",
      "telefono": "987002068"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2069",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-14T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2069,
      "nombre_completo": "Paciente Vecino 2069",
      "dni_ruc": "40002069",
      "telefono": "987002069"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2070",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-15T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2070,
      "nombre_completo": "Paciente Vecino 2070",
      "dni_ruc": "40002070",
      "telefono": "987002070"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2071",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-16T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2071,
      "nombre_completo": "Paciente Vecino 2071",
      "dni_ruc": "40002071",
      "telefono": "987002071"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2072",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-17T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2072,
      "nombre_completo": "Paciente Vecino 2072",
      "dni_ruc": "40002072",
      "telefono": "987002072"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2073",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-18T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2073,
      "nombre_completo": "Paciente Vecino 2073",
      "dni_ruc": "40002073",
      "telefono": "987002073"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2074",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-19T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2074,
      "nombre_completo": "Paciente Vecino 2074",
      "dni_ruc": "40002074",
      "telefono": "987002074"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2075",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-20T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2075,
      "nombre_completo": "Paciente Vecino 2075",
      "dni_ruc": "40002075",
      "telefono": "987002075"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2076",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-21T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2076,
      "nombre_completo": "Paciente Vecino 2076",
      "dni_ruc": "40002076",
      "telefono": "987002076"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2077",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-22T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2077,
      "nombre_completo": "Paciente Vecino 2077",
      "dni_ruc": "40002077",
      "telefono": "987002077"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2078",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-23T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2078,
      "nombre_completo": "Paciente Vecino 2078",
      "dni_ruc": "40002078",
      "telefono": "987002078"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2079",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-24T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2079,
      "nombre_completo": "Paciente Vecino 2079",
      "dni_ruc": "40002079",
      "telefono": "987002079"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2080",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-25T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2080,
      "nombre_completo": "Paciente Vecino 2080",
      "dni_ruc": "40002080",
      "telefono": "987002080"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2081",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-26T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2081,
      "nombre_completo": "Paciente Vecino 2081",
      "dni_ruc": "40002081",
      "telefono": "987002081"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2082",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-27T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2082,
      "nombre_completo": "Paciente Vecino 2082",
      "dni_ruc": "40002082",
      "telefono": "987002082"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2083",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-28T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2083,
      "nombre_completo": "Paciente Vecino 2083",
      "dni_ruc": "40002083",
      "telefono": "987002083"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2084",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-01T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2084,
      "nombre_completo": "Paciente Vecino 2084",
      "dni_ruc": "40002084",
      "telefono": "987002084"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2085",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-02T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2085,
      "nombre_completo": "Paciente Vecino 2085",
      "dni_ruc": "40002085",
      "telefono": "987002085"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2086",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-03T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2086,
      "nombre_completo": "Paciente Vecino 2086",
      "dni_ruc": "40002086",
      "telefono": "987002086"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2087",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-04T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2087,
      "nombre_completo": "Paciente Vecino 2087",
      "dni_ruc": "40002087",
      "telefono": "987002087"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2088",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-05T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2088,
      "nombre_completo": "Paciente Vecino 2088",
      "dni_ruc": "40002088",
      "telefono": "987002088"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2089",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-06T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2089,
      "nombre_completo": "Paciente Vecino 2089",
      "dni_ruc": "40002089",
      "telefono": "987002089"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2090",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-07T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2090,
      "nombre_completo": "Paciente Vecino 2090",
      "dni_ruc": "40002090",
      "telefono": "987002090"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2091",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-08T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2091,
      "nombre_completo": "Paciente Vecino 2091",
      "dni_ruc": "40002091",
      "telefono": "987002091"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2092",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-09T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2092,
      "nombre_completo": "Paciente Vecino 2092",
      "dni_ruc": "40002092",
      "telefono": "987002092"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2093",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-10T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2093,
      "nombre_completo": "Paciente Vecino 2093",
      "dni_ruc": "40002093",
      "telefono": "987002093"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2094",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-11T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2094,
      "nombre_completo": "Paciente Vecino 2094",
      "dni_ruc": "40002094",
      "telefono": "987002094"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2095",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-12T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2095,
      "nombre_completo": "Paciente Vecino 2095",
      "dni_ruc": "40002095",
      "telefono": "987002095"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2096",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-13T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2096,
      "nombre_completo": "Paciente Vecino 2096",
      "dni_ruc": "40002096",
      "telefono": "987002096"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2097",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-14T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2097,
      "nombre_completo": "Paciente Vecino 2097",
      "dni_ruc": "40002097",
      "telefono": "987002097"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2098",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-15T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2098,
      "nombre_completo": "Paciente Vecino 2098",
      "dni_ruc": "40002098",
      "telefono": "987002098"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2099",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-16T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2099,
      "nombre_completo": "Paciente Vecino 2099",
      "dni_ruc": "40002099",
      "telefono": "987002099"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2100",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-17T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2100,
      "nombre_completo": "Paciente Vecino 2100",
      "dni_ruc": "40002100",
      "telefono": "987002100"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  }
]);

// ------------------------------------------------------------------------------
// INTEGRANTE 3: Nicole Garcia (100 Ventas Históricas)
// ------------------------------------------------------------------------------
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-NG-3001",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-02T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3001,
      "nombre_completo": "Paciente Vecino 3001",
      "dni_ruc": "40003001",
      "telefono": "987003001"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3002",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-03T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3002,
      "nombre_completo": "Paciente Vecino 3002",
      "dni_ruc": "40003002",
      "telefono": "987003002"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3003",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-04T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3003,
      "nombre_completo": "Paciente Vecino 3003",
      "dni_ruc": "40003003",
      "telefono": "987003003"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3004",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-05T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3004,
      "nombre_completo": "Paciente Vecino 3004",
      "dni_ruc": "40003004",
      "telefono": "987003004"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3005",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-06T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3005,
      "nombre_completo": "Paciente Vecino 3005",
      "dni_ruc": "40003005",
      "telefono": "987003005"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3006",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-07T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3006,
      "nombre_completo": "Paciente Vecino 3006",
      "dni_ruc": "40003006",
      "telefono": "987003006"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3007",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-08T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3007,
      "nombre_completo": "Paciente Vecino 3007",
      "dni_ruc": "40003007",
      "telefono": "987003007"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3008",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-09T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3008,
      "nombre_completo": "Paciente Vecino 3008",
      "dni_ruc": "40003008",
      "telefono": "987003008"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3009",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-10T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3009,
      "nombre_completo": "Paciente Vecino 3009",
      "dni_ruc": "40003009",
      "telefono": "987003009"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3010",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-11T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3010,
      "nombre_completo": "Paciente Vecino 3010",
      "dni_ruc": "40003010",
      "telefono": "987003010"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3011",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-12T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3011,
      "nombre_completo": "Paciente Vecino 3011",
      "dni_ruc": "40003011",
      "telefono": "987003011"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3012",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-13T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3012,
      "nombre_completo": "Paciente Vecino 3012",
      "dni_ruc": "40003012",
      "telefono": "987003012"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3013",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-14T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3013,
      "nombre_completo": "Paciente Vecino 3013",
      "dni_ruc": "40003013",
      "telefono": "987003013"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3014",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-15T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3014,
      "nombre_completo": "Paciente Vecino 3014",
      "dni_ruc": "40003014",
      "telefono": "987003014"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3015",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-16T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3015,
      "nombre_completo": "Paciente Vecino 3015",
      "dni_ruc": "40003015",
      "telefono": "987003015"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3016",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-17T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3016,
      "nombre_completo": "Paciente Vecino 3016",
      "dni_ruc": "40003016",
      "telefono": "987003016"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3017",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-18T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3017,
      "nombre_completo": "Paciente Vecino 3017",
      "dni_ruc": "40003017",
      "telefono": "987003017"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3018",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-19T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3018,
      "nombre_completo": "Paciente Vecino 3018",
      "dni_ruc": "40003018",
      "telefono": "987003018"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3019",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-20T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3019,
      "nombre_completo": "Paciente Vecino 3019",
      "dni_ruc": "40003019",
      "telefono": "987003019"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3020",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-21T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3020,
      "nombre_completo": "Paciente Vecino 3020",
      "dni_ruc": "40003020",
      "telefono": "987003020"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3021",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-22T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3021,
      "nombre_completo": "Paciente Vecino 3021",
      "dni_ruc": "40003021",
      "telefono": "987003021"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3022",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-23T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3022,
      "nombre_completo": "Paciente Vecino 3022",
      "dni_ruc": "40003022",
      "telefono": "987003022"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3023",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-24T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3023,
      "nombre_completo": "Paciente Vecino 3023",
      "dni_ruc": "40003023",
      "telefono": "987003023"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3024",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-25T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3024,
      "nombre_completo": "Paciente Vecino 3024",
      "dni_ruc": "40003024",
      "telefono": "987003024"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3025",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-26T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3025,
      "nombre_completo": "Paciente Vecino 3025",
      "dni_ruc": "40003025",
      "telefono": "987003025"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3026",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-27T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3026,
      "nombre_completo": "Paciente Vecino 3026",
      "dni_ruc": "40003026",
      "telefono": "987003026"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3027",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-28T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3027,
      "nombre_completo": "Paciente Vecino 3027",
      "dni_ruc": "40003027",
      "telefono": "987003027"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3028",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-01T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3028,
      "nombre_completo": "Paciente Vecino 3028",
      "dni_ruc": "40003028",
      "telefono": "987003028"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3029",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-02T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3029,
      "nombre_completo": "Paciente Vecino 3029",
      "dni_ruc": "40003029",
      "telefono": "987003029"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3030",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-03T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3030,
      "nombre_completo": "Paciente Vecino 3030",
      "dni_ruc": "40003030",
      "telefono": "987003030"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3031",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-04T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3031,
      "nombre_completo": "Paciente Vecino 3031",
      "dni_ruc": "40003031",
      "telefono": "987003031"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3032",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-05T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3032,
      "nombre_completo": "Paciente Vecino 3032",
      "dni_ruc": "40003032",
      "telefono": "987003032"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3033",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-06T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3033,
      "nombre_completo": "Paciente Vecino 3033",
      "dni_ruc": "40003033",
      "telefono": "987003033"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3034",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-07T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3034,
      "nombre_completo": "Paciente Vecino 3034",
      "dni_ruc": "40003034",
      "telefono": "987003034"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3035",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-08T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3035,
      "nombre_completo": "Paciente Vecino 3035",
      "dni_ruc": "40003035",
      "telefono": "987003035"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3036",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-09T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3036,
      "nombre_completo": "Paciente Vecino 3036",
      "dni_ruc": "40003036",
      "telefono": "987003036"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3037",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-10T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3037,
      "nombre_completo": "Paciente Vecino 3037",
      "dni_ruc": "40003037",
      "telefono": "987003037"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3038",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-11T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3038,
      "nombre_completo": "Paciente Vecino 3038",
      "dni_ruc": "40003038",
      "telefono": "987003038"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3039",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-12T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3039,
      "nombre_completo": "Paciente Vecino 3039",
      "dni_ruc": "40003039",
      "telefono": "987003039"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3040",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-13T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3040,
      "nombre_completo": "Paciente Vecino 3040",
      "dni_ruc": "40003040",
      "telefono": "987003040"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3041",
    "farmacia_id": 2,
    "fecha": new Date("2026-06-14T10:47:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3041,
      "nombre_completo": "Paciente Vecino 3041",
      "dni_ruc": "40003041",
      "telefono": "987003041"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3042",
    "farmacia_id": 3,
    "fecha": new Date("2026-07-15T10:54:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3042,
      "nombre_completo": "Paciente Vecino 3042",
      "dni_ruc": "40003042",
      "telefono": "987003042"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 8.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3043",
    "farmacia_id": 4,
    "fecha": new Date("2026-08-16T10:01:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3043,
      "nombre_completo": "Paciente Vecino 3043",
      "dni_ruc": "40003043",
      "telefono": "987003043"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3044",
    "farmacia_id": 5,
    "fecha": new Date("2026-09-17T10:08:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3044,
      "nombre_completo": "Paciente Vecino 3044",
      "dni_ruc": "40003044",
      "telefono": "987003044"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 14.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3045",
    "farmacia_id": 6,
    "fecha": new Date("2026-10-18T10:15:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3045,
      "nombre_completo": "Paciente Vecino 3045",
      "dni_ruc": "40003045",
      "telefono": "987003045"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3046",
    "farmacia_id": 7,
    "fecha": new Date("2026-11-19T10:22:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3046,
      "nombre_completo": "Paciente Vecino 3046",
      "dni_ruc": "40003046",
      "telefono": "987003046"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 37.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3047",
    "farmacia_id": 8,
    "fecha": new Date("2026-12-20T10:29:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3047,
      "nombre_completo": "Paciente Vecino 3047",
      "dni_ruc": "40003047",
      "telefono": "987003047"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3048",
    "farmacia_id": 9,
    "fecha": new Date("2026-01-21T10:36:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3048,
      "nombre_completo": "Paciente Vecino 3048",
      "dni_ruc": "40003048",
      "telefono": "987003048"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 21.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3049",
    "farmacia_id": 10,
    "fecha": new Date("2026-02-22T10:43:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3049,
      "nombre_completo": "Paciente Vecino 3049",
      "dni_ruc": "40003049",
      "telefono": "987003049"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3050",
    "farmacia_id": 1,
    "fecha": new Date("2026-03-23T10:50:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3050,
      "nombre_completo": "Paciente Vecino 3050",
      "dni_ruc": "40003050",
      "telefono": "987003050"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3051",
    "farmacia_id": 2,
    "fecha": new Date("2026-04-24T10:57:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3051,
      "nombre_completo": "Paciente Vecino 3051",
      "dni_ruc": "40003051",
      "telefono": "987003051"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3052",
    "farmacia_id": 3,
    "fecha": new Date("2026-05-25T10:04:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3052,
      "nombre_completo": "Paciente Vecino 3052",
      "dni_ruc": "40003052",
      "telefono": "987003052"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 5.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3053",
    "farmacia_id": 4,
    "fecha": new Date("2026-06-26T10:11:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3053,
      "nombre_completo": "Paciente Vecino 3053",
      "dni_ruc": "40003053",
      "telefono": "987003053"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3054",
    "farmacia_id": 5,
    "fecha": new Date("2026-07-27T10:18:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3054,
      "nombre_completo": "Paciente Vecino 3054",
      "dni_ruc": "40003054",
      "telefono": "987003054"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3055",
    "farmacia_id": 6,
    "fecha": new Date("2026-08-28T10:25:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3055,
      "nombre_completo": "Paciente Vecino 3055",
      "dni_ruc": "40003055",
      "telefono": "987003055"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3056",
    "farmacia_id": 7,
    "fecha": new Date("2026-09-01T10:32:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3056,
      "nombre_completo": "Paciente Vecino 3056",
      "dni_ruc": "40003056",
      "telefono": "987003056"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 40.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3057",
    "farmacia_id": 8,
    "fecha": new Date("2026-10-02T10:39:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3057,
      "nombre_completo": "Paciente Vecino 3057",
      "dni_ruc": "40003057",
      "telefono": "987003057"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3058",
    "farmacia_id": 9,
    "fecha": new Date("2026-11-03T10:46:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3058,
      "nombre_completo": "Paciente Vecino 3058",
      "dni_ruc": "40003058",
      "telefono": "987003058"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 61.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3059",
    "farmacia_id": 10,
    "fecha": new Date("2026-12-04T10:53:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3059,
      "nombre_completo": "Paciente Vecino 3059",
      "dni_ruc": "40003059",
      "telefono": "987003059"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3060",
    "farmacia_id": 1,
    "fecha": new Date("2026-01-05T10:00:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3060,
      "nombre_completo": "Paciente Vecino 3060",
      "dni_ruc": "40003060",
      "telefono": "987003060"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3061",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-06T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3061,
      "nombre_completo": "Paciente Vecino 3061",
      "dni_ruc": "40003061",
      "telefono": "987003061"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3062",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-07T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3062,
      "nombre_completo": "Paciente Vecino 3062",
      "dni_ruc": "40003062",
      "telefono": "987003062"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3063",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-08T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3063,
      "nombre_completo": "Paciente Vecino 3063",
      "dni_ruc": "40003063",
      "telefono": "987003063"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3064",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-09T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3064,
      "nombre_completo": "Paciente Vecino 3064",
      "dni_ruc": "40003064",
      "telefono": "987003064"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3065",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-10T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3065,
      "nombre_completo": "Paciente Vecino 3065",
      "dni_ruc": "40003065",
      "telefono": "987003065"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3066",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-11T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3066,
      "nombre_completo": "Paciente Vecino 3066",
      "dni_ruc": "40003066",
      "telefono": "987003066"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3067",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-12T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3067,
      "nombre_completo": "Paciente Vecino 3067",
      "dni_ruc": "40003067",
      "telefono": "987003067"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3068",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-13T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3068,
      "nombre_completo": "Paciente Vecino 3068",
      "dni_ruc": "40003068",
      "telefono": "987003068"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3069",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-14T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3069,
      "nombre_completo": "Paciente Vecino 3069",
      "dni_ruc": "40003069",
      "telefono": "987003069"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3070",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-15T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3070,
      "nombre_completo": "Paciente Vecino 3070",
      "dni_ruc": "40003070",
      "telefono": "987003070"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3071",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-16T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3071,
      "nombre_completo": "Paciente Vecino 3071",
      "dni_ruc": "40003071",
      "telefono": "987003071"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3072",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-17T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3072,
      "nombre_completo": "Paciente Vecino 3072",
      "dni_ruc": "40003072",
      "telefono": "987003072"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3073",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-18T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3073,
      "nombre_completo": "Paciente Vecino 3073",
      "dni_ruc": "40003073",
      "telefono": "987003073"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3074",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-19T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3074,
      "nombre_completo": "Paciente Vecino 3074",
      "dni_ruc": "40003074",
      "telefono": "987003074"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3075",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-20T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3075,
      "nombre_completo": "Paciente Vecino 3075",
      "dni_ruc": "40003075",
      "telefono": "987003075"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3076",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-21T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3076,
      "nombre_completo": "Paciente Vecino 3076",
      "dni_ruc": "40003076",
      "telefono": "987003076"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3077",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-22T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3077,
      "nombre_completo": "Paciente Vecino 3077",
      "dni_ruc": "40003077",
      "telefono": "987003077"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3078",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-23T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3078,
      "nombre_completo": "Paciente Vecino 3078",
      "dni_ruc": "40003078",
      "telefono": "987003078"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3079",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-24T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3079,
      "nombre_completo": "Paciente Vecino 3079",
      "dni_ruc": "40003079",
      "telefono": "987003079"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3080",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-25T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3080,
      "nombre_completo": "Paciente Vecino 3080",
      "dni_ruc": "40003080",
      "telefono": "987003080"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3081",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-26T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3081,
      "nombre_completo": "Paciente Vecino 3081",
      "dni_ruc": "40003081",
      "telefono": "987003081"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3082",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-27T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3082,
      "nombre_completo": "Paciente Vecino 3082",
      "dni_ruc": "40003082",
      "telefono": "987003082"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3083",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-28T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3083,
      "nombre_completo": "Paciente Vecino 3083",
      "dni_ruc": "40003083",
      "telefono": "987003083"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3084",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-01T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3084,
      "nombre_completo": "Paciente Vecino 3084",
      "dni_ruc": "40003084",
      "telefono": "987003084"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3085",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-02T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3085,
      "nombre_completo": "Paciente Vecino 3085",
      "dni_ruc": "40003085",
      "telefono": "987003085"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3086",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-03T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3086,
      "nombre_completo": "Paciente Vecino 3086",
      "dni_ruc": "40003086",
      "telefono": "987003086"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3087",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-04T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3087,
      "nombre_completo": "Paciente Vecino 3087",
      "dni_ruc": "40003087",
      "telefono": "987003087"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3088",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-05T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3088,
      "nombre_completo": "Paciente Vecino 3088",
      "dni_ruc": "40003088",
      "telefono": "987003088"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3089",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-06T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3089,
      "nombre_completo": "Paciente Vecino 3089",
      "dni_ruc": "40003089",
      "telefono": "987003089"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3090",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-07T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3090,
      "nombre_completo": "Paciente Vecino 3090",
      "dni_ruc": "40003090",
      "telefono": "987003090"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3091",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-08T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3091,
      "nombre_completo": "Paciente Vecino 3091",
      "dni_ruc": "40003091",
      "telefono": "987003091"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3092",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-09T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3092,
      "nombre_completo": "Paciente Vecino 3092",
      "dni_ruc": "40003092",
      "telefono": "987003092"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3093",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-10T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3093,
      "nombre_completo": "Paciente Vecino 3093",
      "dni_ruc": "40003093",
      "telefono": "987003093"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3094",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-11T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3094,
      "nombre_completo": "Paciente Vecino 3094",
      "dni_ruc": "40003094",
      "telefono": "987003094"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3095",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-12T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3095,
      "nombre_completo": "Paciente Vecino 3095",
      "dni_ruc": "40003095",
      "telefono": "987003095"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3096",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-13T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3096,
      "nombre_completo": "Paciente Vecino 3096",
      "dni_ruc": "40003096",
      "telefono": "987003096"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3097",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-14T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3097,
      "nombre_completo": "Paciente Vecino 3097",
      "dni_ruc": "40003097",
      "telefono": "987003097"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3098",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-15T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3098,
      "nombre_completo": "Paciente Vecino 3098",
      "dni_ruc": "40003098",
      "telefono": "987003098"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3099",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-16T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3099,
      "nombre_completo": "Paciente Vecino 3099",
      "dni_ruc": "40003099",
      "telefono": "987003099"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3100",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-17T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3100,
      "nombre_completo": "Paciente Vecino 3100",
      "dni_ruc": "40003100",
      "telefono": "987003100"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  }
]);

// ------------------------------------------------------------------------------
// INTEGRANTE 4: Jorge Matencio (100 Ventas Históricas)
// ------------------------------------------------------------------------------
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-JM-4001",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-02T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4001,
      "nombre_completo": "Paciente Vecino 4001",
      "dni_ruc": "40004001",
      "telefono": "987004001"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4002",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-03T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4002,
      "nombre_completo": "Paciente Vecino 4002",
      "dni_ruc": "40004002",
      "telefono": "987004002"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4003",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-04T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4003,
      "nombre_completo": "Paciente Vecino 4003",
      "dni_ruc": "40004003",
      "telefono": "987004003"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4004",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-05T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4004,
      "nombre_completo": "Paciente Vecino 4004",
      "dni_ruc": "40004004",
      "telefono": "987004004"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4005",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-06T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4005,
      "nombre_completo": "Paciente Vecino 4005",
      "dni_ruc": "40004005",
      "telefono": "987004005"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4006",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-07T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4006,
      "nombre_completo": "Paciente Vecino 4006",
      "dni_ruc": "40004006",
      "telefono": "987004006"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4007",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-08T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4007,
      "nombre_completo": "Paciente Vecino 4007",
      "dni_ruc": "40004007",
      "telefono": "987004007"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4008",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-09T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4008,
      "nombre_completo": "Paciente Vecino 4008",
      "dni_ruc": "40004008",
      "telefono": "987004008"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4009",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-10T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4009,
      "nombre_completo": "Paciente Vecino 4009",
      "dni_ruc": "40004009",
      "telefono": "987004009"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4010",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-11T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4010,
      "nombre_completo": "Paciente Vecino 4010",
      "dni_ruc": "40004010",
      "telefono": "987004010"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4011",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-12T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4011,
      "nombre_completo": "Paciente Vecino 4011",
      "dni_ruc": "40004011",
      "telefono": "987004011"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4012",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-13T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4012,
      "nombre_completo": "Paciente Vecino 4012",
      "dni_ruc": "40004012",
      "telefono": "987004012"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4013",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-14T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4013,
      "nombre_completo": "Paciente Vecino 4013",
      "dni_ruc": "40004013",
      "telefono": "987004013"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4014",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-15T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4014,
      "nombre_completo": "Paciente Vecino 4014",
      "dni_ruc": "40004014",
      "telefono": "987004014"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4015",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-16T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4015,
      "nombre_completo": "Paciente Vecino 4015",
      "dni_ruc": "40004015",
      "telefono": "987004015"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4016",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-17T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4016,
      "nombre_completo": "Paciente Vecino 4016",
      "dni_ruc": "40004016",
      "telefono": "987004016"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4017",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-18T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4017,
      "nombre_completo": "Paciente Vecino 4017",
      "dni_ruc": "40004017",
      "telefono": "987004017"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4018",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-19T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4018,
      "nombre_completo": "Paciente Vecino 4018",
      "dni_ruc": "40004018",
      "telefono": "987004018"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4019",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-20T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4019,
      "nombre_completo": "Paciente Vecino 4019",
      "dni_ruc": "40004019",
      "telefono": "987004019"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4020",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-21T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4020,
      "nombre_completo": "Paciente Vecino 4020",
      "dni_ruc": "40004020",
      "telefono": "987004020"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4021",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-22T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4021,
      "nombre_completo": "Paciente Vecino 4021",
      "dni_ruc": "40004021",
      "telefono": "987004021"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4022",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-23T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4022,
      "nombre_completo": "Paciente Vecino 4022",
      "dni_ruc": "40004022",
      "telefono": "987004022"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4023",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-24T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4023,
      "nombre_completo": "Paciente Vecino 4023",
      "dni_ruc": "40004023",
      "telefono": "987004023"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4024",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-25T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4024,
      "nombre_completo": "Paciente Vecino 4024",
      "dni_ruc": "40004024",
      "telefono": "987004024"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4025",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-26T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4025,
      "nombre_completo": "Paciente Vecino 4025",
      "dni_ruc": "40004025",
      "telefono": "987004025"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4026",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-27T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4026,
      "nombre_completo": "Paciente Vecino 4026",
      "dni_ruc": "40004026",
      "telefono": "987004026"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4027",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-28T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4027,
      "nombre_completo": "Paciente Vecino 4027",
      "dni_ruc": "40004027",
      "telefono": "987004027"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4028",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-01T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4028,
      "nombre_completo": "Paciente Vecino 4028",
      "dni_ruc": "40004028",
      "telefono": "987004028"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4029",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-02T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4029,
      "nombre_completo": "Paciente Vecino 4029",
      "dni_ruc": "40004029",
      "telefono": "987004029"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4030",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-03T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4030,
      "nombre_completo": "Paciente Vecino 4030",
      "dni_ruc": "40004030",
      "telefono": "987004030"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4031",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-04T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4031,
      "nombre_completo": "Paciente Vecino 4031",
      "dni_ruc": "40004031",
      "telefono": "987004031"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4032",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-05T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4032,
      "nombre_completo": "Paciente Vecino 4032",
      "dni_ruc": "40004032",
      "telefono": "987004032"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4033",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-06T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4033,
      "nombre_completo": "Paciente Vecino 4033",
      "dni_ruc": "40004033",
      "telefono": "987004033"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4034",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-07T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4034,
      "nombre_completo": "Paciente Vecino 4034",
      "dni_ruc": "40004034",
      "telefono": "987004034"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4035",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-08T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4035,
      "nombre_completo": "Paciente Vecino 4035",
      "dni_ruc": "40004035",
      "telefono": "987004035"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4036",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-09T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4036,
      "nombre_completo": "Paciente Vecino 4036",
      "dni_ruc": "40004036",
      "telefono": "987004036"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4037",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-10T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4037,
      "nombre_completo": "Paciente Vecino 4037",
      "dni_ruc": "40004037",
      "telefono": "987004037"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4038",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-11T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4038,
      "nombre_completo": "Paciente Vecino 4038",
      "dni_ruc": "40004038",
      "telefono": "987004038"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4039",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-12T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4039,
      "nombre_completo": "Paciente Vecino 4039",
      "dni_ruc": "40004039",
      "telefono": "987004039"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4040",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-13T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4040,
      "nombre_completo": "Paciente Vecino 4040",
      "dni_ruc": "40004040",
      "telefono": "987004040"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4041",
    "farmacia_id": 2,
    "fecha": new Date("2026-06-14T10:47:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4041,
      "nombre_completo": "Paciente Vecino 4041",
      "dni_ruc": "40004041",
      "telefono": "987004041"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4042",
    "farmacia_id": 3,
    "fecha": new Date("2026-07-15T10:54:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4042,
      "nombre_completo": "Paciente Vecino 4042",
      "dni_ruc": "40004042",
      "telefono": "987004042"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 8.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4043",
    "farmacia_id": 4,
    "fecha": new Date("2026-08-16T10:01:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4043,
      "nombre_completo": "Paciente Vecino 4043",
      "dni_ruc": "40004043",
      "telefono": "987004043"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4044",
    "farmacia_id": 5,
    "fecha": new Date("2026-09-17T10:08:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4044,
      "nombre_completo": "Paciente Vecino 4044",
      "dni_ruc": "40004044",
      "telefono": "987004044"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 14.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4045",
    "farmacia_id": 6,
    "fecha": new Date("2026-10-18T10:15:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4045,
      "nombre_completo": "Paciente Vecino 4045",
      "dni_ruc": "40004045",
      "telefono": "987004045"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4046",
    "farmacia_id": 7,
    "fecha": new Date("2026-11-19T10:22:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4046,
      "nombre_completo": "Paciente Vecino 4046",
      "dni_ruc": "40004046",
      "telefono": "987004046"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 37.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4047",
    "farmacia_id": 8,
    "fecha": new Date("2026-12-20T10:29:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4047,
      "nombre_completo": "Paciente Vecino 4047",
      "dni_ruc": "40004047",
      "telefono": "987004047"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4048",
    "farmacia_id": 9,
    "fecha": new Date("2026-01-21T10:36:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4048,
      "nombre_completo": "Paciente Vecino 4048",
      "dni_ruc": "40004048",
      "telefono": "987004048"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 21.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4049",
    "farmacia_id": 10,
    "fecha": new Date("2026-02-22T10:43:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4049,
      "nombre_completo": "Paciente Vecino 4049",
      "dni_ruc": "40004049",
      "telefono": "987004049"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4050",
    "farmacia_id": 1,
    "fecha": new Date("2026-03-23T10:50:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4050,
      "nombre_completo": "Paciente Vecino 4050",
      "dni_ruc": "40004050",
      "telefono": "987004050"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4051",
    "farmacia_id": 2,
    "fecha": new Date("2026-04-24T10:57:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4051,
      "nombre_completo": "Paciente Vecino 4051",
      "dni_ruc": "40004051",
      "telefono": "987004051"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4052",
    "farmacia_id": 3,
    "fecha": new Date("2026-05-25T10:04:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4052,
      "nombre_completo": "Paciente Vecino 4052",
      "dni_ruc": "40004052",
      "telefono": "987004052"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 5.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4053",
    "farmacia_id": 4,
    "fecha": new Date("2026-06-26T10:11:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4053,
      "nombre_completo": "Paciente Vecino 4053",
      "dni_ruc": "40004053",
      "telefono": "987004053"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4054",
    "farmacia_id": 5,
    "fecha": new Date("2026-07-27T10:18:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4054,
      "nombre_completo": "Paciente Vecino 4054",
      "dni_ruc": "40004054",
      "telefono": "987004054"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4055",
    "farmacia_id": 6,
    "fecha": new Date("2026-08-28T10:25:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4055,
      "nombre_completo": "Paciente Vecino 4055",
      "dni_ruc": "40004055",
      "telefono": "987004055"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4056",
    "farmacia_id": 7,
    "fecha": new Date("2026-09-01T10:32:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4056,
      "nombre_completo": "Paciente Vecino 4056",
      "dni_ruc": "40004056",
      "telefono": "987004056"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 40.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4057",
    "farmacia_id": 8,
    "fecha": new Date("2026-10-02T10:39:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4057,
      "nombre_completo": "Paciente Vecino 4057",
      "dni_ruc": "40004057",
      "telefono": "987004057"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4058",
    "farmacia_id": 9,
    "fecha": new Date("2026-11-03T10:46:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4058,
      "nombre_completo": "Paciente Vecino 4058",
      "dni_ruc": "40004058",
      "telefono": "987004058"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 61.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4059",
    "farmacia_id": 10,
    "fecha": new Date("2026-12-04T10:53:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4059,
      "nombre_completo": "Paciente Vecino 4059",
      "dni_ruc": "40004059",
      "telefono": "987004059"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4060",
    "farmacia_id": 1,
    "fecha": new Date("2026-01-05T10:00:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4060,
      "nombre_completo": "Paciente Vecino 4060",
      "dni_ruc": "40004060",
      "telefono": "987004060"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4061",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-06T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4061,
      "nombre_completo": "Paciente Vecino 4061",
      "dni_ruc": "40004061",
      "telefono": "987004061"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4062",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-07T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4062,
      "nombre_completo": "Paciente Vecino 4062",
      "dni_ruc": "40004062",
      "telefono": "987004062"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4063",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-08T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4063,
      "nombre_completo": "Paciente Vecino 4063",
      "dni_ruc": "40004063",
      "telefono": "987004063"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4064",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-09T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4064,
      "nombre_completo": "Paciente Vecino 4064",
      "dni_ruc": "40004064",
      "telefono": "987004064"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4065",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-10T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4065,
      "nombre_completo": "Paciente Vecino 4065",
      "dni_ruc": "40004065",
      "telefono": "987004065"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4066",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-11T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4066,
      "nombre_completo": "Paciente Vecino 4066",
      "dni_ruc": "40004066",
      "telefono": "987004066"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4067",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-12T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4067,
      "nombre_completo": "Paciente Vecino 4067",
      "dni_ruc": "40004067",
      "telefono": "987004067"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4068",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-13T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4068,
      "nombre_completo": "Paciente Vecino 4068",
      "dni_ruc": "40004068",
      "telefono": "987004068"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4069",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-14T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4069,
      "nombre_completo": "Paciente Vecino 4069",
      "dni_ruc": "40004069",
      "telefono": "987004069"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4070",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-15T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4070,
      "nombre_completo": "Paciente Vecino 4070",
      "dni_ruc": "40004070",
      "telefono": "987004070"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4071",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-16T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4071,
      "nombre_completo": "Paciente Vecino 4071",
      "dni_ruc": "40004071",
      "telefono": "987004071"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4072",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-17T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4072,
      "nombre_completo": "Paciente Vecino 4072",
      "dni_ruc": "40004072",
      "telefono": "987004072"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4073",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-18T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4073,
      "nombre_completo": "Paciente Vecino 4073",
      "dni_ruc": "40004073",
      "telefono": "987004073"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4074",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-19T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4074,
      "nombre_completo": "Paciente Vecino 4074",
      "dni_ruc": "40004074",
      "telefono": "987004074"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4075",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-20T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4075,
      "nombre_completo": "Paciente Vecino 4075",
      "dni_ruc": "40004075",
      "telefono": "987004075"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4076",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-21T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4076,
      "nombre_completo": "Paciente Vecino 4076",
      "dni_ruc": "40004076",
      "telefono": "987004076"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4077",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-22T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4077,
      "nombre_completo": "Paciente Vecino 4077",
      "dni_ruc": "40004077",
      "telefono": "987004077"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4078",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-23T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4078,
      "nombre_completo": "Paciente Vecino 4078",
      "dni_ruc": "40004078",
      "telefono": "987004078"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4079",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-24T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4079,
      "nombre_completo": "Paciente Vecino 4079",
      "dni_ruc": "40004079",
      "telefono": "987004079"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4080",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-25T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4080,
      "nombre_completo": "Paciente Vecino 4080",
      "dni_ruc": "40004080",
      "telefono": "987004080"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4081",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-26T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4081,
      "nombre_completo": "Paciente Vecino 4081",
      "dni_ruc": "40004081",
      "telefono": "987004081"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4082",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-27T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4082,
      "nombre_completo": "Paciente Vecino 4082",
      "dni_ruc": "40004082",
      "telefono": "987004082"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4083",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-28T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4083,
      "nombre_completo": "Paciente Vecino 4083",
      "dni_ruc": "40004083",
      "telefono": "987004083"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4084",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-01T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4084,
      "nombre_completo": "Paciente Vecino 4084",
      "dni_ruc": "40004084",
      "telefono": "987004084"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4085",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-02T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4085,
      "nombre_completo": "Paciente Vecino 4085",
      "dni_ruc": "40004085",
      "telefono": "987004085"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4086",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-03T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4086,
      "nombre_completo": "Paciente Vecino 4086",
      "dni_ruc": "40004086",
      "telefono": "987004086"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4087",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-04T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4087,
      "nombre_completo": "Paciente Vecino 4087",
      "dni_ruc": "40004087",
      "telefono": "987004087"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4088",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-05T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4088,
      "nombre_completo": "Paciente Vecino 4088",
      "dni_ruc": "40004088",
      "telefono": "987004088"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4089",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-06T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4089,
      "nombre_completo": "Paciente Vecino 4089",
      "dni_ruc": "40004089",
      "telefono": "987004089"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4090",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-07T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4090,
      "nombre_completo": "Paciente Vecino 4090",
      "dni_ruc": "40004090",
      "telefono": "987004090"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4091",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-08T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4091,
      "nombre_completo": "Paciente Vecino 4091",
      "dni_ruc": "40004091",
      "telefono": "987004091"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4092",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-09T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4092,
      "nombre_completo": "Paciente Vecino 4092",
      "dni_ruc": "40004092",
      "telefono": "987004092"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4093",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-10T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4093,
      "nombre_completo": "Paciente Vecino 4093",
      "dni_ruc": "40004093",
      "telefono": "987004093"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4094",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-11T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4094,
      "nombre_completo": "Paciente Vecino 4094",
      "dni_ruc": "40004094",
      "telefono": "987004094"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4095",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-12T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4095,
      "nombre_completo": "Paciente Vecino 4095",
      "dni_ruc": "40004095",
      "telefono": "987004095"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4096",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-13T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4096,
      "nombre_completo": "Paciente Vecino 4096",
      "dni_ruc": "40004096",
      "telefono": "987004096"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4097",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-14T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4097,
      "nombre_completo": "Paciente Vecino 4097",
      "dni_ruc": "40004097",
      "telefono": "987004097"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4098",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-15T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4098,
      "nombre_completo": "Paciente Vecino 4098",
      "dni_ruc": "40004098",
      "telefono": "987004098"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4099",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-16T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4099,
      "nombre_completo": "Paciente Vecino 4099",
      "dni_ruc": "40004099",
      "telefono": "987004099"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4100",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-17T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4100,
      "nombre_completo": "Paciente Vecino 4100",
      "dni_ruc": "40004100",
      "telefono": "987004100"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  }
]);

// ------------------------------------------------------------------------------
// INTEGRANTE 5: Dereck Rojas (100 Ventas Históricas)
// ------------------------------------------------------------------------------
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-DR-5001",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-02T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5001,
      "nombre_completo": "Paciente Vecino 5001",
      "dni_ruc": "40005001",
      "telefono": "987005001"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5002",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-03T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5002,
      "nombre_completo": "Paciente Vecino 5002",
      "dni_ruc": "40005002",
      "telefono": "987005002"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5003",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-04T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5003,
      "nombre_completo": "Paciente Vecino 5003",
      "dni_ruc": "40005003",
      "telefono": "987005003"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5004",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-05T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5004,
      "nombre_completo": "Paciente Vecino 5004",
      "dni_ruc": "40005004",
      "telefono": "987005004"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5005",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-06T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5005,
      "nombre_completo": "Paciente Vecino 5005",
      "dni_ruc": "40005005",
      "telefono": "987005005"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5006",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-07T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5006,
      "nombre_completo": "Paciente Vecino 5006",
      "dni_ruc": "40005006",
      "telefono": "987005006"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5007",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-08T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5007,
      "nombre_completo": "Paciente Vecino 5007",
      "dni_ruc": "40005007",
      "telefono": "987005007"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5008",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-09T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5008,
      "nombre_completo": "Paciente Vecino 5008",
      "dni_ruc": "40005008",
      "telefono": "987005008"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5009",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-10T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5009,
      "nombre_completo": "Paciente Vecino 5009",
      "dni_ruc": "40005009",
      "telefono": "987005009"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5010",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-11T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5010,
      "nombre_completo": "Paciente Vecino 5010",
      "dni_ruc": "40005010",
      "telefono": "987005010"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5011",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-12T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5011,
      "nombre_completo": "Paciente Vecino 5011",
      "dni_ruc": "40005011",
      "telefono": "987005011"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5012",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-13T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5012,
      "nombre_completo": "Paciente Vecino 5012",
      "dni_ruc": "40005012",
      "telefono": "987005012"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5013",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-14T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5013,
      "nombre_completo": "Paciente Vecino 5013",
      "dni_ruc": "40005013",
      "telefono": "987005013"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5014",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-15T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5014,
      "nombre_completo": "Paciente Vecino 5014",
      "dni_ruc": "40005014",
      "telefono": "987005014"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5015",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-16T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5015,
      "nombre_completo": "Paciente Vecino 5015",
      "dni_ruc": "40005015",
      "telefono": "987005015"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5016",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-17T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5016,
      "nombre_completo": "Paciente Vecino 5016",
      "dni_ruc": "40005016",
      "telefono": "987005016"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5017",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-18T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5017,
      "nombre_completo": "Paciente Vecino 5017",
      "dni_ruc": "40005017",
      "telefono": "987005017"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5018",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-19T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5018,
      "nombre_completo": "Paciente Vecino 5018",
      "dni_ruc": "40005018",
      "telefono": "987005018"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5019",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-20T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5019,
      "nombre_completo": "Paciente Vecino 5019",
      "dni_ruc": "40005019",
      "telefono": "987005019"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5020",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-21T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5020,
      "nombre_completo": "Paciente Vecino 5020",
      "dni_ruc": "40005020",
      "telefono": "987005020"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5021",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-22T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5021,
      "nombre_completo": "Paciente Vecino 5021",
      "dni_ruc": "40005021",
      "telefono": "987005021"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5022",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-23T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5022,
      "nombre_completo": "Paciente Vecino 5022",
      "dni_ruc": "40005022",
      "telefono": "987005022"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5023",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-24T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5023,
      "nombre_completo": "Paciente Vecino 5023",
      "dni_ruc": "40005023",
      "telefono": "987005023"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5024",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-25T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5024,
      "nombre_completo": "Paciente Vecino 5024",
      "dni_ruc": "40005024",
      "telefono": "987005024"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5025",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-26T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5025,
      "nombre_completo": "Paciente Vecino 5025",
      "dni_ruc": "40005025",
      "telefono": "987005025"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5026",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-27T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5026,
      "nombre_completo": "Paciente Vecino 5026",
      "dni_ruc": "40005026",
      "telefono": "987005026"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5027",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-28T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5027,
      "nombre_completo": "Paciente Vecino 5027",
      "dni_ruc": "40005027",
      "telefono": "987005027"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5028",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-01T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5028,
      "nombre_completo": "Paciente Vecino 5028",
      "dni_ruc": "40005028",
      "telefono": "987005028"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5029",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-02T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5029,
      "nombre_completo": "Paciente Vecino 5029",
      "dni_ruc": "40005029",
      "telefono": "987005029"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5030",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-03T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5030,
      "nombre_completo": "Paciente Vecino 5030",
      "dni_ruc": "40005030",
      "telefono": "987005030"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5031",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-04T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5031,
      "nombre_completo": "Paciente Vecino 5031",
      "dni_ruc": "40005031",
      "telefono": "987005031"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5032",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-05T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5032,
      "nombre_completo": "Paciente Vecino 5032",
      "dni_ruc": "40005032",
      "telefono": "987005032"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5033",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-06T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5033,
      "nombre_completo": "Paciente Vecino 5033",
      "dni_ruc": "40005033",
      "telefono": "987005033"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5034",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-07T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5034,
      "nombre_completo": "Paciente Vecino 5034",
      "dni_ruc": "40005034",
      "telefono": "987005034"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5035",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-08T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5035,
      "nombre_completo": "Paciente Vecino 5035",
      "dni_ruc": "40005035",
      "telefono": "987005035"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5036",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-09T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5036,
      "nombre_completo": "Paciente Vecino 5036",
      "dni_ruc": "40005036",
      "telefono": "987005036"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5037",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-10T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5037,
      "nombre_completo": "Paciente Vecino 5037",
      "dni_ruc": "40005037",
      "telefono": "987005037"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5038",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-11T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5038,
      "nombre_completo": "Paciente Vecino 5038",
      "dni_ruc": "40005038",
      "telefono": "987005038"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5039",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-12T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5039,
      "nombre_completo": "Paciente Vecino 5039",
      "dni_ruc": "40005039",
      "telefono": "987005039"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5040",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-13T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5040,
      "nombre_completo": "Paciente Vecino 5040",
      "dni_ruc": "40005040",
      "telefono": "987005040"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5041",
    "farmacia_id": 2,
    "fecha": new Date("2026-06-14T10:47:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5041,
      "nombre_completo": "Paciente Vecino 5041",
      "dni_ruc": "40005041",
      "telefono": "987005041"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5042",
    "farmacia_id": 3,
    "fecha": new Date("2026-07-15T10:54:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5042,
      "nombre_completo": "Paciente Vecino 5042",
      "dni_ruc": "40005042",
      "telefono": "987005042"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 8.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5043",
    "farmacia_id": 4,
    "fecha": new Date("2026-08-16T10:01:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5043,
      "nombre_completo": "Paciente Vecino 5043",
      "dni_ruc": "40005043",
      "telefono": "987005043"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5044",
    "farmacia_id": 5,
    "fecha": new Date("2026-09-17T10:08:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5044,
      "nombre_completo": "Paciente Vecino 5044",
      "dni_ruc": "40005044",
      "telefono": "987005044"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 14.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5045",
    "farmacia_id": 6,
    "fecha": new Date("2026-10-18T10:15:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5045,
      "nombre_completo": "Paciente Vecino 5045",
      "dni_ruc": "40005045",
      "telefono": "987005045"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5046",
    "farmacia_id": 7,
    "fecha": new Date("2026-11-19T10:22:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5046,
      "nombre_completo": "Paciente Vecino 5046",
      "dni_ruc": "40005046",
      "telefono": "987005046"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 37.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5047",
    "farmacia_id": 8,
    "fecha": new Date("2026-12-20T10:29:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5047,
      "nombre_completo": "Paciente Vecino 5047",
      "dni_ruc": "40005047",
      "telefono": "987005047"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5048",
    "farmacia_id": 9,
    "fecha": new Date("2026-01-21T10:36:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5048,
      "nombre_completo": "Paciente Vecino 5048",
      "dni_ruc": "40005048",
      "telefono": "987005048"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 21.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5049",
    "farmacia_id": 10,
    "fecha": new Date("2026-02-22T10:43:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5049,
      "nombre_completo": "Paciente Vecino 5049",
      "dni_ruc": "40005049",
      "telefono": "987005049"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5050",
    "farmacia_id": 1,
    "fecha": new Date("2026-03-23T10:50:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5050,
      "nombre_completo": "Paciente Vecino 5050",
      "dni_ruc": "40005050",
      "telefono": "987005050"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5051",
    "farmacia_id": 2,
    "fecha": new Date("2026-04-24T10:57:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5051,
      "nombre_completo": "Paciente Vecino 5051",
      "dni_ruc": "40005051",
      "telefono": "987005051"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5052",
    "farmacia_id": 3,
    "fecha": new Date("2026-05-25T10:04:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5052,
      "nombre_completo": "Paciente Vecino 5052",
      "dni_ruc": "40005052",
      "telefono": "987005052"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 5.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5053",
    "farmacia_id": 4,
    "fecha": new Date("2026-06-26T10:11:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5053,
      "nombre_completo": "Paciente Vecino 5053",
      "dni_ruc": "40005053",
      "telefono": "987005053"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5054",
    "farmacia_id": 5,
    "fecha": new Date("2026-07-27T10:18:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5054,
      "nombre_completo": "Paciente Vecino 5054",
      "dni_ruc": "40005054",
      "telefono": "987005054"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5055",
    "farmacia_id": 6,
    "fecha": new Date("2026-08-28T10:25:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5055,
      "nombre_completo": "Paciente Vecino 5055",
      "dni_ruc": "40005055",
      "telefono": "987005055"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5056",
    "farmacia_id": 7,
    "fecha": new Date("2026-09-01T10:32:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5056,
      "nombre_completo": "Paciente Vecino 5056",
      "dni_ruc": "40005056",
      "telefono": "987005056"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 40.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5057",
    "farmacia_id": 8,
    "fecha": new Date("2026-10-02T10:39:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5057,
      "nombre_completo": "Paciente Vecino 5057",
      "dni_ruc": "40005057",
      "telefono": "987005057"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5058",
    "farmacia_id": 9,
    "fecha": new Date("2026-11-03T10:46:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5058,
      "nombre_completo": "Paciente Vecino 5058",
      "dni_ruc": "40005058",
      "telefono": "987005058"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 61.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5059",
    "farmacia_id": 10,
    "fecha": new Date("2026-12-04T10:53:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5059,
      "nombre_completo": "Paciente Vecino 5059",
      "dni_ruc": "40005059",
      "telefono": "987005059"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5060",
    "farmacia_id": 1,
    "fecha": new Date("2026-01-05T10:00:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5060,
      "nombre_completo": "Paciente Vecino 5060",
      "dni_ruc": "40005060",
      "telefono": "987005060"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5061",
    "farmacia_id": 2,
    "fecha": new Date("2026-02-06T10:07:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5061,
      "nombre_completo": "Paciente Vecino 5061",
      "dni_ruc": "40005061",
      "telefono": "987005061"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5062",
    "farmacia_id": 3,
    "fecha": new Date("2026-03-07T10:14:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5062,
      "nombre_completo": "Paciente Vecino 5062",
      "dni_ruc": "40005062",
      "telefono": "987005062"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5063",
    "farmacia_id": 4,
    "fecha": new Date("2026-04-08T10:21:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5063,
      "nombre_completo": "Paciente Vecino 5063",
      "dni_ruc": "40005063",
      "telefono": "987005063"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5064",
    "farmacia_id": 5,
    "fecha": new Date("2026-05-09T10:28:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5064,
      "nombre_completo": "Paciente Vecino 5064",
      "dni_ruc": "40005064",
      "telefono": "987005064"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 10.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5065",
    "farmacia_id": 6,
    "fecha": new Date("2026-06-10T10:35:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5065,
      "nombre_completo": "Paciente Vecino 5065",
      "dni_ruc": "40005065",
      "telefono": "987005065"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5066",
    "farmacia_id": 7,
    "fecha": new Date("2026-07-11T10:42:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5066,
      "nombre_completo": "Paciente Vecino 5066",
      "dni_ruc": "40005066",
      "telefono": "987005066"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 25.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5067",
    "farmacia_id": 8,
    "fecha": new Date("2026-08-12T10:49:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5067,
      "nombre_completo": "Paciente Vecino 5067",
      "dni_ruc": "40005067",
      "telefono": "987005067"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5068",
    "farmacia_id": 9,
    "fecha": new Date("2026-09-13T10:56:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5068,
      "nombre_completo": "Paciente Vecino 5068",
      "dni_ruc": "40005068",
      "telefono": "987005068"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5069",
    "farmacia_id": 10,
    "fecha": new Date("2026-10-14T10:03:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5069,
      "nombre_completo": "Paciente Vecino 5069",
      "dni_ruc": "40005069",
      "telefono": "987005069"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5070",
    "farmacia_id": 1,
    "fecha": new Date("2026-11-15T10:10:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5070,
      "nombre_completo": "Paciente Vecino 5070",
      "dni_ruc": "40005070",
      "telefono": "987005070"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 21.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5071",
    "farmacia_id": 2,
    "fecha": new Date("2026-12-16T10:17:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5071,
      "nombre_completo": "Paciente Vecino 5071",
      "dni_ruc": "40005071",
      "telefono": "987005071"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5072",
    "farmacia_id": 3,
    "fecha": new Date("2026-01-17T10:24:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5072,
      "nombre_completo": "Paciente Vecino 5072",
      "dni_ruc": "40005072",
      "telefono": "987005072"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 1, "precio_unitario": 1.9, "subtotal": 1.9}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5073",
    "farmacia_id": 4,
    "fecha": new Date("2026-02-18T10:31:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5073,
      "nombre_completo": "Paciente Vecino 5073",
      "dni_ruc": "40005073",
      "telefono": "987005073"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5074",
    "farmacia_id": 5,
    "fecha": new Date("2026-03-19T10:38:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5074,
      "nombre_completo": "Paciente Vecino 5074",
      "dni_ruc": "40005074",
      "telefono": "987005074"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 3, "precio_unitario": 3.8, "subtotal": 11.4}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 19.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5075",
    "farmacia_id": 6,
    "fecha": new Date("2026-04-20T10:45:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5075,
      "nombre_completo": "Paciente Vecino 5075",
      "dni_ruc": "40005075",
      "telefono": "987005075"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5076",
    "farmacia_id": 7,
    "fecha": new Date("2026-05-21T10:52:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5076,
      "nombre_completo": "Paciente Vecino 5076",
      "dni_ruc": "40005076",
      "telefono": "987005076"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 28.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5077",
    "farmacia_id": 8,
    "fecha": new Date("2026-06-22T10:59:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5077,
      "nombre_completo": "Paciente Vecino 5077",
      "dni_ruc": "40005077",
      "telefono": "987005077"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5078",
    "farmacia_id": 9,
    "fecha": new Date("2026-07-23T10:06:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5078,
      "nombre_completo": "Paciente Vecino 5078",
      "dni_ruc": "40005078",
      "telefono": "987005078"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 1, "precio_unitario": 3.2, "subtotal": 3.2}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 58.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5079",
    "farmacia_id": 10,
    "fecha": new Date("2026-08-24T10:13:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5079,
      "nombre_completo": "Paciente Vecino 5079",
      "dni_ruc": "40005079",
      "telefono": "987005079"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5080",
    "farmacia_id": 1,
    "fecha": new Date("2026-09-25T10:20:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5080,
      "nombre_completo": "Paciente Vecino 5080",
      "dni_ruc": "40005080",
      "telefono": "987005080"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 3, "precio_unitario": 8.5, "subtotal": 25.5}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 27.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5081",
    "farmacia_id": 2,
    "fecha": new Date("2026-10-26T10:27:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5081,
      "nombre_completo": "Paciente Vecino 5081",
      "dni_ruc": "40005081",
      "telefono": "987005081"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5082",
    "farmacia_id": 3,
    "fecha": new Date("2026-11-27T10:34:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5082,
      "nombre_completo": "Paciente Vecino 5082",
      "dni_ruc": "40005082",
      "telefono": "987005082"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 3, "precio_unitario": 2.1, "subtotal": 6.3}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 10.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5083",
    "farmacia_id": 4,
    "fecha": new Date("2026-12-28T10:41:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5083,
      "nombre_completo": "Paciente Vecino 5083",
      "dni_ruc": "40005083",
      "telefono": "987005083"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 4, "precio_unitario": 8.5, "subtotal": 34.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 34.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5084",
    "farmacia_id": 5,
    "fecha": new Date("2026-01-01T10:48:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5084,
      "nombre_completo": "Paciente Vecino 5084",
      "dni_ruc": "40005084",
      "telefono": "987005084"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 1, "precio_unitario": 2.8, "subtotal": 2.8}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 1, "precio_unitario": 3.8, "subtotal": 3.8}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5085",
    "farmacia_id": 6,
    "fecha": new Date("2026-02-02T10:55:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5085,
      "nombre_completo": "Paciente Vecino 5085",
      "dni_ruc": "40005085",
      "telefono": "987005085"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 2, "precio_unitario": 1.9, "subtotal": 3.8}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 3.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5086",
    "farmacia_id": 7,
    "fecha": new Date("2026-03-03T10:02:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5086,
      "nombre_completo": "Paciente Vecino 5086",
      "dni_ruc": "40005086",
      "telefono": "987005086"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 3, "precio_unitario": 4.5, "subtotal": 13.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 3, "precio_unitario": 12.0, "subtotal": 36.0}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 49.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5087",
    "farmacia_id": 8,
    "fecha": new Date("2026-04-04T10:09:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5087,
      "nombre_completo": "Paciente Vecino 5087",
      "dni_ruc": "40005087",
      "telefono": "987005087"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 4, "precio_unitario": 3.8, "subtotal": 15.2}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 15.2,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5088",
    "farmacia_id": 9,
    "fecha": new Date("2026-05-05T10:16:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5088,
      "nombre_completo": "Paciente Vecino 5088",
      "dni_ruc": "40005088",
      "telefono": "987005088"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 1, "precio_unitario": 18.5, "subtotal": 18.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 2, "precio_unitario": 3.2, "subtotal": 6.4}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 24.9,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5089",
    "farmacia_id": 10,
    "fecha": new Date("2026-06-06T10:23:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5089,
      "nombre_completo": "Paciente Vecino 5089",
      "dni_ruc": "40005089",
      "telefono": "987005089"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 2, "precio_unitario": 12.0, "subtotal": 24.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 24.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5090",
    "farmacia_id": 1,
    "fecha": new Date("2026-07-07T10:30:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5090,
      "nombre_completo": "Paciente Vecino 5090",
      "dni_ruc": "40005090",
      "telefono": "987005090"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 3, "precio_unitario": 1.5, "subtotal": 4.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 1, "precio_unitario": 8.5, "subtotal": 8.5}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 13.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5091",
    "farmacia_id": 2,
    "fecha": new Date("2026-08-08T10:37:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5091,
      "nombre_completo": "Paciente Vecino 5091",
      "dni_ruc": "40005091",
      "telefono": "987005091"
    },
    "items": [
      {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 4, "precio_unitario": 3.2, "subtotal": 12.8}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 12.8,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5092",
    "farmacia_id": 3,
    "fecha": new Date("2026-09-09T10:44:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5092,
      "nombre_completo": "Paciente Vecino 5092",
      "dni_ruc": "40005092",
      "telefono": "987005092"
    },
    "items": [
      {"medicamento_id": 3, "nombre_comercial": "Ibuprofeno 400mg Tab", "cantidad": 1, "precio_unitario": 2.1, "subtotal": 2.1}, {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 3, "precio_unitario": 1.9, "subtotal": 5.7}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 7.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5093",
    "farmacia_id": 4,
    "fecha": new Date("2026-10-10T10:51:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5093,
      "nombre_completo": "Paciente Vecino 5093",
      "dni_ruc": "40005093",
      "telefono": "987005093"
    },
    "items": [
      {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 17.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5094",
    "farmacia_id": 5,
    "fecha": new Date("2026-11-11T10:58:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5094,
      "nombre_completo": "Paciente Vecino 5094",
      "dni_ruc": "40005094",
      "telefono": "987005094"
    },
    "items": [
      {"medicamento_id": 5, "nombre_comercial": "Omeprazol 20mg Cap", "cantidad": 3, "precio_unitario": 2.8, "subtotal": 8.4}, {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 16.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5095",
    "farmacia_id": 6,
    "fecha": new Date("2026-12-12T10:05:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5095,
      "nombre_completo": "Paciente Vecino 5095",
      "dni_ruc": "40005095",
      "telefono": "987005095"
    },
    "items": [
      {"medicamento_id": 6, "nombre_comercial": "Loratadina 10mg Tab", "cantidad": 4, "precio_unitario": 1.9, "subtotal": 7.6}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 7.6,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5096",
    "farmacia_id": 7,
    "fecha": new Date("2026-01-13T10:12:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5096,
      "nombre_completo": "Paciente Vecino 5096",
      "dni_ruc": "40005096",
      "telefono": "987005096"
    },
    "items": [
      {"medicamento_id": 7, "nombre_comercial": "Losartan 50mg Tab", "cantidad": 1, "precio_unitario": 4.5, "subtotal": 4.5}, {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 1, "precio_unitario": 12.0, "subtotal": 12.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 16.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5097",
    "farmacia_id": 8,
    "fecha": new Date("2026-02-14T10:19:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5097,
      "nombre_completo": "Paciente Vecino 5097",
      "dni_ruc": "40005097",
      "telefono": "987005097"
    },
    "items": [
      {"medicamento_id": 8, "nombre_comercial": "Metformina 850mg Tab", "cantidad": 2, "precio_unitario": 3.8, "subtotal": 7.6}
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 7.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5098",
    "farmacia_id": 9,
    "fecha": new Date("2026-03-15T10:26:00Z"),
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5098,
      "nombre_completo": "Paciente Vecino 5098",
      "dni_ruc": "40005098",
      "telefono": "987005098"
    },
    "items": [
      {"medicamento_id": 9, "nombre_comercial": "Salbutamol Inhalador 100mcg", "cantidad": 3, "precio_unitario": 18.5, "subtotal": 55.5}, {"medicamento_id": 2, "nombre_comercial": "Amoxicilina 500mg Cap", "cantidad": 3, "precio_unitario": 3.2, "subtotal": 9.6}
    ],
    "metodo_pago": "yape_plin",
    "total_venta": 65.1,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5099",
    "farmacia_id": 10,
    "fecha": new Date("2026-04-16T10:33:00Z"),
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5099,
      "nombre_completo": "Paciente Vecino 5099",
      "dni_ruc": "40005099",
      "telefono": "987005099"
    },
    "items": [
      {"medicamento_id": 10, "nombre_comercial": "Alcohol Medicinal 70 1L", "cantidad": 4, "precio_unitario": 12.0, "subtotal": 48.0}
    ],
    "metodo_pago": "transferencia",
    "total_venta": 48.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5100",
    "farmacia_id": 1,
    "fecha": new Date("2026-05-17T10:40:00Z"),
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5100,
      "nombre_completo": "Paciente Vecino 5100",
      "dni_ruc": "40005100",
      "telefono": "987005100"
    },
    "items": [
      {"medicamento_id": 1, "nombre_comercial": "Paracetamol 500mg Tab", "cantidad": 1, "precio_unitario": 1.5, "subtotal": 1.5}, {"medicamento_id": 4, "nombre_comercial": "Azitromicina 500mg Tab", "cantidad": 2, "precio_unitario": 8.5, "subtotal": 17.0}
    ],
    "metodo_pago": "efectivo",
    "total_venta": 18.5,
    "estado": "completada"
  }
]);

// ------------------------------------------------------------------------------
// COLECCIÓN: resenas (100 Documentos de Calificaciones de Pacientes)
// ------------------------------------------------------------------------------
db.resenas.insertMany([
  {
    "resena_id": "RES-2026-0001",
    "farmacia_id": 2,
    "cliente_id": 1001,
    "cliente_nombre": "Paciente Vecino 1001",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-02T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0002",
    "farmacia_id": 3,
    "cliente_id": 1002,
    "cliente_nombre": "Paciente Vecino 1002",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-03T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0003",
    "farmacia_id": 4,
    "cliente_id": 1003,
    "cliente_nombre": "Paciente Vecino 1003",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-04T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0004",
    "farmacia_id": 5,
    "cliente_id": 1004,
    "cliente_nombre": "Paciente Vecino 1004",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-05T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0005",
    "farmacia_id": 6,
    "cliente_id": 1005,
    "cliente_nombre": "Paciente Vecino 1005",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-06T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0006",
    "farmacia_id": 7,
    "cliente_id": 1006,
    "cliente_nombre": "Paciente Vecino 1006",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-07T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0007",
    "farmacia_id": 8,
    "cliente_id": 1007,
    "cliente_nombre": "Paciente Vecino 1007",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-08T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0008",
    "farmacia_id": 9,
    "cliente_id": 1008,
    "cliente_nombre": "Paciente Vecino 1008",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-09T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0009",
    "farmacia_id": 10,
    "cliente_id": 1009,
    "cliente_nombre": "Paciente Vecino 1009",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-10T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0010",
    "farmacia_id": 1,
    "cliente_id": 1010,
    "cliente_nombre": "Paciente Vecino 1010",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-11T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0011",
    "farmacia_id": 2,
    "cliente_id": 1011,
    "cliente_nombre": "Paciente Vecino 1011",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-12T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0012",
    "farmacia_id": 3,
    "cliente_id": 1012,
    "cliente_nombre": "Paciente Vecino 1012",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-13T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0013",
    "farmacia_id": 4,
    "cliente_id": 1013,
    "cliente_nombre": "Paciente Vecino 1013",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-14T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0014",
    "farmacia_id": 5,
    "cliente_id": 1014,
    "cliente_nombre": "Paciente Vecino 1014",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-15T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0015",
    "farmacia_id": 6,
    "cliente_id": 1015,
    "cliente_nombre": "Paciente Vecino 1015",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-16T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0016",
    "farmacia_id": 7,
    "cliente_id": 1016,
    "cliente_nombre": "Paciente Vecino 1016",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-17T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0017",
    "farmacia_id": 8,
    "cliente_id": 1017,
    "cliente_nombre": "Paciente Vecino 1017",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-18T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0018",
    "farmacia_id": 9,
    "cliente_id": 1018,
    "cliente_nombre": "Paciente Vecino 1018",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-19T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0019",
    "farmacia_id": 10,
    "cliente_id": 1019,
    "cliente_nombre": "Paciente Vecino 1019",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-20T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0020",
    "farmacia_id": 1,
    "cliente_id": 1020,
    "cliente_nombre": "Paciente Vecino 1020",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-21T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0021",
    "farmacia_id": 2,
    "cliente_id": 1021,
    "cliente_nombre": "Paciente Vecino 1021",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-22T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0022",
    "farmacia_id": 3,
    "cliente_id": 1022,
    "cliente_nombre": "Paciente Vecino 1022",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-23T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0023",
    "farmacia_id": 4,
    "cliente_id": 1023,
    "cliente_nombre": "Paciente Vecino 1023",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-24T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0024",
    "farmacia_id": 5,
    "cliente_id": 1024,
    "cliente_nombre": "Paciente Vecino 1024",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-25T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0025",
    "farmacia_id": 6,
    "cliente_id": 1025,
    "cliente_nombre": "Paciente Vecino 1025",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-26T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0026",
    "farmacia_id": 7,
    "cliente_id": 1026,
    "cliente_nombre": "Paciente Vecino 1026",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-27T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0027",
    "farmacia_id": 8,
    "cliente_id": 1027,
    "cliente_nombre": "Paciente Vecino 1027",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-28T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0028",
    "farmacia_id": 9,
    "cliente_id": 1028,
    "cliente_nombre": "Paciente Vecino 1028",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-01T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0029",
    "farmacia_id": 10,
    "cliente_id": 1029,
    "cliente_nombre": "Paciente Vecino 1029",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-02T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0030",
    "farmacia_id": 1,
    "cliente_id": 1030,
    "cliente_nombre": "Paciente Vecino 1030",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-03T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0031",
    "farmacia_id": 2,
    "cliente_id": 1031,
    "cliente_nombre": "Paciente Vecino 1031",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-04T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0032",
    "farmacia_id": 3,
    "cliente_id": 1032,
    "cliente_nombre": "Paciente Vecino 1032",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-05T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0033",
    "farmacia_id": 4,
    "cliente_id": 1033,
    "cliente_nombre": "Paciente Vecino 1033",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-06T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0034",
    "farmacia_id": 5,
    "cliente_id": 1034,
    "cliente_nombre": "Paciente Vecino 1034",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-07T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0035",
    "farmacia_id": 6,
    "cliente_id": 1035,
    "cliente_nombre": "Paciente Vecino 1035",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-08T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0036",
    "farmacia_id": 7,
    "cliente_id": 1036,
    "cliente_nombre": "Paciente Vecino 1036",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-09T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0037",
    "farmacia_id": 8,
    "cliente_id": 1037,
    "cliente_nombre": "Paciente Vecino 1037",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-10T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0038",
    "farmacia_id": 9,
    "cliente_id": 1038,
    "cliente_nombre": "Paciente Vecino 1038",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-11T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0039",
    "farmacia_id": 10,
    "cliente_id": 1039,
    "cliente_nombre": "Paciente Vecino 1039",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-12T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0040",
    "farmacia_id": 1,
    "cliente_id": 1040,
    "cliente_nombre": "Paciente Vecino 1040",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-13T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0041",
    "farmacia_id": 2,
    "cliente_id": 1041,
    "cliente_nombre": "Paciente Vecino 1041",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-14T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0042",
    "farmacia_id": 3,
    "cliente_id": 1042,
    "cliente_nombre": "Paciente Vecino 1042",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-15T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0043",
    "farmacia_id": 4,
    "cliente_id": 1043,
    "cliente_nombre": "Paciente Vecino 1043",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-16T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0044",
    "farmacia_id": 5,
    "cliente_id": 1044,
    "cliente_nombre": "Paciente Vecino 1044",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-17T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0045",
    "farmacia_id": 6,
    "cliente_id": 1045,
    "cliente_nombre": "Paciente Vecino 1045",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-18T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0046",
    "farmacia_id": 7,
    "cliente_id": 1046,
    "cliente_nombre": "Paciente Vecino 1046",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-19T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0047",
    "farmacia_id": 8,
    "cliente_id": 1047,
    "cliente_nombre": "Paciente Vecino 1047",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-20T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0048",
    "farmacia_id": 9,
    "cliente_id": 1048,
    "cliente_nombre": "Paciente Vecino 1048",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-21T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0049",
    "farmacia_id": 10,
    "cliente_id": 1049,
    "cliente_nombre": "Paciente Vecino 1049",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-22T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0050",
    "farmacia_id": 1,
    "cliente_id": 1050,
    "cliente_nombre": "Paciente Vecino 1050",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-23T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0051",
    "farmacia_id": 2,
    "cliente_id": 1051,
    "cliente_nombre": "Paciente Vecino 1051",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-24T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0052",
    "farmacia_id": 3,
    "cliente_id": 1052,
    "cliente_nombre": "Paciente Vecino 1052",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-25T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0053",
    "farmacia_id": 4,
    "cliente_id": 1053,
    "cliente_nombre": "Paciente Vecino 1053",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-26T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0054",
    "farmacia_id": 5,
    "cliente_id": 1054,
    "cliente_nombre": "Paciente Vecino 1054",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-27T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0055",
    "farmacia_id": 6,
    "cliente_id": 1055,
    "cliente_nombre": "Paciente Vecino 1055",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-28T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0056",
    "farmacia_id": 7,
    "cliente_id": 1056,
    "cliente_nombre": "Paciente Vecino 1056",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-01T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0057",
    "farmacia_id": 8,
    "cliente_id": 1057,
    "cliente_nombre": "Paciente Vecino 1057",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-02T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0058",
    "farmacia_id": 9,
    "cliente_id": 1058,
    "cliente_nombre": "Paciente Vecino 1058",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-03T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0059",
    "farmacia_id": 10,
    "cliente_id": 1059,
    "cliente_nombre": "Paciente Vecino 1059",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-04T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0060",
    "farmacia_id": 1,
    "cliente_id": 1060,
    "cliente_nombre": "Paciente Vecino 1060",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-05T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0061",
    "farmacia_id": 2,
    "cliente_id": 1061,
    "cliente_nombre": "Paciente Vecino 1061",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-06T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0062",
    "farmacia_id": 3,
    "cliente_id": 1062,
    "cliente_nombre": "Paciente Vecino 1062",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-07T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0063",
    "farmacia_id": 4,
    "cliente_id": 1063,
    "cliente_nombre": "Paciente Vecino 1063",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-08T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0064",
    "farmacia_id": 5,
    "cliente_id": 1064,
    "cliente_nombre": "Paciente Vecino 1064",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-09T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0065",
    "farmacia_id": 6,
    "cliente_id": 1065,
    "cliente_nombre": "Paciente Vecino 1065",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-10T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0066",
    "farmacia_id": 7,
    "cliente_id": 1066,
    "cliente_nombre": "Paciente Vecino 1066",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-11T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0067",
    "farmacia_id": 8,
    "cliente_id": 1067,
    "cliente_nombre": "Paciente Vecino 1067",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-12T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0068",
    "farmacia_id": 9,
    "cliente_id": 1068,
    "cliente_nombre": "Paciente Vecino 1068",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-13T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0069",
    "farmacia_id": 10,
    "cliente_id": 1069,
    "cliente_nombre": "Paciente Vecino 1069",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-14T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0070",
    "farmacia_id": 1,
    "cliente_id": 1070,
    "cliente_nombre": "Paciente Vecino 1070",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-15T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0071",
    "farmacia_id": 2,
    "cliente_id": 1071,
    "cliente_nombre": "Paciente Vecino 1071",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-16T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0072",
    "farmacia_id": 3,
    "cliente_id": 1072,
    "cliente_nombre": "Paciente Vecino 1072",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-17T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0073",
    "farmacia_id": 4,
    "cliente_id": 1073,
    "cliente_nombre": "Paciente Vecino 1073",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-18T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0074",
    "farmacia_id": 5,
    "cliente_id": 1074,
    "cliente_nombre": "Paciente Vecino 1074",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-19T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0075",
    "farmacia_id": 6,
    "cliente_id": 1075,
    "cliente_nombre": "Paciente Vecino 1075",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-20T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0076",
    "farmacia_id": 7,
    "cliente_id": 1076,
    "cliente_nombre": "Paciente Vecino 1076",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-21T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0077",
    "farmacia_id": 8,
    "cliente_id": 1077,
    "cliente_nombre": "Paciente Vecino 1077",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-22T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0078",
    "farmacia_id": 9,
    "cliente_id": 1078,
    "cliente_nombre": "Paciente Vecino 1078",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-23T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0079",
    "farmacia_id": 10,
    "cliente_id": 1079,
    "cliente_nombre": "Paciente Vecino 1079",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-24T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0080",
    "farmacia_id": 1,
    "cliente_id": 1080,
    "cliente_nombre": "Paciente Vecino 1080",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-25T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0081",
    "farmacia_id": 2,
    "cliente_id": 1081,
    "cliente_nombre": "Paciente Vecino 1081",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-26T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0082",
    "farmacia_id": 3,
    "cliente_id": 1082,
    "cliente_nombre": "Paciente Vecino 1082",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-27T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0083",
    "farmacia_id": 4,
    "cliente_id": 1083,
    "cliente_nombre": "Paciente Vecino 1083",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-28T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0084",
    "farmacia_id": 5,
    "cliente_id": 1084,
    "cliente_nombre": "Paciente Vecino 1084",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-01T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0085",
    "farmacia_id": 6,
    "cliente_id": 1085,
    "cliente_nombre": "Paciente Vecino 1085",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-02T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0086",
    "farmacia_id": 7,
    "cliente_id": 1086,
    "cliente_nombre": "Paciente Vecino 1086",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-03T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0087",
    "farmacia_id": 8,
    "cliente_id": 1087,
    "cliente_nombre": "Paciente Vecino 1087",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-04T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0088",
    "farmacia_id": 9,
    "cliente_id": 1088,
    "cliente_nombre": "Paciente Vecino 1088",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-05T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0089",
    "farmacia_id": 10,
    "cliente_id": 1089,
    "cliente_nombre": "Paciente Vecino 1089",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-06T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0090",
    "farmacia_id": 1,
    "cliente_id": 1090,
    "cliente_nombre": "Paciente Vecino 1090",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-07T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0091",
    "farmacia_id": 2,
    "cliente_id": 1091,
    "cliente_nombre": "Paciente Vecino 1091",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-08T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0092",
    "farmacia_id": 3,
    "cliente_id": 1092,
    "cliente_nombre": "Paciente Vecino 1092",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-09T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0093",
    "farmacia_id": 4,
    "cliente_id": 1093,
    "cliente_nombre": "Paciente Vecino 1093",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 4, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-10T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0094",
    "farmacia_id": 5,
    "cliente_id": 1094,
    "cliente_nombre": "Paciente Vecino 1094",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 5, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-11T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0095",
    "farmacia_id": 6,
    "cliente_id": 1095,
    "cliente_nombre": "Paciente Vecino 1095",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-12T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0096",
    "farmacia_id": 7,
    "cliente_id": 1096,
    "cliente_nombre": "Paciente Vecino 1096",
    "calificacion": 2,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-13T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0097",
    "farmacia_id": 8,
    "cliente_id": 1097,
    "cliente_nombre": "Paciente Vecino 1097",
    "calificacion": 3,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-14T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0098",
    "farmacia_id": 9,
    "cliente_id": 1098,
    "cliente_nombre": "Paciente Vecino 1098",
    "calificacion": 4,
    "comentario": "Atencion oportuna en la botica 9, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-15T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0099",
    "farmacia_id": 10,
    "cliente_id": 1099,
    "cliente_nombre": "Paciente Vecino 1099",
    "calificacion": 5,
    "comentario": "Atencion oportuna en la botica 10, cuentan con stock del medicamento requerido.",
    "fecha_resena": new Date("2026-10-16T14:30:00Z"),
    "compra_verificada": true
  },
  {
    "resena_id": "RES-2026-0100",
    "farmacia_id": 1,
    "cliente_id": 1100,
    "cliente_nombre": "Paciente Vecino 1100",
    "calificacion": 1,
    "comentario": "Demora en el despacho de mostrador.",
    "fecha_resena": new Date("2026-10-17T14:30:00Z"),
    "compra_verificada": true
  }
]);

// ------------------------------------------------------------------------------
// COLECCIÓN: auditoria_eventos (100 Trazas Inmutables de Seguridad)
// ------------------------------------------------------------------------------
db.auditoria_eventos.insertMany([
  {
    "evento_id": "EVT-2026-0001",
    "fecha_evento": new Date("2026-10-02T09:03:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.11",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0002",
    "fecha_evento": new Date("2026-10-03T09:06:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.12",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0003",
    "fecha_evento": new Date("2026-10-04T09:09:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.13",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0004",
    "fecha_evento": new Date("2026-10-05T09:12:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.14",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0005",
    "fecha_evento": new Date("2026-10-06T09:15:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.15",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0006",
    "fecha_evento": new Date("2026-10-07T09:18:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.16",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0007",
    "fecha_evento": new Date("2026-10-08T09:21:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.17",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0008",
    "fecha_evento": new Date("2026-10-09T09:24:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.18",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0009",
    "fecha_evento": new Date("2026-10-10T09:27:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.19",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0010",
    "fecha_evento": new Date("2026-10-11T09:30:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.20",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0011",
    "fecha_evento": new Date("2026-10-12T09:33:00Z"),
    "modulo": "VENTAS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.21",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0012",
    "fecha_evento": new Date("2026-10-13T09:36:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.22",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0013",
    "fecha_evento": new Date("2026-10-14T09:39:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.23",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0014",
    "fecha_evento": new Date("2026-10-15T09:42:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.24",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0015",
    "fecha_evento": new Date("2026-10-16T09:45:00Z"),
    "modulo": "CATALOGO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.25",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0016",
    "fecha_evento": new Date("2026-10-17T09:48:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.26",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0017",
    "fecha_evento": new Date("2026-10-18T09:51:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.27",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0018",
    "fecha_evento": new Date("2026-10-19T09:54:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.28",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0019",
    "fecha_evento": new Date("2026-10-20T09:57:00Z"),
    "modulo": "PRECIOS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.29",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0020",
    "fecha_evento": new Date("2026-10-21T09:00:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.30",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0021",
    "fecha_evento": new Date("2026-10-22T09:03:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.31",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0022",
    "fecha_evento": new Date("2026-10-23T09:06:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.32",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0023",
    "fecha_evento": new Date("2026-10-24T09:09:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.33",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0024",
    "fecha_evento": new Date("2026-10-25T09:12:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.34",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0025",
    "fecha_evento": new Date("2026-10-26T09:15:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.35",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0026",
    "fecha_evento": new Date("2026-10-27T09:18:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.36",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0027",
    "fecha_evento": new Date("2026-10-28T09:21:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.37",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0028",
    "fecha_evento": new Date("2026-10-01T09:24:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.38",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0029",
    "fecha_evento": new Date("2026-10-02T09:27:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.39",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0030",
    "fecha_evento": new Date("2026-10-03T09:30:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.40",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0031",
    "fecha_evento": new Date("2026-10-04T09:33:00Z"),
    "modulo": "VENTAS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.41",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0032",
    "fecha_evento": new Date("2026-10-05T09:36:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.42",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0033",
    "fecha_evento": new Date("2026-10-06T09:39:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.43",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0034",
    "fecha_evento": new Date("2026-10-07T09:42:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.44",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0035",
    "fecha_evento": new Date("2026-10-08T09:45:00Z"),
    "modulo": "CATALOGO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.45",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0036",
    "fecha_evento": new Date("2026-10-09T09:48:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.46",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0037",
    "fecha_evento": new Date("2026-10-10T09:51:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.47",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0038",
    "fecha_evento": new Date("2026-10-11T09:54:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.48",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0039",
    "fecha_evento": new Date("2026-10-12T09:57:00Z"),
    "modulo": "PRECIOS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.49",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0040",
    "fecha_evento": new Date("2026-10-13T09:00:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.50",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0041",
    "fecha_evento": new Date("2026-10-14T09:03:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.51",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0042",
    "fecha_evento": new Date("2026-10-15T09:06:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.52",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0043",
    "fecha_evento": new Date("2026-10-16T09:09:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.53",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0044",
    "fecha_evento": new Date("2026-10-17T09:12:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.54",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0045",
    "fecha_evento": new Date("2026-10-18T09:15:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.55",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0046",
    "fecha_evento": new Date("2026-10-19T09:18:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.56",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0047",
    "fecha_evento": new Date("2026-10-20T09:21:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.57",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0048",
    "fecha_evento": new Date("2026-10-21T09:24:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.58",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0049",
    "fecha_evento": new Date("2026-10-22T09:27:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.59",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0050",
    "fecha_evento": new Date("2026-10-23T09:30:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.10",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0051",
    "fecha_evento": new Date("2026-10-24T09:33:00Z"),
    "modulo": "VENTAS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.11",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0052",
    "fecha_evento": new Date("2026-10-25T09:36:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.12",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0053",
    "fecha_evento": new Date("2026-10-26T09:39:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.13",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0054",
    "fecha_evento": new Date("2026-10-27T09:42:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.14",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0055",
    "fecha_evento": new Date("2026-10-28T09:45:00Z"),
    "modulo": "CATALOGO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.15",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0056",
    "fecha_evento": new Date("2026-10-01T09:48:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.16",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0057",
    "fecha_evento": new Date("2026-10-02T09:51:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.17",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0058",
    "fecha_evento": new Date("2026-10-03T09:54:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.18",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0059",
    "fecha_evento": new Date("2026-10-04T09:57:00Z"),
    "modulo": "PRECIOS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.19",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0060",
    "fecha_evento": new Date("2026-10-05T09:00:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.20",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0061",
    "fecha_evento": new Date("2026-10-06T09:03:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.21",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0062",
    "fecha_evento": new Date("2026-10-07T09:06:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.22",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0063",
    "fecha_evento": new Date("2026-10-08T09:09:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.23",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0064",
    "fecha_evento": new Date("2026-10-09T09:12:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.24",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0065",
    "fecha_evento": new Date("2026-10-10T09:15:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.25",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0066",
    "fecha_evento": new Date("2026-10-11T09:18:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.26",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0067",
    "fecha_evento": new Date("2026-10-12T09:21:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.27",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0068",
    "fecha_evento": new Date("2026-10-13T09:24:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.28",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0069",
    "fecha_evento": new Date("2026-10-14T09:27:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.29",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0070",
    "fecha_evento": new Date("2026-10-15T09:30:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.30",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0071",
    "fecha_evento": new Date("2026-10-16T09:33:00Z"),
    "modulo": "VENTAS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.31",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0072",
    "fecha_evento": new Date("2026-10-17T09:36:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.32",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0073",
    "fecha_evento": new Date("2026-10-18T09:39:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.33",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0074",
    "fecha_evento": new Date("2026-10-19T09:42:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.34",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0075",
    "fecha_evento": new Date("2026-10-20T09:45:00Z"),
    "modulo": "CATALOGO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.35",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0076",
    "fecha_evento": new Date("2026-10-21T09:48:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.36",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0077",
    "fecha_evento": new Date("2026-10-22T09:51:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.37",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0078",
    "fecha_evento": new Date("2026-10-23T09:54:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.38",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0079",
    "fecha_evento": new Date("2026-10-24T09:57:00Z"),
    "modulo": "PRECIOS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.39",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0080",
    "fecha_evento": new Date("2026-10-25T09:00:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.40",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0081",
    "fecha_evento": new Date("2026-10-26T09:03:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.41",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0082",
    "fecha_evento": new Date("2026-10-27T09:06:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.42",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0083",
    "fecha_evento": new Date("2026-10-28T09:09:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.43",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0084",
    "fecha_evento": new Date("2026-10-01T09:12:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.44",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0085",
    "fecha_evento": new Date("2026-10-02T09:15:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.45",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0086",
    "fecha_evento": new Date("2026-10-03T09:18:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.46",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0087",
    "fecha_evento": new Date("2026-10-04T09:21:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.47",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0088",
    "fecha_evento": new Date("2026-10-05T09:24:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.48",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0089",
    "fecha_evento": new Date("2026-10-06T09:27:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.49",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0090",
    "fecha_evento": new Date("2026-10-07T09:30:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.50",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0091",
    "fecha_evento": new Date("2026-10-08T09:33:00Z"),
    "modulo": "VENTAS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.51",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0092",
    "fecha_evento": new Date("2026-10-09T09:36:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.52",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0093",
    "fecha_evento": new Date("2026-10-10T09:39:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.53",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0094",
    "fecha_evento": new Date("2026-10-11T09:42:00Z"),
    "modulo": "PRECIOS",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.54",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0095",
    "fecha_evento": new Date("2026-10-12T09:45:00Z"),
    "modulo": "CATALOGO",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.55",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0096",
    "fecha_evento": new Date("2026-10-13T09:48:00Z"),
    "modulo": "VENTAS",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.56",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0097",
    "fecha_evento": new Date("2026-10-14T09:51:00Z"),
    "modulo": "INVENTARIO",
    "usuario": "farma_app",
    "ip_origen": "192.168.1.57",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0098",
    "fecha_evento": new Date("2026-10-15T09:54:00Z"),
    "modulo": "SEGURIDAD",
    "usuario": "farma_readonly",
    "ip_origen": "192.168.1.58",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0099",
    "fecha_evento": new Date("2026-10-16T09:57:00Z"),
    "modulo": "PRECIOS",
    "usuario": "admin_farma",
    "ip_origen": "192.168.1.59",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "SUCCESS",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  },
  {
    "evento_id": "EVT-2026-0100",
    "fecha_evento": new Date("2026-10-17T09:00:00Z"),
    "modulo": "CATALOGO",
    "usuario": "farma_dba",
    "ip_origen": "192.168.1.10",
    "accion": "EJECUCION_OPERACION_NOSQL",
    "resultado": "DENIED",
    "detalles": "Traza de auditoria registrada por el motor MongoDB"
  }
]);

// ------------------------------------------------------------------------------
// COLECCIÓN: logs_marketplace (100 Registros de Telemetría Web)
// ------------------------------------------------------------------------------
db.logs_marketplace.insertMany([
  {
    "log_id": "LOG-2026-0001",
    "timestamp": new Date("2026-10-02T18:05:00Z"),
    "session_id": "SES-FARMA-0001",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 33,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0002",
    "timestamp": new Date("2026-10-03T18:10:00Z"),
    "session_id": "SES-FARMA-0002",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 46,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0003",
    "timestamp": new Date("2026-10-04T18:15:00Z"),
    "session_id": "SES-FARMA-0003",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 59,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0004",
    "timestamp": new Date("2026-10-05T18:20:00Z"),
    "session_id": "SES-FARMA-0004",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 72,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0005",
    "timestamp": new Date("2026-10-06T18:25:00Z"),
    "session_id": "SES-FARMA-0005",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 85,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0006",
    "timestamp": new Date("2026-10-07T18:30:00Z"),
    "session_id": "SES-FARMA-0006",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 98,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0007",
    "timestamp": new Date("2026-10-08T18:35:00Z"),
    "session_id": "SES-FARMA-0007",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 111,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0008",
    "timestamp": new Date("2026-10-09T18:40:00Z"),
    "session_id": "SES-FARMA-0008",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 124,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0009",
    "timestamp": new Date("2026-10-10T18:45:00Z"),
    "session_id": "SES-FARMA-0009",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 137,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0010",
    "timestamp": new Date("2026-10-11T18:50:00Z"),
    "session_id": "SES-FARMA-0010",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 150,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0011",
    "timestamp": new Date("2026-10-12T18:55:00Z"),
    "session_id": "SES-FARMA-0011",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 163,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0012",
    "timestamp": new Date("2026-10-13T18:00:00Z"),
    "session_id": "SES-FARMA-0012",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 176,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0013",
    "timestamp": new Date("2026-10-14T18:05:00Z"),
    "session_id": "SES-FARMA-0013",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 189,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0014",
    "timestamp": new Date("2026-10-15T18:10:00Z"),
    "session_id": "SES-FARMA-0014",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 22,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0015",
    "timestamp": new Date("2026-10-16T18:15:00Z"),
    "session_id": "SES-FARMA-0015",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 404,
    "tiempo_respuesta_ms": 35,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0016",
    "timestamp": new Date("2026-10-17T18:20:00Z"),
    "session_id": "SES-FARMA-0016",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 48,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0017",
    "timestamp": new Date("2026-10-18T18:25:00Z"),
    "session_id": "SES-FARMA-0017",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 61,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0018",
    "timestamp": new Date("2026-10-19T18:30:00Z"),
    "session_id": "SES-FARMA-0018",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 74,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0019",
    "timestamp": new Date("2026-10-20T18:35:00Z"),
    "session_id": "SES-FARMA-0019",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 87,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0020",
    "timestamp": new Date("2026-10-21T18:40:00Z"),
    "session_id": "SES-FARMA-0020",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 100,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0021",
    "timestamp": new Date("2026-10-22T18:45:00Z"),
    "session_id": "SES-FARMA-0021",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 113,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0022",
    "timestamp": new Date("2026-10-23T18:50:00Z"),
    "session_id": "SES-FARMA-0022",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 126,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0023",
    "timestamp": new Date("2026-10-24T18:55:00Z"),
    "session_id": "SES-FARMA-0023",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 139,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0024",
    "timestamp": new Date("2026-10-25T18:00:00Z"),
    "session_id": "SES-FARMA-0024",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 152,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0025",
    "timestamp": new Date("2026-10-26T18:05:00Z"),
    "session_id": "SES-FARMA-0025",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 165,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0026",
    "timestamp": new Date("2026-10-27T18:10:00Z"),
    "session_id": "SES-FARMA-0026",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 178,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0027",
    "timestamp": new Date("2026-10-28T18:15:00Z"),
    "session_id": "SES-FARMA-0027",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 191,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0028",
    "timestamp": new Date("2026-10-01T18:20:00Z"),
    "session_id": "SES-FARMA-0028",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 24,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0029",
    "timestamp": new Date("2026-10-02T18:25:00Z"),
    "session_id": "SES-FARMA-0029",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 37,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0030",
    "timestamp": new Date("2026-10-03T18:30:00Z"),
    "session_id": "SES-FARMA-0030",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 404,
    "tiempo_respuesta_ms": 50,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0031",
    "timestamp": new Date("2026-10-04T18:35:00Z"),
    "session_id": "SES-FARMA-0031",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 63,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0032",
    "timestamp": new Date("2026-10-05T18:40:00Z"),
    "session_id": "SES-FARMA-0032",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 76,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0033",
    "timestamp": new Date("2026-10-06T18:45:00Z"),
    "session_id": "SES-FARMA-0033",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 89,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0034",
    "timestamp": new Date("2026-10-07T18:50:00Z"),
    "session_id": "SES-FARMA-0034",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 102,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0035",
    "timestamp": new Date("2026-10-08T18:55:00Z"),
    "session_id": "SES-FARMA-0035",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 115,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0036",
    "timestamp": new Date("2026-10-09T18:00:00Z"),
    "session_id": "SES-FARMA-0036",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 128,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0037",
    "timestamp": new Date("2026-10-10T18:05:00Z"),
    "session_id": "SES-FARMA-0037",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 141,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0038",
    "timestamp": new Date("2026-10-11T18:10:00Z"),
    "session_id": "SES-FARMA-0038",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 154,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0039",
    "timestamp": new Date("2026-10-12T18:15:00Z"),
    "session_id": "SES-FARMA-0039",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 167,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0040",
    "timestamp": new Date("2026-10-13T18:20:00Z"),
    "session_id": "SES-FARMA-0040",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 180,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0041",
    "timestamp": new Date("2026-10-14T18:25:00Z"),
    "session_id": "SES-FARMA-0041",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 193,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0042",
    "timestamp": new Date("2026-10-15T18:30:00Z"),
    "session_id": "SES-FARMA-0042",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 26,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0043",
    "timestamp": new Date("2026-10-16T18:35:00Z"),
    "session_id": "SES-FARMA-0043",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 39,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0044",
    "timestamp": new Date("2026-10-17T18:40:00Z"),
    "session_id": "SES-FARMA-0044",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 52,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0045",
    "timestamp": new Date("2026-10-18T18:45:00Z"),
    "session_id": "SES-FARMA-0045",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 404,
    "tiempo_respuesta_ms": 65,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0046",
    "timestamp": new Date("2026-10-19T18:50:00Z"),
    "session_id": "SES-FARMA-0046",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 78,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0047",
    "timestamp": new Date("2026-10-20T18:55:00Z"),
    "session_id": "SES-FARMA-0047",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 91,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0048",
    "timestamp": new Date("2026-10-21T18:00:00Z"),
    "session_id": "SES-FARMA-0048",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 104,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0049",
    "timestamp": new Date("2026-10-22T18:05:00Z"),
    "session_id": "SES-FARMA-0049",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 117,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0050",
    "timestamp": new Date("2026-10-23T18:10:00Z"),
    "session_id": "SES-FARMA-0050",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 130,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0051",
    "timestamp": new Date("2026-10-24T18:15:00Z"),
    "session_id": "SES-FARMA-0051",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 143,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0052",
    "timestamp": new Date("2026-10-25T18:20:00Z"),
    "session_id": "SES-FARMA-0052",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 156,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0053",
    "timestamp": new Date("2026-10-26T18:25:00Z"),
    "session_id": "SES-FARMA-0053",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 169,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0054",
    "timestamp": new Date("2026-10-27T18:30:00Z"),
    "session_id": "SES-FARMA-0054",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 182,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0055",
    "timestamp": new Date("2026-10-28T18:35:00Z"),
    "session_id": "SES-FARMA-0055",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 195,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0056",
    "timestamp": new Date("2026-10-01T18:40:00Z"),
    "session_id": "SES-FARMA-0056",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 28,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0057",
    "timestamp": new Date("2026-10-02T18:45:00Z"),
    "session_id": "SES-FARMA-0057",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 41,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0058",
    "timestamp": new Date("2026-10-03T18:50:00Z"),
    "session_id": "SES-FARMA-0058",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 54,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0059",
    "timestamp": new Date("2026-10-04T18:55:00Z"),
    "session_id": "SES-FARMA-0059",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 67,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0060",
    "timestamp": new Date("2026-10-05T18:00:00Z"),
    "session_id": "SES-FARMA-0060",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 404,
    "tiempo_respuesta_ms": 80,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0061",
    "timestamp": new Date("2026-10-06T18:05:00Z"),
    "session_id": "SES-FARMA-0061",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 93,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0062",
    "timestamp": new Date("2026-10-07T18:10:00Z"),
    "session_id": "SES-FARMA-0062",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 106,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0063",
    "timestamp": new Date("2026-10-08T18:15:00Z"),
    "session_id": "SES-FARMA-0063",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 119,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0064",
    "timestamp": new Date("2026-10-09T18:20:00Z"),
    "session_id": "SES-FARMA-0064",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 132,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0065",
    "timestamp": new Date("2026-10-10T18:25:00Z"),
    "session_id": "SES-FARMA-0065",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 145,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0066",
    "timestamp": new Date("2026-10-11T18:30:00Z"),
    "session_id": "SES-FARMA-0066",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 158,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0067",
    "timestamp": new Date("2026-10-12T18:35:00Z"),
    "session_id": "SES-FARMA-0067",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 171,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0068",
    "timestamp": new Date("2026-10-13T18:40:00Z"),
    "session_id": "SES-FARMA-0068",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 184,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0069",
    "timestamp": new Date("2026-10-14T18:45:00Z"),
    "session_id": "SES-FARMA-0069",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 197,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0070",
    "timestamp": new Date("2026-10-15T18:50:00Z"),
    "session_id": "SES-FARMA-0070",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 30,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0071",
    "timestamp": new Date("2026-10-16T18:55:00Z"),
    "session_id": "SES-FARMA-0071",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 43,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0072",
    "timestamp": new Date("2026-10-17T18:00:00Z"),
    "session_id": "SES-FARMA-0072",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 56,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0073",
    "timestamp": new Date("2026-10-18T18:05:00Z"),
    "session_id": "SES-FARMA-0073",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 69,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0074",
    "timestamp": new Date("2026-10-19T18:10:00Z"),
    "session_id": "SES-FARMA-0074",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 82,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0075",
    "timestamp": new Date("2026-10-20T18:15:00Z"),
    "session_id": "SES-FARMA-0075",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 404,
    "tiempo_respuesta_ms": 95,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0076",
    "timestamp": new Date("2026-10-21T18:20:00Z"),
    "session_id": "SES-FARMA-0076",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 108,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0077",
    "timestamp": new Date("2026-10-22T18:25:00Z"),
    "session_id": "SES-FARMA-0077",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 121,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0078",
    "timestamp": new Date("2026-10-23T18:30:00Z"),
    "session_id": "SES-FARMA-0078",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 134,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0079",
    "timestamp": new Date("2026-10-24T18:35:00Z"),
    "session_id": "SES-FARMA-0079",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 147,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0080",
    "timestamp": new Date("2026-10-25T18:40:00Z"),
    "session_id": "SES-FARMA-0080",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 160,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0081",
    "timestamp": new Date("2026-10-26T18:45:00Z"),
    "session_id": "SES-FARMA-0081",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 173,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0082",
    "timestamp": new Date("2026-10-27T18:50:00Z"),
    "session_id": "SES-FARMA-0082",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 186,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0083",
    "timestamp": new Date("2026-10-28T18:55:00Z"),
    "session_id": "SES-FARMA-0083",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 199,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0084",
    "timestamp": new Date("2026-10-01T18:00:00Z"),
    "session_id": "SES-FARMA-0084",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 32,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0085",
    "timestamp": new Date("2026-10-02T18:05:00Z"),
    "session_id": "SES-FARMA-0085",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 45,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0086",
    "timestamp": new Date("2026-10-03T18:10:00Z"),
    "session_id": "SES-FARMA-0086",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 58,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0087",
    "timestamp": new Date("2026-10-04T18:15:00Z"),
    "session_id": "SES-FARMA-0087",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 71,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0088",
    "timestamp": new Date("2026-10-05T18:20:00Z"),
    "session_id": "SES-FARMA-0088",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 84,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0089",
    "timestamp": new Date("2026-10-06T18:25:00Z"),
    "session_id": "SES-FARMA-0089",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 97,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0090",
    "timestamp": new Date("2026-10-07T18:30:00Z"),
    "session_id": "SES-FARMA-0090",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 404,
    "tiempo_respuesta_ms": 110,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0091",
    "timestamp": new Date("2026-10-08T18:35:00Z"),
    "session_id": "SES-FARMA-0091",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 123,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0092",
    "timestamp": new Date("2026-10-09T18:40:00Z"),
    "session_id": "SES-FARMA-0092",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 136,
    "distrito_geolocalizado": "Villa El Salvador"
  },
  {
    "log_id": "LOG-2026-0093",
    "timestamp": new Date("2026-10-10T18:45:00Z"),
    "session_id": "SES-FARMA-0093",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 149,
    "distrito_geolocalizado": "Miraflores"
  },
  {
    "log_id": "LOG-2026-0094",
    "timestamp": new Date("2026-10-11T18:50:00Z"),
    "session_id": "SES-FARMA-0094",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 162,
    "distrito_geolocalizado": "Los Olivos"
  },
  {
    "log_id": "LOG-2026-0095",
    "timestamp": new Date("2026-10-12T18:55:00Z"),
    "session_id": "SES-FARMA-0095",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 175,
    "distrito_geolocalizado": "Surco"
  },
  {
    "log_id": "LOG-2026-0096",
    "timestamp": new Date("2026-10-13T18:00:00Z"),
    "session_id": "SES-FARMA-0096",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 188,
    "distrito_geolocalizado": "San Martin de Porres"
  },
  {
    "log_id": "LOG-2026-0097",
    "timestamp": new Date("2026-10-14T18:05:00Z"),
    "session_id": "SES-FARMA-0097",
    "endpoint": "/api/v1/carrito",
    "metodo_http": "POST",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 21,
    "distrito_geolocalizado": "Comas"
  },
  {
    "log_id": "LOG-2026-0098",
    "timestamp": new Date("2026-10-15T18:10:00Z"),
    "session_id": "SES-FARMA-0098",
    "endpoint": "/api/v1/checkout",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 34,
    "distrito_geolocalizado": "San Juan de Lurigancho"
  },
  {
    "log_id": "LOG-2026-0099",
    "timestamp": new Date("2026-10-16T18:15:00Z"),
    "session_id": "SES-FARMA-0099",
    "endpoint": "/api/v1/farmacias/cercanas",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 47,
    "distrito_geolocalizado": "Ate"
  },
  {
    "log_id": "LOG-2026-0100",
    "timestamp": new Date("2026-10-17T18:20:00Z"),
    "session_id": "SES-FARMA-0100",
    "endpoint": "/api/v1/medicamentos",
    "metodo_http": "GET",
    "codigo_estado": 200,
    "tiempo_respuesta_ms": 60,
    "distrito_geolocalizado": "Villa El Salvador"
  }
]);

print('Carga masiva completada exitosamente.');
print('Total ventas_historicas: ' + db.ventas_historicas.countDocuments());
print('Total resenas: ' + db.resenas.countDocuments());
print('Total auditoria_eventos: ' + db.auditoria_eventos.countDocuments());
print('Total logs_marketplace: ' + db.logs_marketplace.countDocuments());