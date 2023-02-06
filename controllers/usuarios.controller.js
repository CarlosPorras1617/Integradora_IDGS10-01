const usuariosModel = require('../models/usuarios.model');
const usuariosController = {};

usuariosController.getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.find()
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({'El error fue por: ': error.message});
    }
}

usuariosController.addUsuarios = async (req, res) => {
    try {
        const usuarios = new usuariosModel(req.body);
        await usuarios.save();
        res.status(200).json({'status':'Insertado Correctamente'});
    } catch (error) {
        res.status(500).json({'El error fue por: ': error.message});
    }
}

usuariosController.getUser = async (req, res) => {
    try {
        const user = await usuariosModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({'El error fue por': error.message});
    }
}

usuariosController.putUser = async (req, res) => {
    try {
        await usuariosModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({'status': 'Datos Actualizados'});
    } catch (error) {
        res.status(500).json({'El error fue por: ': error.message});
    }
}

usuariosController.deleteUser = async (req, res) => {
    try {
        await usuariosModel.findByIdAndDelete(req.params.id);
        res.status(200).json({'Status':'Usuario Eliminado'});
    } catch (error) {
        res.status(500).json({'El error fue por: ' : error.message});
    }
}

usuariosController

module.exports = usuariosController;