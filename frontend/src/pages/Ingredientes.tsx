import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import api from '../services/api';

const Ingredientes: React.FC = () => {
  const [ingredientes, setIngredientes] = useState([]);

  // Obtener la lista de ingredientes al montar el componente
  useEffect(() => {
    const fetchIngredientes = async () => {
      try {
        const response = await api.get('/ingredientes');
        setIngredientes(response.data);
      } catch (error) {
        console.error('Error al obtener ingredientes:', error);
      }
    };

    fetchIngredientes();
  }, []);

  // Función para manejar la eliminación de un ingrediente
  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/ingredientes/${id}`);
      // Actualizar la lista de ingredientes después de eliminar
      setIngredientes(ingredientes.filter((ingrediente: any) => ingrediente._id !== id));
    } catch (error) {
      console.error('Error al eliminar el ingrediente:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Ingredientes</Typography>
      <List>
        {ingredientes.map((ingrediente: any) => (
          <ListItem key={ingrediente._id}>
            <ListItemText 
              primary={ingrediente.name_spanish} 
              secondary={`Ubicación de producción: ${ingrediente.production_location}`} 
            />
            <Button variant="contained" color="primary">Editar</Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => handleDelete(ingrediente._id)}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Ingredientes;
