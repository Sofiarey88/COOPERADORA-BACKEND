const express = require('express');
const RUTAS_COBROS = express.Router();
const { obtenerCobros, crearCobro, eliminarCobro } = require('../controllers/cobros');

RUTAS_COBROS.route('/')
    .get(obtenerCobros)
    .post(crearCobro);

RUTAS_COBROS.route('/:id')
    .delete(eliminarCobro);

module.exports = RUTAS_COBROS;
