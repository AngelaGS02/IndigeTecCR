import React from 'react';
import { Container, Button, Typography } from '@mui/material';

const AdministrarPoblaciones: React.FC = () => {
  const handleAction = (action: string) => {
    // Lógica para administrar las poblaciones según la acción
    console.log(`${action} población`);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Administrar Poblaciones
      </Typography>
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => handleAction('Añadir')}>
        Añadir Población
      </Button>
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => handleAction('Editar')}>
        Editar Población
      </Button>
      <Button variant="contained" color="primary" fullWidth onClick={() => handleAction('Eliminar')}>
        Eliminar Población
      </Button>
    </Container>
  );
};

export default AdministrarPoblaciones;
