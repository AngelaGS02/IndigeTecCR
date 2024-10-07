import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import ResumenGeneral from '../components/ResumenGeneral';
import EstadoProductosReceta from '../components/EstadoProductosReceta';
import ActividadRecetas from '../components/ActividadRecetas';
import AdministracionColaboradores from '../components/AdministracionColaboradores';
import NotificacionesAlertas from '../components/NotificacionesAlertas';

const Investigador: React.FC = () => {
  const [currentView, setCurrentView] = React.useState<string | null>(null);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Panel del Investigador
      </Typography>
      
      {/* Botones para cambiar entre las vistas */}
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => setCurrentView('resumen')}>
        Resumen General
      </Button>
      
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => setCurrentView('estado')}>
        Estado de Productos por Receta
      </Button>
      
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => setCurrentView('actividad')}>
        Actividad de Recetas
      </Button>
      
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => setCurrentView('administracion')}>
        Administración de Colaboradores
      </Button>
      
      <Button variant="contained" color="primary" fullWidth onClick={() => setCurrentView('notificaciones')}>
        Notificaciones y Alertas
      </Button>

      {/* Renderizar el componente según la vista seleccionada */}
      {currentView === 'resumen' && <ResumenGeneral />}
      {currentView === 'estado' && <EstadoProductosReceta />}
      {currentView === 'actividad' && <ActividadRecetas />}
      {currentView === 'administracion' && <AdministracionColaboradores />}
      {currentView === 'notificaciones' && <NotificacionesAlertas />}
    </Container>
  );
};

export default Investigador;
