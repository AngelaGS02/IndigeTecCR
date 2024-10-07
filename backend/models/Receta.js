const mongoose = require('mongoose');

const RecetaSchema = new mongoose.Schema({
  recipe_name: { type: String, required: true },
  province: { type: String }, // Campo opcional para la provincia
  ingredients: [{
    name_spanish: String,
    names_indigenous_languages: {
      type: Map,
      of: String
    },
    quantity: String
  }],
  preparation_steps: [String],
  preparation_time: { type: String, required: true },
  occasion: String,
  who_prepares: String,
  used_for_festivities: { type: Boolean, required: true }
});

module.exports = mongoose.model('recipes', RecetaSchema);
