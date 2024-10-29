const express = require("express");
const {
  getPagos,
  postPagos,
  updatePago,
  obtenerPagoIndividual,
} = require("../controllers/pagos");
const RUTAS_PAGOS = express.Router();

RUTAS_PAGOS.route("/").get(getPagos).post(postPagos).put(updatePago);

RUTAS_PAGOS.route("/:id").get(obtenerPagoIndividual);

module.exports = RUTAS_PAGOS;
