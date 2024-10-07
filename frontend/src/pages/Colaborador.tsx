import React from 'react';
import { Container, Button, Typography } from '@mui/material';

const Colaborador: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Panel del Colaborador
      </Typography>
      
      {/* Botones para las funcionalidades CRUD */}
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
        Añadir Nueva Receta
      </Button>
      
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
        Editar Recetas
      </Button>
      
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
        Añadir Nuevo Ingrediente
      </Button>
      
      <Button variant="contained" color="primary" fullWidth>
        Administrar Poblaciones
      </Button>
    </Container>
  );
};

export default Colaborador;
