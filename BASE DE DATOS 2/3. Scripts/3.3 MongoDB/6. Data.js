// Carga masiva de 500 documentos NoSQL para FarmaBarrio
// Reparticion equitativa: 100 documentos por participante
use farmabarrio_nosql;

// Participante 1: Maykel Quiñones (100 pedidos retail marketplace)
db.pedidos_marketplace.insertMany([
  {
    "codigo_pedido": "PED-MK-1001",
    "fecha_pedido": {
      "$date": "2026-10-02T10:30:00Z"
    },
    "cliente": {
      "documento": "40000001",
      "nombre": "Cliente Retail 1",
      "telefono": "987650001",
      "direccion_entrega": "Av. Central 101, Sector 2"
    },
    "farmacia_id": 2,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 2,
        "precio_unitario": 1.2,
        "subtotal": 2.4
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 5.4,
    "delivery_costo": 7.0,
    "total": 12.4,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1002",
    "fecha_pedido": {
      "$date": "2026-10-03T10:30:00Z"
    },
    "cliente": {
      "documento": "40000002",
      "nombre": "Cliente Retail 2",
      "telefono": "987650002",
      "direccion_entrega": "Av. Central 102, Sector 3"
    },
    "farmacia_id": 3,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 3.5,
    "delivery_costo": 5.0,
    "total": 8.5,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1003",
    "fecha_pedido": {
      "$date": "2026-10-04T10:30:00Z"
    },
    "cliente": {
      "documento": "40000003",
      "nombre": "Cliente Retail 3",
      "telefono": "987650003",
      "direccion_entrega": "Av. Central 103, Sector 4"
    },
    "farmacia_id": 4,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 4,
        "precio_unitario": 3.5,
        "subtotal": 14.0
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 16.7,
    "delivery_costo": 7.0,
    "total": 23.7,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1004",
    "fecha_pedido": {
      "$date": "2026-10-05T10:30:00Z"
    },
    "cliente": {
      "documento": "40000004",
      "nombre": "Cliente Retail 4",
      "telefono": "987650004",
      "direccion_entrega": "Av. Central 104, Sector 5"
    },
    "farmacia_id": 5,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 5,
        "precio_unitario": 1.0,
        "subtotal": 5.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 5.7,
    "delivery_costo": 5.0,
    "total": 10.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1005",
    "fecha_pedido": {
      "$date": "2026-10-06T10:30:00Z"
    },
    "cliente": {
      "documento": "40000005",
      "nombre": "Cliente Retail 5",
      "telefono": "987650005",
      "direccion_entrega": "Av. Central 105, Sector 6"
    },
    "farmacia_id": 6,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 2.6,
    "delivery_costo": 7.0,
    "total": 9.6,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1006",
    "fecha_pedido": {
      "$date": "2026-10-07T10:30:00Z"
    },
    "cliente": {
      "documento": "40000006",
      "nombre": "Cliente Retail 6",
      "telefono": "987650006",
      "direccion_entrega": "Av. Central 106, Sector 7"
    },
    "farmacia_id": 7,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 2,
        "precio_unitario": 0.9,
        "subtotal": 1.8
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 3.0,
    "delivery_costo": 5.0,
    "total": 8.0,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1007",
    "fecha_pedido": {
      "$date": "2026-10-08T10:30:00Z"
    },
    "cliente": {
      "documento": "40000007",
      "nombre": "Cliente Retail 7",
      "telefono": "987650007",
      "direccion_entrega": "Av. Central 107, Sector 8"
    },
    "farmacia_id": 8,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 3,
        "precio_unitario": 0.7,
        "subtotal": 2.1
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 4.5,
    "delivery_costo": 7.0,
    "total": 11.5,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1008",
    "fecha_pedido": {
      "$date": "2026-10-09T10:30:00Z"
    },
    "cliente": {
      "documento": "40000008",
      "nombre": "Cliente Retail 8",
      "telefono": "987650008",
      "direccion_entrega": "Av. Central 108, Sector 1"
    },
    "farmacia_id": 9,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 4,
        "precio_unitario": 0.5,
        "subtotal": 2.0
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 5.5,
    "delivery_costo": 5.0,
    "total": 10.5,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1009",
    "fecha_pedido": {
      "$date": "2026-10-10T10:30:00Z"
    },
    "cliente": {
      "documento": "40000009",
      "nombre": "Cliente Retail 9",
      "telefono": "987650009",
      "direccion_entrega": "Av. Central 109, Sector 2"
    },
    "farmacia_id": 10,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 5,
        "precio_unitario": 1.2,
        "subtotal": 6.0
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 9.0,
    "delivery_costo": 7.0,
    "total": 16.0,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1010",
    "fecha_pedido": {
      "$date": "2026-10-11T10:30:00Z"
    },
    "cliente": {
      "documento": "40000010",
      "nombre": "Cliente Retail 10",
      "telefono": "987650010",
      "direccion_entrega": "Av. Central 110, Sector 3"
    },
    "farmacia_id": 1,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 1,
        "precio_unitario": 0.8,
        "subtotal": 0.8
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 1.9,
    "delivery_costo": 5.0,
    "total": 6.9,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1011",
    "fecha_pedido": {
      "$date": "2026-10-12T10:30:00Z"
    },
    "cliente": {
      "documento": "40000011",
      "nombre": "Cliente Retail 11",
      "telefono": "987650011",
      "direccion_entrega": "Av. Central 111, Sector 4"
    },
    "farmacia_id": 2,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 2,
        "precio_unitario": 3.5,
        "subtotal": 7.0
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 9.7,
    "delivery_costo": 7.0,
    "total": 16.7,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1012",
    "fecha_pedido": {
      "$date": "2026-10-13T10:30:00Z"
    },
    "cliente": {
      "documento": "40000012",
      "nombre": "Cliente Retail 12",
      "telefono": "987650012",
      "direccion_entrega": "Av. Central 112, Sector 5"
    },
    "farmacia_id": 3,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 3.7,
    "delivery_costo": 5.0,
    "total": 8.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1013",
    "fecha_pedido": {
      "$date": "2026-10-14T10:30:00Z"
    },
    "cliente": {
      "documento": "40000013",
      "nombre": "Cliente Retail 13",
      "telefono": "987650013",
      "direccion_entrega": "Av. Central 113, Sector 6"
    },
    "farmacia_id": 4,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 4,
        "precio_unitario": 1.1,
        "subtotal": 4.4
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 5.9,
    "delivery_costo": 7.0,
    "total": 12.9,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1014",
    "fecha_pedido": {
      "$date": "2026-10-15T10:30:00Z"
    },
    "cliente": {
      "documento": "40000014",
      "nombre": "Cliente Retail 14",
      "telefono": "987650014",
      "direccion_entrega": "Av. Central 114, Sector 7"
    },
    "farmacia_id": 5,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 5,
        "precio_unitario": 0.9,
        "subtotal": 4.5
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 5.7,
    "delivery_costo": 5.0,
    "total": 10.7,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1015",
    "fecha_pedido": {
      "$date": "2026-10-16T10:30:00Z"
    },
    "cliente": {
      "documento": "40000015",
      "nombre": "Cliente Retail 15",
      "telefono": "987650015",
      "direccion_entrega": "Av. Central 115, Sector 8"
    },
    "farmacia_id": 6,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 3.1,
    "delivery_costo": 7.0,
    "total": 10.1,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1016",
    "fecha_pedido": {
      "$date": "2026-10-17T10:30:00Z"
    },
    "cliente": {
      "documento": "40000016",
      "nombre": "Cliente Retail 16",
      "telefono": "987650016",
      "direccion_entrega": "Av. Central 116, Sector 1"
    },
    "farmacia_id": 7,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 2,
        "precio_unitario": 0.5,
        "subtotal": 1.0
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 4.5,
    "delivery_costo": 5.0,
    "total": 9.5,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1017",
    "fecha_pedido": {
      "$date": "2026-10-18T10:30:00Z"
    },
    "cliente": {
      "documento": "40000017",
      "nombre": "Cliente Retail 17",
      "telefono": "987650017",
      "direccion_entrega": "Av. Central 117, Sector 2"
    },
    "farmacia_id": 8,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 3,
        "precio_unitario": 1.2,
        "subtotal": 3.6
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 6.6,
    "delivery_costo": 7.0,
    "total": 13.6,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1018",
    "fecha_pedido": {
      "$date": "2026-10-19T10:30:00Z"
    },
    "cliente": {
      "documento": "40000018",
      "nombre": "Cliente Retail 18",
      "telefono": "987650018",
      "direccion_entrega": "Av. Central 118, Sector 3"
    },
    "farmacia_id": 9,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 4,
        "precio_unitario": 0.8,
        "subtotal": 3.2
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 4.3,
    "delivery_costo": 5.0,
    "total": 9.3,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1019",
    "fecha_pedido": {
      "$date": "2026-10-20T10:30:00Z"
    },
    "cliente": {
      "documento": "40000019",
      "nombre": "Cliente Retail 19",
      "telefono": "987650019",
      "direccion_entrega": "Av. Central 119, Sector 4"
    },
    "farmacia_id": 10,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 5,
        "precio_unitario": 3.5,
        "subtotal": 17.5
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 20.2,
    "delivery_costo": 7.0,
    "total": 27.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1020",
    "fecha_pedido": {
      "$date": "2026-10-21T10:30:00Z"
    },
    "cliente": {
      "documento": "40000020",
      "nombre": "Cliente Retail 20",
      "telefono": "987650020",
      "direccion_entrega": "Av. Central 120, Sector 5"
    },
    "farmacia_id": 1,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 1,
        "precio_unitario": 1.0,
        "subtotal": 1.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 1.7,
    "delivery_costo": 5.0,
    "total": 6.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1021",
    "fecha_pedido": {
      "$date": "2026-10-22T10:30:00Z"
    },
    "cliente": {
      "documento": "40000021",
      "nombre": "Cliente Retail 21",
      "telefono": "987650021",
      "direccion_entrega": "Av. Central 121, Sector 6"
    },
    "farmacia_id": 2,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 2,
        "precio_unitario": 1.1,
        "subtotal": 2.2
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 3.7,
    "delivery_costo": 7.0,
    "total": 10.7,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1022",
    "fecha_pedido": {
      "$date": "2026-10-23T10:30:00Z"
    },
    "cliente": {
      "documento": "40000022",
      "nombre": "Cliente Retail 22",
      "telefono": "987650022",
      "direccion_entrega": "Av. Central 122, Sector 7"
    },
    "farmacia_id": 3,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 3.9,
    "delivery_costo": 5.0,
    "total": 8.9,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1023",
    "fecha_pedido": {
      "$date": "2026-10-24T10:30:00Z"
    },
    "cliente": {
      "documento": "40000023",
      "nombre": "Cliente Retail 23",
      "telefono": "987650023",
      "direccion_entrega": "Av. Central 123, Sector 8"
    },
    "farmacia_id": 4,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 4,
        "precio_unitario": 0.7,
        "subtotal": 2.8
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 5.2,
    "delivery_costo": 7.0,
    "total": 12.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1024",
    "fecha_pedido": {
      "$date": "2026-10-25T10:30:00Z"
    },
    "cliente": {
      "documento": "40000024",
      "nombre": "Cliente Retail 24",
      "telefono": "987650024",
      "direccion_entrega": "Av. Central 124, Sector 1"
    },
    "farmacia_id": 5,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 5,
        "precio_unitario": 0.5,
        "subtotal": 2.5
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 6.0,
    "delivery_costo": 5.0,
    "total": 11.0,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1025",
    "fecha_pedido": {
      "$date": "2026-10-26T10:30:00Z"
    },
    "cliente": {
      "documento": "40000025",
      "nombre": "Cliente Retail 25",
      "telefono": "987650025",
      "direccion_entrega": "Av. Central 125, Sector 2"
    },
    "farmacia_id": 6,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 4.2,
    "delivery_costo": 7.0,
    "total": 11.2,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1026",
    "fecha_pedido": {
      "$date": "2026-10-27T10:30:00Z"
    },
    "cliente": {
      "documento": "40000026",
      "nombre": "Cliente Retail 26",
      "telefono": "987650026",
      "direccion_entrega": "Av. Central 126, Sector 3"
    },
    "farmacia_id": 7,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 2,
        "precio_unitario": 0.8,
        "subtotal": 1.6
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 2.7,
    "delivery_costo": 5.0,
    "total": 7.7,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1027",
    "fecha_pedido": {
      "$date": "2026-10-28T10:30:00Z"
    },
    "cliente": {
      "documento": "40000027",
      "nombre": "Cliente Retail 27",
      "telefono": "987650027",
      "direccion_entrega": "Av. Central 127, Sector 4"
    },
    "farmacia_id": 8,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 3,
        "precio_unitario": 3.5,
        "subtotal": 10.5
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 13.2,
    "delivery_costo": 7.0,
    "total": 20.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1028",
    "fecha_pedido": {
      "$date": "2026-10-01T10:30:00Z"
    },
    "cliente": {
      "documento": "40000028",
      "nombre": "Cliente Retail 28",
      "telefono": "987650028",
      "direccion_entrega": "Av. Central 128, Sector 5"
    },
    "farmacia_id": 9,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 4,
        "precio_unitario": 1.0,
        "subtotal": 4.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 4.7,
    "delivery_costo": 5.0,
    "total": 9.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1029",
    "fecha_pedido": {
      "$date": "2026-10-02T10:30:00Z"
    },
    "cliente": {
      "documento": "40000029",
      "nombre": "Cliente Retail 29",
      "telefono": "987650029",
      "direccion_entrega": "Av. Central 129, Sector 6"
    },
    "farmacia_id": 10,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 5,
        "precio_unitario": 1.1,
        "subtotal": 5.5
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 7.0,
    "delivery_costo": 7.0,
    "total": 14.0,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1030",
    "fecha_pedido": {
      "$date": "2026-10-03T10:30:00Z"
    },
    "cliente": {
      "documento": "40000030",
      "nombre": "Cliente Retail 30",
      "telefono": "987650030",
      "direccion_entrega": "Av. Central 130, Sector 7"
    },
    "farmacia_id": 1,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 1,
        "precio_unitario": 0.9,
        "subtotal": 0.9
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 2.1,
    "delivery_costo": 5.0,
    "total": 7.1,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1031",
    "fecha_pedido": {
      "$date": "2026-10-04T10:30:00Z"
    },
    "cliente": {
      "documento": "40000031",
      "nombre": "Cliente Retail 31",
      "telefono": "987650031",
      "direccion_entrega": "Av. Central 131, Sector 8"
    },
    "farmacia_id": 2,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 2,
        "precio_unitario": 0.7,
        "subtotal": 1.4
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 3.8,
    "delivery_costo": 7.0,
    "total": 10.8,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1032",
    "fecha_pedido": {
      "$date": "2026-10-05T10:30:00Z"
    },
    "cliente": {
      "documento": "40000032",
      "nombre": "Cliente Retail 32",
      "telefono": "987650032",
      "direccion_entrega": "Av. Central 132, Sector 1"
    },
    "farmacia_id": 3,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 5.0,
    "delivery_costo": 5.0,
    "total": 10.0,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1033",
    "fecha_pedido": {
      "$date": "2026-10-06T10:30:00Z"
    },
    "cliente": {
      "documento": "40000033",
      "nombre": "Cliente Retail 33",
      "telefono": "987650033",
      "direccion_entrega": "Av. Central 133, Sector 2"
    },
    "farmacia_id": 4,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 4,
        "precio_unitario": 1.2,
        "subtotal": 4.8
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 7.8,
    "delivery_costo": 7.0,
    "total": 14.8,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1034",
    "fecha_pedido": {
      "$date": "2026-10-07T10:30:00Z"
    },
    "cliente": {
      "documento": "40000034",
      "nombre": "Cliente Retail 34",
      "telefono": "987650034",
      "direccion_entrega": "Av. Central 134, Sector 3"
    },
    "farmacia_id": 5,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 5,
        "precio_unitario": 0.8,
        "subtotal": 4.0
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 5.1,
    "delivery_costo": 5.0,
    "total": 10.1,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1035",
    "fecha_pedido": {
      "$date": "2026-10-08T10:30:00Z"
    },
    "cliente": {
      "documento": "40000035",
      "nombre": "Cliente Retail 35",
      "telefono": "987650035",
      "direccion_entrega": "Av. Central 135, Sector 4"
    },
    "farmacia_id": 6,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 6.2,
    "delivery_costo": 7.0,
    "total": 13.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1036",
    "fecha_pedido": {
      "$date": "2026-10-09T10:30:00Z"
    },
    "cliente": {
      "documento": "40000036",
      "nombre": "Cliente Retail 36",
      "telefono": "987650036",
      "direccion_entrega": "Av. Central 136, Sector 5"
    },
    "farmacia_id": 7,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 2,
        "precio_unitario": 1.0,
        "subtotal": 2.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 2.7,
    "delivery_costo": 5.0,
    "total": 7.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1037",
    "fecha_pedido": {
      "$date": "2026-10-10T10:30:00Z"
    },
    "cliente": {
      "documento": "40000037",
      "nombre": "Cliente Retail 37",
      "telefono": "987650037",
      "direccion_entrega": "Av. Central 137, Sector 6"
    },
    "farmacia_id": 8,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 3,
        "precio_unitario": 1.1,
        "subtotal": 3.3
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 4.8,
    "delivery_costo": 7.0,
    "total": 11.8,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1038",
    "fecha_pedido": {
      "$date": "2026-10-11T10:30:00Z"
    },
    "cliente": {
      "documento": "40000038",
      "nombre": "Cliente Retail 38",
      "telefono": "987650038",
      "direccion_entrega": "Av. Central 138, Sector 7"
    },
    "farmacia_id": 9,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 4,
        "precio_unitario": 0.9,
        "subtotal": 3.6
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 4.8,
    "delivery_costo": 5.0,
    "total": 9.8,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1039",
    "fecha_pedido": {
      "$date": "2026-10-12T10:30:00Z"
    },
    "cliente": {
      "documento": "40000039",
      "nombre": "Cliente Retail 39",
      "telefono": "987650039",
      "direccion_entrega": "Av. Central 139, Sector 8"
    },
    "farmacia_id": 10,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 5,
        "precio_unitario": 0.7,
        "subtotal": 3.5
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 5.9,
    "delivery_costo": 7.0,
    "total": 12.9,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1040",
    "fecha_pedido": {
      "$date": "2026-10-13T10:30:00Z"
    },
    "cliente": {
      "documento": "40000040",
      "nombre": "Cliente Retail 40",
      "telefono": "987650040",
      "direccion_entrega": "Av. Central 140, Sector 1"
    },
    "farmacia_id": 1,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 1,
        "precio_unitario": 0.5,
        "subtotal": 0.5
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 4.0,
    "delivery_costo": 5.0,
    "total": 9.0,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1041",
    "fecha_pedido": {
      "$date": "2026-10-14T10:30:00Z"
    },
    "cliente": {
      "documento": "40000041",
      "nombre": "Cliente Retail 41",
      "telefono": "987650041",
      "direccion_entrega": "Av. Central 141, Sector 2"
    },
    "farmacia_id": 2,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 2,
        "precio_unitario": 1.2,
        "subtotal": 2.4
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 5.4,
    "delivery_costo": 7.0,
    "total": 12.4,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1042",
    "fecha_pedido": {
      "$date": "2026-10-15T10:30:00Z"
    },
    "cliente": {
      "documento": "40000042",
      "nombre": "Cliente Retail 42",
      "telefono": "987650042",
      "direccion_entrega": "Av. Central 142, Sector 3"
    },
    "farmacia_id": 3,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 3.5,
    "delivery_costo": 5.0,
    "total": 8.5,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1043",
    "fecha_pedido": {
      "$date": "2026-10-16T10:30:00Z"
    },
    "cliente": {
      "documento": "40000043",
      "nombre": "Cliente Retail 43",
      "telefono": "987650043",
      "direccion_entrega": "Av. Central 143, Sector 4"
    },
    "farmacia_id": 4,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 4,
        "precio_unitario": 3.5,
        "subtotal": 14.0
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 16.7,
    "delivery_costo": 7.0,
    "total": 23.7,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1044",
    "fecha_pedido": {
      "$date": "2026-10-17T10:30:00Z"
    },
    "cliente": {
      "documento": "40000044",
      "nombre": "Cliente Retail 44",
      "telefono": "987650044",
      "direccion_entrega": "Av. Central 144, Sector 5"
    },
    "farmacia_id": 5,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 5,
        "precio_unitario": 1.0,
        "subtotal": 5.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 5.7,
    "delivery_costo": 5.0,
    "total": 10.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1045",
    "fecha_pedido": {
      "$date": "2026-10-18T10:30:00Z"
    },
    "cliente": {
      "documento": "40000045",
      "nombre": "Cliente Retail 45",
      "telefono": "987650045",
      "direccion_entrega": "Av. Central 145, Sector 6"
    },
    "farmacia_id": 6,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 2.6,
    "delivery_costo": 7.0,
    "total": 9.6,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1046",
    "fecha_pedido": {
      "$date": "2026-10-19T10:30:00Z"
    },
    "cliente": {
      "documento": "40000046",
      "nombre": "Cliente Retail 46",
      "telefono": "987650046",
      "direccion_entrega": "Av. Central 146, Sector 7"
    },
    "farmacia_id": 7,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 2,
        "precio_unitario": 0.9,
        "subtotal": 1.8
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 3.0,
    "delivery_costo": 5.0,
    "total": 8.0,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1047",
    "fecha_pedido": {
      "$date": "2026-10-20T10:30:00Z"
    },
    "cliente": {
      "documento": "40000047",
      "nombre": "Cliente Retail 47",
      "telefono": "987650047",
      "direccion_entrega": "Av. Central 147, Sector 8"
    },
    "farmacia_id": 8,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 3,
        "precio_unitario": 0.7,
        "subtotal": 2.1
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 4.5,
    "delivery_costo": 7.0,
    "total": 11.5,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1048",
    "fecha_pedido": {
      "$date": "2026-10-21T10:30:00Z"
    },
    "cliente": {
      "documento": "40000048",
      "nombre": "Cliente Retail 48",
      "telefono": "987650048",
      "direccion_entrega": "Av. Central 148, Sector 1"
    },
    "farmacia_id": 9,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 4,
        "precio_unitario": 0.5,
        "subtotal": 2.0
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 5.5,
    "delivery_costo": 5.0,
    "total": 10.5,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1049",
    "fecha_pedido": {
      "$date": "2026-10-22T10:30:00Z"
    },
    "cliente": {
      "documento": "40000049",
      "nombre": "Cliente Retail 49",
      "telefono": "987650049",
      "direccion_entrega": "Av. Central 149, Sector 2"
    },
    "farmacia_id": 10,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 5,
        "precio_unitario": 1.2,
        "subtotal": 6.0
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 9.0,
    "delivery_costo": 7.0,
    "total": 16.0,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1050",
    "fecha_pedido": {
      "$date": "2026-10-23T10:30:00Z"
    },
    "cliente": {
      "documento": "40000050",
      "nombre": "Cliente Retail 50",
      "telefono": "987650050",
      "direccion_entrega": "Av. Central 150, Sector 3"
    },
    "farmacia_id": 1,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 1,
        "precio_unitario": 0.8,
        "subtotal": 0.8
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 1.9,
    "delivery_costo": 5.0,
    "total": 6.9,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1051",
    "fecha_pedido": {
      "$date": "2026-10-24T10:30:00Z"
    },
    "cliente": {
      "documento": "40000051",
      "nombre": "Cliente Retail 51",
      "telefono": "987650051",
      "direccion_entrega": "Av. Central 151, Sector 4"
    },
    "farmacia_id": 2,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 2,
        "precio_unitario": 3.5,
        "subtotal": 7.0
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 9.7,
    "delivery_costo": 7.0,
    "total": 16.7,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1052",
    "fecha_pedido": {
      "$date": "2026-10-25T10:30:00Z"
    },
    "cliente": {
      "documento": "40000052",
      "nombre": "Cliente Retail 52",
      "telefono": "987650052",
      "direccion_entrega": "Av. Central 152, Sector 5"
    },
    "farmacia_id": 3,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 3.7,
    "delivery_costo": 5.0,
    "total": 8.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1053",
    "fecha_pedido": {
      "$date": "2026-10-26T10:30:00Z"
    },
    "cliente": {
      "documento": "40000053",
      "nombre": "Cliente Retail 53",
      "telefono": "987650053",
      "direccion_entrega": "Av. Central 153, Sector 6"
    },
    "farmacia_id": 4,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 4,
        "precio_unitario": 1.1,
        "subtotal": 4.4
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 5.9,
    "delivery_costo": 7.0,
    "total": 12.9,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1054",
    "fecha_pedido": {
      "$date": "2026-10-27T10:30:00Z"
    },
    "cliente": {
      "documento": "40000054",
      "nombre": "Cliente Retail 54",
      "telefono": "987650054",
      "direccion_entrega": "Av. Central 154, Sector 7"
    },
    "farmacia_id": 5,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 5,
        "precio_unitario": 0.9,
        "subtotal": 4.5
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 5.7,
    "delivery_costo": 5.0,
    "total": 10.7,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1055",
    "fecha_pedido": {
      "$date": "2026-10-28T10:30:00Z"
    },
    "cliente": {
      "documento": "40000055",
      "nombre": "Cliente Retail 55",
      "telefono": "987650055",
      "direccion_entrega": "Av. Central 155, Sector 8"
    },
    "farmacia_id": 6,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 3.1,
    "delivery_costo": 7.0,
    "total": 10.1,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1056",
    "fecha_pedido": {
      "$date": "2026-10-01T10:30:00Z"
    },
    "cliente": {
      "documento": "40000056",
      "nombre": "Cliente Retail 56",
      "telefono": "987650056",
      "direccion_entrega": "Av. Central 156, Sector 1"
    },
    "farmacia_id": 7,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 2,
        "precio_unitario": 0.5,
        "subtotal": 1.0
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 4.5,
    "delivery_costo": 5.0,
    "total": 9.5,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1057",
    "fecha_pedido": {
      "$date": "2026-10-02T10:30:00Z"
    },
    "cliente": {
      "documento": "40000057",
      "nombre": "Cliente Retail 57",
      "telefono": "987650057",
      "direccion_entrega": "Av. Central 157, Sector 2"
    },
    "farmacia_id": 8,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 3,
        "precio_unitario": 1.2,
        "subtotal": 3.6
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 6.6,
    "delivery_costo": 7.0,
    "total": 13.6,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1058",
    "fecha_pedido": {
      "$date": "2026-10-03T10:30:00Z"
    },
    "cliente": {
      "documento": "40000058",
      "nombre": "Cliente Retail 58",
      "telefono": "987650058",
      "direccion_entrega": "Av. Central 158, Sector 3"
    },
    "farmacia_id": 9,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 4,
        "precio_unitario": 0.8,
        "subtotal": 3.2
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 4.3,
    "delivery_costo": 5.0,
    "total": 9.3,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1059",
    "fecha_pedido": {
      "$date": "2026-10-04T10:30:00Z"
    },
    "cliente": {
      "documento": "40000059",
      "nombre": "Cliente Retail 59",
      "telefono": "987650059",
      "direccion_entrega": "Av. Central 159, Sector 4"
    },
    "farmacia_id": 10,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 5,
        "precio_unitario": 3.5,
        "subtotal": 17.5
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 20.2,
    "delivery_costo": 7.0,
    "total": 27.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1060",
    "fecha_pedido": {
      "$date": "2026-10-05T10:30:00Z"
    },
    "cliente": {
      "documento": "40000060",
      "nombre": "Cliente Retail 60",
      "telefono": "987650060",
      "direccion_entrega": "Av. Central 160, Sector 5"
    },
    "farmacia_id": 1,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 1,
        "precio_unitario": 1.0,
        "subtotal": 1.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 1.7,
    "delivery_costo": 5.0,
    "total": 6.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1061",
    "fecha_pedido": {
      "$date": "2026-10-06T10:30:00Z"
    },
    "cliente": {
      "documento": "40000061",
      "nombre": "Cliente Retail 61",
      "telefono": "987650061",
      "direccion_entrega": "Av. Central 161, Sector 6"
    },
    "farmacia_id": 2,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 2,
        "precio_unitario": 1.1,
        "subtotal": 2.2
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 3.7,
    "delivery_costo": 7.0,
    "total": 10.7,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1062",
    "fecha_pedido": {
      "$date": "2026-10-07T10:30:00Z"
    },
    "cliente": {
      "documento": "40000062",
      "nombre": "Cliente Retail 62",
      "telefono": "987650062",
      "direccion_entrega": "Av. Central 162, Sector 7"
    },
    "farmacia_id": 3,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 3.9,
    "delivery_costo": 5.0,
    "total": 8.9,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1063",
    "fecha_pedido": {
      "$date": "2026-10-08T10:30:00Z"
    },
    "cliente": {
      "documento": "40000063",
      "nombre": "Cliente Retail 63",
      "telefono": "987650063",
      "direccion_entrega": "Av. Central 163, Sector 8"
    },
    "farmacia_id": 4,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 4,
        "precio_unitario": 0.7,
        "subtotal": 2.8
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 5.2,
    "delivery_costo": 7.0,
    "total": 12.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1064",
    "fecha_pedido": {
      "$date": "2026-10-09T10:30:00Z"
    },
    "cliente": {
      "documento": "40000064",
      "nombre": "Cliente Retail 64",
      "telefono": "987650064",
      "direccion_entrega": "Av. Central 164, Sector 1"
    },
    "farmacia_id": 5,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 5,
        "precio_unitario": 0.5,
        "subtotal": 2.5
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 6.0,
    "delivery_costo": 5.0,
    "total": 11.0,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1065",
    "fecha_pedido": {
      "$date": "2026-10-10T10:30:00Z"
    },
    "cliente": {
      "documento": "40000065",
      "nombre": "Cliente Retail 65",
      "telefono": "987650065",
      "direccion_entrega": "Av. Central 165, Sector 2"
    },
    "farmacia_id": 6,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 4.2,
    "delivery_costo": 7.0,
    "total": 11.2,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1066",
    "fecha_pedido": {
      "$date": "2026-10-11T10:30:00Z"
    },
    "cliente": {
      "documento": "40000066",
      "nombre": "Cliente Retail 66",
      "telefono": "987650066",
      "direccion_entrega": "Av. Central 166, Sector 3"
    },
    "farmacia_id": 7,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 2,
        "precio_unitario": 0.8,
        "subtotal": 1.6
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 2.7,
    "delivery_costo": 5.0,
    "total": 7.7,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1067",
    "fecha_pedido": {
      "$date": "2026-10-12T10:30:00Z"
    },
    "cliente": {
      "documento": "40000067",
      "nombre": "Cliente Retail 67",
      "telefono": "987650067",
      "direccion_entrega": "Av. Central 167, Sector 4"
    },
    "farmacia_id": 8,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 3,
        "precio_unitario": 3.5,
        "subtotal": 10.5
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 13.2,
    "delivery_costo": 7.0,
    "total": 20.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1068",
    "fecha_pedido": {
      "$date": "2026-10-13T10:30:00Z"
    },
    "cliente": {
      "documento": "40000068",
      "nombre": "Cliente Retail 68",
      "telefono": "987650068",
      "direccion_entrega": "Av. Central 168, Sector 5"
    },
    "farmacia_id": 9,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 4,
        "precio_unitario": 1.0,
        "subtotal": 4.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 4.7,
    "delivery_costo": 5.0,
    "total": 9.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1069",
    "fecha_pedido": {
      "$date": "2026-10-14T10:30:00Z"
    },
    "cliente": {
      "documento": "40000069",
      "nombre": "Cliente Retail 69",
      "telefono": "987650069",
      "direccion_entrega": "Av. Central 169, Sector 6"
    },
    "farmacia_id": 10,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 5,
        "precio_unitario": 1.1,
        "subtotal": 5.5
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 7.0,
    "delivery_costo": 7.0,
    "total": 14.0,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1070",
    "fecha_pedido": {
      "$date": "2026-10-15T10:30:00Z"
    },
    "cliente": {
      "documento": "40000070",
      "nombre": "Cliente Retail 70",
      "telefono": "987650070",
      "direccion_entrega": "Av. Central 170, Sector 7"
    },
    "farmacia_id": 1,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 1,
        "precio_unitario": 0.9,
        "subtotal": 0.9
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 2.1,
    "delivery_costo": 5.0,
    "total": 7.1,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1071",
    "fecha_pedido": {
      "$date": "2026-10-16T10:30:00Z"
    },
    "cliente": {
      "documento": "40000071",
      "nombre": "Cliente Retail 71",
      "telefono": "987650071",
      "direccion_entrega": "Av. Central 171, Sector 8"
    },
    "farmacia_id": 2,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 2,
        "precio_unitario": 0.7,
        "subtotal": 1.4
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 3.8,
    "delivery_costo": 7.0,
    "total": 10.8,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1072",
    "fecha_pedido": {
      "$date": "2026-10-17T10:30:00Z"
    },
    "cliente": {
      "documento": "40000072",
      "nombre": "Cliente Retail 72",
      "telefono": "987650072",
      "direccion_entrega": "Av. Central 172, Sector 1"
    },
    "farmacia_id": 3,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 5.0,
    "delivery_costo": 5.0,
    "total": 10.0,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1073",
    "fecha_pedido": {
      "$date": "2026-10-18T10:30:00Z"
    },
    "cliente": {
      "documento": "40000073",
      "nombre": "Cliente Retail 73",
      "telefono": "987650073",
      "direccion_entrega": "Av. Central 173, Sector 2"
    },
    "farmacia_id": 4,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 4,
        "precio_unitario": 1.2,
        "subtotal": 4.8
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 7.8,
    "delivery_costo": 7.0,
    "total": 14.8,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1074",
    "fecha_pedido": {
      "$date": "2026-10-19T10:30:00Z"
    },
    "cliente": {
      "documento": "40000074",
      "nombre": "Cliente Retail 74",
      "telefono": "987650074",
      "direccion_entrega": "Av. Central 174, Sector 3"
    },
    "farmacia_id": 5,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 5,
        "precio_unitario": 0.8,
        "subtotal": 4.0
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 5.1,
    "delivery_costo": 5.0,
    "total": 10.1,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1075",
    "fecha_pedido": {
      "$date": "2026-10-20T10:30:00Z"
    },
    "cliente": {
      "documento": "40000075",
      "nombre": "Cliente Retail 75",
      "telefono": "987650075",
      "direccion_entrega": "Av. Central 175, Sector 4"
    },
    "farmacia_id": 6,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 6.2,
    "delivery_costo": 7.0,
    "total": 13.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1076",
    "fecha_pedido": {
      "$date": "2026-10-21T10:30:00Z"
    },
    "cliente": {
      "documento": "40000076",
      "nombre": "Cliente Retail 76",
      "telefono": "987650076",
      "direccion_entrega": "Av. Central 176, Sector 5"
    },
    "farmacia_id": 7,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 2,
        "precio_unitario": 1.0,
        "subtotal": 2.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 2.7,
    "delivery_costo": 5.0,
    "total": 7.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1077",
    "fecha_pedido": {
      "$date": "2026-10-22T10:30:00Z"
    },
    "cliente": {
      "documento": "40000077",
      "nombre": "Cliente Retail 77",
      "telefono": "987650077",
      "direccion_entrega": "Av. Central 177, Sector 6"
    },
    "farmacia_id": 8,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 3,
        "precio_unitario": 1.1,
        "subtotal": 3.3
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 4.8,
    "delivery_costo": 7.0,
    "total": 11.8,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1078",
    "fecha_pedido": {
      "$date": "2026-10-23T10:30:00Z"
    },
    "cliente": {
      "documento": "40000078",
      "nombre": "Cliente Retail 78",
      "telefono": "987650078",
      "direccion_entrega": "Av. Central 178, Sector 7"
    },
    "farmacia_id": 9,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 4,
        "precio_unitario": 0.9,
        "subtotal": 3.6
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 4.8,
    "delivery_costo": 5.0,
    "total": 9.8,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1079",
    "fecha_pedido": {
      "$date": "2026-10-24T10:30:00Z"
    },
    "cliente": {
      "documento": "40000079",
      "nombre": "Cliente Retail 79",
      "telefono": "987650079",
      "direccion_entrega": "Av. Central 179, Sector 8"
    },
    "farmacia_id": 10,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 5,
        "precio_unitario": 0.7,
        "subtotal": 3.5
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 5.9,
    "delivery_costo": 7.0,
    "total": 12.9,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1080",
    "fecha_pedido": {
      "$date": "2026-10-25T10:30:00Z"
    },
    "cliente": {
      "documento": "40000080",
      "nombre": "Cliente Retail 80",
      "telefono": "987650080",
      "direccion_entrega": "Av. Central 180, Sector 1"
    },
    "farmacia_id": 1,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 1,
        "precio_unitario": 0.5,
        "subtotal": 0.5
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 4.0,
    "delivery_costo": 5.0,
    "total": 9.0,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1081",
    "fecha_pedido": {
      "$date": "2026-10-26T10:30:00Z"
    },
    "cliente": {
      "documento": "40000081",
      "nombre": "Cliente Retail 81",
      "telefono": "987650081",
      "direccion_entrega": "Av. Central 181, Sector 2"
    },
    "farmacia_id": 2,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 2,
        "precio_unitario": 1.2,
        "subtotal": 2.4
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 5.4,
    "delivery_costo": 7.0,
    "total": 12.4,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1082",
    "fecha_pedido": {
      "$date": "2026-10-27T10:30:00Z"
    },
    "cliente": {
      "documento": "40000082",
      "nombre": "Cliente Retail 82",
      "telefono": "987650082",
      "direccion_entrega": "Av. Central 182, Sector 3"
    },
    "farmacia_id": 3,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 3.5,
    "delivery_costo": 5.0,
    "total": 8.5,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1083",
    "fecha_pedido": {
      "$date": "2026-10-28T10:30:00Z"
    },
    "cliente": {
      "documento": "40000083",
      "nombre": "Cliente Retail 83",
      "telefono": "987650083",
      "direccion_entrega": "Av. Central 183, Sector 4"
    },
    "farmacia_id": 4,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 4,
        "precio_unitario": 3.5,
        "subtotal": 14.0
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 16.7,
    "delivery_costo": 7.0,
    "total": 23.7,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1084",
    "fecha_pedido": {
      "$date": "2026-10-01T10:30:00Z"
    },
    "cliente": {
      "documento": "40000084",
      "nombre": "Cliente Retail 84",
      "telefono": "987650084",
      "direccion_entrega": "Av. Central 184, Sector 5"
    },
    "farmacia_id": 5,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 5,
        "precio_unitario": 1.0,
        "subtotal": 5.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 5.7,
    "delivery_costo": 5.0,
    "total": 10.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1085",
    "fecha_pedido": {
      "$date": "2026-10-02T10:30:00Z"
    },
    "cliente": {
      "documento": "40000085",
      "nombre": "Cliente Retail 85",
      "telefono": "987650085",
      "direccion_entrega": "Av. Central 185, Sector 6"
    },
    "farmacia_id": 6,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 2.6,
    "delivery_costo": 7.0,
    "total": 9.6,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1086",
    "fecha_pedido": {
      "$date": "2026-10-03T10:30:00Z"
    },
    "cliente": {
      "documento": "40000086",
      "nombre": "Cliente Retail 86",
      "telefono": "987650086",
      "direccion_entrega": "Av. Central 186, Sector 7"
    },
    "farmacia_id": 7,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 2,
        "precio_unitario": 0.9,
        "subtotal": 1.8
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 3.0,
    "delivery_costo": 5.0,
    "total": 8.0,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1087",
    "fecha_pedido": {
      "$date": "2026-10-04T10:30:00Z"
    },
    "cliente": {
      "documento": "40000087",
      "nombre": "Cliente Retail 87",
      "telefono": "987650087",
      "direccion_entrega": "Av. Central 187, Sector 8"
    },
    "farmacia_id": 8,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 3,
        "precio_unitario": 0.7,
        "subtotal": 2.1
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 4.5,
    "delivery_costo": 7.0,
    "total": 11.5,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1088",
    "fecha_pedido": {
      "$date": "2026-10-05T10:30:00Z"
    },
    "cliente": {
      "documento": "40000088",
      "nombre": "Cliente Retail 88",
      "telefono": "987650088",
      "direccion_entrega": "Av. Central 188, Sector 1"
    },
    "farmacia_id": 9,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 4,
        "precio_unitario": 0.5,
        "subtotal": 2.0
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 5.5,
    "delivery_costo": 5.0,
    "total": 10.5,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1089",
    "fecha_pedido": {
      "$date": "2026-10-06T10:30:00Z"
    },
    "cliente": {
      "documento": "40000089",
      "nombre": "Cliente Retail 89",
      "telefono": "987650089",
      "direccion_entrega": "Av. Central 189, Sector 2"
    },
    "farmacia_id": 10,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 5,
        "precio_unitario": 1.2,
        "subtotal": 6.0
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 9.0,
    "delivery_costo": 7.0,
    "total": 16.0,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1090",
    "fecha_pedido": {
      "$date": "2026-10-07T10:30:00Z"
    },
    "cliente": {
      "documento": "40000090",
      "nombre": "Cliente Retail 90",
      "telefono": "987650090",
      "direccion_entrega": "Av. Central 190, Sector 3"
    },
    "farmacia_id": 1,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 1,
        "precio_unitario": 0.8,
        "subtotal": 0.8
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 1.9,
    "delivery_costo": 5.0,
    "total": 6.9,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1091",
    "fecha_pedido": {
      "$date": "2026-10-08T10:30:00Z"
    },
    "cliente": {
      "documento": "40000091",
      "nombre": "Cliente Retail 91",
      "telefono": "987650091",
      "direccion_entrega": "Av. Central 191, Sector 4"
    },
    "farmacia_id": 2,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 2,
        "precio_unitario": 3.5,
        "subtotal": 7.0
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 9.7,
    "delivery_costo": 7.0,
    "total": 16.7,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1092",
    "fecha_pedido": {
      "$date": "2026-10-09T10:30:00Z"
    },
    "cliente": {
      "documento": "40000092",
      "nombre": "Cliente Retail 92",
      "telefono": "987650092",
      "direccion_entrega": "Av. Central 192, Sector 5"
    },
    "farmacia_id": 3,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 3.7,
    "delivery_costo": 5.0,
    "total": 8.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1093",
    "fecha_pedido": {
      "$date": "2026-10-10T10:30:00Z"
    },
    "cliente": {
      "documento": "40000093",
      "nombre": "Cliente Retail 93",
      "telefono": "987650093",
      "direccion_entrega": "Av. Central 193, Sector 6"
    },
    "farmacia_id": 4,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 4,
        "precio_unitario": 1.1,
        "subtotal": 4.4
      },
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 3,
        "precio_unitario": 0.5,
        "subtotal": 1.5
      }
    ],
    "subtotal": 5.9,
    "delivery_costo": 7.0,
    "total": 12.9,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1094",
    "fecha_pedido": {
      "$date": "2026-10-11T10:30:00Z"
    },
    "cliente": {
      "documento": "40000094",
      "nombre": "Cliente Retail 94",
      "telefono": "987650094",
      "direccion_entrega": "Av. Central 194, Sector 7"
    },
    "farmacia_id": 5,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 5,
        "precio_unitario": 0.9,
        "subtotal": 4.5
      },
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 1,
        "precio_unitario": 1.2,
        "subtotal": 1.2
      }
    ],
    "subtotal": 5.7,
    "delivery_costo": 5.0,
    "total": 10.7,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1095",
    "fecha_pedido": {
      "$date": "2026-10-12T10:30:00Z"
    },
    "cliente": {
      "documento": "40000095",
      "nombre": "Cliente Retail 95",
      "telefono": "987650095",
      "direccion_entrega": "Av. Central 195, Sector 8"
    },
    "farmacia_id": 6,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      },
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 3,
        "precio_unitario": 0.8,
        "subtotal": 2.4
      }
    ],
    "subtotal": 3.1,
    "delivery_costo": 7.0,
    "total": 10.1,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1096",
    "fecha_pedido": {
      "$date": "2026-10-13T10:30:00Z"
    },
    "cliente": {
      "documento": "40000096",
      "nombre": "Cliente Retail 96",
      "telefono": "987650096",
      "direccion_entrega": "Av. Central 196, Sector 1"
    },
    "farmacia_id": 7,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 2,
        "precio_unitario": 0.5,
        "subtotal": 1.0
      },
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 1,
        "precio_unitario": 3.5,
        "subtotal": 3.5
      }
    ],
    "subtotal": 4.5,
    "delivery_costo": 5.0,
    "total": 9.5,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-MK-1097",
    "fecha_pedido": {
      "$date": "2026-10-14T10:30:00Z"
    },
    "cliente": {
      "documento": "40000097",
      "nombre": "Cliente Retail 97",
      "telefono": "987650097",
      "direccion_entrega": "Av. Central 197, Sector 2"
    },
    "farmacia_id": 8,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 3,
        "precio_unitario": 1.2,
        "subtotal": 3.6
      },
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 3,
        "precio_unitario": 1.0,
        "subtotal": 3.0
      }
    ],
    "subtotal": 6.6,
    "delivery_costo": 7.0,
    "total": 13.6,
    "metodo_pago": "PLIN",
    "estado": "EN_CAMINO"
  },
  {
    "codigo_pedido": "PED-MK-1098",
    "fecha_pedido": {
      "$date": "2026-10-15T10:30:00Z"
    },
    "cliente": {
      "documento": "40000098",
      "nombre": "Cliente Retail 98",
      "telefono": "987650098",
      "direccion_entrega": "Av. Central 198, Sector 3"
    },
    "farmacia_id": 9,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 4,
        "precio_unitario": 0.8,
        "subtotal": 3.2
      },
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 1,
        "precio_unitario": 1.1,
        "subtotal": 1.1
      }
    ],
    "subtotal": 4.3,
    "delivery_costo": 5.0,
    "total": 9.3,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-MK-1099",
    "fecha_pedido": {
      "$date": "2026-10-16T10:30:00Z"
    },
    "cliente": {
      "documento": "40000099",
      "nombre": "Cliente Retail 99",
      "telefono": "987650099",
      "direccion_entrega": "Av. Central 199, Sector 4"
    },
    "farmacia_id": 10,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 5,
        "precio_unitario": 3.5,
        "subtotal": 17.5
      },
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 3,
        "precio_unitario": 0.9,
        "subtotal": 2.7
      }
    ],
    "subtotal": 20.2,
    "delivery_costo": 7.0,
    "total": 27.2,
    "metodo_pago": "EFECTIVO",
    "estado": "PENDIENTE"
  },
  {
    "codigo_pedido": "PED-MK-1100",
    "fecha_pedido": {
      "$date": "2026-10-17T10:30:00Z"
    },
    "cliente": {
      "documento": "40000100",
      "nombre": "Cliente Retail 100",
      "telefono": "987650100",
      "direccion_entrega": "Av. Central 200, Sector 5"
    },
    "farmacia_id": 1,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 1,
        "precio_unitario": 1.0,
        "subtotal": 1.0
      },
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 1,
        "precio_unitario": 0.7,
        "subtotal": 0.7
      }
    ],
    "subtotal": 1.7,
    "delivery_costo": 5.0,
    "total": 6.7,
    "metodo_pago": "YAPE",
    "estado": "CONFIRMADO"
  }
]);

// Participante 2: Leonardo Wong (100 pedidos corporativos boticas asociadas)
db.pedidos_marketplace.insertMany([
  {
    "codigo_pedido": "PED-LW-1101",
    "fecha_pedido": {
      "$date": "2026-10-18T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000101",
      "nombre": "Botica Asociada Red 1",
      "telefono": "912340101",
      "direccion_entrega": "Calle Las Palmeras 301"
    },
    "farmacia_id": 1,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 61,
        "precio_unitario": 0.94,
        "subtotal": 57.04
      }
    ],
    "subtotal": 57.04,
    "delivery_costo": 15.0,
    "total": 72.04,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1102",
    "fecha_pedido": {
      "$date": "2026-10-19T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000102",
      "nombre": "Botica Asociada Red 2",
      "telefono": "912340102",
      "direccion_entrega": "Calle Las Palmeras 302"
    },
    "farmacia_id": 2,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 62,
        "precio_unitario": 0.77,
        "subtotal": 47.43
      }
    ],
    "subtotal": 47.43,
    "delivery_costo": 15.0,
    "total": 62.43,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1103",
    "fecha_pedido": {
      "$date": "2026-10-20T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000103",
      "nombre": "Botica Asociada Red 3",
      "telefono": "912340103",
      "direccion_entrega": "Calle Las Palmeras 303"
    },
    "farmacia_id": 3,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 63,
        "precio_unitario": 0.59,
        "subtotal": 37.48
      }
    ],
    "subtotal": 37.48,
    "delivery_costo": 15.0,
    "total": 52.48,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1104",
    "fecha_pedido": {
      "$date": "2026-10-21T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000104",
      "nombre": "Botica Asociada Red 4",
      "telefono": "912340104",
      "direccion_entrega": "Calle Las Palmeras 304"
    },
    "farmacia_id": 4,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 64,
        "precio_unitario": 0.42,
        "subtotal": 27.2
      }
    ],
    "subtotal": 27.2,
    "delivery_costo": 15.0,
    "total": 42.2,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1105",
    "fecha_pedido": {
      "$date": "2026-10-22T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000105",
      "nombre": "Botica Asociada Red 5",
      "telefono": "912340105",
      "direccion_entrega": "Calle Las Palmeras 305"
    },
    "farmacia_id": 5,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 65,
        "precio_unitario": 1.02,
        "subtotal": 66.3
      }
    ],
    "subtotal": 66.3,
    "delivery_costo": 15.0,
    "total": 81.3,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1106",
    "fecha_pedido": {
      "$date": "2026-10-23T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000106",
      "nombre": "Botica Asociada Red 6",
      "telefono": "912340106",
      "direccion_entrega": "Calle Las Palmeras 306"
    },
    "farmacia_id": 6,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 66,
        "precio_unitario": 0.68,
        "subtotal": 44.88
      }
    ],
    "subtotal": 44.88,
    "delivery_costo": 15.0,
    "total": 59.88,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1107",
    "fecha_pedido": {
      "$date": "2026-10-24T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000107",
      "nombre": "Botica Asociada Red 7",
      "telefono": "912340107",
      "direccion_entrega": "Calle Las Palmeras 307"
    },
    "farmacia_id": 7,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 67,
        "precio_unitario": 2.98,
        "subtotal": 199.32
      }
    ],
    "subtotal": 199.32,
    "delivery_costo": 15.0,
    "total": 214.32,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1108",
    "fecha_pedido": {
      "$date": "2026-10-25T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000108",
      "nombre": "Botica Asociada Red 8",
      "telefono": "912340108",
      "direccion_entrega": "Calle Las Palmeras 308"
    },
    "farmacia_id": 8,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 68,
        "precio_unitario": 0.85,
        "subtotal": 57.8
      }
    ],
    "subtotal": 57.8,
    "delivery_costo": 15.0,
    "total": 72.8,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1109",
    "fecha_pedido": {
      "$date": "2026-10-26T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000109",
      "nombre": "Botica Asociada Red 9",
      "telefono": "912340109",
      "direccion_entrega": "Calle Las Palmeras 309"
    },
    "farmacia_id": 9,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 69,
        "precio_unitario": 0.94,
        "subtotal": 64.52
      }
    ],
    "subtotal": 64.52,
    "delivery_costo": 15.0,
    "total": 79.52,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1110",
    "fecha_pedido": {
      "$date": "2026-10-27T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000110",
      "nombre": "Botica Asociada Red 10",
      "telefono": "912340110",
      "direccion_entrega": "Calle Las Palmeras 310"
    },
    "farmacia_id": 10,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 70,
        "precio_unitario": 0.77,
        "subtotal": 53.55
      }
    ],
    "subtotal": 53.55,
    "delivery_costo": 15.0,
    "total": 68.55,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1111",
    "fecha_pedido": {
      "$date": "2026-10-28T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000111",
      "nombre": "Botica Asociada Red 11",
      "telefono": "912340111",
      "direccion_entrega": "Calle Las Palmeras 311"
    },
    "farmacia_id": 1,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 71,
        "precio_unitario": 0.59,
        "subtotal": 42.24
      }
    ],
    "subtotal": 42.24,
    "delivery_costo": 15.0,
    "total": 57.24,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1112",
    "fecha_pedido": {
      "$date": "2026-10-01T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000112",
      "nombre": "Botica Asociada Red 12",
      "telefono": "912340112",
      "direccion_entrega": "Calle Las Palmeras 312"
    },
    "farmacia_id": 2,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 72,
        "precio_unitario": 0.42,
        "subtotal": 30.6
      }
    ],
    "subtotal": 30.6,
    "delivery_costo": 15.0,
    "total": 45.6,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1113",
    "fecha_pedido": {
      "$date": "2026-10-02T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000113",
      "nombre": "Botica Asociada Red 13",
      "telefono": "912340113",
      "direccion_entrega": "Calle Las Palmeras 313"
    },
    "farmacia_id": 3,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 73,
        "precio_unitario": 1.02,
        "subtotal": 74.46
      }
    ],
    "subtotal": 74.46,
    "delivery_costo": 15.0,
    "total": 89.46,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1114",
    "fecha_pedido": {
      "$date": "2026-10-03T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000114",
      "nombre": "Botica Asociada Red 14",
      "telefono": "912340114",
      "direccion_entrega": "Calle Las Palmeras 314"
    },
    "farmacia_id": 4,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 74,
        "precio_unitario": 0.68,
        "subtotal": 50.32
      }
    ],
    "subtotal": 50.32,
    "delivery_costo": 15.0,
    "total": 65.32,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1115",
    "fecha_pedido": {
      "$date": "2026-10-04T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000115",
      "nombre": "Botica Asociada Red 15",
      "telefono": "912340115",
      "direccion_entrega": "Calle Las Palmeras 315"
    },
    "farmacia_id": 5,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 75,
        "precio_unitario": 2.98,
        "subtotal": 223.12
      }
    ],
    "subtotal": 223.12,
    "delivery_costo": 15.0,
    "total": 238.12,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1116",
    "fecha_pedido": {
      "$date": "2026-10-05T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000116",
      "nombre": "Botica Asociada Red 16",
      "telefono": "912340116",
      "direccion_entrega": "Calle Las Palmeras 316"
    },
    "farmacia_id": 6,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 76,
        "precio_unitario": 0.85,
        "subtotal": 64.6
      }
    ],
    "subtotal": 64.6,
    "delivery_costo": 15.0,
    "total": 79.6,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1117",
    "fecha_pedido": {
      "$date": "2026-10-06T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000117",
      "nombre": "Botica Asociada Red 17",
      "telefono": "912340117",
      "direccion_entrega": "Calle Las Palmeras 317"
    },
    "farmacia_id": 7,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 77,
        "precio_unitario": 0.94,
        "subtotal": 72.0
      }
    ],
    "subtotal": 72.0,
    "delivery_costo": 15.0,
    "total": 87.0,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1118",
    "fecha_pedido": {
      "$date": "2026-10-07T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000118",
      "nombre": "Botica Asociada Red 18",
      "telefono": "912340118",
      "direccion_entrega": "Calle Las Palmeras 318"
    },
    "farmacia_id": 8,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 78,
        "precio_unitario": 0.77,
        "subtotal": 59.67
      }
    ],
    "subtotal": 59.67,
    "delivery_costo": 15.0,
    "total": 74.67,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1119",
    "fecha_pedido": {
      "$date": "2026-10-08T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000119",
      "nombre": "Botica Asociada Red 19",
      "telefono": "912340119",
      "direccion_entrega": "Calle Las Palmeras 319"
    },
    "farmacia_id": 9,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 79,
        "precio_unitario": 0.59,
        "subtotal": 47.0
      }
    ],
    "subtotal": 47.0,
    "delivery_costo": 15.0,
    "total": 62.0,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1120",
    "fecha_pedido": {
      "$date": "2026-10-09T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000120",
      "nombre": "Botica Asociada Red 20",
      "telefono": "912340120",
      "direccion_entrega": "Calle Las Palmeras 320"
    },
    "farmacia_id": 10,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 50,
        "precio_unitario": 0.42,
        "subtotal": 21.25
      }
    ],
    "subtotal": 21.25,
    "delivery_costo": 15.0,
    "total": 36.25,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1121",
    "fecha_pedido": {
      "$date": "2026-10-10T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000121",
      "nombre": "Botica Asociada Red 21",
      "telefono": "912340121",
      "direccion_entrega": "Calle Las Palmeras 321"
    },
    "farmacia_id": 1,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 51,
        "precio_unitario": 1.02,
        "subtotal": 52.02
      }
    ],
    "subtotal": 52.02,
    "delivery_costo": 15.0,
    "total": 67.02,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1122",
    "fecha_pedido": {
      "$date": "2026-10-11T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000122",
      "nombre": "Botica Asociada Red 22",
      "telefono": "912340122",
      "direccion_entrega": "Calle Las Palmeras 322"
    },
    "farmacia_id": 2,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 52,
        "precio_unitario": 0.68,
        "subtotal": 35.36
      }
    ],
    "subtotal": 35.36,
    "delivery_costo": 15.0,
    "total": 50.36,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1123",
    "fecha_pedido": {
      "$date": "2026-10-12T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000123",
      "nombre": "Botica Asociada Red 23",
      "telefono": "912340123",
      "direccion_entrega": "Calle Las Palmeras 323"
    },
    "farmacia_id": 3,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 53,
        "precio_unitario": 2.98,
        "subtotal": 157.67
      }
    ],
    "subtotal": 157.67,
    "delivery_costo": 15.0,
    "total": 172.67,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1124",
    "fecha_pedido": {
      "$date": "2026-10-13T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000124",
      "nombre": "Botica Asociada Red 24",
      "telefono": "912340124",
      "direccion_entrega": "Calle Las Palmeras 324"
    },
    "farmacia_id": 4,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 54,
        "precio_unitario": 0.85,
        "subtotal": 45.9
      }
    ],
    "subtotal": 45.9,
    "delivery_costo": 15.0,
    "total": 60.9,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1125",
    "fecha_pedido": {
      "$date": "2026-10-14T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000125",
      "nombre": "Botica Asociada Red 25",
      "telefono": "912340125",
      "direccion_entrega": "Calle Las Palmeras 325"
    },
    "farmacia_id": 5,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 55,
        "precio_unitario": 0.94,
        "subtotal": 51.43
      }
    ],
    "subtotal": 51.43,
    "delivery_costo": 15.0,
    "total": 66.43,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1126",
    "fecha_pedido": {
      "$date": "2026-10-15T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000126",
      "nombre": "Botica Asociada Red 26",
      "telefono": "912340126",
      "direccion_entrega": "Calle Las Palmeras 326"
    },
    "farmacia_id": 6,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 56,
        "precio_unitario": 0.77,
        "subtotal": 42.84
      }
    ],
    "subtotal": 42.84,
    "delivery_costo": 15.0,
    "total": 57.84,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1127",
    "fecha_pedido": {
      "$date": "2026-10-16T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000127",
      "nombre": "Botica Asociada Red 27",
      "telefono": "912340127",
      "direccion_entrega": "Calle Las Palmeras 327"
    },
    "farmacia_id": 7,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 57,
        "precio_unitario": 0.59,
        "subtotal": 33.91
      }
    ],
    "subtotal": 33.91,
    "delivery_costo": 15.0,
    "total": 48.91,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1128",
    "fecha_pedido": {
      "$date": "2026-10-17T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000128",
      "nombre": "Botica Asociada Red 28",
      "telefono": "912340128",
      "direccion_entrega": "Calle Las Palmeras 328"
    },
    "farmacia_id": 8,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 58,
        "precio_unitario": 0.42,
        "subtotal": 24.65
      }
    ],
    "subtotal": 24.65,
    "delivery_costo": 15.0,
    "total": 39.65,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1129",
    "fecha_pedido": {
      "$date": "2026-10-18T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000129",
      "nombre": "Botica Asociada Red 29",
      "telefono": "912340129",
      "direccion_entrega": "Calle Las Palmeras 329"
    },
    "farmacia_id": 9,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 59,
        "precio_unitario": 1.02,
        "subtotal": 60.18
      }
    ],
    "subtotal": 60.18,
    "delivery_costo": 15.0,
    "total": 75.18,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1130",
    "fecha_pedido": {
      "$date": "2026-10-19T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000130",
      "nombre": "Botica Asociada Red 30",
      "telefono": "912340130",
      "direccion_entrega": "Calle Las Palmeras 330"
    },
    "farmacia_id": 10,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 60,
        "precio_unitario": 0.68,
        "subtotal": 40.8
      }
    ],
    "subtotal": 40.8,
    "delivery_costo": 15.0,
    "total": 55.8,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1131",
    "fecha_pedido": {
      "$date": "2026-10-20T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000131",
      "nombre": "Botica Asociada Red 31",
      "telefono": "912340131",
      "direccion_entrega": "Calle Las Palmeras 331"
    },
    "farmacia_id": 1,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 61,
        "precio_unitario": 2.98,
        "subtotal": 181.47
      }
    ],
    "subtotal": 181.47,
    "delivery_costo": 15.0,
    "total": 196.47,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1132",
    "fecha_pedido": {
      "$date": "2026-10-21T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000132",
      "nombre": "Botica Asociada Red 32",
      "telefono": "912340132",
      "direccion_entrega": "Calle Las Palmeras 332"
    },
    "farmacia_id": 2,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 62,
        "precio_unitario": 0.85,
        "subtotal": 52.7
      }
    ],
    "subtotal": 52.7,
    "delivery_costo": 15.0,
    "total": 67.7,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1133",
    "fecha_pedido": {
      "$date": "2026-10-22T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000133",
      "nombre": "Botica Asociada Red 33",
      "telefono": "912340133",
      "direccion_entrega": "Calle Las Palmeras 333"
    },
    "farmacia_id": 3,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 63,
        "precio_unitario": 0.94,
        "subtotal": 58.91
      }
    ],
    "subtotal": 58.91,
    "delivery_costo": 15.0,
    "total": 73.91,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1134",
    "fecha_pedido": {
      "$date": "2026-10-23T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000134",
      "nombre": "Botica Asociada Red 34",
      "telefono": "912340134",
      "direccion_entrega": "Calle Las Palmeras 334"
    },
    "farmacia_id": 4,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 64,
        "precio_unitario": 0.77,
        "subtotal": 48.96
      }
    ],
    "subtotal": 48.96,
    "delivery_costo": 15.0,
    "total": 63.96,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1135",
    "fecha_pedido": {
      "$date": "2026-10-24T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000135",
      "nombre": "Botica Asociada Red 35",
      "telefono": "912340135",
      "direccion_entrega": "Calle Las Palmeras 335"
    },
    "farmacia_id": 5,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 65,
        "precio_unitario": 0.59,
        "subtotal": 38.67
      }
    ],
    "subtotal": 38.67,
    "delivery_costo": 15.0,
    "total": 53.67,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1136",
    "fecha_pedido": {
      "$date": "2026-10-25T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000136",
      "nombre": "Botica Asociada Red 36",
      "telefono": "912340136",
      "direccion_entrega": "Calle Las Palmeras 336"
    },
    "farmacia_id": 6,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 66,
        "precio_unitario": 0.42,
        "subtotal": 28.05
      }
    ],
    "subtotal": 28.05,
    "delivery_costo": 15.0,
    "total": 43.05,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1137",
    "fecha_pedido": {
      "$date": "2026-10-26T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000137",
      "nombre": "Botica Asociada Red 37",
      "telefono": "912340137",
      "direccion_entrega": "Calle Las Palmeras 337"
    },
    "farmacia_id": 7,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 67,
        "precio_unitario": 1.02,
        "subtotal": 68.34
      }
    ],
    "subtotal": 68.34,
    "delivery_costo": 15.0,
    "total": 83.34,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1138",
    "fecha_pedido": {
      "$date": "2026-10-27T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000138",
      "nombre": "Botica Asociada Red 38",
      "telefono": "912340138",
      "direccion_entrega": "Calle Las Palmeras 338"
    },
    "farmacia_id": 8,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 68,
        "precio_unitario": 0.68,
        "subtotal": 46.24
      }
    ],
    "subtotal": 46.24,
    "delivery_costo": 15.0,
    "total": 61.24,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1139",
    "fecha_pedido": {
      "$date": "2026-10-28T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000139",
      "nombre": "Botica Asociada Red 39",
      "telefono": "912340139",
      "direccion_entrega": "Calle Las Palmeras 339"
    },
    "farmacia_id": 9,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 69,
        "precio_unitario": 2.98,
        "subtotal": 205.28
      }
    ],
    "subtotal": 205.28,
    "delivery_costo": 15.0,
    "total": 220.28,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1140",
    "fecha_pedido": {
      "$date": "2026-10-01T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000140",
      "nombre": "Botica Asociada Red 40",
      "telefono": "912340140",
      "direccion_entrega": "Calle Las Palmeras 340"
    },
    "farmacia_id": 10,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 70,
        "precio_unitario": 0.85,
        "subtotal": 59.5
      }
    ],
    "subtotal": 59.5,
    "delivery_costo": 15.0,
    "total": 74.5,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1141",
    "fecha_pedido": {
      "$date": "2026-10-02T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000141",
      "nombre": "Botica Asociada Red 41",
      "telefono": "912340141",
      "direccion_entrega": "Calle Las Palmeras 341"
    },
    "farmacia_id": 1,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 71,
        "precio_unitario": 0.94,
        "subtotal": 66.39
      }
    ],
    "subtotal": 66.39,
    "delivery_costo": 15.0,
    "total": 81.39,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1142",
    "fecha_pedido": {
      "$date": "2026-10-03T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000142",
      "nombre": "Botica Asociada Red 42",
      "telefono": "912340142",
      "direccion_entrega": "Calle Las Palmeras 342"
    },
    "farmacia_id": 2,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 72,
        "precio_unitario": 0.77,
        "subtotal": 55.08
      }
    ],
    "subtotal": 55.08,
    "delivery_costo": 15.0,
    "total": 70.08,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1143",
    "fecha_pedido": {
      "$date": "2026-10-04T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000143",
      "nombre": "Botica Asociada Red 43",
      "telefono": "912340143",
      "direccion_entrega": "Calle Las Palmeras 343"
    },
    "farmacia_id": 3,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 73,
        "precio_unitario": 0.59,
        "subtotal": 43.43
      }
    ],
    "subtotal": 43.43,
    "delivery_costo": 15.0,
    "total": 58.43,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1144",
    "fecha_pedido": {
      "$date": "2026-10-05T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000144",
      "nombre": "Botica Asociada Red 44",
      "telefono": "912340144",
      "direccion_entrega": "Calle Las Palmeras 344"
    },
    "farmacia_id": 4,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 74,
        "precio_unitario": 0.42,
        "subtotal": 31.45
      }
    ],
    "subtotal": 31.45,
    "delivery_costo": 15.0,
    "total": 46.45,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1145",
    "fecha_pedido": {
      "$date": "2026-10-06T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000145",
      "nombre": "Botica Asociada Red 45",
      "telefono": "912340145",
      "direccion_entrega": "Calle Las Palmeras 345"
    },
    "farmacia_id": 5,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 75,
        "precio_unitario": 1.02,
        "subtotal": 76.5
      }
    ],
    "subtotal": 76.5,
    "delivery_costo": 15.0,
    "total": 91.5,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1146",
    "fecha_pedido": {
      "$date": "2026-10-07T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000146",
      "nombre": "Botica Asociada Red 46",
      "telefono": "912340146",
      "direccion_entrega": "Calle Las Palmeras 346"
    },
    "farmacia_id": 6,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 76,
        "precio_unitario": 0.68,
        "subtotal": 51.68
      }
    ],
    "subtotal": 51.68,
    "delivery_costo": 15.0,
    "total": 66.68,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1147",
    "fecha_pedido": {
      "$date": "2026-10-08T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000147",
      "nombre": "Botica Asociada Red 47",
      "telefono": "912340147",
      "direccion_entrega": "Calle Las Palmeras 347"
    },
    "farmacia_id": 7,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 77,
        "precio_unitario": 2.98,
        "subtotal": 229.07
      }
    ],
    "subtotal": 229.07,
    "delivery_costo": 15.0,
    "total": 244.07,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1148",
    "fecha_pedido": {
      "$date": "2026-10-09T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000148",
      "nombre": "Botica Asociada Red 48",
      "telefono": "912340148",
      "direccion_entrega": "Calle Las Palmeras 348"
    },
    "farmacia_id": 8,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 78,
        "precio_unitario": 0.85,
        "subtotal": 66.3
      }
    ],
    "subtotal": 66.3,
    "delivery_costo": 15.0,
    "total": 81.3,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1149",
    "fecha_pedido": {
      "$date": "2026-10-10T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000149",
      "nombre": "Botica Asociada Red 49",
      "telefono": "912340149",
      "direccion_entrega": "Calle Las Palmeras 349"
    },
    "farmacia_id": 9,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 79,
        "precio_unitario": 0.94,
        "subtotal": 73.87
      }
    ],
    "subtotal": 73.87,
    "delivery_costo": 15.0,
    "total": 88.87,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1150",
    "fecha_pedido": {
      "$date": "2026-10-11T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000150",
      "nombre": "Botica Asociada Red 50",
      "telefono": "912340150",
      "direccion_entrega": "Calle Las Palmeras 350"
    },
    "farmacia_id": 10,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 50,
        "precio_unitario": 0.77,
        "subtotal": 38.25
      }
    ],
    "subtotal": 38.25,
    "delivery_costo": 15.0,
    "total": 53.25,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1151",
    "fecha_pedido": {
      "$date": "2026-10-12T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000151",
      "nombre": "Botica Asociada Red 51",
      "telefono": "912340151",
      "direccion_entrega": "Calle Las Palmeras 351"
    },
    "farmacia_id": 1,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 51,
        "precio_unitario": 0.59,
        "subtotal": 30.34
      }
    ],
    "subtotal": 30.34,
    "delivery_costo": 15.0,
    "total": 45.34,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1152",
    "fecha_pedido": {
      "$date": "2026-10-13T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000152",
      "nombre": "Botica Asociada Red 52",
      "telefono": "912340152",
      "direccion_entrega": "Calle Las Palmeras 352"
    },
    "farmacia_id": 2,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 52,
        "precio_unitario": 0.42,
        "subtotal": 22.1
      }
    ],
    "subtotal": 22.1,
    "delivery_costo": 15.0,
    "total": 37.1,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1153",
    "fecha_pedido": {
      "$date": "2026-10-14T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000153",
      "nombre": "Botica Asociada Red 53",
      "telefono": "912340153",
      "direccion_entrega": "Calle Las Palmeras 353"
    },
    "farmacia_id": 3,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 53,
        "precio_unitario": 1.02,
        "subtotal": 54.06
      }
    ],
    "subtotal": 54.06,
    "delivery_costo": 15.0,
    "total": 69.06,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1154",
    "fecha_pedido": {
      "$date": "2026-10-15T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000154",
      "nombre": "Botica Asociada Red 54",
      "telefono": "912340154",
      "direccion_entrega": "Calle Las Palmeras 354"
    },
    "farmacia_id": 4,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 54,
        "precio_unitario": 0.68,
        "subtotal": 36.72
      }
    ],
    "subtotal": 36.72,
    "delivery_costo": 15.0,
    "total": 51.72,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1155",
    "fecha_pedido": {
      "$date": "2026-10-16T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000155",
      "nombre": "Botica Asociada Red 55",
      "telefono": "912340155",
      "direccion_entrega": "Calle Las Palmeras 355"
    },
    "farmacia_id": 5,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 55,
        "precio_unitario": 2.98,
        "subtotal": 163.62
      }
    ],
    "subtotal": 163.62,
    "delivery_costo": 15.0,
    "total": 178.62,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1156",
    "fecha_pedido": {
      "$date": "2026-10-17T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000156",
      "nombre": "Botica Asociada Red 56",
      "telefono": "912340156",
      "direccion_entrega": "Calle Las Palmeras 356"
    },
    "farmacia_id": 6,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 56,
        "precio_unitario": 0.85,
        "subtotal": 47.6
      }
    ],
    "subtotal": 47.6,
    "delivery_costo": 15.0,
    "total": 62.6,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1157",
    "fecha_pedido": {
      "$date": "2026-10-18T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000157",
      "nombre": "Botica Asociada Red 57",
      "telefono": "912340157",
      "direccion_entrega": "Calle Las Palmeras 357"
    },
    "farmacia_id": 7,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 57,
        "precio_unitario": 0.94,
        "subtotal": 53.3
      }
    ],
    "subtotal": 53.3,
    "delivery_costo": 15.0,
    "total": 68.3,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1158",
    "fecha_pedido": {
      "$date": "2026-10-19T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000158",
      "nombre": "Botica Asociada Red 58",
      "telefono": "912340158",
      "direccion_entrega": "Calle Las Palmeras 358"
    },
    "farmacia_id": 8,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 58,
        "precio_unitario": 0.77,
        "subtotal": 44.37
      }
    ],
    "subtotal": 44.37,
    "delivery_costo": 15.0,
    "total": 59.37,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1159",
    "fecha_pedido": {
      "$date": "2026-10-20T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000159",
      "nombre": "Botica Asociada Red 59",
      "telefono": "912340159",
      "direccion_entrega": "Calle Las Palmeras 359"
    },
    "farmacia_id": 9,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 59,
        "precio_unitario": 0.59,
        "subtotal": 35.1
      }
    ],
    "subtotal": 35.1,
    "delivery_costo": 15.0,
    "total": 50.1,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1160",
    "fecha_pedido": {
      "$date": "2026-10-21T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000160",
      "nombre": "Botica Asociada Red 60",
      "telefono": "912340160",
      "direccion_entrega": "Calle Las Palmeras 360"
    },
    "farmacia_id": 10,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 60,
        "precio_unitario": 0.42,
        "subtotal": 25.5
      }
    ],
    "subtotal": 25.5,
    "delivery_costo": 15.0,
    "total": 40.5,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1161",
    "fecha_pedido": {
      "$date": "2026-10-22T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000161",
      "nombre": "Botica Asociada Red 61",
      "telefono": "912340161",
      "direccion_entrega": "Calle Las Palmeras 361"
    },
    "farmacia_id": 1,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 61,
        "precio_unitario": 1.02,
        "subtotal": 62.22
      }
    ],
    "subtotal": 62.22,
    "delivery_costo": 15.0,
    "total": 77.22,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1162",
    "fecha_pedido": {
      "$date": "2026-10-23T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000162",
      "nombre": "Botica Asociada Red 62",
      "telefono": "912340162",
      "direccion_entrega": "Calle Las Palmeras 362"
    },
    "farmacia_id": 2,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 62,
        "precio_unitario": 0.68,
        "subtotal": 42.16
      }
    ],
    "subtotal": 42.16,
    "delivery_costo": 15.0,
    "total": 57.16,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1163",
    "fecha_pedido": {
      "$date": "2026-10-24T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000163",
      "nombre": "Botica Asociada Red 63",
      "telefono": "912340163",
      "direccion_entrega": "Calle Las Palmeras 363"
    },
    "farmacia_id": 3,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 63,
        "precio_unitario": 2.98,
        "subtotal": 187.42
      }
    ],
    "subtotal": 187.42,
    "delivery_costo": 15.0,
    "total": 202.42,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1164",
    "fecha_pedido": {
      "$date": "2026-10-25T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000164",
      "nombre": "Botica Asociada Red 64",
      "telefono": "912340164",
      "direccion_entrega": "Calle Las Palmeras 364"
    },
    "farmacia_id": 4,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 64,
        "precio_unitario": 0.85,
        "subtotal": 54.4
      }
    ],
    "subtotal": 54.4,
    "delivery_costo": 15.0,
    "total": 69.4,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1165",
    "fecha_pedido": {
      "$date": "2026-10-26T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000165",
      "nombre": "Botica Asociada Red 65",
      "telefono": "912340165",
      "direccion_entrega": "Calle Las Palmeras 365"
    },
    "farmacia_id": 5,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 65,
        "precio_unitario": 0.94,
        "subtotal": 60.77
      }
    ],
    "subtotal": 60.77,
    "delivery_costo": 15.0,
    "total": 75.77,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1166",
    "fecha_pedido": {
      "$date": "2026-10-27T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000166",
      "nombre": "Botica Asociada Red 66",
      "telefono": "912340166",
      "direccion_entrega": "Calle Las Palmeras 366"
    },
    "farmacia_id": 6,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 66,
        "precio_unitario": 0.77,
        "subtotal": 50.49
      }
    ],
    "subtotal": 50.49,
    "delivery_costo": 15.0,
    "total": 65.49,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1167",
    "fecha_pedido": {
      "$date": "2026-10-28T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000167",
      "nombre": "Botica Asociada Red 67",
      "telefono": "912340167",
      "direccion_entrega": "Calle Las Palmeras 367"
    },
    "farmacia_id": 7,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 67,
        "precio_unitario": 0.59,
        "subtotal": 39.86
      }
    ],
    "subtotal": 39.86,
    "delivery_costo": 15.0,
    "total": 54.86,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1168",
    "fecha_pedido": {
      "$date": "2026-10-01T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000168",
      "nombre": "Botica Asociada Red 68",
      "telefono": "912340168",
      "direccion_entrega": "Calle Las Palmeras 368"
    },
    "farmacia_id": 8,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 68,
        "precio_unitario": 0.42,
        "subtotal": 28.9
      }
    ],
    "subtotal": 28.9,
    "delivery_costo": 15.0,
    "total": 43.9,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1169",
    "fecha_pedido": {
      "$date": "2026-10-02T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000169",
      "nombre": "Botica Asociada Red 69",
      "telefono": "912340169",
      "direccion_entrega": "Calle Las Palmeras 369"
    },
    "farmacia_id": 9,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 69,
        "precio_unitario": 1.02,
        "subtotal": 70.38
      }
    ],
    "subtotal": 70.38,
    "delivery_costo": 15.0,
    "total": 85.38,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1170",
    "fecha_pedido": {
      "$date": "2026-10-03T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000170",
      "nombre": "Botica Asociada Red 70",
      "telefono": "912340170",
      "direccion_entrega": "Calle Las Palmeras 370"
    },
    "farmacia_id": 10,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 70,
        "precio_unitario": 0.68,
        "subtotal": 47.6
      }
    ],
    "subtotal": 47.6,
    "delivery_costo": 15.0,
    "total": 62.6,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1171",
    "fecha_pedido": {
      "$date": "2026-10-04T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000171",
      "nombre": "Botica Asociada Red 71",
      "telefono": "912340171",
      "direccion_entrega": "Calle Las Palmeras 371"
    },
    "farmacia_id": 1,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 71,
        "precio_unitario": 2.98,
        "subtotal": 211.22
      }
    ],
    "subtotal": 211.22,
    "delivery_costo": 15.0,
    "total": 226.22,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1172",
    "fecha_pedido": {
      "$date": "2026-10-05T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000172",
      "nombre": "Botica Asociada Red 72",
      "telefono": "912340172",
      "direccion_entrega": "Calle Las Palmeras 372"
    },
    "farmacia_id": 2,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 72,
        "precio_unitario": 0.85,
        "subtotal": 61.2
      }
    ],
    "subtotal": 61.2,
    "delivery_costo": 15.0,
    "total": 76.2,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1173",
    "fecha_pedido": {
      "$date": "2026-10-06T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000173",
      "nombre": "Botica Asociada Red 73",
      "telefono": "912340173",
      "direccion_entrega": "Calle Las Palmeras 373"
    },
    "farmacia_id": 3,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 73,
        "precio_unitario": 0.94,
        "subtotal": 68.26
      }
    ],
    "subtotal": 68.26,
    "delivery_costo": 15.0,
    "total": 83.26,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1174",
    "fecha_pedido": {
      "$date": "2026-10-07T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000174",
      "nombre": "Botica Asociada Red 74",
      "telefono": "912340174",
      "direccion_entrega": "Calle Las Palmeras 374"
    },
    "farmacia_id": 4,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 74,
        "precio_unitario": 0.77,
        "subtotal": 56.61
      }
    ],
    "subtotal": 56.61,
    "delivery_costo": 15.0,
    "total": 71.61,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1175",
    "fecha_pedido": {
      "$date": "2026-10-08T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000175",
      "nombre": "Botica Asociada Red 75",
      "telefono": "912340175",
      "direccion_entrega": "Calle Las Palmeras 375"
    },
    "farmacia_id": 5,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 75,
        "precio_unitario": 0.59,
        "subtotal": 44.62
      }
    ],
    "subtotal": 44.62,
    "delivery_costo": 15.0,
    "total": 59.62,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1176",
    "fecha_pedido": {
      "$date": "2026-10-09T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000176",
      "nombre": "Botica Asociada Red 76",
      "telefono": "912340176",
      "direccion_entrega": "Calle Las Palmeras 376"
    },
    "farmacia_id": 6,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 76,
        "precio_unitario": 0.42,
        "subtotal": 32.3
      }
    ],
    "subtotal": 32.3,
    "delivery_costo": 15.0,
    "total": 47.3,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1177",
    "fecha_pedido": {
      "$date": "2026-10-10T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000177",
      "nombre": "Botica Asociada Red 77",
      "telefono": "912340177",
      "direccion_entrega": "Calle Las Palmeras 377"
    },
    "farmacia_id": 7,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 77,
        "precio_unitario": 1.02,
        "subtotal": 78.54
      }
    ],
    "subtotal": 78.54,
    "delivery_costo": 15.0,
    "total": 93.54,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1178",
    "fecha_pedido": {
      "$date": "2026-10-11T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000178",
      "nombre": "Botica Asociada Red 78",
      "telefono": "912340178",
      "direccion_entrega": "Calle Las Palmeras 378"
    },
    "farmacia_id": 8,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 78,
        "precio_unitario": 0.68,
        "subtotal": 53.04
      }
    ],
    "subtotal": 53.04,
    "delivery_costo": 15.0,
    "total": 68.04,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1179",
    "fecha_pedido": {
      "$date": "2026-10-12T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000179",
      "nombre": "Botica Asociada Red 79",
      "telefono": "912340179",
      "direccion_entrega": "Calle Las Palmeras 379"
    },
    "farmacia_id": 9,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 79,
        "precio_unitario": 2.98,
        "subtotal": 235.03
      }
    ],
    "subtotal": 235.03,
    "delivery_costo": 15.0,
    "total": 250.03,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1180",
    "fecha_pedido": {
      "$date": "2026-10-13T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000180",
      "nombre": "Botica Asociada Red 80",
      "telefono": "912340180",
      "direccion_entrega": "Calle Las Palmeras 380"
    },
    "farmacia_id": 10,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 50,
        "precio_unitario": 0.85,
        "subtotal": 42.5
      }
    ],
    "subtotal": 42.5,
    "delivery_costo": 15.0,
    "total": 57.5,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1181",
    "fecha_pedido": {
      "$date": "2026-10-14T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000181",
      "nombre": "Botica Asociada Red 81",
      "telefono": "912340181",
      "direccion_entrega": "Calle Las Palmeras 381"
    },
    "farmacia_id": 1,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 51,
        "precio_unitario": 0.94,
        "subtotal": 47.69
      }
    ],
    "subtotal": 47.69,
    "delivery_costo": 15.0,
    "total": 62.69,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1182",
    "fecha_pedido": {
      "$date": "2026-10-15T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000182",
      "nombre": "Botica Asociada Red 82",
      "telefono": "912340182",
      "direccion_entrega": "Calle Las Palmeras 382"
    },
    "farmacia_id": 2,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 52,
        "precio_unitario": 0.77,
        "subtotal": 39.78
      }
    ],
    "subtotal": 39.78,
    "delivery_costo": 15.0,
    "total": 54.78,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1183",
    "fecha_pedido": {
      "$date": "2026-10-16T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000183",
      "nombre": "Botica Asociada Red 83",
      "telefono": "912340183",
      "direccion_entrega": "Calle Las Palmeras 383"
    },
    "farmacia_id": 3,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 53,
        "precio_unitario": 0.59,
        "subtotal": 31.53
      }
    ],
    "subtotal": 31.53,
    "delivery_costo": 15.0,
    "total": 46.53,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1184",
    "fecha_pedido": {
      "$date": "2026-10-17T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000184",
      "nombre": "Botica Asociada Red 84",
      "telefono": "912340184",
      "direccion_entrega": "Calle Las Palmeras 384"
    },
    "farmacia_id": 4,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 54,
        "precio_unitario": 0.42,
        "subtotal": 22.95
      }
    ],
    "subtotal": 22.95,
    "delivery_costo": 15.0,
    "total": 37.95,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1185",
    "fecha_pedido": {
      "$date": "2026-10-18T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000185",
      "nombre": "Botica Asociada Red 85",
      "telefono": "912340185",
      "direccion_entrega": "Calle Las Palmeras 385"
    },
    "farmacia_id": 5,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 55,
        "precio_unitario": 1.02,
        "subtotal": 56.1
      }
    ],
    "subtotal": 56.1,
    "delivery_costo": 15.0,
    "total": 71.1,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1186",
    "fecha_pedido": {
      "$date": "2026-10-19T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000186",
      "nombre": "Botica Asociada Red 86",
      "telefono": "912340186",
      "direccion_entrega": "Calle Las Palmeras 386"
    },
    "farmacia_id": 6,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 56,
        "precio_unitario": 0.68,
        "subtotal": 38.08
      }
    ],
    "subtotal": 38.08,
    "delivery_costo": 15.0,
    "total": 53.08,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1187",
    "fecha_pedido": {
      "$date": "2026-10-20T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000187",
      "nombre": "Botica Asociada Red 87",
      "telefono": "912340187",
      "direccion_entrega": "Calle Las Palmeras 387"
    },
    "farmacia_id": 7,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 57,
        "precio_unitario": 2.98,
        "subtotal": 169.57
      }
    ],
    "subtotal": 169.57,
    "delivery_costo": 15.0,
    "total": 184.57,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1188",
    "fecha_pedido": {
      "$date": "2026-10-21T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000188",
      "nombre": "Botica Asociada Red 88",
      "telefono": "912340188",
      "direccion_entrega": "Calle Las Palmeras 388"
    },
    "farmacia_id": 8,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 58,
        "precio_unitario": 0.85,
        "subtotal": 49.3
      }
    ],
    "subtotal": 49.3,
    "delivery_costo": 15.0,
    "total": 64.3,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1189",
    "fecha_pedido": {
      "$date": "2026-10-22T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000189",
      "nombre": "Botica Asociada Red 89",
      "telefono": "912340189",
      "direccion_entrega": "Calle Las Palmeras 389"
    },
    "farmacia_id": 9,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 59,
        "precio_unitario": 0.94,
        "subtotal": 55.17
      }
    ],
    "subtotal": 55.17,
    "delivery_costo": 15.0,
    "total": 70.17,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1190",
    "fecha_pedido": {
      "$date": "2026-10-23T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000190",
      "nombre": "Botica Asociada Red 90",
      "telefono": "912340190",
      "direccion_entrega": "Calle Las Palmeras 390"
    },
    "farmacia_id": 10,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 60,
        "precio_unitario": 0.77,
        "subtotal": 45.9
      }
    ],
    "subtotal": 45.9,
    "delivery_costo": 15.0,
    "total": 60.9,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1191",
    "fecha_pedido": {
      "$date": "2026-10-24T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000191",
      "nombre": "Botica Asociada Red 91",
      "telefono": "912340191",
      "direccion_entrega": "Calle Las Palmeras 391"
    },
    "farmacia_id": 1,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 61,
        "precio_unitario": 0.59,
        "subtotal": 36.29
      }
    ],
    "subtotal": 36.29,
    "delivery_costo": 15.0,
    "total": 51.29,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1192",
    "fecha_pedido": {
      "$date": "2026-10-25T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000192",
      "nombre": "Botica Asociada Red 92",
      "telefono": "912340192",
      "direccion_entrega": "Calle Las Palmeras 392"
    },
    "farmacia_id": 2,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 62,
        "precio_unitario": 0.42,
        "subtotal": 26.35
      }
    ],
    "subtotal": 26.35,
    "delivery_costo": 15.0,
    "total": 41.35,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1193",
    "fecha_pedido": {
      "$date": "2026-10-26T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000193",
      "nombre": "Botica Asociada Red 93",
      "telefono": "912340193",
      "direccion_entrega": "Calle Las Palmeras 393"
    },
    "farmacia_id": 3,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 2,
        "nombre": "Amoxicilina 500mg",
        "cantidad": 63,
        "precio_unitario": 1.02,
        "subtotal": 64.26
      }
    ],
    "subtotal": 64.26,
    "delivery_costo": 15.0,
    "total": 79.26,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1194",
    "fecha_pedido": {
      "$date": "2026-10-27T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000194",
      "nombre": "Botica Asociada Red 94",
      "telefono": "912340194",
      "direccion_entrega": "Calle Las Palmeras 394"
    },
    "farmacia_id": 4,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 3,
        "nombre": "Ibuprofeno 400mg",
        "cantidad": 64,
        "precio_unitario": 0.68,
        "subtotal": 43.52
      }
    ],
    "subtotal": 43.52,
    "delivery_costo": 15.0,
    "total": 58.52,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1195",
    "fecha_pedido": {
      "$date": "2026-10-28T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000195",
      "nombre": "Botica Asociada Red 95",
      "telefono": "912340195",
      "direccion_entrega": "Calle Las Palmeras 395"
    },
    "farmacia_id": 5,
    "distrito": "Ate",
    "items": [
      {
        "medicamento_id": 4,
        "nombre": "Azitromicina 500mg",
        "cantidad": 65,
        "precio_unitario": 2.98,
        "subtotal": 193.38
      }
    ],
    "subtotal": 193.38,
    "delivery_costo": 15.0,
    "total": 208.38,
    "metodo_pago": "EFECTIVO",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1196",
    "fecha_pedido": {
      "$date": "2026-10-01T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000196",
      "nombre": "Botica Asociada Red 96",
      "telefono": "912340196",
      "direccion_entrega": "Calle Las Palmeras 396"
    },
    "farmacia_id": 6,
    "distrito": "Villa El Salvador",
    "items": [
      {
        "medicamento_id": 5,
        "nombre": "Omeprazol 20mg",
        "cantidad": 66,
        "precio_unitario": 0.85,
        "subtotal": 56.1
      }
    ],
    "subtotal": 56.1,
    "delivery_costo": 15.0,
    "total": 71.1,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1197",
    "fecha_pedido": {
      "$date": "2026-10-02T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000197",
      "nombre": "Botica Asociada Red 97",
      "telefono": "912340197",
      "direccion_entrega": "Calle Las Palmeras 397"
    },
    "farmacia_id": 7,
    "distrito": "San Martin de Porres",
    "items": [
      {
        "medicamento_id": 6,
        "nombre": "Losartan 50mg",
        "cantidad": 67,
        "precio_unitario": 0.94,
        "subtotal": 62.65
      }
    ],
    "subtotal": 62.65,
    "delivery_costo": 15.0,
    "total": 77.65,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1198",
    "fecha_pedido": {
      "$date": "2026-10-03T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000198",
      "nombre": "Botica Asociada Red 98",
      "telefono": "912340198",
      "direccion_entrega": "Calle Las Palmeras 398"
    },
    "farmacia_id": 8,
    "distrito": "San Juan de Lurigancho",
    "items": [
      {
        "medicamento_id": 7,
        "nombre": "Metformina 850mg",
        "cantidad": 68,
        "precio_unitario": 0.77,
        "subtotal": 52.02
      }
    ],
    "subtotal": 52.02,
    "delivery_costo": 15.0,
    "total": 67.02,
    "metodo_pago": "TARJETA",
    "estado": "CONFIRMADO"
  },
  {
    "codigo_pedido": "PED-LW-1199",
    "fecha_pedido": {
      "$date": "2026-10-04T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000199",
      "nombre": "Botica Asociada Red 99",
      "telefono": "912340199",
      "direccion_entrega": "Calle Las Palmeras 399"
    },
    "farmacia_id": 9,
    "distrito": "Comas",
    "items": [
      {
        "medicamento_id": 8,
        "nombre": "Cetirizina 10mg",
        "cantidad": 69,
        "precio_unitario": 0.59,
        "subtotal": 41.05
      }
    ],
    "subtotal": 41.05,
    "delivery_costo": 15.0,
    "total": 56.05,
    "metodo_pago": "EFECTIVO",
    "estado": "ENTREGADO"
  },
  {
    "codigo_pedido": "PED-LW-1200",
    "fecha_pedido": {
      "$date": "2026-10-05T15:45:00Z"
    },
    "cliente": {
      "documento": "20601000200",
      "nombre": "Botica Asociada Red 100",
      "telefono": "912340200",
      "direccion_entrega": "Calle Las Palmeras 400"
    },
    "farmacia_id": 10,
    "distrito": "Los Olivos",
    "items": [
      {
        "medicamento_id": 1,
        "nombre": "Paracetamol 500mg",
        "cantidad": 70,
        "precio_unitario": 0.42,
        "subtotal": 29.75
      }
    ],
    "subtotal": 29.75,
    "delivery_costo": 15.0,
    "total": 44.75,
    "metodo_pago": "TARJETA",
    "estado": "ENTREGADO"
  }
]);

// Participante 3: Nicole Garcia (100 lotes trazabilidad cadena de frio e insulinas)
db.trazabilidad_stock.insertMany([
  {
    "lote": "LOT-NG-2026-201",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 201",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 16,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-02T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.1,
      "humedad_relativa": 55.5,
      "sensor_id": "SNS-TEMP-07",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-202",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 202",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 17,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-03T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.2,
      "humedad_relativa": 56.0,
      "sensor_id": "SNS-TEMP-08",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-203",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 203",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 18,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-04T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.3,
      "humedad_relativa": 56.5,
      "sensor_id": "SNS-TEMP-09",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-204",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 204",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 19,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-05T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.4,
      "humedad_relativa": 57.0,
      "sensor_id": "SNS-TEMP-10",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-205",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 205",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 20,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-06T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.5,
      "humedad_relativa": 57.5,
      "sensor_id": "SNS-TEMP-11",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-206",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 206",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 21,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-07T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.6,
      "humedad_relativa": 58.0,
      "sensor_id": "SNS-TEMP-12",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-207",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 207",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 22,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-08T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.7,
      "humedad_relativa": 58.5,
      "sensor_id": "SNS-TEMP-13",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-208",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 208",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 23,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-09T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.8,
      "humedad_relativa": 59.0,
      "sensor_id": "SNS-TEMP-14",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-209",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 209",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 24,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-10T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.9,
      "humedad_relativa": 59.5,
      "sensor_id": "SNS-TEMP-15",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-210",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 210",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 25,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-11T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-TEMP-01",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-211",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 211",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 26,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-12T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.1,
      "humedad_relativa": 60.5,
      "sensor_id": "SNS-TEMP-02",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-212",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 212",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 27,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-13T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.2,
      "humedad_relativa": 61.0,
      "sensor_id": "SNS-TEMP-03",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-213",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 213",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 28,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-14T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.3,
      "humedad_relativa": 61.5,
      "sensor_id": "SNS-TEMP-04",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-214",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 214",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 29,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-15T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.4,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-TEMP-05",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-215",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 215",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 30,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-16T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.5,
      "humedad_relativa": 62.5,
      "sensor_id": "SNS-TEMP-06",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-216",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 216",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 31,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-17T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.6,
      "humedad_relativa": 63.0,
      "sensor_id": "SNS-TEMP-07",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-217",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 217",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 32,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-18T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.7,
      "humedad_relativa": 63.5,
      "sensor_id": "SNS-TEMP-08",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-218",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 218",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 33,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-19T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.8,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-TEMP-09",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-219",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 219",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 34,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-20T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.9,
      "humedad_relativa": 64.5,
      "sensor_id": "SNS-TEMP-10",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-220",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 220",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 35,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-21T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.0,
      "humedad_relativa": 55.0,
      "sensor_id": "SNS-TEMP-11",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-221",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 221",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 36,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-22T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.1,
      "humedad_relativa": 55.5,
      "sensor_id": "SNS-TEMP-12",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-222",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 222",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 37,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-23T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.2,
      "humedad_relativa": 56.0,
      "sensor_id": "SNS-TEMP-13",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-223",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 223",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 38,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-24T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.3,
      "humedad_relativa": 56.5,
      "sensor_id": "SNS-TEMP-14",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-224",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 224",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 39,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-25T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.4,
      "humedad_relativa": 57.0,
      "sensor_id": "SNS-TEMP-15",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-225",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 225",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 40,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-01T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.5,
      "humedad_relativa": 57.5,
      "sensor_id": "SNS-TEMP-01",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-226",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 226",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 41,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-02T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.6,
      "humedad_relativa": 58.0,
      "sensor_id": "SNS-TEMP-02",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-227",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 227",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 42,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-03T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.7,
      "humedad_relativa": 58.5,
      "sensor_id": "SNS-TEMP-03",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-228",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 228",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 43,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-04T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.8,
      "humedad_relativa": 59.0,
      "sensor_id": "SNS-TEMP-04",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-229",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 229",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 44,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-05T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.9,
      "humedad_relativa": 59.5,
      "sensor_id": "SNS-TEMP-05",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-230",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 230",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 45,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-06T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-TEMP-06",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-231",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 231",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 46,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-07T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.1,
      "humedad_relativa": 60.5,
      "sensor_id": "SNS-TEMP-07",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-232",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 232",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 47,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-08T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.2,
      "humedad_relativa": 61.0,
      "sensor_id": "SNS-TEMP-08",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-233",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 233",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 48,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-09T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.3,
      "humedad_relativa": 61.5,
      "sensor_id": "SNS-TEMP-09",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-234",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 234",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 49,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-10T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.4,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-TEMP-10",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-235",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 235",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 50,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-11T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.5,
      "humedad_relativa": 62.5,
      "sensor_id": "SNS-TEMP-11",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-236",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 236",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 51,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-12T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.6,
      "humedad_relativa": 63.0,
      "sensor_id": "SNS-TEMP-12",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-237",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 237",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 52,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-13T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.7,
      "humedad_relativa": 63.5,
      "sensor_id": "SNS-TEMP-13",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-238",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 238",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 53,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-14T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.8,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-TEMP-14",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-239",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 239",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 54,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-15T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.9,
      "humedad_relativa": 64.5,
      "sensor_id": "SNS-TEMP-15",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-240",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 240",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 15,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-16T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.0,
      "humedad_relativa": 55.0,
      "sensor_id": "SNS-TEMP-01",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-241",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 241",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 16,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-17T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.1,
      "humedad_relativa": 55.5,
      "sensor_id": "SNS-TEMP-02",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-242",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 242",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 17,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-18T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.2,
      "humedad_relativa": 56.0,
      "sensor_id": "SNS-TEMP-03",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-243",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 243",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 18,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-19T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.3,
      "humedad_relativa": 56.5,
      "sensor_id": "SNS-TEMP-04",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-244",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 244",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 19,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-20T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.4,
      "humedad_relativa": 57.0,
      "sensor_id": "SNS-TEMP-05",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-245",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 245",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 20,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-21T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.5,
      "humedad_relativa": 57.5,
      "sensor_id": "SNS-TEMP-06",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-246",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 246",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 21,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-22T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.6,
      "humedad_relativa": 58.0,
      "sensor_id": "SNS-TEMP-07",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-247",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 247",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 22,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-23T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.7,
      "humedad_relativa": 58.5,
      "sensor_id": "SNS-TEMP-08",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-248",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 248",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 23,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-24T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.8,
      "humedad_relativa": 59.0,
      "sensor_id": "SNS-TEMP-09",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-249",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 249",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 24,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-25T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.9,
      "humedad_relativa": 59.5,
      "sensor_id": "SNS-TEMP-10",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-250",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 250",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 25,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-01T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-TEMP-11",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-251",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 251",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 26,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-02T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.1,
      "humedad_relativa": 60.5,
      "sensor_id": "SNS-TEMP-12",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-252",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 252",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 27,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-03T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.2,
      "humedad_relativa": 61.0,
      "sensor_id": "SNS-TEMP-13",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-253",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 253",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 28,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-04T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.3,
      "humedad_relativa": 61.5,
      "sensor_id": "SNS-TEMP-14",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-254",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 254",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 29,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-05T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.4,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-TEMP-15",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-255",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 255",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 30,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-06T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.5,
      "humedad_relativa": 62.5,
      "sensor_id": "SNS-TEMP-01",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-256",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 256",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 31,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-07T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.6,
      "humedad_relativa": 63.0,
      "sensor_id": "SNS-TEMP-02",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-257",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 257",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 32,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-08T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.7,
      "humedad_relativa": 63.5,
      "sensor_id": "SNS-TEMP-03",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-258",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 258",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 33,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-09T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.8,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-TEMP-04",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-259",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 259",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 34,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-10T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.9,
      "humedad_relativa": 64.5,
      "sensor_id": "SNS-TEMP-05",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-260",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 260",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 35,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-11T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.0,
      "humedad_relativa": 55.0,
      "sensor_id": "SNS-TEMP-06",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-261",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 261",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 36,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-12T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.1,
      "humedad_relativa": 55.5,
      "sensor_id": "SNS-TEMP-07",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-262",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 262",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 37,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-13T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.2,
      "humedad_relativa": 56.0,
      "sensor_id": "SNS-TEMP-08",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-263",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 263",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 38,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-14T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.3,
      "humedad_relativa": 56.5,
      "sensor_id": "SNS-TEMP-09",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-264",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 264",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 39,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-15T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.4,
      "humedad_relativa": 57.0,
      "sensor_id": "SNS-TEMP-10",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-265",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 265",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 40,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-16T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.5,
      "humedad_relativa": 57.5,
      "sensor_id": "SNS-TEMP-11",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-266",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 266",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 41,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-17T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.6,
      "humedad_relativa": 58.0,
      "sensor_id": "SNS-TEMP-12",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-267",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 267",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 42,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-18T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.7,
      "humedad_relativa": 58.5,
      "sensor_id": "SNS-TEMP-13",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-268",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 268",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 43,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-19T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.8,
      "humedad_relativa": 59.0,
      "sensor_id": "SNS-TEMP-14",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-269",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 269",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 44,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-20T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.9,
      "humedad_relativa": 59.5,
      "sensor_id": "SNS-TEMP-15",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-270",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 270",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 45,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-21T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-TEMP-01",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-271",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 271",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 46,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-22T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.1,
      "humedad_relativa": 60.5,
      "sensor_id": "SNS-TEMP-02",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-272",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 272",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 47,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-23T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.2,
      "humedad_relativa": 61.0,
      "sensor_id": "SNS-TEMP-03",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-273",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 273",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 48,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-24T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.3,
      "humedad_relativa": 61.5,
      "sensor_id": "SNS-TEMP-04",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-274",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 274",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 49,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-25T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.4,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-TEMP-05",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-275",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 275",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 50,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-01T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.5,
      "humedad_relativa": 62.5,
      "sensor_id": "SNS-TEMP-06",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-276",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 276",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 51,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-02T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.6,
      "humedad_relativa": 63.0,
      "sensor_id": "SNS-TEMP-07",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-277",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 277",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 52,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-03T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.7,
      "humedad_relativa": 63.5,
      "sensor_id": "SNS-TEMP-08",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-278",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 278",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 53,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-04T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.8,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-TEMP-09",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-279",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 279",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 54,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-05T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.9,
      "humedad_relativa": 64.5,
      "sensor_id": "SNS-TEMP-10",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-280",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 280",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 15,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-06T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.0,
      "humedad_relativa": 55.0,
      "sensor_id": "SNS-TEMP-11",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-281",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 281",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 16,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-07T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.1,
      "humedad_relativa": 55.5,
      "sensor_id": "SNS-TEMP-12",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-282",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 282",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 17,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-08T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.2,
      "humedad_relativa": 56.0,
      "sensor_id": "SNS-TEMP-13",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-283",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 283",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 18,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-09T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.3,
      "humedad_relativa": 56.5,
      "sensor_id": "SNS-TEMP-14",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-284",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 284",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 19,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-10T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.4,
      "humedad_relativa": 57.0,
      "sensor_id": "SNS-TEMP-15",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-285",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 285",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 20,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-11T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.5,
      "humedad_relativa": 57.5,
      "sensor_id": "SNS-TEMP-01",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-286",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 286",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 21,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-12T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.6,
      "humedad_relativa": 58.0,
      "sensor_id": "SNS-TEMP-02",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-287",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 287",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 22,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-13T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.7,
      "humedad_relativa": 58.5,
      "sensor_id": "SNS-TEMP-03",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-288",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 288",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 23,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-14T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.8,
      "humedad_relativa": 59.0,
      "sensor_id": "SNS-TEMP-04",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-289",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 289",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 24,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-02-15T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 5.9,
      "humedad_relativa": 59.5,
      "sensor_id": "SNS-TEMP-05",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-290",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 290",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 25,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-03-16T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-TEMP-06",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-NG-2026-291",
    "medicamento_id": 21,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 291",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 26,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-04-17T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.1,
      "humedad_relativa": 60.5,
      "sensor_id": "SNS-TEMP-07",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-292",
    "medicamento_id": 22,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 292",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 27,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-05-18T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.2,
      "humedad_relativa": 61.0,
      "sensor_id": "SNS-TEMP-08",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-293",
    "medicamento_id": 23,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 293",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 28,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-06-19T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.3,
      "humedad_relativa": 61.5,
      "sensor_id": "SNS-TEMP-09",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-294",
    "medicamento_id": 24,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 294",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 29,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-07-20T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.4,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-TEMP-10",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-295",
    "medicamento_id": 25,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 295",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 30,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-08-21T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.5,
      "humedad_relativa": 62.5,
      "sensor_id": "SNS-TEMP-11",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-296",
    "medicamento_id": 26,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 296",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 31,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-09-22T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.6,
      "humedad_relativa": 63.0,
      "sensor_id": "SNS-TEMP-12",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-297",
    "medicamento_id": 27,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 297",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 32,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-10-23T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.7,
      "humedad_relativa": 63.5,
      "sensor_id": "SNS-TEMP-13",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-298",
    "medicamento_id": 28,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 298",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 33,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-11-24T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.8,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-TEMP-14",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-299",
    "medicamento_id": 29,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 299",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 34,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-12-25T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 6.9,
      "humedad_relativa": 64.5,
      "sensor_id": "SNS-TEMP-15",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-NG-2026-300",
    "medicamento_id": 20,
    "nombre_medicamento": "Insulina NPH 100UI/ml Vial 300",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 35,
    "fecha_fabricacion": {
      "$date": "2026-01-15T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2027-01-01T00:00:00Z"
    },
    "cadena_frio": true,
    "temperatura_registro": {
      "temperatura_celsius": 4.0,
      "humedad_relativa": 55.0,
      "sensor_id": "SNS-TEMP-01",
      "fecha_medicion": {
        "$date": "2026-11-10T12:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  }
]);

// Participante 4: Jorge Matencio (100 lotes trazabilidad antibioticos y psicotropicos)
db.trazabilidad_stock.insertMany([
  {
    "lote": "LOT-JM-2026-301",
    "medicamento_id": 31,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 301",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 31,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-05T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 60.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-302",
    "medicamento_id": 32,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 302",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 32,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-06T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 60.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-303",
    "medicamento_id": 33,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 303",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 33,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-07T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 61.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-304",
    "medicamento_id": 34,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 304",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 34,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-08T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 61.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-305",
    "medicamento_id": 35,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 305",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 35,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-09T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-306",
    "medicamento_id": 36,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 306",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 36,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-10T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 62.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-307",
    "medicamento_id": 37,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 307",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 37,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-11T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 62.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-308",
    "medicamento_id": 38,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 308",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 38,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-12T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 63.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-309",
    "medicamento_id": 39,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 309",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 39,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-13T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 63.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-310",
    "medicamento_id": 40,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 310",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 40,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-14T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-311",
    "medicamento_id": 41,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 311",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 41,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-15T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 64.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-312",
    "medicamento_id": 42,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 312",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 42,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-16T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 64.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-313",
    "medicamento_id": 43,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 313",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 43,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-17T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 65.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-314",
    "medicamento_id": 44,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 314",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 44,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-18T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 65.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-315",
    "medicamento_id": 30,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 315",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 45,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-19T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-316",
    "medicamento_id": 31,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 316",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 46,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-20T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 60.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-317",
    "medicamento_id": 32,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 317",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 47,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-21T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 60.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-318",
    "medicamento_id": 33,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 318",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 48,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-22T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 61.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-319",
    "medicamento_id": 34,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 319",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 49,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-23T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 61.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-320",
    "medicamento_id": 35,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 320",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 50,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-24T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-321",
    "medicamento_id": 36,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 321",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 51,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-25T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 62.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-322",
    "medicamento_id": 37,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 322",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 52,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-26T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 62.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-323",
    "medicamento_id": 38,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 323",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 53,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-27T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 63.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-324",
    "medicamento_id": 39,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 324",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 54,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-01T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 63.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-325",
    "medicamento_id": 40,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 325",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 55,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-02T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-326",
    "medicamento_id": 41,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 326",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 56,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-03T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 64.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-327",
    "medicamento_id": 42,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 327",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 57,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-04T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 64.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-328",
    "medicamento_id": 43,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 328",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 58,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-05T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 65.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-329",
    "medicamento_id": 44,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 329",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 59,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-06T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 65.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-330",
    "medicamento_id": 30,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 330",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 60,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-07T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-331",
    "medicamento_id": 31,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 331",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 61,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-08T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 60.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-332",
    "medicamento_id": 32,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 332",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 62,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-09T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 60.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-333",
    "medicamento_id": 33,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 333",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 63,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-10T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 61.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-334",
    "medicamento_id": 34,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 334",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 64,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-11T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 61.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-335",
    "medicamento_id": 35,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 335",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 65,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-12T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-336",
    "medicamento_id": 36,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 336",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 66,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-13T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 62.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-337",
    "medicamento_id": 37,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 337",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 67,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-14T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 62.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-338",
    "medicamento_id": 38,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 338",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 68,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-15T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 63.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-339",
    "medicamento_id": 39,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 339",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 69,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-16T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 63.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-340",
    "medicamento_id": 40,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 340",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 70,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-17T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-341",
    "medicamento_id": 41,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 341",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 71,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-18T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 64.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-342",
    "medicamento_id": 42,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 342",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 72,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-19T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 64.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-343",
    "medicamento_id": 43,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 343",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 73,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-20T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 65.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-344",
    "medicamento_id": 44,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 344",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 74,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-21T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 65.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-345",
    "medicamento_id": 30,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 345",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 75,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-22T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-346",
    "medicamento_id": 31,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 346",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 76,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-23T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 60.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-347",
    "medicamento_id": 32,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 347",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 77,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-24T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 60.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-348",
    "medicamento_id": 33,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 348",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 78,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-25T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 61.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-349",
    "medicamento_id": 34,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 349",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 79,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-26T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 61.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-350",
    "medicamento_id": 35,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 350",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 30,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-27T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-351",
    "medicamento_id": 36,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 351",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 31,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-01T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 62.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-352",
    "medicamento_id": 37,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 352",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 32,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-02T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 62.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-353",
    "medicamento_id": 38,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 353",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 33,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-03T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 63.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-354",
    "medicamento_id": 39,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 354",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 34,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-04T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 63.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-355",
    "medicamento_id": 40,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 355",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 35,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-05T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-356",
    "medicamento_id": 41,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 356",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 36,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-06T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 64.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-357",
    "medicamento_id": 42,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 357",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 37,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-07T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 64.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-358",
    "medicamento_id": 43,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 358",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 38,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-08T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 65.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-359",
    "medicamento_id": 44,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 359",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 39,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-09T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 65.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-360",
    "medicamento_id": 30,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 360",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 40,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-10T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-361",
    "medicamento_id": 31,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 361",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 41,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-11T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 60.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-362",
    "medicamento_id": 32,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 362",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 42,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-12T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 60.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-363",
    "medicamento_id": 33,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 363",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 43,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-13T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 61.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-364",
    "medicamento_id": 34,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 364",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 44,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-14T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 61.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-365",
    "medicamento_id": 35,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 365",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 45,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-15T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-366",
    "medicamento_id": 36,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 366",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 46,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-16T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 62.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-367",
    "medicamento_id": 37,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 367",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 47,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-17T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 62.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-368",
    "medicamento_id": 38,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 368",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 48,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-18T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 63.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-369",
    "medicamento_id": 39,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 369",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 49,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-19T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 63.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-370",
    "medicamento_id": 40,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 370",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 50,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-20T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-371",
    "medicamento_id": 41,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 371",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 51,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-21T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 64.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-372",
    "medicamento_id": 42,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 372",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 52,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-22T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 64.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-373",
    "medicamento_id": 43,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 373",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 53,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-23T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 65.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-374",
    "medicamento_id": 44,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 374",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 54,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-24T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 65.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-375",
    "medicamento_id": 30,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 375",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 55,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-25T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-376",
    "medicamento_id": 31,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 376",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 56,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-26T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 60.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-377",
    "medicamento_id": 32,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 377",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 57,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-27T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 60.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-378",
    "medicamento_id": 33,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 378",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 58,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-01T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 61.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-379",
    "medicamento_id": 34,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 379",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 59,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-02T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 61.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-380",
    "medicamento_id": 35,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 380",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 60,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-03T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-381",
    "medicamento_id": 36,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 381",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 1,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 61,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-04T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 62.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-382",
    "medicamento_id": 37,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 382",
    "laboratorio": "Farmindustria",
    "farmacia_id": 2,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 62,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-05T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 62.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-383",
    "medicamento_id": 38,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 383",
    "laboratorio": "AC Farma",
    "farmacia_id": 3,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 63,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-06T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 63.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-384",
    "medicamento_id": 39,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 384",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 4,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 64,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-07T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 63.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-385",
    "medicamento_id": 40,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 385",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 5,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 65,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-08T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-386",
    "medicamento_id": 41,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 386",
    "laboratorio": "Farmindustria",
    "farmacia_id": 6,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 66,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-09T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 64.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-387",
    "medicamento_id": 42,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 387",
    "laboratorio": "AC Farma",
    "farmacia_id": 7,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 67,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-10T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 64.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-388",
    "medicamento_id": 43,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 388",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 8,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 68,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-11T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 65.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-389",
    "medicamento_id": 44,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 389",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 9,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 69,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-12T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 65.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-390",
    "medicamento_id": 30,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 390",
    "laboratorio": "Farmindustria",
    "farmacia_id": 10,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 70,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-13T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 60.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-391",
    "medicamento_id": 31,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 391",
    "laboratorio": "AC Farma",
    "farmacia_id": 1,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 71,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-14T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.2,
      "humedad_relativa": 60.4,
      "sensor_id": "SNS-AMB-02",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-392",
    "medicamento_id": 32,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 392",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 2,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 72,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-15T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.4,
      "humedad_relativa": 60.8,
      "sensor_id": "SNS-AMB-03",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-393",
    "medicamento_id": 33,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 393",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 3,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 73,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-16T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.6,
      "humedad_relativa": 61.2,
      "sensor_id": "SNS-AMB-04",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-394",
    "medicamento_id": 34,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 394",
    "laboratorio": "Farmindustria",
    "farmacia_id": 4,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 74,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-17T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.8,
      "humedad_relativa": 61.6,
      "sensor_id": "SNS-AMB-05",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-395",
    "medicamento_id": 35,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 395",
    "laboratorio": "AC Farma",
    "farmacia_id": 5,
    "distrito_farmacia": "San Martin de Porres",
    "cantidad_disponible": 75,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-18T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.0,
      "humedad_relativa": 62.0,
      "sensor_id": "SNS-AMB-06",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-396",
    "medicamento_id": 36,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 396",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 6,
    "distrito_farmacia": "San Juan de Lurigancho",
    "cantidad_disponible": 76,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-19T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.2,
      "humedad_relativa": 62.4,
      "sensor_id": "SNS-AMB-07",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  },
  {
    "lote": "LOT-JM-2026-397",
    "medicamento_id": 37,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 397",
    "laboratorio": "Medifarma S.A.",
    "farmacia_id": 7,
    "distrito_farmacia": "Comas",
    "cantidad_disponible": 77,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-20T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.4,
      "humedad_relativa": 62.8,
      "sensor_id": "SNS-AMB-08",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-398",
    "medicamento_id": 38,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 398",
    "laboratorio": "Farmindustria",
    "farmacia_id": 8,
    "distrito_farmacia": "Los Olivos",
    "cantidad_disponible": 78,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-21T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.6,
      "humedad_relativa": 63.2,
      "sensor_id": "SNS-AMB-09",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-399",
    "medicamento_id": 39,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 399",
    "laboratorio": "AC Farma",
    "farmacia_id": 9,
    "distrito_farmacia": "Ate",
    "cantidad_disponible": 79,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-22T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 22.8,
      "humedad_relativa": 63.6,
      "sensor_id": "SNS-AMB-10",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "OPTIMO"
  },
  {
    "lote": "LOT-JM-2026-400",
    "medicamento_id": 40,
    "nombre_medicamento": "Clonazepam 2mg / Amoxicilina Clavulanico 400",
    "laboratorio": "Laboratorios Bag\u00f3",
    "farmacia_id": 10,
    "distrito_farmacia": "Villa El Salvador",
    "cantidad_disponible": 30,
    "fecha_fabricacion": {
      "$date": "2026-02-10T08:00:00Z"
    },
    "fecha_vencimiento": {
      "$date": "2026-12-23T00:00:00Z"
    },
    "cadena_frio": false,
    "temperatura_registro": {
      "temperatura_celsius": 21.0,
      "humedad_relativa": 64.0,
      "sensor_id": "SNS-AMB-01",
      "fecha_medicion": {
        "$date": "2026-11-10T14:00:00Z"
      }
    },
    "estado_lote": "PROXIMO_A_VENCER"
  }
]);

// Participante 5: Dereck Rojas (100 medicamentos catalogo cache con comparador de precios)
db.catalogo_medicamentos_cache.insertMany([
  {
    "medicamento_id": 401,
    "codigo_digemid": "DIG-10401",
    "nombre_comercial": "Ibuprofeno Forte 501mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "500mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 2.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.07,
        "stock_local": 41
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.02,
        "stock_local": 36
      }
    ]
  },
  {
    "medicamento_id": 402,
    "codigo_digemid": "DIG-10402",
    "nombre_comercial": "Amoxicilina Forte 502mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "750mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 3.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.79,
        "stock_local": 42
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.73,
        "stock_local": 37
      }
    ]
  },
  {
    "medicamento_id": 403,
    "codigo_digemid": "DIG-10403",
    "nombre_comercial": "Azitromicina Forte 503mg",
    "principio_activo": "Azitromicina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 3.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 3.51,
        "stock_local": 43
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 3.43,
        "stock_local": 38
      }
    ]
  },
  {
    "medicamento_id": 404,
    "codigo_digemid": "DIG-10404",
    "nombre_comercial": "Losartan Forte 504mg",
    "principio_activo": "Losartan",
    "concentracion": "250mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 4.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.23,
        "stock_local": 44
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.14,
        "stock_local": 39
      }
    ]
  },
  {
    "medicamento_id": 405,
    "codigo_digemid": "DIG-10405",
    "nombre_comercial": "Enalapril Forte 505mg",
    "principio_activo": "Enalapril",
    "concentracion": "500mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 5.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.95,
        "stock_local": 45
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.84,
        "stock_local": 25
      }
    ]
  },
  {
    "medicamento_id": 406,
    "codigo_digemid": "DIG-10406",
    "nombre_comercial": "Metformina Forte 506mg",
    "principio_activo": "Metformina",
    "concentracion": "750mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 6.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 5.67,
        "stock_local": 46
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 5.54,
        "stock_local": 26
      }
    ]
  },
  {
    "medicamento_id": 407,
    "codigo_digemid": "DIG-10407",
    "nombre_comercial": "Cetirizina Forte 507mg",
    "principio_activo": "Cetirizina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 7.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 6.39,
        "stock_local": 47
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.25,
        "stock_local": 27
      }
    ]
  },
  {
    "medicamento_id": 408,
    "codigo_digemid": "DIG-10408",
    "nombre_comercial": "Loratadina Forte 508mg",
    "principio_activo": "Loratadina",
    "concentracion": "250mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 7.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.11,
        "stock_local": 48
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.95,
        "stock_local": 28
      }
    ]
  },
  {
    "medicamento_id": 409,
    "codigo_digemid": "DIG-10409",
    "nombre_comercial": "Omeprazol Forte 509mg",
    "principio_activo": "Omeprazol",
    "concentracion": "500mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 8.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.83,
        "stock_local": 49
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 7.66,
        "stock_local": 29
      }
    ]
  },
  {
    "medicamento_id": 410,
    "codigo_digemid": "DIG-10410",
    "nombre_comercial": "Paracetamol Forte 510mg",
    "principio_activo": "Paracetamol",
    "concentracion": "750mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 9.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 8.55,
        "stock_local": 50
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 8.36,
        "stock_local": 30
      }
    ]
  },
  {
    "medicamento_id": 411,
    "codigo_digemid": "DIG-10411",
    "nombre_comercial": "Ibuprofeno Forte 511mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "1000mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 10.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.27,
        "stock_local": 51
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.06,
        "stock_local": 31
      }
    ]
  },
  {
    "medicamento_id": 412,
    "codigo_digemid": "DIG-10412",
    "nombre_comercial": "Amoxicilina Forte 512mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "250mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 11.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.99,
        "stock_local": 52
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.77,
        "stock_local": 32
      }
    ]
  },
  {
    "medicamento_id": 413,
    "codigo_digemid": "DIG-10413",
    "nombre_comercial": "Azitromicina Forte 513mg",
    "principio_activo": "Azitromicina",
    "concentracion": "500mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 11.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 10.71,
        "stock_local": 53
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 10.47,
        "stock_local": 33
      }
    ]
  },
  {
    "medicamento_id": 414,
    "codigo_digemid": "DIG-10414",
    "nombre_comercial": "Losartan Forte 514mg",
    "principio_activo": "Losartan",
    "concentracion": "750mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 12.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 11.43,
        "stock_local": 54
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.18,
        "stock_local": 34
      }
    ]
  },
  {
    "medicamento_id": 415,
    "codigo_digemid": "DIG-10415",
    "nombre_comercial": "Enalapril Forte 515mg",
    "principio_activo": "Enalapril",
    "concentracion": "1000mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 13.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.15,
        "stock_local": 55
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.88,
        "stock_local": 35
      }
    ]
  },
  {
    "medicamento_id": 416,
    "codigo_digemid": "DIG-10416",
    "nombre_comercial": "Metformina Forte 516mg",
    "principio_activo": "Metformina",
    "concentracion": "250mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 14.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.87,
        "stock_local": 56
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 12.58,
        "stock_local": 36
      }
    ]
  },
  {
    "medicamento_id": 417,
    "codigo_digemid": "DIG-10417",
    "nombre_comercial": "Cetirizina Forte 517mg",
    "principio_activo": "Cetirizina",
    "concentracion": "500mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 15.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 13.59,
        "stock_local": 57
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.29,
        "stock_local": 37
      }
    ]
  },
  {
    "medicamento_id": 418,
    "codigo_digemid": "DIG-10418",
    "nombre_comercial": "Loratadina Forte 518mg",
    "principio_activo": "Loratadina",
    "concentracion": "750mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 15.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 14.31,
        "stock_local": 58
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.99,
        "stock_local": 38
      }
    ]
  },
  {
    "medicamento_id": 419,
    "codigo_digemid": "DIG-10419",
    "nombre_comercial": "Omeprazol Forte 519mg",
    "principio_activo": "Omeprazol",
    "concentracion": "1000mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 16.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.03,
        "stock_local": 59
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 14.7,
        "stock_local": 39
      }
    ]
  },
  {
    "medicamento_id": 420,
    "codigo_digemid": "DIG-10420",
    "nombre_comercial": "Paracetamol Forte 520mg",
    "principio_activo": "Paracetamol",
    "concentracion": "250mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 17.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.75,
        "stock_local": 40
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 15.4,
        "stock_local": 25
      }
    ]
  },
  {
    "medicamento_id": 421,
    "codigo_digemid": "DIG-10421",
    "nombre_comercial": "Ibuprofeno Forte 521mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "500mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 18.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 16.47,
        "stock_local": 41
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.1,
        "stock_local": 26
      }
    ]
  },
  {
    "medicamento_id": 422,
    "codigo_digemid": "DIG-10422",
    "nombre_comercial": "Amoxicilina Forte 522mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "750mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 19.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.19,
        "stock_local": 42
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.81,
        "stock_local": 27
      }
    ]
  },
  {
    "medicamento_id": 423,
    "codigo_digemid": "DIG-10423",
    "nombre_comercial": "Azitromicina Forte 523mg",
    "principio_activo": "Azitromicina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 19.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.91,
        "stock_local": 43
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 17.51,
        "stock_local": 28
      }
    ]
  },
  {
    "medicamento_id": 424,
    "codigo_digemid": "DIG-10424",
    "nombre_comercial": "Losartan Forte 524mg",
    "principio_activo": "Losartan",
    "concentracion": "250mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 20.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 18.63,
        "stock_local": 44
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 18.22,
        "stock_local": 29
      }
    ]
  },
  {
    "medicamento_id": 425,
    "codigo_digemid": "DIG-10425",
    "nombre_comercial": "Enalapril Forte 525mg",
    "principio_activo": "Enalapril",
    "concentracion": "500mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 1.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 1.35,
        "stock_local": 45
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 1.32,
        "stock_local": 30
      }
    ]
  },
  {
    "medicamento_id": 426,
    "codigo_digemid": "DIG-10426",
    "nombre_comercial": "Metformina Forte 526mg",
    "principio_activo": "Metformina",
    "concentracion": "750mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 2.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.07,
        "stock_local": 46
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.02,
        "stock_local": 31
      }
    ]
  },
  {
    "medicamento_id": 427,
    "codigo_digemid": "DIG-10427",
    "nombre_comercial": "Cetirizina Forte 527mg",
    "principio_activo": "Cetirizina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 3.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.79,
        "stock_local": 47
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.73,
        "stock_local": 32
      }
    ]
  },
  {
    "medicamento_id": 428,
    "codigo_digemid": "DIG-10428",
    "nombre_comercial": "Loratadina Forte 528mg",
    "principio_activo": "Loratadina",
    "concentracion": "250mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 3.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 3.51,
        "stock_local": 48
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 3.43,
        "stock_local": 33
      }
    ]
  },
  {
    "medicamento_id": 429,
    "codigo_digemid": "DIG-10429",
    "nombre_comercial": "Omeprazol Forte 529mg",
    "principio_activo": "Omeprazol",
    "concentracion": "500mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 4.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.23,
        "stock_local": 49
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.14,
        "stock_local": 34
      }
    ]
  },
  {
    "medicamento_id": 430,
    "codigo_digemid": "DIG-10430",
    "nombre_comercial": "Paracetamol Forte 530mg",
    "principio_activo": "Paracetamol",
    "concentracion": "750mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 5.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.95,
        "stock_local": 50
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.84,
        "stock_local": 35
      }
    ]
  },
  {
    "medicamento_id": 431,
    "codigo_digemid": "DIG-10431",
    "nombre_comercial": "Ibuprofeno Forte 531mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "1000mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 6.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 5.67,
        "stock_local": 51
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 5.54,
        "stock_local": 36
      }
    ]
  },
  {
    "medicamento_id": 432,
    "codigo_digemid": "DIG-10432",
    "nombre_comercial": "Amoxicilina Forte 532mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "250mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 7.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 6.39,
        "stock_local": 52
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.25,
        "stock_local": 37
      }
    ]
  },
  {
    "medicamento_id": 433,
    "codigo_digemid": "DIG-10433",
    "nombre_comercial": "Azitromicina Forte 533mg",
    "principio_activo": "Azitromicina",
    "concentracion": "500mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 7.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.11,
        "stock_local": 53
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.95,
        "stock_local": 38
      }
    ]
  },
  {
    "medicamento_id": 434,
    "codigo_digemid": "DIG-10434",
    "nombre_comercial": "Losartan Forte 534mg",
    "principio_activo": "Losartan",
    "concentracion": "750mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 8.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.83,
        "stock_local": 54
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 7.66,
        "stock_local": 39
      }
    ]
  },
  {
    "medicamento_id": 435,
    "codigo_digemid": "DIG-10435",
    "nombre_comercial": "Enalapril Forte 535mg",
    "principio_activo": "Enalapril",
    "concentracion": "1000mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 9.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 8.55,
        "stock_local": 55
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 8.36,
        "stock_local": 25
      }
    ]
  },
  {
    "medicamento_id": 436,
    "codigo_digemid": "DIG-10436",
    "nombre_comercial": "Metformina Forte 536mg",
    "principio_activo": "Metformina",
    "concentracion": "250mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 10.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.27,
        "stock_local": 56
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.06,
        "stock_local": 26
      }
    ]
  },
  {
    "medicamento_id": 437,
    "codigo_digemid": "DIG-10437",
    "nombre_comercial": "Cetirizina Forte 537mg",
    "principio_activo": "Cetirizina",
    "concentracion": "500mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 11.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.99,
        "stock_local": 57
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.77,
        "stock_local": 27
      }
    ]
  },
  {
    "medicamento_id": 438,
    "codigo_digemid": "DIG-10438",
    "nombre_comercial": "Loratadina Forte 538mg",
    "principio_activo": "Loratadina",
    "concentracion": "750mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 11.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 10.71,
        "stock_local": 58
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 10.47,
        "stock_local": 28
      }
    ]
  },
  {
    "medicamento_id": 439,
    "codigo_digemid": "DIG-10439",
    "nombre_comercial": "Omeprazol Forte 539mg",
    "principio_activo": "Omeprazol",
    "concentracion": "1000mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 12.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 11.43,
        "stock_local": 59
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.18,
        "stock_local": 29
      }
    ]
  },
  {
    "medicamento_id": 440,
    "codigo_digemid": "DIG-10440",
    "nombre_comercial": "Paracetamol Forte 540mg",
    "principio_activo": "Paracetamol",
    "concentracion": "250mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 13.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.15,
        "stock_local": 40
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.88,
        "stock_local": 30
      }
    ]
  },
  {
    "medicamento_id": 441,
    "codigo_digemid": "DIG-10441",
    "nombre_comercial": "Ibuprofeno Forte 541mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "500mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 14.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.87,
        "stock_local": 41
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 12.58,
        "stock_local": 31
      }
    ]
  },
  {
    "medicamento_id": 442,
    "codigo_digemid": "DIG-10442",
    "nombre_comercial": "Amoxicilina Forte 542mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "750mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 15.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 13.59,
        "stock_local": 42
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.29,
        "stock_local": 32
      }
    ]
  },
  {
    "medicamento_id": 443,
    "codigo_digemid": "DIG-10443",
    "nombre_comercial": "Azitromicina Forte 543mg",
    "principio_activo": "Azitromicina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 15.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 14.31,
        "stock_local": 43
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.99,
        "stock_local": 33
      }
    ]
  },
  {
    "medicamento_id": 444,
    "codigo_digemid": "DIG-10444",
    "nombre_comercial": "Losartan Forte 544mg",
    "principio_activo": "Losartan",
    "concentracion": "250mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 16.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.03,
        "stock_local": 44
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 14.7,
        "stock_local": 34
      }
    ]
  },
  {
    "medicamento_id": 445,
    "codigo_digemid": "DIG-10445",
    "nombre_comercial": "Enalapril Forte 545mg",
    "principio_activo": "Enalapril",
    "concentracion": "500mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 17.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.75,
        "stock_local": 45
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 15.4,
        "stock_local": 35
      }
    ]
  },
  {
    "medicamento_id": 446,
    "codigo_digemid": "DIG-10446",
    "nombre_comercial": "Metformina Forte 546mg",
    "principio_activo": "Metformina",
    "concentracion": "750mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 18.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 16.47,
        "stock_local": 46
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.1,
        "stock_local": 36
      }
    ]
  },
  {
    "medicamento_id": 447,
    "codigo_digemid": "DIG-10447",
    "nombre_comercial": "Cetirizina Forte 547mg",
    "principio_activo": "Cetirizina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 19.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.19,
        "stock_local": 47
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.81,
        "stock_local": 37
      }
    ]
  },
  {
    "medicamento_id": 448,
    "codigo_digemid": "DIG-10448",
    "nombre_comercial": "Loratadina Forte 548mg",
    "principio_activo": "Loratadina",
    "concentracion": "250mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 19.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.91,
        "stock_local": 48
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 17.51,
        "stock_local": 38
      }
    ]
  },
  {
    "medicamento_id": 449,
    "codigo_digemid": "DIG-10449",
    "nombre_comercial": "Omeprazol Forte 549mg",
    "principio_activo": "Omeprazol",
    "concentracion": "500mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 20.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 18.63,
        "stock_local": 49
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 18.22,
        "stock_local": 39
      }
    ]
  },
  {
    "medicamento_id": 450,
    "codigo_digemid": "DIG-10450",
    "nombre_comercial": "Paracetamol Forte 550mg",
    "principio_activo": "Paracetamol",
    "concentracion": "750mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 1.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 1.35,
        "stock_local": 50
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 1.32,
        "stock_local": 25
      }
    ]
  },
  {
    "medicamento_id": 451,
    "codigo_digemid": "DIG-10451",
    "nombre_comercial": "Ibuprofeno Forte 551mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "1000mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 2.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.07,
        "stock_local": 51
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.02,
        "stock_local": 26
      }
    ]
  },
  {
    "medicamento_id": 452,
    "codigo_digemid": "DIG-10452",
    "nombre_comercial": "Amoxicilina Forte 552mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "250mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 3.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.79,
        "stock_local": 52
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.73,
        "stock_local": 27
      }
    ]
  },
  {
    "medicamento_id": 453,
    "codigo_digemid": "DIG-10453",
    "nombre_comercial": "Azitromicina Forte 553mg",
    "principio_activo": "Azitromicina",
    "concentracion": "500mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 3.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 3.51,
        "stock_local": 53
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 3.43,
        "stock_local": 28
      }
    ]
  },
  {
    "medicamento_id": 454,
    "codigo_digemid": "DIG-10454",
    "nombre_comercial": "Losartan Forte 554mg",
    "principio_activo": "Losartan",
    "concentracion": "750mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 4.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.23,
        "stock_local": 54
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.14,
        "stock_local": 29
      }
    ]
  },
  {
    "medicamento_id": 455,
    "codigo_digemid": "DIG-10455",
    "nombre_comercial": "Enalapril Forte 555mg",
    "principio_activo": "Enalapril",
    "concentracion": "1000mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 5.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.95,
        "stock_local": 55
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.84,
        "stock_local": 30
      }
    ]
  },
  {
    "medicamento_id": 456,
    "codigo_digemid": "DIG-10456",
    "nombre_comercial": "Metformina Forte 556mg",
    "principio_activo": "Metformina",
    "concentracion": "250mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 6.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 5.67,
        "stock_local": 56
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 5.54,
        "stock_local": 31
      }
    ]
  },
  {
    "medicamento_id": 457,
    "codigo_digemid": "DIG-10457",
    "nombre_comercial": "Cetirizina Forte 557mg",
    "principio_activo": "Cetirizina",
    "concentracion": "500mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 7.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 6.39,
        "stock_local": 57
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.25,
        "stock_local": 32
      }
    ]
  },
  {
    "medicamento_id": 458,
    "codigo_digemid": "DIG-10458",
    "nombre_comercial": "Loratadina Forte 558mg",
    "principio_activo": "Loratadina",
    "concentracion": "750mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 7.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.11,
        "stock_local": 58
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.95,
        "stock_local": 33
      }
    ]
  },
  {
    "medicamento_id": 459,
    "codigo_digemid": "DIG-10459",
    "nombre_comercial": "Omeprazol Forte 559mg",
    "principio_activo": "Omeprazol",
    "concentracion": "1000mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 8.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.83,
        "stock_local": 59
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 7.66,
        "stock_local": 34
      }
    ]
  },
  {
    "medicamento_id": 460,
    "codigo_digemid": "DIG-10460",
    "nombre_comercial": "Paracetamol Forte 560mg",
    "principio_activo": "Paracetamol",
    "concentracion": "250mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 9.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 8.55,
        "stock_local": 40
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 8.36,
        "stock_local": 35
      }
    ]
  },
  {
    "medicamento_id": 461,
    "codigo_digemid": "DIG-10461",
    "nombre_comercial": "Ibuprofeno Forte 561mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "500mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 10.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.27,
        "stock_local": 41
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.06,
        "stock_local": 36
      }
    ]
  },
  {
    "medicamento_id": 462,
    "codigo_digemid": "DIG-10462",
    "nombre_comercial": "Amoxicilina Forte 562mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "750mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 11.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.99,
        "stock_local": 42
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.77,
        "stock_local": 37
      }
    ]
  },
  {
    "medicamento_id": 463,
    "codigo_digemid": "DIG-10463",
    "nombre_comercial": "Azitromicina Forte 563mg",
    "principio_activo": "Azitromicina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 11.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 10.71,
        "stock_local": 43
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 10.47,
        "stock_local": 38
      }
    ]
  },
  {
    "medicamento_id": 464,
    "codigo_digemid": "DIG-10464",
    "nombre_comercial": "Losartan Forte 564mg",
    "principio_activo": "Losartan",
    "concentracion": "250mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 12.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 11.43,
        "stock_local": 44
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.18,
        "stock_local": 39
      }
    ]
  },
  {
    "medicamento_id": 465,
    "codigo_digemid": "DIG-10465",
    "nombre_comercial": "Enalapril Forte 565mg",
    "principio_activo": "Enalapril",
    "concentracion": "500mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 13.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.15,
        "stock_local": 45
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.88,
        "stock_local": 25
      }
    ]
  },
  {
    "medicamento_id": 466,
    "codigo_digemid": "DIG-10466",
    "nombre_comercial": "Metformina Forte 566mg",
    "principio_activo": "Metformina",
    "concentracion": "750mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 14.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.87,
        "stock_local": 46
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 12.58,
        "stock_local": 26
      }
    ]
  },
  {
    "medicamento_id": 467,
    "codigo_digemid": "DIG-10467",
    "nombre_comercial": "Cetirizina Forte 567mg",
    "principio_activo": "Cetirizina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 15.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 13.59,
        "stock_local": 47
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.29,
        "stock_local": 27
      }
    ]
  },
  {
    "medicamento_id": 468,
    "codigo_digemid": "DIG-10468",
    "nombre_comercial": "Loratadina Forte 568mg",
    "principio_activo": "Loratadina",
    "concentracion": "250mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 15.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 14.31,
        "stock_local": 48
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.99,
        "stock_local": 28
      }
    ]
  },
  {
    "medicamento_id": 469,
    "codigo_digemid": "DIG-10469",
    "nombre_comercial": "Omeprazol Forte 569mg",
    "principio_activo": "Omeprazol",
    "concentracion": "500mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 16.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.03,
        "stock_local": 49
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 14.7,
        "stock_local": 29
      }
    ]
  },
  {
    "medicamento_id": 470,
    "codigo_digemid": "DIG-10470",
    "nombre_comercial": "Paracetamol Forte 570mg",
    "principio_activo": "Paracetamol",
    "concentracion": "750mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 17.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.75,
        "stock_local": 50
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 15.4,
        "stock_local": 30
      }
    ]
  },
  {
    "medicamento_id": 471,
    "codigo_digemid": "DIG-10471",
    "nombre_comercial": "Ibuprofeno Forte 571mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "1000mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 18.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 16.47,
        "stock_local": 51
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.1,
        "stock_local": 31
      }
    ]
  },
  {
    "medicamento_id": 472,
    "codigo_digemid": "DIG-10472",
    "nombre_comercial": "Amoxicilina Forte 572mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "250mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 19.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.19,
        "stock_local": 52
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.81,
        "stock_local": 32
      }
    ]
  },
  {
    "medicamento_id": 473,
    "codigo_digemid": "DIG-10473",
    "nombre_comercial": "Azitromicina Forte 573mg",
    "principio_activo": "Azitromicina",
    "concentracion": "500mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 19.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.91,
        "stock_local": 53
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 17.51,
        "stock_local": 33
      }
    ]
  },
  {
    "medicamento_id": 474,
    "codigo_digemid": "DIG-10474",
    "nombre_comercial": "Losartan Forte 574mg",
    "principio_activo": "Losartan",
    "concentracion": "750mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 20.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 18.63,
        "stock_local": 54
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 18.22,
        "stock_local": 34
      }
    ]
  },
  {
    "medicamento_id": 475,
    "codigo_digemid": "DIG-10475",
    "nombre_comercial": "Enalapril Forte 575mg",
    "principio_activo": "Enalapril",
    "concentracion": "1000mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 1.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 1.35,
        "stock_local": 55
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 1.32,
        "stock_local": 35
      }
    ]
  },
  {
    "medicamento_id": 476,
    "codigo_digemid": "DIG-10476",
    "nombre_comercial": "Metformina Forte 576mg",
    "principio_activo": "Metformina",
    "concentracion": "250mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 2.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.07,
        "stock_local": 56
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.02,
        "stock_local": 36
      }
    ]
  },
  {
    "medicamento_id": 477,
    "codigo_digemid": "DIG-10477",
    "nombre_comercial": "Cetirizina Forte 577mg",
    "principio_activo": "Cetirizina",
    "concentracion": "500mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 3.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 2.79,
        "stock_local": 57
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 2.73,
        "stock_local": 37
      }
    ]
  },
  {
    "medicamento_id": 478,
    "codigo_digemid": "DIG-10478",
    "nombre_comercial": "Loratadina Forte 578mg",
    "principio_activo": "Loratadina",
    "concentracion": "750mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 3.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 3.51,
        "stock_local": 58
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 3.43,
        "stock_local": 38
      }
    ]
  },
  {
    "medicamento_id": 479,
    "codigo_digemid": "DIG-10479",
    "nombre_comercial": "Omeprazol Forte 579mg",
    "principio_activo": "Omeprazol",
    "concentracion": "1000mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 4.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.23,
        "stock_local": 59
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.14,
        "stock_local": 39
      }
    ]
  },
  {
    "medicamento_id": 480,
    "codigo_digemid": "DIG-10480",
    "nombre_comercial": "Paracetamol Forte 580mg",
    "principio_activo": "Paracetamol",
    "concentracion": "250mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 5.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 4.95,
        "stock_local": 40
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 4.84,
        "stock_local": 25
      }
    ]
  },
  {
    "medicamento_id": 481,
    "codigo_digemid": "DIG-10481",
    "nombre_comercial": "Ibuprofeno Forte 581mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "500mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 6.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 5.67,
        "stock_local": 41
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 5.54,
        "stock_local": 26
      }
    ]
  },
  {
    "medicamento_id": 482,
    "codigo_digemid": "DIG-10482",
    "nombre_comercial": "Amoxicilina Forte 582mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "750mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 7.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 6.39,
        "stock_local": 42
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.25,
        "stock_local": 27
      }
    ]
  },
  {
    "medicamento_id": 483,
    "codigo_digemid": "DIG-10483",
    "nombre_comercial": "Azitromicina Forte 583mg",
    "principio_activo": "Azitromicina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 7.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.11,
        "stock_local": 43
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 6.95,
        "stock_local": 28
      }
    ]
  },
  {
    "medicamento_id": 484,
    "codigo_digemid": "DIG-10484",
    "nombre_comercial": "Losartan Forte 584mg",
    "principio_activo": "Losartan",
    "concentracion": "250mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 8.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 7.83,
        "stock_local": 44
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 7.66,
        "stock_local": 29
      }
    ]
  },
  {
    "medicamento_id": 485,
    "codigo_digemid": "DIG-10485",
    "nombre_comercial": "Enalapril Forte 585mg",
    "principio_activo": "Enalapril",
    "concentracion": "500mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 9.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 8.55,
        "stock_local": 45
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 8.36,
        "stock_local": 30
      }
    ]
  },
  {
    "medicamento_id": 486,
    "codigo_digemid": "DIG-10486",
    "nombre_comercial": "Metformina Forte 586mg",
    "principio_activo": "Metformina",
    "concentracion": "750mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 10.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.27,
        "stock_local": 46
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.06,
        "stock_local": 31
      }
    ]
  },
  {
    "medicamento_id": 487,
    "codigo_digemid": "DIG-10487",
    "nombre_comercial": "Cetirizina Forte 587mg",
    "principio_activo": "Cetirizina",
    "concentracion": "1000mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 11.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 9.99,
        "stock_local": 47
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 9.77,
        "stock_local": 32
      }
    ]
  },
  {
    "medicamento_id": 488,
    "codigo_digemid": "DIG-10488",
    "nombre_comercial": "Loratadina Forte 588mg",
    "principio_activo": "Loratadina",
    "concentracion": "250mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 11.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 10.71,
        "stock_local": 48
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 10.47,
        "stock_local": 33
      }
    ]
  },
  {
    "medicamento_id": 489,
    "codigo_digemid": "DIG-10489",
    "nombre_comercial": "Omeprazol Forte 589mg",
    "principio_activo": "Omeprazol",
    "concentracion": "500mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 12.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 11.43,
        "stock_local": 49
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.18,
        "stock_local": 34
      }
    ]
  },
  {
    "medicamento_id": 490,
    "codigo_digemid": "DIG-10490",
    "nombre_comercial": "Paracetamol Forte 590mg",
    "principio_activo": "Paracetamol",
    "concentracion": "750mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 13.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.15,
        "stock_local": 50
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 11.88,
        "stock_local": 35
      }
    ]
  },
  {
    "medicamento_id": 491,
    "codigo_digemid": "DIG-10491",
    "nombre_comercial": "Ibuprofeno Forte 591mg",
    "principio_activo": "Ibuprofeno",
    "concentracion": "1000mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 14.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 12.87,
        "stock_local": 51
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 12.58,
        "stock_local": 36
      }
    ]
  },
  {
    "medicamento_id": 492,
    "codigo_digemid": "DIG-10492",
    "nombre_comercial": "Amoxicilina Forte 592mg",
    "principio_activo": "Amoxicilina",
    "concentracion": "250mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 15.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 13.59,
        "stock_local": 52
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.29,
        "stock_local": 37
      }
    ]
  },
  {
    "medicamento_id": 493,
    "codigo_digemid": "DIG-10493",
    "nombre_comercial": "Azitromicina Forte 593mg",
    "principio_activo": "Azitromicina",
    "concentracion": "500mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 15.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 14.31,
        "stock_local": 53
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 13.99,
        "stock_local": 38
      }
    ]
  },
  {
    "medicamento_id": 494,
    "codigo_digemid": "DIG-10494",
    "nombre_comercial": "Losartan Forte 594mg",
    "principio_activo": "Losartan",
    "concentracion": "750mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 16.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.03,
        "stock_local": 54
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 14.7,
        "stock_local": 39
      }
    ]
  },
  {
    "medicamento_id": 495,
    "codigo_digemid": "DIG-10495",
    "nombre_comercial": "Enalapril Forte 595mg",
    "principio_activo": "Enalapril",
    "concentracion": "1000mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": true,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 17.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 15.75,
        "stock_local": 55
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 15.4,
        "stock_local": 25
      }
    ]
  },
  {
    "medicamento_id": 496,
    "codigo_digemid": "DIG-10496",
    "nombre_comercial": "Metformina Forte 596mg",
    "principio_activo": "Metformina",
    "concentracion": "250mg",
    "forma_farmaceutica": "CAPSULA",
    "categoria": "ANTIBIOTICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 18.3,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 16.47,
        "stock_local": 56
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.1,
        "stock_local": 26
      }
    ]
  },
  {
    "medicamento_id": 497,
    "codigo_digemid": "DIG-10497",
    "nombre_comercial": "Cetirizina Forte 597mg",
    "principio_activo": "Cetirizina",
    "concentracion": "500mg",
    "forma_farmaceutica": "SUSPENSION",
    "categoria": "ANTIHIPERTENSIVOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 19.1,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.19,
        "stock_local": 57
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 16.81,
        "stock_local": 27
      }
    ]
  },
  {
    "medicamento_id": 498,
    "codigo_digemid": "DIG-10498",
    "nombre_comercial": "Loratadina Forte 598mg",
    "principio_activo": "Loratadina",
    "concentracion": "750mg",
    "forma_farmaceutica": "JARABE",
    "categoria": "ANTIDIABETICOS",
    "requiere_receta": true,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 19.9,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 17.91,
        "stock_local": 58
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 17.51,
        "stock_local": 28
      }
    ]
  },
  {
    "medicamento_id": 499,
    "codigo_digemid": "DIG-10499",
    "nombre_comercial": "Omeprazol Forte 599mg",
    "principio_activo": "Omeprazol",
    "concentracion": "1000mg",
    "forma_farmaceutica": "INYECTABLE",
    "categoria": "ANTIHISTAMINICOS",
    "requiere_receta": false,
    "generico_intercambiable": false,
    "precio_referencial_mercado": 20.7,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 18.63,
        "stock_local": 59
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 18.22,
        "stock_local": 29
      }
    ]
  },
  {
    "medicamento_id": 500,
    "codigo_digemid": "DIG-10500",
    "nombre_comercial": "Paracetamol Forte 100mg",
    "principio_activo": "Paracetamol",
    "concentracion": "250mg",
    "forma_farmaceutica": "TABLETA",
    "categoria": "ANALGESICOS",
    "requiere_receta": false,
    "generico_intercambiable": true,
    "precio_referencial_mercado": 1.5,
    "disponibilidad_red": [
      {
        "farmacia_id": 1,
        "nombre_farmacia": "Botica FarmaBarrio San Juan",
        "distrito": "San Juan de Lurigancho",
        "precio_oferta": 1.35,
        "stock_local": 40
      },
      {
        "farmacia_id": 2,
        "nombre_farmacia": "Farmacia Popular Comas",
        "distrito": "Comas",
        "precio_oferta": 1.32,
        "stock_local": 30
      }
    ]
  }
]);
