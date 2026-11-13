// Consultas de agregacion analitica en MongoDB
// Cada pipeline responde a una necesidad de negocio especifica con autoria individual

use farmabarrio_nosql;

// Autor: Maykel Quiñones
// Pipeline 1: Analisis de ventas, ticket medio y metodo de pago preferido por distrito
db.pedidos_marketplace.aggregate([
  { $match: { estado: { $in: ["ENTREGADO", "CONFIRMADO"] } } },
  { $group: {
      _id: { distrito: "$distrito", metodo_pago: "$metodo_pago" },
      total_ventas_soles: { $sum: "$total" },
      ticket_promedio: { $avg: "$total" },
      cantidad_pedidos: { $sum: 1 }
  }},
  { $sort: { "total_ventas_soles": -1 } },
  { $project: {
      _id: 0,
      distrito: "$_id.distrito",
      metodo_pago: "$_id.metodo_pago",
      total_ventas_soles: { $round: ["$total_ventas_soles", 2] },
      ticket_promedio: { $round: ["$ticket_promedio", 2] },
      cantidad_pedidos: 1
  }}
]);

// Autor: Leonardo Wong
// Pipeline 2: Rendimiento y volumen facturado por farmacia asociada con desglose de items
db.pedidos_marketplace.aggregate([
  { $unwind: "$items" },
  { $group: {
      _id: "$farmacia_id",
      unidades_despachadas: { $sum: "$items.cantidad" },
      monto_acumulado: { $sum: "$items.subtotal" },
      pedidos_distintos: { $addToSet: "$codigo_pedido" }
  }},
  { $project: {
      farmacia_id: "$_id",
      unidades_despachadas: 1,
      monto_acumulado: { $round: ["$monto_acumulado", 2] },
      total_pedidos: { $size: "$pedidos_distintos" }
  }},
  { $sort: { monto_acumulado: -1 } }
]);

// Autor: Nicole Garcia
// Pipeline 3: Monitoreo critico de cadena de frio y desviaciones termicas en medicamentos refrigerados
db.trazabilidad_stock.aggregate([
  { $match: { cadena_frio: true } },
  { $group: {
      _id: "$distrito_farmacia",
      temperatura_promedio: { $avg: "$temperatura_registro.temperatura_celsius" },
      temperatura_maxima: { $max: "$temperatura_registro.temperatura_celsius" },
      lotes_refrigerados: { $sum: 1 },
      stock_total_frio: { $sum: "$cantidad_disponible" }
  }},
  { $project: {
      distrito: "$_id",
      temperatura_promedio: { $round: ["$temperatura_promedio", 2] },
      temperatura_maxima: { $round: ["$temperatura_maxima", 2] },
      alerta_sobrecalentamiento: {
        $cond: { if: { $gt: ["$temperatura_maxima", 8.0] }, then: "ALERTA_CRITICA", else: "RANGO_OPTIMO" }
      },
      lotes_refrigerados: 1,
      stock_total_frio: 1
  }},
  { $sort: { temperatura_maxima: -1 } }
]);

// Autor: Jorge Matencio
// Pipeline 4: Auditoria de lotes de medicamentos proximos a expirar agrupados por laboratorio proveedor
db.trazabilidad_stock.aggregate([
  { $match: { estado_lote: { $in: ["PROXIMO_A_VENCER", "VENCIDO"] } } },
  { $group: {
      _id: "$laboratorio",
      lotes_en_riesgo: { $sum: 1 },
      unidades_en_riesgo: { $sum: "$cantidad_disponible" },
      medicamentos_afectados: { $addToSet: "$nombre_medicamento" }
  }},
  { $project: {
      laboratorio: "$_id",
      lotes_en_riesgo: 1,
      unidades_en_riesgo: 1,
      variedad_medicamentos: { $size: "$medicamentos_afectados" }
  }},
  { $sort: { unidades_en_riesgo: -1 } }
]);

// Autor: Dereck Rojas
// Pipeline 5: Comparador de ahorro en farmacias barriales frente al precio de referencia de grandes cadenas
db.catalogo_medicamentos_cache.aggregate([
  { $unwind: "$disponibilidad_red" },
  { $project: {
      nombre_comercial: 1,
      categoria: 1,
      precio_referencial_mercado: 1,
      farmacia: "$disponibilidad_red.nombre_farmacia",
      distrito: "$disponibilidad_red.distrito",
      precio_barrial: "$disponibilidad_red.precio_oferta",
      ahorro_soles: { $subtract: ["$precio_referencial_mercado", "$disponibilidad_red.precio_oferta"] },
      porcentaje_ahorro: {
        $multiply: [
          { $divide: [{ $subtract: ["$precio_referencial_mercado", "$disponibilidad_red.precio_oferta"] }, "$precio_referencial_mercado"] },
          100
        ]
      }
  }},
  { $sort: { porcentaje_ahorro: -1 } },
  { $limit: 10 }
]);
