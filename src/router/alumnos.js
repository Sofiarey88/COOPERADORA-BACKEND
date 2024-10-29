const express = require("express");
const {
  obtenerAlumnos,
  crearAlumno,
  eliminarAlumno,
  obtenerAlumnoIndividual,
} = require("../controllers/alumnos");
const RUTAS_ALUMNOS = express.Router();

RUTAS_ALUMNOS.route("/").get(obtenerAlumnos).post(crearAlumno);

RUTAS_ALUMNOS.route("/:id").delete(eliminarAlumno).get(obtenerAlumnoIndividual);

module.exports = RUTAS_ALUMNOS;
