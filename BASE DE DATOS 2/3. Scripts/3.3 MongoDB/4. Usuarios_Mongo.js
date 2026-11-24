// Administración de Usuarios y Principio de Mínimo Privilegio en MongoDB
// Autenticación en base admin | Privilegios acotados a farmabarrio_mongo

use admin;

// 1. Rol y Usuario DBA / Administrador General
db.createUser({
  user: "admin_farma",
  pwd: "FarmaAdmin2026#Secure",
  roles: [
    { role: "dbAdmin", db: "farmabarrio_mongo" },
    { role: "readWrite", db: "farmabarrio_mongo" },
    { role: "userAdmin", db: "farmabarrio_mongo" }
  ]
});

// 2. Usuario de Respaldo y Restauración Automatizada
db.createUser({
  user: "respaldo_farma",
  pwd: "BackupMongo2026#Secure",
  roles: [
    { role: "backup", db: "admin" },
    { role: "restore", db: "admin" }
  ]
});

// 3. Usuario de Solo Lectura para Reportería y Analítica (BI)
db.createUser({
  user: "consulta_farma",
  pwd: "ReadOnlyFarma2026#Secure",
  roles: [
    { role: "read", db: "farmabarrio_mongo" }
  ]
});

// 4. Usuario Operativo para Backend Transaccional (CRUD)
db.createUser({
  user: "operacion_farma",
  pwd: "AppOperacion2026#Secure",
  roles: [
    { role: "readWrite", db: "farmabarrio_mongo" }
  ]
});
