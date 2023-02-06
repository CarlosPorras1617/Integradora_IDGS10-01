const {Router} = require('express');
const express = require ('express');
//get instance
const router = express.Router();
//controller where petitions are made
const datosController = require('../controllers/datos.controller');

router.get('/', datosController.getDatos);
router.post('/', datosController.addDatos);
router.get('/:id', datosController.getDato);
router.put('/:id', datosController.putDato);
router.delete('/:id', datosController.deleteDato);

module.exports = router;