const MDB_STUDENTS = require("../database/schemas/alumnos");
const Pagos = require("../database/schemas/pagos");

const obtenerAlumnoIndividual = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await MDB_STUDENTS.findById(id).exec();

    const pagos = await Pagos.find({ alumno_id: id }).populate("cobro_id");

    let pagosTotal = 0;
    let pagosPendientes = 0;
    let pagosAbonados = 0;

    for (let i = 0; i < pagos.length; i++) {
      if (pagos[i].pagado) {
        pagosAbonados += pagos[i].cobro_id.monto;
      } else {
        pagosPendientes += pagos[i].cobro_id.monto;
      }
      pagosTotal += pagos[i].cobro_id.monto;
    }

    const alumnoResponse = {
      ...alumno._doc,
      pagos: pagos.map((pago) => pago._doc),
      totalPagos: pagosTotal,
      pagosPendientes,
      pagosAbonados,
    };

    res.status(200).send({ ...alumnoResponse });
  } catch (error) {
    res.status(500).send({ status: "Error", error });
  }
};

const obtenerAlumnos = async (req, res) => {
  try {
    const alumnos = await MDB_STUDENTS.find().sort({ fechaCreacion: -1 }); // Ordenar por fechaCreacion en orden descendente
    const respuesta = alumnos.map((alumno) => {
      const fechaNacimiento = new Date(alumno.fecha_nacimiento);
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const mes = hoy.getMonth() - fechaNacimiento.getMonth();

      if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() - fechaNacimiento.getDate() < 0)
      ) {
        edad--;
      }

      return {
        ...alumno._doc,
        edad,
      };
    });

    res.status(200).send(respuesta);
  } catch (error) {
    res.status(500).send({ status: "Error", error });
  }
};

const crearAlumno = async (req, res) => {
  try {
    const response = await MDB_STUDENTS.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ status: "Error", error });
  }
};

const eliminarAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await MDB_STUDENTS.findByIdAndDelete(id);
    res.send({ status: "OK", response });
  } catch (error) {
    res.status(500).send({ status: "Error", error });
  }
};

module.exports = {
  obtenerAlumnos,
  crearAlumno,
  eliminarAlumno,
  obtenerAlumnoIndividual,
};
