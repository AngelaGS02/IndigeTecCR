import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import api from '../services/api';


const Festividades: React.FC = () => {
  const [festividades, setFestividades] = useState([]);

  useEffect(() => {
    const fetchFestividades = async () => {
      try {
        const response = await api.get('/festividades');
        setFestividades(response.data);
      } catch (error) {
        console.error('Error al obtener las festividades:', error);
      }
    };

    fetchFestividades();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/festividades/${id}`);
      setFestividades(festividades.filter((festividad : any) => festividad._id !== id));
    } catch (error) {
      console.error('Error al eliminar la festividad:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Festividades</Typography>
      <List>
        {festividades.map((festividad : any) => (
          <ListItem key={festividad._id} divider>
            <ListItemText
              primary={festividad.Nombre_Original}
              secondary={`Fecha: ${festividad.Fecha}`}
            />
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Editar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(festividad._id)}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Festividades;
