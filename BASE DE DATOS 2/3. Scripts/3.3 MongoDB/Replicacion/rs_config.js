// Configuracion de Replica Set asincrono para MongoDB
// Replica Set rs_farmabarrio con 3 miembros: primario, secundario y arbitro

rs.initiate({
  _id: "rs_farmabarrio",
  members: [
    { _id: 0, host: "mongo-node1.farmabarrio.pe:27017", priority: 2, votes: 1 },
    { _id: 1, host: "mongo-node2.farmabarrio.pe:27017", priority: 1, votes: 1 },
    { _id: 2, host: "mongo-arbiter.farmabarrio.pe:27017", priority: 0, votes: 1, arbiterOnly: true }
  ]
});

// Verificacion del estado de sincronizacion y miembros
rs.status();

// Verificacion del retraso de replicacion entre nodos
rs.printReplicationInfo();
rs.printSecondaryReplicationInfo();
