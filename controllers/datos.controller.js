//instance from model of db collection
const datosModel = require('../models/datos.model');
//store all methods of the controller when we intance it
const datosController = {};

datosController.getDatos = async (req, res) => {
    try {
        const datos = await datosModel.find()
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({'El error fue por': error.message});
    }
}

datosController.addDatos = async (req, res) => {
    try {
        //gets all body information
        const datos = new datosModel(req.body);
        await datos.save();
        res.status(200).json({'status':'Insertado Correctamente'});
    } catch (error) {
        res.status(500).json({'El error fue por: ': error.message});
    }

}

datosController.getDato = async (req, res) => {
    try {
        const dato = await datosModel.findById(req.params.id);
        res.status(200).json(dato);
    } catch (error) {
        res.status(500).json({'El error fue por: ' : error.message});
    }
}

datosController.putDato = async (req, res) => {
    try {
        await datosModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({'status': 'Datos Actualizados'})
    } catch (error) {
        res.status(500).json({'El error fue por: ': error.message});
    }
}

datosController.deleteDato = async (req, res)=>{
    try {
        await datosModel.findByIdAndDelete(req.params.id);
        res.status(200).json(({'Status':'Datos Eliminados'}));
    } catch (error) {
        res.status(500).json(({'El error fue por: ':error.message}));
    }
}

module.exports = datosController;