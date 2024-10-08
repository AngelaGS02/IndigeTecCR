import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';

const AñadirReceta: React.FC = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    recipe_name: '',
    province: '',
    ingredients: [{ name_spanish: '', names_indigenous_languages: {}, quantity: '' }],
    preparation_steps: [''],
    preparation_time: '',
    occasion: '',
    who_prepares: '',
    used_for_festivities: false
  });

  // Manejador de cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name.includes('ingredients')) {
      const [_, index, field] = name.split('.');
      setFormData({
        ...formData,
        ingredients: formData.ingredients.map((ing, i) =>
          i === Number(index) ? { ...ing, [field]: value } : ing
        ),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Añadir un nuevo ingrediente al array
  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name_spanish: '', names_indigenous_languages: {}, quantity: '' }]
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/recetas', formData);
      console.log('Receta añadida:', response.data);
      // Limpiar el formulario después de añadir la receta
      setFormData({
        recipe_name: '',
        province: '',
        ingredients: [{ name_spanish: '', names_indigenous_languages: {}, quantity: '' }],
        preparation_steps: [''],
        preparation_time: '',
        occasion: '',
        who_prepares: '',
        used_for_festivities: false
      });
    } catch (error) {
      console.error('Error al añadir la receta:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Añadir Nueva Receta
      </Typography>

      {/* Campos de formulario */}
      <TextField
        name="recipe_name"
        label="Nombre de la Receta"
        variant="outlined"
        fullWidth
        value={formData.recipe_name}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="province"
        label="Provincia"
        variant="outlined"
        fullWidth
        value={formData.province}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <Typography variant="h6" gutterBottom>
        Ingredientes
      </Typography>
      {formData.ingredients.map((ingredient, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <TextField
            name={`ingredients.${index}.name_spanish`}
            label="Nombre en Español"
            variant="outlined"
            fullWidth
            value={ingredient.name_spanish}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            name={`ingredients.${index}.quantity`}
            label="Cantidad"
            variant="outlined"
            fullWidth
            value={ingredient.quantity}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
          {/* Para 'names_indigenous_languages' se podría crear un input similar o expandir según el caso */}
        </div>
      ))}
      <Button variant="outlined" onClick={handleAddIngredient} style={{ marginBottom: '10px' }}>
        Añadir Ingrediente
      </Button>

      <TextField
        name="preparation_steps"
        label="Pasos de Preparación (separados por comas)"
        variant="outlined"
        fullWidth
        value={formData.preparation_steps.join(', ')}
        onChange={(e) =>
          setFormData({ ...formData, preparation_steps: e.target.value.split(',').map((step) => step.trim()) })
        }
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="preparation_time"
        label="Tiempo de Preparación"
        variant="outlined"
        fullWidth
        value={formData.preparation_time}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="occasion"
        label="Ocasión"
        variant="outlined"
        fullWidth
        value={formData.occasion}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="who_prepares"
        label="Quién Prepara"
        variant="outlined"
        fullWidth
        value={formData.who_prepares}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="used_for_festivities"
            checked={formData.used_for_festivities}
            onChange={handleChange}
          />
        }
        label="¿Usado para Festividades?"
      />

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Añadir Receta
      </Button>
    </Container>
  );
};

export default AñadirReceta;
