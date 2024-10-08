import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Poblaciones: React.FC = () => {
  const [poblaciones, setPoblaciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPoblaciones();
  }, []);

  // Obtener todas las poblaciones
  const fetchPoblaciones = async () => {
    try {
      const response = await api.get('/poblaciones');
      setPoblaciones(response.data);
    } catch (error) {
      console.error('Error al obtener poblaciones:', error);
    }
  };

  // Redirigir a la página de edición de población
  const handleUpdate = (id: string) => {
    navigate(`/poblaciones/edit/${id}`);
  };

  // Eliminar población
  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/poblaciones/${id}`);
      // Filtrar la población eliminada de la lista
      setPoblaciones(poblaciones.filter((poblacion: any) => poblacion._id !== id));
    } catch (error) {
      console.error('Error al eliminar la población:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Poblaciones</Typography>
      <List>
        {poblaciones.map((poblacion: any) => (
          <ListItem key={poblacion._id}>
            <ListItemText 
              primary={poblacion.name} 
              secondary={`Población: ${poblacion.population.number}`} 
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleUpdate(poblacion._id)}
              style={{ marginRight: '10px' }}
            >
              Editar
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => handleDelete(poblacion._id)}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Poblaciones;
