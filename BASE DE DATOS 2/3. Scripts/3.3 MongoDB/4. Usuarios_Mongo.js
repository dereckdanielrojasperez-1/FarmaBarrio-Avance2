// Administracion de usuarios y control de acceso en MongoDB
// Autenticacion sobre la base admin y permisos en farmabarrio_nosql

use admin;

// 1. Usuario Superadministrador (root)
db.createUser({
  user: "admin_farmabarrio",
  pwd: "MongoAdminPass2026#",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" },
    { role: "root", db: "admin" }
  ]
});

use farmabarrio_nosql;

// 2. Usuario Operador de Aplicacion (readWrite)
db.createUser({
  user: "usr_operador_nosql",
  pwd: "OperadorNoSql2026#",
  roles: [
    { role: "readWrite", db: "farmabarrio_nosql" }
  ]
});

// 3. Usuario Auditor de Consultas (read only)
db.createUser({
  user: "usr_auditor_nosql",
  pwd: "AuditorNoSql2026#",
  roles: [
    { role: "read", db: "farmabarrio_nosql" }
  ]
});

// Verificacion de usuarios creados
db.getUsers();

// 4. Prueba de restriccion de acceso (Subsanacion de Observacion)
// Al conectar como usr_auditor_nosql, la lectura funciona con normalidad:
// db.pedidos_marketplace.countDocuments();
// Pero un intento de insercion o escritura sera rechazado por MongoDB:
// db.pedidos_marketplace.insertOne({ codigo_pedido: "HACK-01" });
// Error retornado: MongoServerError: not authorized on farmabarrio_nosql to execute command
