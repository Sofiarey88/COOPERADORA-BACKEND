const mongoose = require("mongoose");

const CobrossSchema = new mongoose.Schema({
  descripcion: String,
  monto: Number,
  titulo: String,
});

module.exports = mongoose.model("Cobros", CobrossSchema);
