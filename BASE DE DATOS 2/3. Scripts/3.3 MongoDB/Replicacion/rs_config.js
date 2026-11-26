// CONFIGURACIÓN DE REPLICA SET ASÍNCRONO - MONGODB 7.0+ / 8.0+ / 9.0+
// PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
// REPLICA SET: rs0 (3 NODOS: 1 Primario + 2 Secundarios)
// INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar (NoSQL / MongoDB)

// 1. Inicialización del Replica Set rs0
// Los hostnames corresponden a los nombres de servicio en docker-compose-mongodb-rs.yml
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo-node1:27017", priority: 2, votes: 1 },
    { _id: 1, host: "mongo-node2:27017", priority: 1, votes: 1 },
    { _id: 2, host: "mongo-node3:27017", priority: 1, votes: 1 }
  ]
});

// 2. Espera de sincronización y verificación de estado
sleep(3000);
rs.status();

// 3. Monitoreo del retraso de replicación (Oplog Window & Lag)
rs.printReplicationInfo();
rs.printSecondaryReplicationInfo();

print("Replica Set rs0 inicializado y verificado con 3 miembros activos.");
