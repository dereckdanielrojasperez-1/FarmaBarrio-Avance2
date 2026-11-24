// Carga Masiva Oficial de 500 Documentos NoSQL (Semana 17)
// Base de datos canónica: farmabarrio_mongo
// Distribución: 100 registros por participante (5 integrantes)
use farmabarrio_mongo;


// ==============================================================================
// PARTICIPANTE 1: Maykel Quiñones (100 DOCUMENTOS)
// ==============================================================================

// 1.1. Ventas Históricas Retail (40 documentos) - Maykel Quiñones
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-MK-1001",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-02T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1101,
      "nombre_completo": "Paciente Vecino 1001",
      "dni_ruc": "40001001",
      "telefono": "987651001"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1002",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-03T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1102,
      "nombre_completo": "Paciente Vecino 1002",
      "dni_ruc": "40001002",
      "telefono": "987651002"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1003",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-04T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1103,
      "nombre_completo": "Paciente Vecino 1003",
      "dni_ruc": "40001003",
      "telefono": "987651003"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1004",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-05T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1104,
      "nombre_completo": "Paciente Vecino 1004",
      "dni_ruc": "40001004",
      "telefono": "987651004"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1005",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-06T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1105,
      "nombre_completo": "Paciente Vecino 1005",
      "dni_ruc": "40001005",
      "telefono": "987651005"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1006",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-07T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1106,
      "nombre_completo": "Paciente Vecino 1006",
      "dni_ruc": "40001006",
      "telefono": "987651006"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1007",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-08T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1107,
      "nombre_completo": "Paciente Vecino 1007",
      "dni_ruc": "40001007",
      "telefono": "987651007"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1008",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-09T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1108,
      "nombre_completo": "Paciente Vecino 1008",
      "dni_ruc": "40001008",
      "telefono": "987651008"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1009",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-10T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1109,
      "nombre_completo": "Paciente Vecino 1009",
      "dni_ruc": "40001009",
      "telefono": "987651009"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1010",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-11T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1110,
      "nombre_completo": "Paciente Vecino 1010",
      "dni_ruc": "40001010",
      "telefono": "987651010"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1011",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-12T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1111,
      "nombre_completo": "Paciente Vecino 1011",
      "dni_ruc": "40001011",
      "telefono": "987651011"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1012",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-13T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1112,
      "nombre_completo": "Paciente Vecino 1012",
      "dni_ruc": "40001012",
      "telefono": "987651012"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1013",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-14T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1113,
      "nombre_completo": "Paciente Vecino 1013",
      "dni_ruc": "40001013",
      "telefono": "987651013"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1014",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-15T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1114,
      "nombre_completo": "Paciente Vecino 1014",
      "dni_ruc": "40001014",
      "telefono": "987651014"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1015",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-16T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1115,
      "nombre_completo": "Paciente Vecino 1015",
      "dni_ruc": "40001015",
      "telefono": "987651015"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1016",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-17T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1116,
      "nombre_completo": "Paciente Vecino 1016",
      "dni_ruc": "40001016",
      "telefono": "987651016"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1017",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-18T03:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1117,
      "nombre_completo": "Paciente Vecino 1017",
      "dni_ruc": "40001017",
      "telefono": "987651017"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1018",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-19T06:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1118,
      "nombre_completo": "Paciente Vecino 1018",
      "dni_ruc": "40001018",
      "telefono": "987651018"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1019",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-20T09:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1119,
      "nombre_completo": "Paciente Vecino 1019",
      "dni_ruc": "40001019",
      "telefono": "987651019"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1020",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-21T12:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1120,
      "nombre_completo": "Paciente Vecino 1020",
      "dni_ruc": "40001020",
      "telefono": "987651020"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1021",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-22T15:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1121,
      "nombre_completo": "Paciente Vecino 1021",
      "dni_ruc": "40001021",
      "telefono": "987651021"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1022",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-23T18:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1122,
      "nombre_completo": "Paciente Vecino 1022",
      "dni_ruc": "40001022",
      "telefono": "987651022"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1023",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-24T21:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1123,
      "nombre_completo": "Paciente Vecino 1023",
      "dni_ruc": "40001023",
      "telefono": "987651023"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1024",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-25T00:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1124,
      "nombre_completo": "Paciente Vecino 1024",
      "dni_ruc": "40001024",
      "telefono": "987651024"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1025",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-26T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1125,
      "nombre_completo": "Paciente Vecino 1025",
      "dni_ruc": "40001025",
      "telefono": "987651025"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1026",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-27T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1126,
      "nombre_completo": "Paciente Vecino 1026",
      "dni_ruc": "40001026",
      "telefono": "987651026"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1027",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-28T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1127,
      "nombre_completo": "Paciente Vecino 1027",
      "dni_ruc": "40001027",
      "telefono": "987651027"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1028",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-29T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1128,
      "nombre_completo": "Paciente Vecino 1028",
      "dni_ruc": "40001028",
      "telefono": "987651028"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1029",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-30T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1129,
      "nombre_completo": "Paciente Vecino 1029",
      "dni_ruc": "40001029",
      "telefono": "987651029"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1030",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-31T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1130,
      "nombre_completo": "Paciente Vecino 1030",
      "dni_ruc": "40001030",
      "telefono": "987651030"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-MK-1031",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-01T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1131,
      "nombre_completo": "Paciente Vecino 1031",
      "dni_ruc": "40001031",
      "telefono": "987651031"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1032",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-11-02T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1132,
      "nombre_completo": "Paciente Vecino 1032",
      "dni_ruc": "40001032",
      "telefono": "987651032"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1033",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-11-03T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1133,
      "nombre_completo": "Paciente Vecino 1033",
      "dni_ruc": "40001033",
      "telefono": "987651033"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1034",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-11-04T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1134,
      "nombre_completo": "Paciente Vecino 1034",
      "dni_ruc": "40001034",
      "telefono": "987651034"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1035",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-11-05T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1135,
      "nombre_completo": "Paciente Vecino 1035",
      "dni_ruc": "40001035",
      "telefono": "987651035"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1036",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-06T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1136,
      "nombre_completo": "Paciente Vecino 1036",
      "dni_ruc": "40001036",
      "telefono": "987651036"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1037",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-07T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1137,
      "nombre_completo": "Paciente Vecino 1037",
      "dni_ruc": "40001037",
      "telefono": "987651037"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1038",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-08T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 1138,
      "nombre_completo": "Paciente Vecino 1038",
      "dni_ruc": "40001038",
      "telefono": "987651038"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1039",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-11-09T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 1139,
      "nombre_completo": "Paciente Vecino 1039",
      "dni_ruc": "40001039",
      "telefono": "987651039"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-MK-1040",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-11-10T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 1140,
      "nombre_completo": "Paciente Vecino 1040",
      "dni_ruc": "40001040",
      "telefono": "987651040"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  }
]);


// 1.2. Reseñas y Calificaciones (20 documentos) - Maykel Quiñones
db.resenas.insertMany([
  {
    "resena_id": "RES-MK-1001",
    "cliente_id": 1101,
    "farmacia_id": 1,
    "medicamento_id": 2,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Amoxicilina 500mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-03T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-MK-1002",
    "cliente_id": 1102,
    "farmacia_id": 2,
    "medicamento_id": 3,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Ibuprofeno 400mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-05T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-MK-1003",
    "cliente_id": 1103,
    "farmacia_id": 3,
    "medicamento_id": 4,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Azitromicina 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-07T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-MK-1004",
    "cliente_id": 1104,
    "farmacia_id": 4,
    "medicamento_id": 5,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Loratadina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-09T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-MK-1005",
    "cliente_id": 1105,
    "farmacia_id": 5,
    "medicamento_id": 6,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Omeprazol 20mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-11T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-MK-1006",
    "cliente_id": 1106,
    "farmacia_id": 6,
    "medicamento_id": 7,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Metformina 850mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-13T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-MK-1007",
    "cliente_id": 1107,
    "farmacia_id": 7,
    "medicamento_id": 8,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Losartan 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-15T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-MK-1008",
    "cliente_id": 1108,
    "farmacia_id": 1,
    "medicamento_id": 9,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Atorvastatina 20mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-17T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-MK-1009",
    "cliente_id": 1109,
    "farmacia_id": 2,
    "medicamento_id": 10,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Ciprofloxacino 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-19T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-MK-1010",
    "cliente_id": 1110,
    "farmacia_id": 3,
    "medicamento_id": 11,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Salbutamol Inhalador 100mcg siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-21T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-MK-1011",
    "cliente_id": 1111,
    "farmacia_id": 4,
    "medicamento_id": 12,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Cetirizina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-23T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-MK-1012",
    "cliente_id": 1112,
    "farmacia_id": 5,
    "medicamento_id": 13,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Naproxeno 550mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-25T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-MK-1013",
    "cliente_id": 1113,
    "farmacia_id": 6,
    "medicamento_id": 14,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Clonazepam 2mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-27T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-MK-1014",
    "cliente_id": 1114,
    "farmacia_id": 7,
    "medicamento_id": 15,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Diclofenaco 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-29T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-MK-1015",
    "cliente_id": 1115,
    "farmacia_id": 1,
    "medicamento_id": 16,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Sertralina 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-31T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-MK-1016",
    "cliente_id": 1116,
    "farmacia_id": 2,
    "medicamento_id": 17,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Fluconazol 150mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-02T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-MK-1017",
    "cliente_id": 1117,
    "farmacia_id": 3,
    "medicamento_id": 18,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Enalapril 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-04T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-MK-1018",
    "cliente_id": 1118,
    "farmacia_id": 4,
    "medicamento_id": 19,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Dexametasona 4mg Amp siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-06T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-MK-1019",
    "cliente_id": 1119,
    "farmacia_id": 5,
    "medicamento_id": 20,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Complejo B Forte Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-08T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-MK-1020",
    "cliente_id": 1120,
    "farmacia_id": 6,
    "medicamento_id": 1,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Paracetamol 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-10T10:00:00Z"
    },
    "util_conteo": 4
  }
]);


// 1.3. Auditoría de Seguridad (20 documentos) - Maykel Quiñones
db.auditoria_eventos.insertMany([
  {
    "evento_id": "AUD-MK-1001",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.11",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-02T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1002",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.12",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-03T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1003",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.13",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-04T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1004",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.14",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-05T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1005",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.15",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-06T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1006",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.16",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-07T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1007",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.17",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-08T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1008",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.18",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-09T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1009",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.19",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-10T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1010",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.20",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-11T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1011",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.21",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-12T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1012",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.22",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-13T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1013",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.23",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-14T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1014",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.24",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-15T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1015",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.25",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-16T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1016",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.26",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-17T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1017",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.27",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-18T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1018",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.28",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-19T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1019",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.29",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-20T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-MK-1020",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.30",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-21T14:00:00Z"
    }
  }
]);


// 1.4. Telemetría Marketplace (20 documentos) - Maykel Quiñones
db.logs_marketplace.insertMany([
  {
    "log_id": "LOG-MK-1001",
    "session_id": "SESS-MK-001001",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Amoxicilina",
    "farmacia_id": 1,
    "medicamento_id": 2,
    "duracion_seg": 22,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0378,
        -12.0414
      ]
    },
    "timestamp": {
      "$date": "2024-10-02T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1002",
    "session_id": "SESS-MK-001002",
    "usuario_id": 1102,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Ibuprofeno",
    "farmacia_id": 2,
    "medicamento_id": 3,
    "duracion_seg": 29,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0328,
        -12.0364
      ]
    },
    "timestamp": {
      "$date": "2024-10-03T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1003",
    "session_id": "SESS-MK-001003",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Azitromicina",
    "farmacia_id": 3,
    "medicamento_id": 4,
    "duracion_seg": 36,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0278,
        -12.0314
      ]
    },
    "timestamp": {
      "$date": "2024-10-04T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1004",
    "session_id": "SESS-MK-001004",
    "usuario_id": 1104,
    "tipo_evento": "search",
    "busqueda_texto": "Loratadina",
    "farmacia_id": 4,
    "medicamento_id": 5,
    "duracion_seg": 43,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0228,
        -12.0264
      ]
    },
    "timestamp": {
      "$date": "2024-10-05T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1005",
    "session_id": "SESS-MK-001005",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Omeprazol",
    "farmacia_id": 5,
    "medicamento_id": 6,
    "duracion_seg": 50,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0178,
        -12.0214
      ]
    },
    "timestamp": {
      "$date": "2024-10-06T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1006",
    "session_id": "SESS-MK-001006",
    "usuario_id": 1106,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Metformina",
    "farmacia_id": 6,
    "medicamento_id": 7,
    "duracion_seg": 57,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0128,
        -12.0164
      ]
    },
    "timestamp": {
      "$date": "2024-10-07T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1007",
    "session_id": "SESS-MK-001007",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Losartan",
    "farmacia_id": 7,
    "medicamento_id": 8,
    "duracion_seg": 64,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0078,
        -12.0114
      ]
    },
    "timestamp": {
      "$date": "2024-10-08T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1008",
    "session_id": "SESS-MK-001008",
    "usuario_id": 1108,
    "tipo_evento": "search",
    "busqueda_texto": "Atorvastatina",
    "farmacia_id": 1,
    "medicamento_id": 9,
    "duracion_seg": 71,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0028,
        -12.006400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-09T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1009",
    "session_id": "SESS-MK-001009",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Ciprofloxacino",
    "farmacia_id": 2,
    "medicamento_id": 10,
    "duracion_seg": 78,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9978,
        -12.0014
      ]
    },
    "timestamp": {
      "$date": "2024-10-10T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1010",
    "session_id": "SESS-MK-001010",
    "usuario_id": 1110,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Salbutamol",
    "farmacia_id": 3,
    "medicamento_id": 11,
    "duracion_seg": 85,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9928,
        -11.9964
      ]
    },
    "timestamp": {
      "$date": "2024-10-11T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1011",
    "session_id": "SESS-MK-001011",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Cetirizina",
    "farmacia_id": 4,
    "medicamento_id": 12,
    "duracion_seg": 92,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9878,
        -11.9914
      ]
    },
    "timestamp": {
      "$date": "2024-10-12T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1012",
    "session_id": "SESS-MK-001012",
    "usuario_id": 1112,
    "tipo_evento": "search",
    "busqueda_texto": "Naproxeno",
    "farmacia_id": 5,
    "medicamento_id": 13,
    "duracion_seg": 99,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9828,
        -11.9864
      ]
    },
    "timestamp": {
      "$date": "2024-10-13T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1013",
    "session_id": "SESS-MK-001013",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Clonazepam",
    "farmacia_id": 6,
    "medicamento_id": 14,
    "duracion_seg": 106,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9778,
        -11.9814
      ]
    },
    "timestamp": {
      "$date": "2024-10-14T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1014",
    "session_id": "SESS-MK-001014",
    "usuario_id": 1114,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Diclofenaco",
    "farmacia_id": 7,
    "medicamento_id": 15,
    "duracion_seg": 113,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9728,
        -11.9764
      ]
    },
    "timestamp": {
      "$date": "2024-10-15T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1015",
    "session_id": "SESS-MK-001015",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Sertralina",
    "farmacia_id": 1,
    "medicamento_id": 16,
    "duracion_seg": 120,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9678,
        -11.971400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-16T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1016",
    "session_id": "SESS-MK-001016",
    "usuario_id": 1116,
    "tipo_evento": "search",
    "busqueda_texto": "Fluconazol",
    "farmacia_id": 2,
    "medicamento_id": 17,
    "duracion_seg": 127,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9628,
        -11.9664
      ]
    },
    "timestamp": {
      "$date": "2024-10-17T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1017",
    "session_id": "SESS-MK-001017",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Enalapril",
    "farmacia_id": 3,
    "medicamento_id": 18,
    "duracion_seg": 134,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9578,
        -11.9614
      ]
    },
    "timestamp": {
      "$date": "2024-10-18T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1018",
    "session_id": "SESS-MK-001018",
    "usuario_id": 1118,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Dexametasona",
    "farmacia_id": 4,
    "medicamento_id": 19,
    "duracion_seg": 141,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9528,
        -11.9564
      ]
    },
    "timestamp": {
      "$date": "2024-10-19T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1019",
    "session_id": "SESS-MK-001019",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Complejo",
    "farmacia_id": 5,
    "medicamento_id": 20,
    "duracion_seg": 148,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9478,
        -11.9514
      ]
    },
    "timestamp": {
      "$date": "2024-10-20T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-MK-1020",
    "session_id": "SESS-MK-001020",
    "usuario_id": 1120,
    "tipo_evento": "search",
    "busqueda_texto": "Paracetamol",
    "farmacia_id": 6,
    "medicamento_id": 1,
    "duracion_seg": 155,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9428,
        -11.9464
      ]
    },
    "timestamp": {
      "$date": "2024-10-21T19:00:00Z"
    }
  }
]);


// ==============================================================================
// PARTICIPANTE 2: Leonardo Wong (100 DOCUMENTOS)
// ==============================================================================

// 1.1. Ventas Históricas Retail (40 documentos) - Leonardo Wong
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-LW-2001",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-02T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2101,
      "nombre_completo": "Paciente Vecino 2001",
      "dni_ruc": "40002001",
      "telefono": "987652001"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2002",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-03T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2102,
      "nombre_completo": "Paciente Vecino 2002",
      "dni_ruc": "40002002",
      "telefono": "987652002"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2003",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-04T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2103,
      "nombre_completo": "Paciente Vecino 2003",
      "dni_ruc": "40002003",
      "telefono": "987652003"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2004",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-05T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2104,
      "nombre_completo": "Paciente Vecino 2004",
      "dni_ruc": "40002004",
      "telefono": "987652004"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2005",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-06T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2105,
      "nombre_completo": "Paciente Vecino 2005",
      "dni_ruc": "40002005",
      "telefono": "987652005"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2006",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-07T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2106,
      "nombre_completo": "Paciente Vecino 2006",
      "dni_ruc": "40002006",
      "telefono": "987652006"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2007",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-08T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2107,
      "nombre_completo": "Paciente Vecino 2007",
      "dni_ruc": "40002007",
      "telefono": "987652007"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2008",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-09T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2108,
      "nombre_completo": "Paciente Vecino 2008",
      "dni_ruc": "40002008",
      "telefono": "987652008"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2009",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-10T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2109,
      "nombre_completo": "Paciente Vecino 2009",
      "dni_ruc": "40002009",
      "telefono": "987652009"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2010",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-11T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2110,
      "nombre_completo": "Paciente Vecino 2010",
      "dni_ruc": "40002010",
      "telefono": "987652010"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2011",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-12T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2111,
      "nombre_completo": "Paciente Vecino 2011",
      "dni_ruc": "40002011",
      "telefono": "987652011"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2012",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-13T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2112,
      "nombre_completo": "Paciente Vecino 2012",
      "dni_ruc": "40002012",
      "telefono": "987652012"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2013",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-14T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2113,
      "nombre_completo": "Paciente Vecino 2013",
      "dni_ruc": "40002013",
      "telefono": "987652013"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2014",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-15T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2114,
      "nombre_completo": "Paciente Vecino 2014",
      "dni_ruc": "40002014",
      "telefono": "987652014"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2015",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-16T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2115,
      "nombre_completo": "Paciente Vecino 2015",
      "dni_ruc": "40002015",
      "telefono": "987652015"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2016",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-17T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2116,
      "nombre_completo": "Paciente Vecino 2016",
      "dni_ruc": "40002016",
      "telefono": "987652016"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2017",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-18T03:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2117,
      "nombre_completo": "Paciente Vecino 2017",
      "dni_ruc": "40002017",
      "telefono": "987652017"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2018",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-19T06:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2118,
      "nombre_completo": "Paciente Vecino 2018",
      "dni_ruc": "40002018",
      "telefono": "987652018"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2019",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-20T09:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2119,
      "nombre_completo": "Paciente Vecino 2019",
      "dni_ruc": "40002019",
      "telefono": "987652019"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2020",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-21T12:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2120,
      "nombre_completo": "Paciente Vecino 2020",
      "dni_ruc": "40002020",
      "telefono": "987652020"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2021",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-22T15:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2121,
      "nombre_completo": "Paciente Vecino 2021",
      "dni_ruc": "40002021",
      "telefono": "987652021"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2022",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-23T18:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2122,
      "nombre_completo": "Paciente Vecino 2022",
      "dni_ruc": "40002022",
      "telefono": "987652022"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2023",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-24T21:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2123,
      "nombre_completo": "Paciente Vecino 2023",
      "dni_ruc": "40002023",
      "telefono": "987652023"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2024",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-25T00:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2124,
      "nombre_completo": "Paciente Vecino 2024",
      "dni_ruc": "40002024",
      "telefono": "987652024"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2025",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-26T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2125,
      "nombre_completo": "Paciente Vecino 2025",
      "dni_ruc": "40002025",
      "telefono": "987652025"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2026",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-27T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2126,
      "nombre_completo": "Paciente Vecino 2026",
      "dni_ruc": "40002026",
      "telefono": "987652026"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2027",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-28T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2127,
      "nombre_completo": "Paciente Vecino 2027",
      "dni_ruc": "40002027",
      "telefono": "987652027"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2028",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-29T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2128,
      "nombre_completo": "Paciente Vecino 2028",
      "dni_ruc": "40002028",
      "telefono": "987652028"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2029",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-30T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2129,
      "nombre_completo": "Paciente Vecino 2029",
      "dni_ruc": "40002029",
      "telefono": "987652029"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2030",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-31T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2130,
      "nombre_completo": "Paciente Vecino 2030",
      "dni_ruc": "40002030",
      "telefono": "987652030"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-LW-2031",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-01T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2131,
      "nombre_completo": "Paciente Vecino 2031",
      "dni_ruc": "40002031",
      "telefono": "987652031"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2032",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-02T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2132,
      "nombre_completo": "Paciente Vecino 2032",
      "dni_ruc": "40002032",
      "telefono": "987652032"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2033",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-11-03T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2133,
      "nombre_completo": "Paciente Vecino 2033",
      "dni_ruc": "40002033",
      "telefono": "987652033"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2034",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-11-04T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2134,
      "nombre_completo": "Paciente Vecino 2034",
      "dni_ruc": "40002034",
      "telefono": "987652034"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2035",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-11-05T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2135,
      "nombre_completo": "Paciente Vecino 2035",
      "dni_ruc": "40002035",
      "telefono": "987652035"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2036",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-11-06T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2136,
      "nombre_completo": "Paciente Vecino 2036",
      "dni_ruc": "40002036",
      "telefono": "987652036"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2037",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-07T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2137,
      "nombre_completo": "Paciente Vecino 2037",
      "dni_ruc": "40002037",
      "telefono": "987652037"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2038",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-08T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 2138,
      "nombre_completo": "Paciente Vecino 2038",
      "dni_ruc": "40002038",
      "telefono": "987652038"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2039",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-09T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 2139,
      "nombre_completo": "Paciente Vecino 2039",
      "dni_ruc": "40002039",
      "telefono": "987652039"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-LW-2040",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-11-10T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 2140,
      "nombre_completo": "Paciente Vecino 2040",
      "dni_ruc": "40002040",
      "telefono": "987652040"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  }
]);


// 1.2. Reseñas y Calificaciones (20 documentos) - Leonardo Wong
db.resenas.insertMany([
  {
    "resena_id": "RES-LW-2001",
    "cliente_id": 2101,
    "farmacia_id": 7,
    "medicamento_id": 2,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Amoxicilina 500mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-03T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-LW-2002",
    "cliente_id": 2102,
    "farmacia_id": 1,
    "medicamento_id": 3,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Ibuprofeno 400mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-05T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-LW-2003",
    "cliente_id": 2103,
    "farmacia_id": 2,
    "medicamento_id": 4,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Azitromicina 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-07T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-LW-2004",
    "cliente_id": 2104,
    "farmacia_id": 3,
    "medicamento_id": 5,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Loratadina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-09T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-LW-2005",
    "cliente_id": 2105,
    "farmacia_id": 4,
    "medicamento_id": 6,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Omeprazol 20mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-11T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-LW-2006",
    "cliente_id": 2106,
    "farmacia_id": 5,
    "medicamento_id": 7,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Metformina 850mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-13T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-LW-2007",
    "cliente_id": 2107,
    "farmacia_id": 6,
    "medicamento_id": 8,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Losartan 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-15T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-LW-2008",
    "cliente_id": 2108,
    "farmacia_id": 7,
    "medicamento_id": 9,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Atorvastatina 20mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-17T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-LW-2009",
    "cliente_id": 2109,
    "farmacia_id": 1,
    "medicamento_id": 10,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Ciprofloxacino 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-19T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-LW-2010",
    "cliente_id": 2110,
    "farmacia_id": 2,
    "medicamento_id": 11,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Salbutamol Inhalador 100mcg siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-21T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-LW-2011",
    "cliente_id": 2111,
    "farmacia_id": 3,
    "medicamento_id": 12,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Cetirizina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-23T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-LW-2012",
    "cliente_id": 2112,
    "farmacia_id": 4,
    "medicamento_id": 13,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Naproxeno 550mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-25T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-LW-2013",
    "cliente_id": 2113,
    "farmacia_id": 5,
    "medicamento_id": 14,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Clonazepam 2mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-27T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-LW-2014",
    "cliente_id": 2114,
    "farmacia_id": 6,
    "medicamento_id": 15,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Diclofenaco 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-29T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-LW-2015",
    "cliente_id": 2115,
    "farmacia_id": 7,
    "medicamento_id": 16,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Sertralina 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-31T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-LW-2016",
    "cliente_id": 2116,
    "farmacia_id": 1,
    "medicamento_id": 17,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Fluconazol 150mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-02T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-LW-2017",
    "cliente_id": 2117,
    "farmacia_id": 2,
    "medicamento_id": 18,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Enalapril 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-04T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-LW-2018",
    "cliente_id": 2118,
    "farmacia_id": 3,
    "medicamento_id": 19,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Dexametasona 4mg Amp siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-06T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-LW-2019",
    "cliente_id": 2119,
    "farmacia_id": 4,
    "medicamento_id": 20,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Complejo B Forte Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-08T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-LW-2020",
    "cliente_id": 2120,
    "farmacia_id": 5,
    "medicamento_id": 1,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Paracetamol 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-10T10:00:00Z"
    },
    "util_conteo": 4
  }
]);


// 1.3. Auditoría de Seguridad (20 documentos) - Leonardo Wong
db.auditoria_eventos.insertMany([
  {
    "evento_id": "AUD-LW-2001",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.11",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-02T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2002",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.12",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-03T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2003",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.13",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-04T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2004",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.14",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-05T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2005",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.15",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-06T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2006",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.16",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-07T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2007",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.17",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-08T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2008",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.18",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-09T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2009",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.19",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-10T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2010",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.20",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-11T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2011",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.21",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-12T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2012",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.22",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-13T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2013",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.23",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-14T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2014",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.24",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-15T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2015",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.25",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-16T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2016",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.26",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-17T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2017",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.27",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-18T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2018",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.28",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-19T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2019",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.29",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-20T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-LW-2020",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.30",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-21T14:00:00Z"
    }
  }
]);


// 1.4. Telemetría Marketplace (20 documentos) - Leonardo Wong
db.logs_marketplace.insertMany([
  {
    "log_id": "LOG-LW-2001",
    "session_id": "SESS-LW-002001",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Amoxicilina",
    "farmacia_id": 7,
    "medicamento_id": 2,
    "duracion_seg": 22,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0378,
        -12.0414
      ]
    },
    "timestamp": {
      "$date": "2024-10-02T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2002",
    "session_id": "SESS-LW-002002",
    "usuario_id": 2102,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Ibuprofeno",
    "farmacia_id": 1,
    "medicamento_id": 3,
    "duracion_seg": 29,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0328,
        -12.0364
      ]
    },
    "timestamp": {
      "$date": "2024-10-03T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2003",
    "session_id": "SESS-LW-002003",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Azitromicina",
    "farmacia_id": 2,
    "medicamento_id": 4,
    "duracion_seg": 36,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0278,
        -12.0314
      ]
    },
    "timestamp": {
      "$date": "2024-10-04T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2004",
    "session_id": "SESS-LW-002004",
    "usuario_id": 2104,
    "tipo_evento": "search",
    "busqueda_texto": "Loratadina",
    "farmacia_id": 3,
    "medicamento_id": 5,
    "duracion_seg": 43,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0228,
        -12.0264
      ]
    },
    "timestamp": {
      "$date": "2024-10-05T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2005",
    "session_id": "SESS-LW-002005",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Omeprazol",
    "farmacia_id": 4,
    "medicamento_id": 6,
    "duracion_seg": 50,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0178,
        -12.0214
      ]
    },
    "timestamp": {
      "$date": "2024-10-06T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2006",
    "session_id": "SESS-LW-002006",
    "usuario_id": 2106,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Metformina",
    "farmacia_id": 5,
    "medicamento_id": 7,
    "duracion_seg": 57,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0128,
        -12.0164
      ]
    },
    "timestamp": {
      "$date": "2024-10-07T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2007",
    "session_id": "SESS-LW-002007",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Losartan",
    "farmacia_id": 6,
    "medicamento_id": 8,
    "duracion_seg": 64,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0078,
        -12.0114
      ]
    },
    "timestamp": {
      "$date": "2024-10-08T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2008",
    "session_id": "SESS-LW-002008",
    "usuario_id": 2108,
    "tipo_evento": "search",
    "busqueda_texto": "Atorvastatina",
    "farmacia_id": 7,
    "medicamento_id": 9,
    "duracion_seg": 71,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0028,
        -12.006400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-09T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2009",
    "session_id": "SESS-LW-002009",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Ciprofloxacino",
    "farmacia_id": 1,
    "medicamento_id": 10,
    "duracion_seg": 78,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9978,
        -12.0014
      ]
    },
    "timestamp": {
      "$date": "2024-10-10T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2010",
    "session_id": "SESS-LW-002010",
    "usuario_id": 2110,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Salbutamol",
    "farmacia_id": 2,
    "medicamento_id": 11,
    "duracion_seg": 85,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9928,
        -11.9964
      ]
    },
    "timestamp": {
      "$date": "2024-10-11T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2011",
    "session_id": "SESS-LW-002011",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Cetirizina",
    "farmacia_id": 3,
    "medicamento_id": 12,
    "duracion_seg": 92,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9878,
        -11.9914
      ]
    },
    "timestamp": {
      "$date": "2024-10-12T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2012",
    "session_id": "SESS-LW-002012",
    "usuario_id": 2112,
    "tipo_evento": "search",
    "busqueda_texto": "Naproxeno",
    "farmacia_id": 4,
    "medicamento_id": 13,
    "duracion_seg": 99,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9828,
        -11.9864
      ]
    },
    "timestamp": {
      "$date": "2024-10-13T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2013",
    "session_id": "SESS-LW-002013",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Clonazepam",
    "farmacia_id": 5,
    "medicamento_id": 14,
    "duracion_seg": 106,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9778,
        -11.9814
      ]
    },
    "timestamp": {
      "$date": "2024-10-14T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2014",
    "session_id": "SESS-LW-002014",
    "usuario_id": 2114,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Diclofenaco",
    "farmacia_id": 6,
    "medicamento_id": 15,
    "duracion_seg": 113,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9728,
        -11.9764
      ]
    },
    "timestamp": {
      "$date": "2024-10-15T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2015",
    "session_id": "SESS-LW-002015",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Sertralina",
    "farmacia_id": 7,
    "medicamento_id": 16,
    "duracion_seg": 120,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9678,
        -11.971400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-16T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2016",
    "session_id": "SESS-LW-002016",
    "usuario_id": 2116,
    "tipo_evento": "search",
    "busqueda_texto": "Fluconazol",
    "farmacia_id": 1,
    "medicamento_id": 17,
    "duracion_seg": 127,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9628,
        -11.9664
      ]
    },
    "timestamp": {
      "$date": "2024-10-17T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2017",
    "session_id": "SESS-LW-002017",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Enalapril",
    "farmacia_id": 2,
    "medicamento_id": 18,
    "duracion_seg": 134,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9578,
        -11.9614
      ]
    },
    "timestamp": {
      "$date": "2024-10-18T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2018",
    "session_id": "SESS-LW-002018",
    "usuario_id": 2118,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Dexametasona",
    "farmacia_id": 3,
    "medicamento_id": 19,
    "duracion_seg": 141,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9528,
        -11.9564
      ]
    },
    "timestamp": {
      "$date": "2024-10-19T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2019",
    "session_id": "SESS-LW-002019",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Complejo",
    "farmacia_id": 4,
    "medicamento_id": 20,
    "duracion_seg": 148,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9478,
        -11.9514
      ]
    },
    "timestamp": {
      "$date": "2024-10-20T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-LW-2020",
    "session_id": "SESS-LW-002020",
    "usuario_id": 2120,
    "tipo_evento": "search",
    "busqueda_texto": "Paracetamol",
    "farmacia_id": 5,
    "medicamento_id": 1,
    "duracion_seg": 155,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9428,
        -11.9464
      ]
    },
    "timestamp": {
      "$date": "2024-10-21T19:00:00Z"
    }
  }
]);


// ==============================================================================
// PARTICIPANTE 3: Nicole Garcia (100 DOCUMENTOS)
// ==============================================================================

// 1.1. Ventas Históricas Retail (40 documentos) - Nicole Garcia
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-NG-3001",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-02T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3101,
      "nombre_completo": "Paciente Vecino 3001",
      "dni_ruc": "40003001",
      "telefono": "987653001"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3002",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-03T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3102,
      "nombre_completo": "Paciente Vecino 3002",
      "dni_ruc": "40003002",
      "telefono": "987653002"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3003",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-04T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3103,
      "nombre_completo": "Paciente Vecino 3003",
      "dni_ruc": "40003003",
      "telefono": "987653003"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3004",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-05T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3104,
      "nombre_completo": "Paciente Vecino 3004",
      "dni_ruc": "40003004",
      "telefono": "987653004"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3005",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-06T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3105,
      "nombre_completo": "Paciente Vecino 3005",
      "dni_ruc": "40003005",
      "telefono": "987653005"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3006",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-07T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3106,
      "nombre_completo": "Paciente Vecino 3006",
      "dni_ruc": "40003006",
      "telefono": "987653006"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3007",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-08T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3107,
      "nombre_completo": "Paciente Vecino 3007",
      "dni_ruc": "40003007",
      "telefono": "987653007"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3008",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-09T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3108,
      "nombre_completo": "Paciente Vecino 3008",
      "dni_ruc": "40003008",
      "telefono": "987653008"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3009",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-10T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3109,
      "nombre_completo": "Paciente Vecino 3009",
      "dni_ruc": "40003009",
      "telefono": "987653009"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3010",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-11T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3110,
      "nombre_completo": "Paciente Vecino 3010",
      "dni_ruc": "40003010",
      "telefono": "987653010"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3011",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-12T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3111,
      "nombre_completo": "Paciente Vecino 3011",
      "dni_ruc": "40003011",
      "telefono": "987653011"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3012",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-13T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3112,
      "nombre_completo": "Paciente Vecino 3012",
      "dni_ruc": "40003012",
      "telefono": "987653012"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3013",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-14T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3113,
      "nombre_completo": "Paciente Vecino 3013",
      "dni_ruc": "40003013",
      "telefono": "987653013"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3014",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-15T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3114,
      "nombre_completo": "Paciente Vecino 3014",
      "dni_ruc": "40003014",
      "telefono": "987653014"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3015",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-16T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3115,
      "nombre_completo": "Paciente Vecino 3015",
      "dni_ruc": "40003015",
      "telefono": "987653015"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3016",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-17T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3116,
      "nombre_completo": "Paciente Vecino 3016",
      "dni_ruc": "40003016",
      "telefono": "987653016"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3017",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-18T03:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3117,
      "nombre_completo": "Paciente Vecino 3017",
      "dni_ruc": "40003017",
      "telefono": "987653017"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3018",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-19T06:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3118,
      "nombre_completo": "Paciente Vecino 3018",
      "dni_ruc": "40003018",
      "telefono": "987653018"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3019",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-20T09:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3119,
      "nombre_completo": "Paciente Vecino 3019",
      "dni_ruc": "40003019",
      "telefono": "987653019"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3020",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-21T12:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3120,
      "nombre_completo": "Paciente Vecino 3020",
      "dni_ruc": "40003020",
      "telefono": "987653020"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3021",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-22T15:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3121,
      "nombre_completo": "Paciente Vecino 3021",
      "dni_ruc": "40003021",
      "telefono": "987653021"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3022",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-23T18:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3122,
      "nombre_completo": "Paciente Vecino 3022",
      "dni_ruc": "40003022",
      "telefono": "987653022"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3023",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-24T21:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3123,
      "nombre_completo": "Paciente Vecino 3023",
      "dni_ruc": "40003023",
      "telefono": "987653023"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3024",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-25T00:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3124,
      "nombre_completo": "Paciente Vecino 3024",
      "dni_ruc": "40003024",
      "telefono": "987653024"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3025",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-26T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3125,
      "nombre_completo": "Paciente Vecino 3025",
      "dni_ruc": "40003025",
      "telefono": "987653025"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3026",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-27T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3126,
      "nombre_completo": "Paciente Vecino 3026",
      "dni_ruc": "40003026",
      "telefono": "987653026"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3027",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-28T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3127,
      "nombre_completo": "Paciente Vecino 3027",
      "dni_ruc": "40003027",
      "telefono": "987653027"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3028",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-29T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3128,
      "nombre_completo": "Paciente Vecino 3028",
      "dni_ruc": "40003028",
      "telefono": "987653028"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3029",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-30T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3129,
      "nombre_completo": "Paciente Vecino 3029",
      "dni_ruc": "40003029",
      "telefono": "987653029"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3030",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-31T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3130,
      "nombre_completo": "Paciente Vecino 3030",
      "dni_ruc": "40003030",
      "telefono": "987653030"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-NG-3031",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-01T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3131,
      "nombre_completo": "Paciente Vecino 3031",
      "dni_ruc": "40003031",
      "telefono": "987653031"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3032",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-02T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3132,
      "nombre_completo": "Paciente Vecino 3032",
      "dni_ruc": "40003032",
      "telefono": "987653032"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3033",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-03T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3133,
      "nombre_completo": "Paciente Vecino 3033",
      "dni_ruc": "40003033",
      "telefono": "987653033"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3034",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-11-04T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3134,
      "nombre_completo": "Paciente Vecino 3034",
      "dni_ruc": "40003034",
      "telefono": "987653034"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3035",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-11-05T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3135,
      "nombre_completo": "Paciente Vecino 3035",
      "dni_ruc": "40003035",
      "telefono": "987653035"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3036",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-11-06T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3136,
      "nombre_completo": "Paciente Vecino 3036",
      "dni_ruc": "40003036",
      "telefono": "987653036"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3037",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-11-07T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3137,
      "nombre_completo": "Paciente Vecino 3037",
      "dni_ruc": "40003037",
      "telefono": "987653037"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3038",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-08T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 3138,
      "nombre_completo": "Paciente Vecino 3038",
      "dni_ruc": "40003038",
      "telefono": "987653038"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3039",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-09T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 3139,
      "nombre_completo": "Paciente Vecino 3039",
      "dni_ruc": "40003039",
      "telefono": "987653039"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-NG-3040",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-10T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 3140,
      "nombre_completo": "Paciente Vecino 3040",
      "dni_ruc": "40003040",
      "telefono": "987653040"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  }
]);


// 1.2. Reseñas y Calificaciones (20 documentos) - Nicole Garcia
db.resenas.insertMany([
  {
    "resena_id": "RES-NG-3001",
    "cliente_id": 3101,
    "farmacia_id": 6,
    "medicamento_id": 2,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Amoxicilina 500mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-03T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-NG-3002",
    "cliente_id": 3102,
    "farmacia_id": 7,
    "medicamento_id": 3,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Ibuprofeno 400mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-05T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-NG-3003",
    "cliente_id": 3103,
    "farmacia_id": 1,
    "medicamento_id": 4,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Azitromicina 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-07T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-NG-3004",
    "cliente_id": 3104,
    "farmacia_id": 2,
    "medicamento_id": 5,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Loratadina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-09T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-NG-3005",
    "cliente_id": 3105,
    "farmacia_id": 3,
    "medicamento_id": 6,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Omeprazol 20mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-11T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-NG-3006",
    "cliente_id": 3106,
    "farmacia_id": 4,
    "medicamento_id": 7,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Metformina 850mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-13T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-NG-3007",
    "cliente_id": 3107,
    "farmacia_id": 5,
    "medicamento_id": 8,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Losartan 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-15T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-NG-3008",
    "cliente_id": 3108,
    "farmacia_id": 6,
    "medicamento_id": 9,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Atorvastatina 20mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-17T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-NG-3009",
    "cliente_id": 3109,
    "farmacia_id": 7,
    "medicamento_id": 10,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Ciprofloxacino 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-19T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-NG-3010",
    "cliente_id": 3110,
    "farmacia_id": 1,
    "medicamento_id": 11,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Salbutamol Inhalador 100mcg siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-21T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-NG-3011",
    "cliente_id": 3111,
    "farmacia_id": 2,
    "medicamento_id": 12,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Cetirizina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-23T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-NG-3012",
    "cliente_id": 3112,
    "farmacia_id": 3,
    "medicamento_id": 13,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Naproxeno 550mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-25T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-NG-3013",
    "cliente_id": 3113,
    "farmacia_id": 4,
    "medicamento_id": 14,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Clonazepam 2mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-27T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-NG-3014",
    "cliente_id": 3114,
    "farmacia_id": 5,
    "medicamento_id": 15,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Diclofenaco 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-29T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-NG-3015",
    "cliente_id": 3115,
    "farmacia_id": 6,
    "medicamento_id": 16,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Sertralina 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-31T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-NG-3016",
    "cliente_id": 3116,
    "farmacia_id": 7,
    "medicamento_id": 17,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Fluconazol 150mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-02T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-NG-3017",
    "cliente_id": 3117,
    "farmacia_id": 1,
    "medicamento_id": 18,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Enalapril 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-04T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-NG-3018",
    "cliente_id": 3118,
    "farmacia_id": 2,
    "medicamento_id": 19,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Dexametasona 4mg Amp siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-06T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-NG-3019",
    "cliente_id": 3119,
    "farmacia_id": 3,
    "medicamento_id": 20,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Complejo B Forte Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-08T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-NG-3020",
    "cliente_id": 3120,
    "farmacia_id": 4,
    "medicamento_id": 1,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Paracetamol 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-10T10:00:00Z"
    },
    "util_conteo": 4
  }
]);


// 1.3. Auditoría de Seguridad (20 documentos) - Nicole Garcia
db.auditoria_eventos.insertMany([
  {
    "evento_id": "AUD-NG-3001",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.11",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-02T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3002",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.12",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-03T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3003",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.13",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-04T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3004",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.14",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-05T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3005",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.15",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-06T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3006",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.16",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-07T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3007",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.17",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-08T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3008",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.18",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-09T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3009",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.19",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-10T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3010",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.20",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-11T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3011",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.21",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-12T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3012",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.22",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-13T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3013",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.23",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-14T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3014",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.24",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-15T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3015",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.25",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-16T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3016",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.26",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-17T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3017",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.27",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-18T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3018",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.28",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-19T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3019",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.29",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-20T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-NG-3020",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.30",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-21T14:00:00Z"
    }
  }
]);


// 1.4. Telemetría Marketplace (20 documentos) - Nicole Garcia
db.logs_marketplace.insertMany([
  {
    "log_id": "LOG-NG-3001",
    "session_id": "SESS-NG-003001",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Amoxicilina",
    "farmacia_id": 6,
    "medicamento_id": 2,
    "duracion_seg": 22,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0378,
        -12.0414
      ]
    },
    "timestamp": {
      "$date": "2024-10-02T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3002",
    "session_id": "SESS-NG-003002",
    "usuario_id": 3102,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Ibuprofeno",
    "farmacia_id": 7,
    "medicamento_id": 3,
    "duracion_seg": 29,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0328,
        -12.0364
      ]
    },
    "timestamp": {
      "$date": "2024-10-03T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3003",
    "session_id": "SESS-NG-003003",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Azitromicina",
    "farmacia_id": 1,
    "medicamento_id": 4,
    "duracion_seg": 36,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0278,
        -12.0314
      ]
    },
    "timestamp": {
      "$date": "2024-10-04T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3004",
    "session_id": "SESS-NG-003004",
    "usuario_id": 3104,
    "tipo_evento": "search",
    "busqueda_texto": "Loratadina",
    "farmacia_id": 2,
    "medicamento_id": 5,
    "duracion_seg": 43,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0228,
        -12.0264
      ]
    },
    "timestamp": {
      "$date": "2024-10-05T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3005",
    "session_id": "SESS-NG-003005",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Omeprazol",
    "farmacia_id": 3,
    "medicamento_id": 6,
    "duracion_seg": 50,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0178,
        -12.0214
      ]
    },
    "timestamp": {
      "$date": "2024-10-06T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3006",
    "session_id": "SESS-NG-003006",
    "usuario_id": 3106,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Metformina",
    "farmacia_id": 4,
    "medicamento_id": 7,
    "duracion_seg": 57,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0128,
        -12.0164
      ]
    },
    "timestamp": {
      "$date": "2024-10-07T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3007",
    "session_id": "SESS-NG-003007",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Losartan",
    "farmacia_id": 5,
    "medicamento_id": 8,
    "duracion_seg": 64,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0078,
        -12.0114
      ]
    },
    "timestamp": {
      "$date": "2024-10-08T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3008",
    "session_id": "SESS-NG-003008",
    "usuario_id": 3108,
    "tipo_evento": "search",
    "busqueda_texto": "Atorvastatina",
    "farmacia_id": 6,
    "medicamento_id": 9,
    "duracion_seg": 71,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0028,
        -12.006400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-09T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3009",
    "session_id": "SESS-NG-003009",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Ciprofloxacino",
    "farmacia_id": 7,
    "medicamento_id": 10,
    "duracion_seg": 78,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9978,
        -12.0014
      ]
    },
    "timestamp": {
      "$date": "2024-10-10T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3010",
    "session_id": "SESS-NG-003010",
    "usuario_id": 3110,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Salbutamol",
    "farmacia_id": 1,
    "medicamento_id": 11,
    "duracion_seg": 85,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9928,
        -11.9964
      ]
    },
    "timestamp": {
      "$date": "2024-10-11T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3011",
    "session_id": "SESS-NG-003011",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Cetirizina",
    "farmacia_id": 2,
    "medicamento_id": 12,
    "duracion_seg": 92,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9878,
        -11.9914
      ]
    },
    "timestamp": {
      "$date": "2024-10-12T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3012",
    "session_id": "SESS-NG-003012",
    "usuario_id": 3112,
    "tipo_evento": "search",
    "busqueda_texto": "Naproxeno",
    "farmacia_id": 3,
    "medicamento_id": 13,
    "duracion_seg": 99,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9828,
        -11.9864
      ]
    },
    "timestamp": {
      "$date": "2024-10-13T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3013",
    "session_id": "SESS-NG-003013",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Clonazepam",
    "farmacia_id": 4,
    "medicamento_id": 14,
    "duracion_seg": 106,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9778,
        -11.9814
      ]
    },
    "timestamp": {
      "$date": "2024-10-14T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3014",
    "session_id": "SESS-NG-003014",
    "usuario_id": 3114,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Diclofenaco",
    "farmacia_id": 5,
    "medicamento_id": 15,
    "duracion_seg": 113,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9728,
        -11.9764
      ]
    },
    "timestamp": {
      "$date": "2024-10-15T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3015",
    "session_id": "SESS-NG-003015",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Sertralina",
    "farmacia_id": 6,
    "medicamento_id": 16,
    "duracion_seg": 120,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9678,
        -11.971400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-16T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3016",
    "session_id": "SESS-NG-003016",
    "usuario_id": 3116,
    "tipo_evento": "search",
    "busqueda_texto": "Fluconazol",
    "farmacia_id": 7,
    "medicamento_id": 17,
    "duracion_seg": 127,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9628,
        -11.9664
      ]
    },
    "timestamp": {
      "$date": "2024-10-17T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3017",
    "session_id": "SESS-NG-003017",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Enalapril",
    "farmacia_id": 1,
    "medicamento_id": 18,
    "duracion_seg": 134,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9578,
        -11.9614
      ]
    },
    "timestamp": {
      "$date": "2024-10-18T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3018",
    "session_id": "SESS-NG-003018",
    "usuario_id": 3118,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Dexametasona",
    "farmacia_id": 2,
    "medicamento_id": 19,
    "duracion_seg": 141,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9528,
        -11.9564
      ]
    },
    "timestamp": {
      "$date": "2024-10-19T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3019",
    "session_id": "SESS-NG-003019",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Complejo",
    "farmacia_id": 3,
    "medicamento_id": 20,
    "duracion_seg": 148,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9478,
        -11.9514
      ]
    },
    "timestamp": {
      "$date": "2024-10-20T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-NG-3020",
    "session_id": "SESS-NG-003020",
    "usuario_id": 3120,
    "tipo_evento": "search",
    "busqueda_texto": "Paracetamol",
    "farmacia_id": 4,
    "medicamento_id": 1,
    "duracion_seg": 155,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9428,
        -11.9464
      ]
    },
    "timestamp": {
      "$date": "2024-10-21T19:00:00Z"
    }
  }
]);


// ==============================================================================
// PARTICIPANTE 4: Jorge Matencio (100 DOCUMENTOS)
// ==============================================================================

// 1.1. Ventas Históricas Retail (40 documentos) - Jorge Matencio
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-JM-4001",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-02T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4101,
      "nombre_completo": "Paciente Vecino 4001",
      "dni_ruc": "40004001",
      "telefono": "987654001"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4002",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-03T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4102,
      "nombre_completo": "Paciente Vecino 4002",
      "dni_ruc": "40004002",
      "telefono": "987654002"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4003",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-04T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4103,
      "nombre_completo": "Paciente Vecino 4003",
      "dni_ruc": "40004003",
      "telefono": "987654003"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4004",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-05T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4104,
      "nombre_completo": "Paciente Vecino 4004",
      "dni_ruc": "40004004",
      "telefono": "987654004"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4005",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-06T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4105,
      "nombre_completo": "Paciente Vecino 4005",
      "dni_ruc": "40004005",
      "telefono": "987654005"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4006",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-07T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4106,
      "nombre_completo": "Paciente Vecino 4006",
      "dni_ruc": "40004006",
      "telefono": "987654006"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4007",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-08T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4107,
      "nombre_completo": "Paciente Vecino 4007",
      "dni_ruc": "40004007",
      "telefono": "987654007"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4008",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-09T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4108,
      "nombre_completo": "Paciente Vecino 4008",
      "dni_ruc": "40004008",
      "telefono": "987654008"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4009",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-10T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4109,
      "nombre_completo": "Paciente Vecino 4009",
      "dni_ruc": "40004009",
      "telefono": "987654009"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4010",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-11T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4110,
      "nombre_completo": "Paciente Vecino 4010",
      "dni_ruc": "40004010",
      "telefono": "987654010"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4011",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-12T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4111,
      "nombre_completo": "Paciente Vecino 4011",
      "dni_ruc": "40004011",
      "telefono": "987654011"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4012",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-13T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4112,
      "nombre_completo": "Paciente Vecino 4012",
      "dni_ruc": "40004012",
      "telefono": "987654012"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4013",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-14T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4113,
      "nombre_completo": "Paciente Vecino 4013",
      "dni_ruc": "40004013",
      "telefono": "987654013"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4014",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-15T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4114,
      "nombre_completo": "Paciente Vecino 4014",
      "dni_ruc": "40004014",
      "telefono": "987654014"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4015",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-16T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4115,
      "nombre_completo": "Paciente Vecino 4015",
      "dni_ruc": "40004015",
      "telefono": "987654015"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4016",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-17T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4116,
      "nombre_completo": "Paciente Vecino 4016",
      "dni_ruc": "40004016",
      "telefono": "987654016"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4017",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-18T03:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4117,
      "nombre_completo": "Paciente Vecino 4017",
      "dni_ruc": "40004017",
      "telefono": "987654017"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4018",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-19T06:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4118,
      "nombre_completo": "Paciente Vecino 4018",
      "dni_ruc": "40004018",
      "telefono": "987654018"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4019",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-20T09:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4119,
      "nombre_completo": "Paciente Vecino 4019",
      "dni_ruc": "40004019",
      "telefono": "987654019"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4020",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-21T12:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4120,
      "nombre_completo": "Paciente Vecino 4020",
      "dni_ruc": "40004020",
      "telefono": "987654020"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4021",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-22T15:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4121,
      "nombre_completo": "Paciente Vecino 4021",
      "dni_ruc": "40004021",
      "telefono": "987654021"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4022",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-23T18:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4122,
      "nombre_completo": "Paciente Vecino 4022",
      "dni_ruc": "40004022",
      "telefono": "987654022"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4023",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-24T21:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4123,
      "nombre_completo": "Paciente Vecino 4023",
      "dni_ruc": "40004023",
      "telefono": "987654023"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4024",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-25T00:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4124,
      "nombre_completo": "Paciente Vecino 4024",
      "dni_ruc": "40004024",
      "telefono": "987654024"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4025",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-26T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4125,
      "nombre_completo": "Paciente Vecino 4025",
      "dni_ruc": "40004025",
      "telefono": "987654025"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4026",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-27T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4126,
      "nombre_completo": "Paciente Vecino 4026",
      "dni_ruc": "40004026",
      "telefono": "987654026"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4027",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-28T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4127,
      "nombre_completo": "Paciente Vecino 4027",
      "dni_ruc": "40004027",
      "telefono": "987654027"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4028",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-29T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4128,
      "nombre_completo": "Paciente Vecino 4028",
      "dni_ruc": "40004028",
      "telefono": "987654028"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4029",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-30T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4129,
      "nombre_completo": "Paciente Vecino 4029",
      "dni_ruc": "40004029",
      "telefono": "987654029"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4030",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-31T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4130,
      "nombre_completo": "Paciente Vecino 4030",
      "dni_ruc": "40004030",
      "telefono": "987654030"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-JM-4031",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-11-01T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4131,
      "nombre_completo": "Paciente Vecino 4031",
      "dni_ruc": "40004031",
      "telefono": "987654031"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4032",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-02T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4132,
      "nombre_completo": "Paciente Vecino 4032",
      "dni_ruc": "40004032",
      "telefono": "987654032"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4033",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-03T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4133,
      "nombre_completo": "Paciente Vecino 4033",
      "dni_ruc": "40004033",
      "telefono": "987654033"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4034",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-04T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4134,
      "nombre_completo": "Paciente Vecino 4034",
      "dni_ruc": "40004034",
      "telefono": "987654034"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4035",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-11-05T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4135,
      "nombre_completo": "Paciente Vecino 4035",
      "dni_ruc": "40004035",
      "telefono": "987654035"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4036",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-11-06T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4136,
      "nombre_completo": "Paciente Vecino 4036",
      "dni_ruc": "40004036",
      "telefono": "987654036"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4037",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-11-07T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4137,
      "nombre_completo": "Paciente Vecino 4037",
      "dni_ruc": "40004037",
      "telefono": "987654037"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4038",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-11-08T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 4138,
      "nombre_completo": "Paciente Vecino 4038",
      "dni_ruc": "40004038",
      "telefono": "987654038"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4039",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-09T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 4139,
      "nombre_completo": "Paciente Vecino 4039",
      "dni_ruc": "40004039",
      "telefono": "987654039"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-JM-4040",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-10T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 4140,
      "nombre_completo": "Paciente Vecino 4040",
      "dni_ruc": "40004040",
      "telefono": "987654040"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  }
]);


// 1.2. Reseñas y Calificaciones (20 documentos) - Jorge Matencio
db.resenas.insertMany([
  {
    "resena_id": "RES-JM-4001",
    "cliente_id": 4101,
    "farmacia_id": 5,
    "medicamento_id": 2,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Amoxicilina 500mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-03T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-JM-4002",
    "cliente_id": 4102,
    "farmacia_id": 6,
    "medicamento_id": 3,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Ibuprofeno 400mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-05T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-JM-4003",
    "cliente_id": 4103,
    "farmacia_id": 7,
    "medicamento_id": 4,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Azitromicina 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-07T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-JM-4004",
    "cliente_id": 4104,
    "farmacia_id": 1,
    "medicamento_id": 5,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Loratadina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-09T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-JM-4005",
    "cliente_id": 4105,
    "farmacia_id": 2,
    "medicamento_id": 6,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Omeprazol 20mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-11T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-JM-4006",
    "cliente_id": 4106,
    "farmacia_id": 3,
    "medicamento_id": 7,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Metformina 850mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-13T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-JM-4007",
    "cliente_id": 4107,
    "farmacia_id": 4,
    "medicamento_id": 8,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Losartan 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-15T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-JM-4008",
    "cliente_id": 4108,
    "farmacia_id": 5,
    "medicamento_id": 9,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Atorvastatina 20mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-17T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-JM-4009",
    "cliente_id": 4109,
    "farmacia_id": 6,
    "medicamento_id": 10,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Ciprofloxacino 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-19T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-JM-4010",
    "cliente_id": 4110,
    "farmacia_id": 7,
    "medicamento_id": 11,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Salbutamol Inhalador 100mcg siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-21T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-JM-4011",
    "cliente_id": 4111,
    "farmacia_id": 1,
    "medicamento_id": 12,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Cetirizina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-23T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-JM-4012",
    "cliente_id": 4112,
    "farmacia_id": 2,
    "medicamento_id": 13,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Naproxeno 550mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-25T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-JM-4013",
    "cliente_id": 4113,
    "farmacia_id": 3,
    "medicamento_id": 14,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Clonazepam 2mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-27T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-JM-4014",
    "cliente_id": 4114,
    "farmacia_id": 4,
    "medicamento_id": 15,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Diclofenaco 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-29T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-JM-4015",
    "cliente_id": 4115,
    "farmacia_id": 5,
    "medicamento_id": 16,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Sertralina 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-31T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-JM-4016",
    "cliente_id": 4116,
    "farmacia_id": 6,
    "medicamento_id": 17,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Fluconazol 150mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-02T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-JM-4017",
    "cliente_id": 4117,
    "farmacia_id": 7,
    "medicamento_id": 18,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Enalapril 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-04T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-JM-4018",
    "cliente_id": 4118,
    "farmacia_id": 1,
    "medicamento_id": 19,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Dexametasona 4mg Amp siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-06T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-JM-4019",
    "cliente_id": 4119,
    "farmacia_id": 2,
    "medicamento_id": 20,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Complejo B Forte Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-08T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-JM-4020",
    "cliente_id": 4120,
    "farmacia_id": 3,
    "medicamento_id": 1,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Paracetamol 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-10T10:00:00Z"
    },
    "util_conteo": 4
  }
]);


// 1.3. Auditoría de Seguridad (20 documentos) - Jorge Matencio
db.auditoria_eventos.insertMany([
  {
    "evento_id": "AUD-JM-4001",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.11",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-02T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4002",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.12",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-03T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4003",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.13",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-04T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4004",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.14",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-05T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4005",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.15",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-06T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4006",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.16",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-07T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4007",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.17",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-08T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4008",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.18",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-09T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4009",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.19",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-10T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4010",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.20",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-11T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4011",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.21",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-12T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4012",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.22",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-13T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4013",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.23",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-14T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4014",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.24",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-15T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4015",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.25",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-16T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4016",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.26",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-17T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4017",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.27",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-18T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4018",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.28",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-19T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4019",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.29",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-20T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-JM-4020",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.30",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-21T14:00:00Z"
    }
  }
]);


// 1.4. Telemetría Marketplace (20 documentos) - Jorge Matencio
db.logs_marketplace.insertMany([
  {
    "log_id": "LOG-JM-4001",
    "session_id": "SESS-JM-004001",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Amoxicilina",
    "farmacia_id": 5,
    "medicamento_id": 2,
    "duracion_seg": 22,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0378,
        -12.0414
      ]
    },
    "timestamp": {
      "$date": "2024-10-02T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4002",
    "session_id": "SESS-JM-004002",
    "usuario_id": 4102,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Ibuprofeno",
    "farmacia_id": 6,
    "medicamento_id": 3,
    "duracion_seg": 29,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0328,
        -12.0364
      ]
    },
    "timestamp": {
      "$date": "2024-10-03T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4003",
    "session_id": "SESS-JM-004003",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Azitromicina",
    "farmacia_id": 7,
    "medicamento_id": 4,
    "duracion_seg": 36,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0278,
        -12.0314
      ]
    },
    "timestamp": {
      "$date": "2024-10-04T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4004",
    "session_id": "SESS-JM-004004",
    "usuario_id": 4104,
    "tipo_evento": "search",
    "busqueda_texto": "Loratadina",
    "farmacia_id": 1,
    "medicamento_id": 5,
    "duracion_seg": 43,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0228,
        -12.0264
      ]
    },
    "timestamp": {
      "$date": "2024-10-05T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4005",
    "session_id": "SESS-JM-004005",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Omeprazol",
    "farmacia_id": 2,
    "medicamento_id": 6,
    "duracion_seg": 50,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0178,
        -12.0214
      ]
    },
    "timestamp": {
      "$date": "2024-10-06T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4006",
    "session_id": "SESS-JM-004006",
    "usuario_id": 4106,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Metformina",
    "farmacia_id": 3,
    "medicamento_id": 7,
    "duracion_seg": 57,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0128,
        -12.0164
      ]
    },
    "timestamp": {
      "$date": "2024-10-07T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4007",
    "session_id": "SESS-JM-004007",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Losartan",
    "farmacia_id": 4,
    "medicamento_id": 8,
    "duracion_seg": 64,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0078,
        -12.0114
      ]
    },
    "timestamp": {
      "$date": "2024-10-08T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4008",
    "session_id": "SESS-JM-004008",
    "usuario_id": 4108,
    "tipo_evento": "search",
    "busqueda_texto": "Atorvastatina",
    "farmacia_id": 5,
    "medicamento_id": 9,
    "duracion_seg": 71,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0028,
        -12.006400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-09T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4009",
    "session_id": "SESS-JM-004009",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Ciprofloxacino",
    "farmacia_id": 6,
    "medicamento_id": 10,
    "duracion_seg": 78,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9978,
        -12.0014
      ]
    },
    "timestamp": {
      "$date": "2024-10-10T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4010",
    "session_id": "SESS-JM-004010",
    "usuario_id": 4110,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Salbutamol",
    "farmacia_id": 7,
    "medicamento_id": 11,
    "duracion_seg": 85,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9928,
        -11.9964
      ]
    },
    "timestamp": {
      "$date": "2024-10-11T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4011",
    "session_id": "SESS-JM-004011",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Cetirizina",
    "farmacia_id": 1,
    "medicamento_id": 12,
    "duracion_seg": 92,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9878,
        -11.9914
      ]
    },
    "timestamp": {
      "$date": "2024-10-12T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4012",
    "session_id": "SESS-JM-004012",
    "usuario_id": 4112,
    "tipo_evento": "search",
    "busqueda_texto": "Naproxeno",
    "farmacia_id": 2,
    "medicamento_id": 13,
    "duracion_seg": 99,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9828,
        -11.9864
      ]
    },
    "timestamp": {
      "$date": "2024-10-13T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4013",
    "session_id": "SESS-JM-004013",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Clonazepam",
    "farmacia_id": 3,
    "medicamento_id": 14,
    "duracion_seg": 106,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9778,
        -11.9814
      ]
    },
    "timestamp": {
      "$date": "2024-10-14T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4014",
    "session_id": "SESS-JM-004014",
    "usuario_id": 4114,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Diclofenaco",
    "farmacia_id": 4,
    "medicamento_id": 15,
    "duracion_seg": 113,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9728,
        -11.9764
      ]
    },
    "timestamp": {
      "$date": "2024-10-15T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4015",
    "session_id": "SESS-JM-004015",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Sertralina",
    "farmacia_id": 5,
    "medicamento_id": 16,
    "duracion_seg": 120,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9678,
        -11.971400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-16T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4016",
    "session_id": "SESS-JM-004016",
    "usuario_id": 4116,
    "tipo_evento": "search",
    "busqueda_texto": "Fluconazol",
    "farmacia_id": 6,
    "medicamento_id": 17,
    "duracion_seg": 127,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9628,
        -11.9664
      ]
    },
    "timestamp": {
      "$date": "2024-10-17T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4017",
    "session_id": "SESS-JM-004017",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Enalapril",
    "farmacia_id": 7,
    "medicamento_id": 18,
    "duracion_seg": 134,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9578,
        -11.9614
      ]
    },
    "timestamp": {
      "$date": "2024-10-18T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4018",
    "session_id": "SESS-JM-004018",
    "usuario_id": 4118,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Dexametasona",
    "farmacia_id": 1,
    "medicamento_id": 19,
    "duracion_seg": 141,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9528,
        -11.9564
      ]
    },
    "timestamp": {
      "$date": "2024-10-19T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4019",
    "session_id": "SESS-JM-004019",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Complejo",
    "farmacia_id": 2,
    "medicamento_id": 20,
    "duracion_seg": 148,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9478,
        -11.9514
      ]
    },
    "timestamp": {
      "$date": "2024-10-20T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-JM-4020",
    "session_id": "SESS-JM-004020",
    "usuario_id": 4120,
    "tipo_evento": "search",
    "busqueda_texto": "Paracetamol",
    "farmacia_id": 3,
    "medicamento_id": 1,
    "duracion_seg": 155,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9428,
        -11.9464
      ]
    },
    "timestamp": {
      "$date": "2024-10-21T19:00:00Z"
    }
  }
]);


// ==============================================================================
// PARTICIPANTE 5: Dereck Rojas (100 DOCUMENTOS)
// ==============================================================================

// 1.1. Ventas Históricas Retail (40 documentos) - Dereck Rojas
db.ventas_historicas.insertMany([
  {
    "codigo_venta": "VTA-DR-5001",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-02T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5101,
      "nombre_completo": "Paciente Vecino 5001",
      "dni_ruc": "40005001",
      "telefono": "987655001"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5002",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-03T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5102,
      "nombre_completo": "Paciente Vecino 5002",
      "dni_ruc": "40005002",
      "telefono": "987655002"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5003",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-04T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5103,
      "nombre_completo": "Paciente Vecino 5003",
      "dni_ruc": "40005003",
      "telefono": "987655003"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5004",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-05T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5104,
      "nombre_completo": "Paciente Vecino 5004",
      "dni_ruc": "40005004",
      "telefono": "987655004"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5005",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-06T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5105,
      "nombre_completo": "Paciente Vecino 5005",
      "dni_ruc": "40005005",
      "telefono": "987655005"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5006",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-07T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5106,
      "nombre_completo": "Paciente Vecino 5006",
      "dni_ruc": "40005006",
      "telefono": "987655006"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5007",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-08T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5107,
      "nombre_completo": "Paciente Vecino 5007",
      "dni_ruc": "40005007",
      "telefono": "987655007"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5008",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-09T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5108,
      "nombre_completo": "Paciente Vecino 5008",
      "dni_ruc": "40005008",
      "telefono": "987655008"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5009",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-10T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5109,
      "nombre_completo": "Paciente Vecino 5009",
      "dni_ruc": "40005009",
      "telefono": "987655009"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5010",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-11T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5110,
      "nombre_completo": "Paciente Vecino 5010",
      "dni_ruc": "40005010",
      "telefono": "987655010"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5011",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-12T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5111,
      "nombre_completo": "Paciente Vecino 5011",
      "dni_ruc": "40005011",
      "telefono": "987655011"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5012",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-13T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5112,
      "nombre_completo": "Paciente Vecino 5012",
      "dni_ruc": "40005012",
      "telefono": "987655012"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5013",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-14T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5113,
      "nombre_completo": "Paciente Vecino 5013",
      "dni_ruc": "40005013",
      "telefono": "987655013"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5014",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-15T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5114,
      "nombre_completo": "Paciente Vecino 5014",
      "dni_ruc": "40005014",
      "telefono": "987655014"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5015",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-16T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5115,
      "nombre_completo": "Paciente Vecino 5015",
      "dni_ruc": "40005015",
      "telefono": "987655015"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5016",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-17T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5116,
      "nombre_completo": "Paciente Vecino 5016",
      "dni_ruc": "40005016",
      "telefono": "987655016"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5017",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-18T03:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5117,
      "nombre_completo": "Paciente Vecino 5017",
      "dni_ruc": "40005017",
      "telefono": "987655017"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5018",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-19T06:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5118,
      "nombre_completo": "Paciente Vecino 5018",
      "dni_ruc": "40005018",
      "telefono": "987655018"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5019",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-20T09:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5119,
      "nombre_completo": "Paciente Vecino 5019",
      "dni_ruc": "40005019",
      "telefono": "987655019"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5020",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-21T12:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5120,
      "nombre_completo": "Paciente Vecino 5020",
      "dni_ruc": "40005020",
      "telefono": "987655020"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5021",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-22T15:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5121,
      "nombre_completo": "Paciente Vecino 5021",
      "dni_ruc": "40005021",
      "telefono": "987655021"
    },
    "items": [
      {
        "medicamento_id": 2,
        "nombre_comercial": "Amoxicilina 500mg Cap",
        "cantidad": 2,
        "precio_unitario": 3.2,
        "subtotal": 6.4
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 6.4,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5022",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-23T18:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5122,
      "nombre_completo": "Paciente Vecino 5022",
      "dni_ruc": "40005022",
      "telefono": "987655022"
    },
    "items": [
      {
        "medicamento_id": 3,
        "nombre_comercial": "Ibuprofeno 400mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.0,
        "subtotal": 6.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5023",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-24T21:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5123,
      "nombre_completo": "Paciente Vecino 5023",
      "dni_ruc": "40005023",
      "telefono": "987655023"
    },
    "items": [
      {
        "medicamento_id": 4,
        "nombre_comercial": "Azitromicina 500mg Tab",
        "cantidad": 4,
        "precio_unitario": 8.5,
        "subtotal": 34.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 34.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5024",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-10-25T00:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5124,
      "nombre_completo": "Paciente Vecino 5024",
      "dni_ruc": "40005024",
      "telefono": "987655024"
    },
    "items": [
      {
        "medicamento_id": 5,
        "nombre_comercial": "Loratadina 10mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.8,
        "subtotal": 1.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5025",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-10-26T03:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5125,
      "nombre_completo": "Paciente Vecino 5025",
      "dni_ruc": "40005025",
      "telefono": "987655025"
    },
    "items": [
      {
        "medicamento_id": 6,
        "nombre_comercial": "Omeprazol 20mg Cap",
        "cantidad": 2,
        "precio_unitario": 2.5,
        "subtotal": 5.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 5.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5026",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-10-27T06:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5126,
      "nombre_completo": "Paciente Vecino 5026",
      "dni_ruc": "40005026",
      "telefono": "987655026"
    },
    "items": [
      {
        "medicamento_id": 7,
        "nombre_comercial": "Metformina 850mg Tab",
        "cantidad": 3,
        "precio_unitario": 2.2,
        "subtotal": 6.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 6.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5027",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-10-28T09:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5127,
      "nombre_completo": "Paciente Vecino 5027",
      "dni_ruc": "40005027",
      "telefono": "987655027"
    },
    "items": [
      {
        "medicamento_id": 8,
        "nombre_comercial": "Losartan 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 3.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5028",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-10-29T12:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5128,
      "nombre_completo": "Paciente Vecino 5028",
      "dni_ruc": "40005028",
      "telefono": "987655028"
    },
    "items": [
      {
        "medicamento_id": 9,
        "nombre_comercial": "Atorvastatina 20mg Tab",
        "cantidad": 1,
        "precio_unitario": 4.5,
        "subtotal": 4.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 4.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5029",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-10-30T15:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5129,
      "nombre_completo": "Paciente Vecino 5029",
      "dni_ruc": "40005029",
      "telefono": "987655029"
    },
    "items": [
      {
        "medicamento_id": 10,
        "nombre_comercial": "Ciprofloxacino 500mg Tab",
        "cantidad": 2,
        "precio_unitario": 5.0,
        "subtotal": 10.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 10.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5030",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-10-31T18:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5130,
      "nombre_completo": "Paciente Vecino 5030",
      "dni_ruc": "40005030",
      "telefono": "987655030"
    },
    "items": [
      {
        "medicamento_id": 11,
        "nombre_comercial": "Salbutamol Inhalador 100mcg",
        "cantidad": 3,
        "precio_unitario": 18.0,
        "subtotal": 54.0
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 54.0,
    "estado": "anulada"
  },
  {
    "codigo_venta": "VTA-DR-5031",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-11-01T21:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5131,
      "nombre_completo": "Paciente Vecino 5031",
      "dni_ruc": "40005031",
      "telefono": "987655031"
    },
    "items": [
      {
        "medicamento_id": 12,
        "nombre_comercial": "Cetirizina 10mg Tab",
        "cantidad": 4,
        "precio_unitario": 1.8,
        "subtotal": 7.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 7.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5032",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-11-02T00:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5132,
      "nombre_completo": "Paciente Vecino 5032",
      "dni_ruc": "40005032",
      "telefono": "987655032"
    },
    "items": [
      {
        "medicamento_id": 13,
        "nombre_comercial": "Naproxeno 550mg Tab",
        "cantidad": 1,
        "precio_unitario": 2.5,
        "subtotal": 2.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 2.5,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5033",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-03T03:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5133,
      "nombre_completo": "Paciente Vecino 5033",
      "dni_ruc": "40005033",
      "telefono": "987655033"
    },
    "items": [
      {
        "medicamento_id": 14,
        "nombre_comercial": "Clonazepam 2mg Tab",
        "cantidad": 2,
        "precio_unitario": 6.0,
        "subtotal": 12.0
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 12.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5034",
    "farmacia_id": 2,
    "fecha": {
      "$date": "2024-11-04T06:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5134,
      "nombre_completo": "Paciente Vecino 5034",
      "dni_ruc": "40005034",
      "telefono": "987655034"
    },
    "items": [
      {
        "medicamento_id": 15,
        "nombre_comercial": "Diclofenaco 50mg Tab",
        "cantidad": 3,
        "precio_unitario": 1.9,
        "subtotal": 5.7
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 5.7,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5035",
    "farmacia_id": 3,
    "fecha": {
      "$date": "2024-11-05T09:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5135,
      "nombre_completo": "Paciente Vecino 5035",
      "dni_ruc": "40005035",
      "telefono": "987655035"
    },
    "items": [
      {
        "medicamento_id": 16,
        "nombre_comercial": "Sertralina 50mg Tab",
        "cantidad": 4,
        "precio_unitario": 7.5,
        "subtotal": 30.0
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 30.0,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5036",
    "farmacia_id": 4,
    "fecha": {
      "$date": "2024-11-06T12:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5136,
      "nombre_completo": "Paciente Vecino 5036",
      "dni_ruc": "40005036",
      "telefono": "987655036"
    },
    "items": [
      {
        "medicamento_id": 17,
        "nombre_comercial": "Fluconazol 150mg Cap",
        "cantidad": 1,
        "precio_unitario": 6.8,
        "subtotal": 6.8
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 6.8,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5037",
    "farmacia_id": 5,
    "fecha": {
      "$date": "2024-11-07T15:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5137,
      "nombre_completo": "Paciente Vecino 5037",
      "dni_ruc": "40005037",
      "telefono": "987655037"
    },
    "items": [
      {
        "medicamento_id": 18,
        "nombre_comercial": "Enalapril 10mg Tab",
        "cantidad": 2,
        "precio_unitario": 2.1,
        "subtotal": 4.2
      }
    ],
    "metodo_pago": "tarjeta",
    "total_venta": 4.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5038",
    "farmacia_id": 6,
    "fecha": {
      "$date": "2024-11-08T18:00:00Z"
    },
    "canal_venta": "delivery",
    "cliente": {
      "cliente_id": 5138,
      "nombre_completo": "Paciente Vecino 5038",
      "dni_ruc": "40005038",
      "telefono": "987655038"
    },
    "items": [
      {
        "medicamento_id": 19,
        "nombre_comercial": "Dexametasona 4mg Amp",
        "cantidad": 3,
        "precio_unitario": 4.2,
        "subtotal": 12.6
      }
    ],
    "metodo_pago": "yape",
    "total_venta": 12.6,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5039",
    "farmacia_id": 7,
    "fecha": {
      "$date": "2024-11-09T21:00:00Z"
    },
    "canal_venta": "mostrador",
    "cliente": {
      "cliente_id": 5139,
      "nombre_completo": "Paciente Vecino 5039",
      "dni_ruc": "40005039",
      "telefono": "987655039"
    },
    "items": [
      {
        "medicamento_id": 20,
        "nombre_comercial": "Complejo B Forte Tab",
        "cantidad": 4,
        "precio_unitario": 2.8,
        "subtotal": 11.2
      }
    ],
    "metodo_pago": "plin",
    "total_venta": 11.2,
    "estado": "completada"
  },
  {
    "codigo_venta": "VTA-DR-5040",
    "farmacia_id": 1,
    "fecha": {
      "$date": "2024-11-10T00:00:00Z"
    },
    "canal_venta": "marketplace",
    "cliente": {
      "cliente_id": 5140,
      "nombre_completo": "Paciente Vecino 5040",
      "dni_ruc": "40005040",
      "telefono": "987655040"
    },
    "items": [
      {
        "medicamento_id": 1,
        "nombre_comercial": "Paracetamol 500mg Tab",
        "cantidad": 1,
        "precio_unitario": 1.5,
        "subtotal": 1.5
      }
    ],
    "metodo_pago": "efectivo",
    "total_venta": 1.5,
    "estado": "completada"
  }
]);


// 1.2. Reseñas y Calificaciones (20 documentos) - Dereck Rojas
db.resenas.insertMany([
  {
    "resena_id": "RES-DR-5001",
    "cliente_id": 5101,
    "farmacia_id": 4,
    "medicamento_id": 2,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Amoxicilina 500mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-03T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-DR-5002",
    "cliente_id": 5102,
    "farmacia_id": 5,
    "medicamento_id": 3,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Ibuprofeno 400mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-05T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-DR-5003",
    "cliente_id": 5103,
    "farmacia_id": 6,
    "medicamento_id": 4,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Azitromicina 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-07T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-DR-5004",
    "cliente_id": 5104,
    "farmacia_id": 7,
    "medicamento_id": 5,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Loratadina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-09T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-DR-5005",
    "cliente_id": 5105,
    "farmacia_id": 1,
    "medicamento_id": 6,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Omeprazol 20mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-11T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-DR-5006",
    "cliente_id": 5106,
    "farmacia_id": 2,
    "medicamento_id": 7,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Metformina 850mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-13T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-DR-5007",
    "cliente_id": 5107,
    "farmacia_id": 3,
    "medicamento_id": 8,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Losartan 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-15T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-DR-5008",
    "cliente_id": 5108,
    "farmacia_id": 4,
    "medicamento_id": 9,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Atorvastatina 20mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-17T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-DR-5009",
    "cliente_id": 5109,
    "farmacia_id": 5,
    "medicamento_id": 10,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Ciprofloxacino 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-19T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-DR-5010",
    "cliente_id": 5110,
    "farmacia_id": 6,
    "medicamento_id": 11,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Salbutamol Inhalador 100mcg siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-21T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-DR-5011",
    "cliente_id": 5111,
    "farmacia_id": 7,
    "medicamento_id": 12,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Cetirizina 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-23T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-DR-5012",
    "cliente_id": 5112,
    "farmacia_id": 1,
    "medicamento_id": 13,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Naproxeno 550mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-25T10:00:00Z"
    },
    "util_conteo": 4
  },
  {
    "resena_id": "RES-DR-5013",
    "cliente_id": 5113,
    "farmacia_id": 2,
    "medicamento_id": 14,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Clonazepam 2mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-27T10:00:00Z"
    },
    "util_conteo": 5
  },
  {
    "resena_id": "RES-DR-5014",
    "cliente_id": 5114,
    "farmacia_id": 3,
    "medicamento_id": 15,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 3, el medicamento Diclofenaco 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-29T10:00:00Z"
    },
    "util_conteo": 6
  },
  {
    "resena_id": "RES-DR-5015",
    "cliente_id": 5115,
    "farmacia_id": 4,
    "medicamento_id": 16,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 4, el medicamento Sertralina 50mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-10-31T10:00:00Z"
    },
    "util_conteo": 7
  },
  {
    "resena_id": "RES-DR-5016",
    "cliente_id": 5116,
    "farmacia_id": 5,
    "medicamento_id": 17,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 5, el medicamento Fluconazol 150mg Cap siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-02T10:00:00Z"
    },
    "util_conteo": 0
  },
  {
    "resena_id": "RES-DR-5017",
    "cliente_id": 5117,
    "farmacia_id": 6,
    "medicamento_id": 18,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 6, el medicamento Enalapril 10mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-04T10:00:00Z"
    },
    "util_conteo": 1
  },
  {
    "resena_id": "RES-DR-5018",
    "cliente_id": 5118,
    "farmacia_id": 7,
    "medicamento_id": 19,
    "calificacion": 5,
    "comentario": "Excelente atenci\u00f3n en botica 7, el medicamento Dexametasona 4mg Amp siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-06T10:00:00Z"
    },
    "util_conteo": 2
  },
  {
    "resena_id": "RES-DR-5019",
    "cliente_id": 5119,
    "farmacia_id": 1,
    "medicamento_id": 20,
    "calificacion": 3,
    "comentario": "Excelente atenci\u00f3n en botica 1, el medicamento Complejo B Forte Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-08T10:00:00Z"
    },
    "util_conteo": 3
  },
  {
    "resena_id": "RES-DR-5020",
    "cliente_id": 5120,
    "farmacia_id": 2,
    "medicamento_id": 1,
    "calificacion": 4,
    "comentario": "Excelente atenci\u00f3n en botica 2, el medicamento Paracetamol 500mg Tab siempre disponible a buen precio.",
    "fecha_resena": {
      "$date": "2024-11-10T10:00:00Z"
    },
    "util_conteo": 4
  }
]);


// 1.3. Auditoría de Seguridad (20 documentos) - Dereck Rojas
db.auditoria_eventos.insertMany([
  {
    "evento_id": "AUD-DR-5001",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.11",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-02T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5002",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.12",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-03T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5003",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.13",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-04T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5004",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.14",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-05T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5005",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.15",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-06T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5006",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.16",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-07T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5007",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.17",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-08T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5008",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.18",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-09T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5009",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.19",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-10T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5010",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.20",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-11T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5011",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.21",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-12T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5012",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.22",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-13T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5013",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.23",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-14T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5014",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.24",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-15T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5015",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.25",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-16T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5016",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.26",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-17T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5017",
    "usuario": "operacion_farma",
    "rol": "CAJERO",
    "accion": "INSERT_VENTA",
    "modulo": "INVENTARIO",
    "entidad_afectada": "ventas_historicas",
    "detalles": {
      "ip_origen": "192.168.1.27",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-18T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5018",
    "usuario": "admin_farma",
    "rol": "DBA",
    "accion": "UPDATE_STOCK",
    "modulo": "SEGURIDAD",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.28",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-19T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5019",
    "usuario": "consulta_farma",
    "rol": "ANALISTA",
    "accion": "QUERY_REPORTE",
    "modulo": "REPORTES",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.29",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-20T14:00:00Z"
    }
  },
  {
    "evento_id": "AUD-DR-5020",
    "usuario": "farma_app",
    "rol": "OPERADOR",
    "accion": "LOGIN_SUCCESS",
    "modulo": "VENTAS",
    "entidad_afectada": "inventario",
    "detalles": {
      "ip_origen": "192.168.1.30",
      "dispositivo": "Terminal_Punto_Venta"
    },
    "fecha_evento": {
      "$date": "2024-10-21T14:00:00Z"
    }
  }
]);


// 1.4. Telemetría Marketplace (20 documentos) - Dereck Rojas
db.logs_marketplace.insertMany([
  {
    "log_id": "LOG-DR-5001",
    "session_id": "SESS-DR-005001",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Amoxicilina",
    "farmacia_id": 4,
    "medicamento_id": 2,
    "duracion_seg": 22,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0378,
        -12.0414
      ]
    },
    "timestamp": {
      "$date": "2024-10-02T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5002",
    "session_id": "SESS-DR-005002",
    "usuario_id": 5102,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Ibuprofeno",
    "farmacia_id": 5,
    "medicamento_id": 3,
    "duracion_seg": 29,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0328,
        -12.0364
      ]
    },
    "timestamp": {
      "$date": "2024-10-03T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5003",
    "session_id": "SESS-DR-005003",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Azitromicina",
    "farmacia_id": 6,
    "medicamento_id": 4,
    "duracion_seg": 36,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0278,
        -12.0314
      ]
    },
    "timestamp": {
      "$date": "2024-10-04T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5004",
    "session_id": "SESS-DR-005004",
    "usuario_id": 5104,
    "tipo_evento": "search",
    "busqueda_texto": "Loratadina",
    "farmacia_id": 7,
    "medicamento_id": 5,
    "duracion_seg": 43,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0228,
        -12.0264
      ]
    },
    "timestamp": {
      "$date": "2024-10-05T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5005",
    "session_id": "SESS-DR-005005",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Omeprazol",
    "farmacia_id": 1,
    "medicamento_id": 6,
    "duracion_seg": 50,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0178,
        -12.0214
      ]
    },
    "timestamp": {
      "$date": "2024-10-06T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5006",
    "session_id": "SESS-DR-005006",
    "usuario_id": 5106,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Metformina",
    "farmacia_id": 2,
    "medicamento_id": 7,
    "duracion_seg": 57,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0128,
        -12.0164
      ]
    },
    "timestamp": {
      "$date": "2024-10-07T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5007",
    "session_id": "SESS-DR-005007",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Losartan",
    "farmacia_id": 3,
    "medicamento_id": 8,
    "duracion_seg": 64,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0078,
        -12.0114
      ]
    },
    "timestamp": {
      "$date": "2024-10-08T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5008",
    "session_id": "SESS-DR-005008",
    "usuario_id": 5108,
    "tipo_evento": "search",
    "busqueda_texto": "Atorvastatina",
    "farmacia_id": 4,
    "medicamento_id": 9,
    "duracion_seg": 71,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -77.0028,
        -12.006400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-09T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5009",
    "session_id": "SESS-DR-005009",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Ciprofloxacino",
    "farmacia_id": 5,
    "medicamento_id": 10,
    "duracion_seg": 78,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9978,
        -12.0014
      ]
    },
    "timestamp": {
      "$date": "2024-10-10T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5010",
    "session_id": "SESS-DR-005010",
    "usuario_id": 5110,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Salbutamol",
    "farmacia_id": 6,
    "medicamento_id": 11,
    "duracion_seg": 85,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9928,
        -11.9964
      ]
    },
    "timestamp": {
      "$date": "2024-10-11T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5011",
    "session_id": "SESS-DR-005011",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Cetirizina",
    "farmacia_id": 7,
    "medicamento_id": 12,
    "duracion_seg": 92,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9878,
        -11.9914
      ]
    },
    "timestamp": {
      "$date": "2024-10-12T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5012",
    "session_id": "SESS-DR-005012",
    "usuario_id": 5112,
    "tipo_evento": "search",
    "busqueda_texto": "Naproxeno",
    "farmacia_id": 1,
    "medicamento_id": 13,
    "duracion_seg": 99,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9828,
        -11.9864
      ]
    },
    "timestamp": {
      "$date": "2024-10-13T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5013",
    "session_id": "SESS-DR-005013",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Clonazepam",
    "farmacia_id": 2,
    "medicamento_id": 14,
    "duracion_seg": 106,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9778,
        -11.9814
      ]
    },
    "timestamp": {
      "$date": "2024-10-14T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5014",
    "session_id": "SESS-DR-005014",
    "usuario_id": 5114,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Diclofenaco",
    "farmacia_id": 3,
    "medicamento_id": 15,
    "duracion_seg": 113,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9728,
        -11.9764
      ]
    },
    "timestamp": {
      "$date": "2024-10-15T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5015",
    "session_id": "SESS-DR-005015",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Sertralina",
    "farmacia_id": 4,
    "medicamento_id": 16,
    "duracion_seg": 120,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9678,
        -11.971400000000001
      ]
    },
    "timestamp": {
      "$date": "2024-10-16T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5016",
    "session_id": "SESS-DR-005016",
    "usuario_id": 5116,
    "tipo_evento": "search",
    "busqueda_texto": "Fluconazol",
    "farmacia_id": 5,
    "medicamento_id": 17,
    "duracion_seg": 127,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9628,
        -11.9664
      ]
    },
    "timestamp": {
      "$date": "2024-10-17T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5017",
    "session_id": "SESS-DR-005017",
    "usuario_id": null,
    "tipo_evento": "product_view",
    "busqueda_texto": "Enalapril",
    "farmacia_id": 6,
    "medicamento_id": 18,
    "duracion_seg": 134,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9578,
        -11.9614
      ]
    },
    "timestamp": {
      "$date": "2024-10-18T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5018",
    "session_id": "SESS-DR-005018",
    "usuario_id": 5118,
    "tipo_evento": "add_to_cart",
    "busqueda_texto": "Dexametasona",
    "farmacia_id": 7,
    "medicamento_id": 19,
    "duracion_seg": 141,
    "dispositivo": "Android",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9528,
        -11.9564
      ]
    },
    "timestamp": {
      "$date": "2024-10-19T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5019",
    "session_id": "SESS-DR-005019",
    "usuario_id": null,
    "tipo_evento": "checkout",
    "busqueda_texto": "Complejo",
    "farmacia_id": 1,
    "medicamento_id": 20,
    "duracion_seg": 148,
    "dispositivo": "iOS",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9478,
        -11.9514
      ]
    },
    "timestamp": {
      "$date": "2024-10-20T19:00:00Z"
    }
  },
  {
    "log_id": "LOG-DR-5020",
    "session_id": "SESS-DR-005020",
    "usuario_id": 5120,
    "tipo_evento": "search",
    "busqueda_texto": "Paracetamol",
    "farmacia_id": 2,
    "medicamento_id": 1,
    "duracion_seg": 155,
    "dispositivo": "Web_Chrome",
    "geolocalizacion": {
      "type": "Point",
      "coordinates": [
        -76.9428,
        -11.9464
      ]
    },
    "timestamp": {
      "$date": "2024-10-21T19:00:00Z"
    }
  }
]);
