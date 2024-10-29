const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONEXION);
    console.log("Base de datos conectada 🟢");
  } catch (error) {
    console.log("error conexion db");
    console.log(error);
  }
};
