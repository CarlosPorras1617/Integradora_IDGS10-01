const mongoose = require('mongoose');
const {Schema} = mongoose;

const usuariosSchema = new Schema({
    nombre: {type: String, required: true},
    apellidoma: {type: String, required: true},
    apellidopa: {type: String, required: true},
    correo: {type: String, required: true},
    contrasena:{type: String, required: true},
    edad: {type: Number, required: true}
});

module.exports = mongoose.model('usuarios', usuariosSchema);