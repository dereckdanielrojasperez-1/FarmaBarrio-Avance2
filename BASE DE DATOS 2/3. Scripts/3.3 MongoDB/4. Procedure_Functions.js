// Consultas de Agregación Analítica en MongoDB
// Cada pipeline responde a una necesidad de negocio estratégica con autoría individual explícita
// Base de datos: farmabarrio_mongo

use farmabarrio_mongo;

// ==============================================================================
// Autor: Quiñones Diego, Maykel Piero
// Pipeline 1: Análisis de Facturación Total y Ticket Medio por Botica Barrial
// ==============================================================================
db.ventas_historicas.aggregate([
  { $match: { estado: "completada" } },
  { $group: {
      _id: "$farmacia_id",
      total_facturado: { $sum: "$total_venta" },
      ticket_promedio: { $avg: "$total_venta" },
      cantidad_transacciones: { $sum: 1 }
  }},
  { $sort: { total_facturado: -1 } },
  { $project: {
      farmacia_id: "$_id",
      _id: 0,
      total_facturado: { $round: ["$total_facturado", 2] },
      ticket_promedio: { $round: ["$ticket_promedio", 2] },
      cantidad_transacciones: 1
  }}
]);

// ==============================================================================
// Autor: Wong Villanueva, Leonardo Josué
// Pipeline 2: Análisis de Preferencia de Medios de Pago y Canal de Dispensación
// ==============================================================================
db.ventas_historicas.aggregate([
  { $match: { estado: "completada" } },
  { $group: {
      _id: { canal: "$canal_venta", metodo: "$metodo_pago" },
      ingresos_totales: { $sum: "$total_venta" },
      operaciones: { $sum: 1 }
  }},
  { $sort: { ingresos_totales: -1 } },
  { $project: {
      canal: "$_id.canal",
      metodo_pago: "$_id.metodo",
      _id: 0,
      ingresos_totales: { $round: ["$ingresos_totales", 2] },
      operaciones: 1
  }}
]);

// ==============================================================================
// Autor: Garcia Espejo, Nicole Andrea
// Pipeline 3: Ranking de Fármacos Más Vendidos con Desglose de Arreglo ($unwind)
// ==============================================================================
db.ventas_historicas.aggregate([
  { $match: { estado: "completada" } },
  { $unwind: "$items" },
  { $group: {
      _id: {
        medicamento_id: "$items.medicamento_id",
        nombre: "$items.nombre_comercial"
      },
      unidades_totales_vendidas: { $sum: "$items.cantidad" },
      recaudacion_total: { $sum: "$items.subtotal" }
  }},
  { $sort: { unidades_totales_vendidas: -1 } },
  { $limit: 10 },
  { $project: {
      medicamento_id: "$_id.medicamento_id",
      nombre_comercial: "$_id.nombre",
      _id: 0,
      unidades_totales_vendidas: 1,
      recaudacion_total: { $round: ["$recaudacion_total", 2] }
  }}
]);

// ==============================================================================
// Autor: Matencio Paucar, Jorge Fabian
// Pipeline 4: Nivel de Satisfacción y Reputación Promedio de Boticas
// ==============================================================================
db.resenas.aggregate([
  { $group: {
      _id: "$farmacia_id",
      calificacion_promedio: { $avg: "$calificacion" },
      total_opiniones: { $sum: 1 },
      total_votos_utiles: { $sum: "$util_conteo" }
  }},
  { $sort: { calificacion_promedio: -1 } },
  { $project: {
      farmacia_id: "$_id",
      _id: 0,
      calificacion_promedio: { $round: ["$calificacion_promedio", 1] },
      total_opiniones: 1,
      total_votos_utiles: 1
  }}
]);

// ==============================================================================
// Autor: Rojas Pérez, Dereck Daniel
// Pipeline 5: Detección y Monitoreo de Eventos Críticos de Auditoría y Seguridad
// ==============================================================================
db.auditoria_eventos.aggregate([
  { $match: { accion: { $in: ["UPDATE_PRECIO", "RESTORE", "LOGIN_FAILED", "ANULACION"] } } },
  { $group: {
      _id: { usuario: "$usuario", accion: "$accion", modulo: "$modulo" },
      eventos_detectados: { $sum: 1 },
      ultimo_evento: { $max: "$fecha_evento" }
  }},
  { $sort: { eventos_detectados: -1 } },
  { $project: {
      usuario: "$_id.usuario",
      accion: "$_id.accion",
      modulo: "$_id.modulo",
      _id: 0,
      eventos_detectados: 1,
      ultimo_evento: 1
  }}
]);
