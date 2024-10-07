import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import api from '../services/api';

const Poblaciones: React.FC = () => {
  const [poblaciones, setPoblaciones] = useState([]);

  useEffect(() => {
    const fetchpoblaciones = async () => {
      try {
        const response = await api.get('/poblaciones');
        setPoblaciones(response.data);
      } catch (error) {
        console.error('Error al obtener poblaciones:', error);
      }
    };

    fetchpoblaciones();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>poblaciones</Typography>
      <List>
        {poblaciones.map((poblacion: any) => (
          <ListItem key={poblacion._id}>
            <ListItemText 
              primary={poblacion.name} 
              secondary={`Poblacion: ${poblacion.population.number}`} 
            />
            <Button variant="contained" color="primary">Editar</Button>
            <Button variant="contained" color="secondary">Eliminar</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Poblaciones;
