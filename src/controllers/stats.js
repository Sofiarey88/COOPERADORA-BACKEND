const MDB_COBROS = require("../database/schemas/cobros");
const MDB_ALUMNOS = require("../database/schemas/alumnos");

const getStasts = async (req, res) => {
  const alumnos = await MDB_ALUMNOS.find();
  const cobros = await MDB_COBROS.find();
  const stast = [];

  const alumnosStasts = {
    titulo: "Alumno creados",
    contador: alumnos.length,
    url: "/alumnos",
  };

  stast.push(alumnosStasts);

  const cobroStasts = {
    titulo: "Cobros creados",
    contador: cobros.length,
    url: "/cobros",
  };
  stast.push(cobroStasts);

  res.send(stast);
};

module.exports = {
  getStasts,
};
