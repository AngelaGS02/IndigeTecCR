import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        404 - Página No Encontrada
      </Typography>
      <Typography variant="body1">
        La página que estás buscando no existe.
      </Typography>
    </Container>
  );
};

export default NotFound;
