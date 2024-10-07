const mongoose = require('mongoose');

const PoblacionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    geographic_area: { type: String, required: true },
    province: { type: String, required: true }
  },
  population: {
    year: { type: Number, required: true },
    number: { type: Number, required: true }
  },
  languages_spoken: [{ type: String }],
  social_structure: {
    clans: [{ type: String }],
    leadership: { type: String, required: true },
    cultural_practices: { type: String }
  }
});

module.exports = mongoose.model('indigenous_groups', PoblacionSchema);
