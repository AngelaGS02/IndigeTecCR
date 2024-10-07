import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import api from '../services/api';

const Recetas: React.FC = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const response = await api.get('/recetas');
        setRecetas(response.data);
      } catch (error) {
        console.error('Error al obtener recetas:', error);
      }
    };

    fetchRecetas();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Recetas</Typography>
      <List>
        {recetas.map((receta: any) => (
          <ListItem key={receta._id}>
            <ListItemText 
              primary={receta.recipe_name} 
              secondary={`Preparación: ${receta.preparation_time}`} 
            />
            <Button variant="contained" color="primary">Editar</Button>
            <Button variant="contained" color="secondary">Eliminar</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Recetas;
