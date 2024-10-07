import React from 'react';
import { Container, Typography } from '@mui/material';

const NotificacionesAlertas: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Notificaciones y Alertas
      </Typography>

      {/* Aquí se incluirían las notificaciones relacionadas con grupos sin actividad */}
      <Typography variant="body1">
        No hay actividad en los grupos: Grupo 1, Grupo 2.
      </Typography>
    </Container>
  );
};

export default NotificacionesAlertas;
