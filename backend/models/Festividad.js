const mongoose = require('mongoose');

const FestividadSchema = new mongoose.Schema({
  Nombre_Original: { type: String, required: true },
  Fecha: { type: String, required: true },
  Actividades: String,
  Quien_Puede_Asistir: String,
  Implicaciones: String
});

module.exports = mongoose.model('festivities', FestividadSchema);
