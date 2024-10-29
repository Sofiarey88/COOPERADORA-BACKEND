const MDB_PAGOS = require("../database/schemas/pagos");

const getPagos = async (req, res) => {
  const pagos = await MDB_PAGOS.find()
    .populate("alumno_id")
    .populate("cobro_id");

  res.send({ pagos });
};

const postPagos = async (req, res) => {
  try {
    const { body } = req;
    const response = await MDB_PAGOS.create(body);
    res.send({ ...response._doc });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePago = async (req, res) => {
  try {
    const { body } = req;
    const { id } = body;
    const response = await MDB_PAGOS.findByIdAndUpdate(id, { pagado: true });
    res.send({ ...response._doc });
  } catch (error) {
    res.status(500).send(error);
  }
};

const obtenerPagoIndividual = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await MDB_PAGOS.findById(id)
      .populate("alumno_id")
      .populate("cobro_id");
    res.send({ ...response._doc });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getPagos,
  postPagos,
  updatePago,
  obtenerPagoIndividual,
};
