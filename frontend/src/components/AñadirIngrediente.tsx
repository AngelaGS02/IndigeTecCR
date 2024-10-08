import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const AñadirIngrediente: React.FC = () => {
  const [ingrediente, setIngrediente] = useState({ nombre: '', grupo: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngrediente({ ...ingrediente, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Lógica para agregar un ingrediente (llamada a la API)
    
    console.log('Ingrediente añadido:', ingrediente);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Añadir Nuevo Ingrediente
      </Typography>
      <TextField
        name="nombre"
        label="Nombre del Ingrediente"
        variant="outlined"
        fullWidth
        value={ingrediente.nombre}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        name="grupo"
        label="Grupo"
        variant="outlined"
        fullWidth
        value={ingrediente.grupo}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Añadir Ingrediente
      </Button>
    </Container>
  );
};

export default AñadirIngrediente;
