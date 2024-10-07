import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Bienvenido al Sistema de Herencias
      </Typography>
      <Typography variant="body1">
        Explora las recetas tradicionales, ingredientes, y festividades de los grupos indígenas.
      </Typography>
    </Container>
  );
};

export default Home;
