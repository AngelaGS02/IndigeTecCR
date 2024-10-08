import React, { useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import AñadirReceta from '../components/AñadirReceta';
import EditarRecetas from '../components/EditarRecetas';
import AñadirIngrediente from '../components/AñadirIngrediente';
import AdministrarPoblaciones from '../components/AdministrarPoblaciones';

const Colaborador: React.FC = () => {
  const [currentView, setCurrentView] = useState<string | null>(null);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Panel del Colaborador
      </Typography>

      {/* Botones para cambiar entre vistas */}
      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => setCurrentView('añadirReceta')}>
        Añadir Nueva Receta
      </Button>

      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => setCurrentView('editarRecetas')}>
        Editar Recetas
      </Button>

      <Button variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} onClick={() => setCurrentView('añadirIngrediente')}>
        Añadir Nuevo Ingrediente
      </Button>

      <Button variant="contained" color="primary" fullWidth onClick={() => setCurrentView('administrarPoblaciones')}>
        Administrar Poblaciones
      </Button>

      {/* Renderizar el componente según la vista seleccionada */}
      {currentView === 'añadirReceta' && <AñadirReceta />}
      {currentView === 'editarRecetas' && <EditarRecetas />}
      {currentView === 'añadirIngrediente' && <AñadirIngrediente />}
      {currentView === 'administrarPoblaciones' && <AdministrarPoblaciones />}
    </Container>
  );
};

export default Colaborador;
