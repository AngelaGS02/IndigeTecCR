import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import api from '../services/api';

const AddEditReceta: React.FC = () => {
  const [recipeName, setRecipeName] = useState('');
  const [preparationTime, setPreparationTime] = useState('');

  const handleSave = async () => {
    try {
      const receta = { recipe_name: recipeName, preparation_time: preparationTime };
      await api.post('/recetas', receta);
      // Manejar respuesta y redirigir al listado de recetas
    } catch (error) {
      console.error('Error al guardar la receta:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Agregar/Editar Receta</Typography>
      <TextField 
        label="Nombre de la receta" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)} 
      />
      <TextField 
        label="Tiempo de preparación" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={preparationTime}
        onChange={(e) => setPreparationTime(e.target.value)} 
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSave}>
        Guardar
      </Button>
    </Container>
  );
};

export default AddEditReceta;
