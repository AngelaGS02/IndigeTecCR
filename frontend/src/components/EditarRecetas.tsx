import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';

const EditarRecetas: React.FC = () => {
  const [receta, setReceta] = useState({
    id: '',
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
      setReceta({ ...receta, [name]: checked });
    } else if (name.includes('ingredients')) {
      const [_, index, field] = name.split('.');
      setReceta({
        ...receta,
        ingredients: receta.ingredients.map((ing, i) =>
          i === Number(index) ? { ...ing, [field]: value } : ing
        ),
      });
    } else {
      setReceta({ ...receta, [name]: value });
    }
  };

  // Añadir un nuevo ingrediente al array
  const handleAddIngredient = () => {
    setReceta({
      ...receta,
      ingredients: [...receta.ingredients, { name_spanish: '', names_indigenous_languages: {}, quantity: '' }]
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = async () => {
    try {
      console.log(receta)
      const response = await axios.patch(`http://localhost:5000/api/recetas/${receta.id}`, receta);
      console.log('Receta editada:', response.data);
      // Limpiar el formulario después de la edición
      setReceta({
        id: '',
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
      console.error('Error al editar la receta:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Editar Receta
      </Typography>

      {/* Campo para el ID de la receta a editar */}
      <TextField
        name="id"
        label="ID de la Receta"
        variant="outlined"
        fullWidth
        value={receta.id}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="recipe_name"
        label="Nombre de la Receta"
        variant="outlined"
        fullWidth
        value={receta.recipe_name}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="province"
        label="Provincia"
        variant="outlined"
        fullWidth
        value={receta.province}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <Typography variant="h6" gutterBottom>
        Ingredientes
      </Typography>
      {receta.ingredients.map((ingredient, index) => (
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
        value={receta.preparation_steps.join(', ')}
        onChange={(e) =>
          setReceta({ ...receta, preparation_steps: e.target.value.split(',').map((step) => step.trim()) })
        }
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="preparation_time"
        label="Tiempo de Preparación"
        variant="outlined"
        fullWidth
        value={receta.preparation_time}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="occasion"
        label="Ocasión"
        variant="outlined"
        fullWidth
        value={receta.occasion}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <TextField
        name="who_prepares"
        label="Quién Prepara"
        variant="outlined"
        fullWidth
        value={receta.who_prepares}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="used_for_festivities"
            checked={receta.used_for_festivities}
            onChange={handleChange}
          />
        }
        label="¿Usado para Festividades?"
      />

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Editar Receta
      </Button>
    </Container>
  );
};

export default EditarRecetas;
