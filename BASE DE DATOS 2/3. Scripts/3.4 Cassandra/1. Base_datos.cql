-- ==============================================================================
-- CREACIÓN Y CONFIGURACIÓN DEL KEYSPACE - APACHE CASSANDRA 5.0
-- PROYECTO: FarmaBarrio - Red Colaborativa de Farmacias Independientes
-- TOPOLOGÍA: Clúster Distribuido Peer-to-Peer sin líder (Multi-DataCenter)
-- INTEGRANTE RESPONSABLE: Jorge Fabian Matencio Paucar / Dereck Daniel Rojas Pérez
-- ==============================================================================

-- 1. Creación del Keyspace con Estrategia de Topología de Red y Factor de Replicación 3
CREATE KEYSPACE IF NOT EXISTS farmabarrio
WITH replication = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3
}
AND durable_writes = true;

-- 2. Documentación del Keyspace
-- El factor de replicación 3 (RF=3) asegura tolerancia a fallos ante la pérdida simultánea
-- de un nodo sin degradar la consistencia QUORUM (2 de 3 nodos requeridos).
DESCRIBE KEYSPACE farmabarrio;
