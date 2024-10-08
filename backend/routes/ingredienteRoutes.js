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
// Obtener la proporción de alimentos usados en todos los grupos indígenas
router.get('/proporcion-alimentos', async (req, res) => {
    try {
      const alimentos = await Ingrediente.aggregate([
        // Descomponer el campo `consumption_by_group` en documentos individuales
        {
          $project: {
            name_spanish: 1,
            consumption_by_group: {
              $objectToArray: '$consumption_by_group',
            },
          },
        },
        { $unwind: '$consumption_by_group' },
  
        // Agrupar por el nombre del grupo indígena
        {
          $group: {
            _id: '$consumption_by_group.k', // El nombre del grupo indígena
            totalAlimentos: { $sum: 1 },
            alimentos: {
              $push: {
                name_spanish: '$name_spanish',
                frequency: '$consumption_by_group.v.frequency',
                uses: '$consumption_by_group.v.uses',
              },
            },
          },
        },
  
        // Calcular la proporción de alimentos para cada grupo
        {
          $project: {
            _id: 1,
            alimentos: {
              $map: {
                input: '$alimentos',
                as: 'alimento',
                in: {
                  name_spanish: '$$alimento.name_spanish',
                  frequency: '$$alimento.frequency',
                  uses: '$$alimento.uses',
                  proportion: { $divide: [1, '$totalAlimentos'] }, // Calcular la proporción
                },
              },
            },
          },
        },
      ]);
  
      res.json(alimentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
