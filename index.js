// importacion de librerias
require("dotenv").config();
const express = require("express");

// importacion de archivos propios (controllers, routes, etc...)
const dbConnect = require("./src/database/connection");

const RUTAS_ALUMNOS = require("./src/router/alumnos");
const RUTAS_COBROS = require("./src/router/cobros");
const RUTAS_STATS = require("./src/router/stats");
const PAGOS_ROUTER = require("./src/router/pagos");
const ADMIN_USER_ROUTES = require("./src/router/admin-user");
//instanciacion de Express
const app = express();

//declaracion del servidor
app.use(express.json());
app.use("/alumnos", RUTAS_ALUMNOS);
app.use("/cobros", RUTAS_COBROS);
app.use("/stats", RUTAS_STATS);
app.use("/pagos", PAGOS_ROUTER);
app.use("/auth", ADMIN_USER_ROUTES);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
  dbConnect();
});
