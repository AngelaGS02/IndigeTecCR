const mongoose = require('mongoose');

// Controlador CRUD genérico
const crudController = (Model) => ({
  // Obtener todos los documentos
  getAll: async (req, res) => {
    try {
      const documents = await Model.find();
      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Obtener un documento por ID
  getById: async (req, res) => {
    try {
      const document = await Model.findById(req.params.id);
      if (!document) {
        return res.status(404).json({ message: 'Documento no encontrado' });
      }
      res.json(document);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Crear un nuevo documento
  create: async (req, res) => {
    const newDocument = new Model(req.body);
    try {
      const savedDocument = await newDocument.save();
      res.status(201).json(savedDocument);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Actualizar un documento por ID
  update: async (req, res) => {
    try {
      const updatedDocument = await Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedDocument) {
        return res.status(404).json({ message: 'Documento no encontrado' });
      }
      res.json(updatedDocument);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Eliminar un documento por ID
  delete: async (req, res) => {
    try {
      const deletedDocument = await Model.findByIdAndDelete(req.params.id);
      if (!deletedDocument) {
        return res.status(404).json({ message: 'Documento no encontrado' });
      }
      res.json({ message: 'Documento eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
});

module.exports = crudController;
