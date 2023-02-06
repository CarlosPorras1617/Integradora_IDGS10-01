const {Router} = require('express');
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');
const usuariosModel = require('../models/usuarios.model');

router.get('/', usuariosController.getUsuarios);
router.post('/', usuariosController.addUsuarios);
router.get('/:id', usuariosController.getUser);
router.put('/:id', usuariosController.putUser);
router.delete('/:id', usuariosController.deleteUser);

module.exports = router;