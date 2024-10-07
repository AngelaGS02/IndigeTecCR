const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const Ingrediente = require('../models/Ingrediente');

// Crear un conjunto de controladores para Poblacion
const controller = crudController(Ingrediente);

// Rutas para Poblacion
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
