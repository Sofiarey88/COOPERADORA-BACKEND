const mongoose = require("mongoose");

const AlumnosSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  dni: Number,
  direccion: String,
  telefono: String,
  email: String,
  fecha_nacimiento: Date,
});

module.exports = mongoose.model("Alumnos", AlumnosSchema);
