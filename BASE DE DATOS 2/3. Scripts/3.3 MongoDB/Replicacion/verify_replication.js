// Verificacion de Replicacion Asincrona en MongoDB (Replica Set rs0)
// Base de datos: farmabarrio_mongo
rs.status();
db.isMaster();
rs.printReplicationInfo();
rs.printSecondaryReplicationInfo();

use farmabarrio_mongo;
db.auditoria_eventos.insertOne(
  {
    evento_id: 'EVT-REP-TEST-001',
    fecha_evento: new Date(),
    modulo: 'REPLICACION',
    usuario: 'admin_farma',
    accion: 'TEST_REPLICA_PROPAGATION',
    resultado: 'SUCCESS'
  },
  { writeConcern: { w: 'majority', wtimeout: 5000 } }
);
