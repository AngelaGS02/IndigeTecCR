const mongoose = require('mongoose');

const IngredienteSchema = new mongoose.Schema({
  name_spanish: { type: String, required: true },
  names_indigenous_languages: {
    type: Map,
    of: String
  },
  production_location: { type: String, required: true },
  exists_today: { type: Boolean, required: true },
  consumption_by_group: {
    type: Map,
    of: new mongoose.Schema({
      frequency: String,
      uses: String
    })
  }
});

module.exports = mongoose.model('indigenous_ingredients', IngredienteSchema);
