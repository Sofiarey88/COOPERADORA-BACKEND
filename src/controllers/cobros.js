const MDB_COBROS = require('../database/schemas/cobros');

const modificarCobros = async (req,res) => {

 const response = await MDB_COBROS.find();

res.send(response);
}

const obtenerCobros = async (req,res) =>{

const response = await MDB_COBROS.find();

res.send(response);
}

const obtenerCobrosCobro = async (req,res) =>{

    const response = await MDB_COBROS.find();

    
    res.send(response);

}
const crearCobro = async (req,res) =>{
    try {
        const response = await MDB_COBROS.create(req.body)
        console.log(response);
        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const eliminarCobro = async (req,res) =>{

        const { id } = req.params; 
        console.log(id);
        console.log(req.params.id);
        
        const response =  await MDB_COBROS.findByIdAndDelete(id);
        
        res.send({response});
     
    }




module.exports = {
    obtenerCobros,
    crearCobro,
    eliminarCobro
}