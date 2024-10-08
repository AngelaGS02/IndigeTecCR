import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditarReceta: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [receta, setReceta] = useState({
    recipe_name: '',
    province: '',
    ingredients: [{ name_spanish: '', names_indigenous_languages: {}, quantity: '' }],
    preparation_steps: [''],
    preparation_time: '',
    occasion: '',
    who_prepares: '',
    used_for_festivities: false,
  });

  useEffect(() => {
    // Obtener datos de la receta para editar
    const fetchReceta = async () => {
      try {
        const response = await api.get(`/recetas/${id}`);
        setReceta(response.data);
      } catch (error) {
        console.error('Error al obtener receta:', error);
      }
    };
    fetchReceta();
  }, [id]);

  // Manejador de cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReceta({ ...receta, [name]: value });
  };

  // Manejador para los ingredientes
  const handleIngredientChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newIngredients = [...receta.ingredients];
    newIngredients[index] = { ...newIngredients[index], [name]: value };
    setReceta({ ...receta, ingredients: newIngredients });
  };

  // Añadir un nuevo ingrediente
  const addIngredient = () => {
    setReceta({
      ...receta,
      ingredients: [...receta.ingredients, { name_spanish: '', names_indigenous_languages: {}, quantity: '' }],
    });
  };

  // Manejador para las preparaciones
  const handleStepChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newSteps = [...receta.preparation_steps];
    newSteps[index] = e.target.value;
    setReceta({ ...receta, preparation_steps: newSteps });
  };

  // Añadir un nuevo paso de preparación
  const addStep = () => {
    setReceta({ ...receta, preparation_steps: [...receta.preparation_steps, ''] });
  };

  // Actualizar receta en el backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/recetas/${id}`, receta);
      navigate('/recetas'); // Redirigir a la página de recetas
    } catch (error) {
      console.error('Error al actualizar la receta:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Editar Receta</Typography>
      <form onSubmit={handleSubmit}>
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

        <Typography variant="h6">Ingredientes</Typography>
        {receta.ingredients.map((ingredient, index) => (
          <div key={index}>
            <TextField
              name="name_spanish"
              label="Nombre en Español"
              variant="outlined"
              fullWidth
              value={ingredient.name_spanish}
              onChange={(e) => handleIngredientChange(index, e as any)}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              name="quantity"
              label="Cantidad"
              variant="outlined"
              fullWidth
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, e as any)}
              style={{ marginBottom: '10px' }}
            />
          </div>
        ))}
        <Button variant="contained" onClick={addIngredient} style={{ marginBottom: '10px' }}>
          Añadir Ingrediente
        </Button>

        <Typography variant="h6">Pasos de Preparación</Typography>
        {receta.preparation_steps.map((step, index) => (
          <TextField
            key={index}
            label={`Paso ${index + 1}`}
            variant="outlined"
            fullWidth
            value={step}
            onChange={(e) => handleStepChange(index, e as any)}
            style={{ marginBottom: '10px' }}
          />
        ))}
        <Button variant="contained" onClick={addStep} style={{ marginBottom: '10px' }}>
          Añadir Paso
        </Button>

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
          label="¿Quién Prepara?"
          variant="outlined"
          fullWidth
          value={receta.who_prepares}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={receta.used_for_festivities}
              onChange={(e) => setReceta({ ...receta, used_for_festivities: e.target.checked })}
              name="used_for_festivities"
            />
          }
          label="Usado para Festividades"
          style={{ marginBottom: '10px' }}
        />

        <Button variant="contained" color="primary" type="submit">
          Guardar Cambios
        </Button>
      </form>
    </Container>
  );
};

export default EditarReceta;
