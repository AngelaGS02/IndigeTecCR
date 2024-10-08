const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const Receta = require('../models/Receta');

// Crear un conjunto de controladores para Receta
const controller = crudController(Receta);

// Rutas para Poblacion
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

// Obtener la proporción de productos usados en todas las recetas
router.get('/proporcion', async (req, res) => {
    try {
      const recetas = await Receta.aggregate([
        // Descomponer los ingredientes de la receta
        { $unwind: '$ingredients' },
        
        // Buscar los ingredientes en la colección de productos por nombre
        {
          $lookup: {
            from: 'indigenous_ingredients', // Nombre de la colección de ingredientes
            localField: 'ingredients.name_spanish',
            foreignField: 'name_spanish',
            as: 'ingredient_details',
          },
        },
  
        // Calcular la proporción de cada ingrediente en la receta
        {
          $group: {
            _id: '$recipe_name',
            totalIngredients: { $sum: 1 },
            ingredients: {
              $push: {
                name_spanish: '$ingredients.name_spanish',
                proportion: { $literal: 1 },
                found_in_products: { $cond: [{ $gt: [{ $size: '$ingredient_details' }, 0] }, true, false] }
              }
            },
          },
        },
  
        // Calcular la proporción para cada ingrediente
        {
          $project: {
            _id: 1,
            ingredients: {
              $map: {
                input: '$ingredients',
                as: 'ingredient',
                in: {
                  name_spanish: '$$ingredient.name_spanish',
                  proportion: { $divide: [1, '$totalIngredients'] }, // Calcular la proporción
                  found_in_products: '$$ingredient.found_in_products',
                },
              },
            },
          },
        },
      ]);
  
      res.json(recetas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
