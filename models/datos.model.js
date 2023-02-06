const mongoose = require('mongoose');
//the scheme that store the model
const {Schema} = mongoose;

const datosSchema = new Schema({
    frecuencia:Number,
    oxigenacion:Number,
    respiracion:Number,
    estres:String,
    sueno:Date,
    pasos:Number,
    ubicacion:{
        X:Number,
        Y:Number
    },
    avisos:String
});

module.exports = mongoose.model('tabladatos', datosSchema);