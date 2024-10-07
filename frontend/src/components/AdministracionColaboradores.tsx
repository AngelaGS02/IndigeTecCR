import React from 'react';
import { Container, Button, Typography } from '@mui/material';

const AdministracionColaboradores: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Administración de Colaboradores
      </Typography>

      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
        Añadir Colaborador
      </Button>
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
        Editar Colaboradores
      </Button>
      <Button variant="contained" color="primary" fullWidth>
        Ver Top 5 Colaboradores
      </Button>
    </Container>
  );
};

export default AdministracionColaboradores;
