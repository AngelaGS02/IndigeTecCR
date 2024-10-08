import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redireccionar
import api from '../services/api';

const Recetas: React.FC = () => {
  const [recetas, setRecetas] = useState([]);
  const navigate = useNavigate(); // Inicializar useNavigate para redirección

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

  // Manejar la redirección a la página de edición
  const handleUpdate = (id: string) => {
    navigate(`/recetas/edit/${id}`);
  };

  // Manejar la eliminación de la receta
  const handleDelete = async (id: string) => {
    try {
        console.log("Eliminando Receta...");
        
      await api.delete(`/recetas/${id}`);
      // Actualizar la lista de recetas después de la eliminación
      setRecetas(recetas.filter((receta: any) => receta._id !== id));
    } catch (error) {
      console.error('Error al eliminar la receta:', error);
    }
  };

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
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleUpdate(receta._id)}
              style={{ marginRight: '10px' }}
            >
              Editar
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => handleDelete(receta._id)}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Recetas;
