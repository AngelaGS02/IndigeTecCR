import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import api from '../services/api';

interface Festividad {
  _id?: string;
  Nombre_Original: string;
  Fecha: string;
  Actividades?: string;
  Quien_Puede_Asistir?: string;
  Implicaciones?: string;
}

const AddEditFestividad: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [festividad, setFestividad] = useState<Festividad>({
    Nombre_Original: '',
    Fecha: '',
    Actividades: '',
    Quien_Puede_Asistir: '',
    Implicaciones: ''
  });

  useEffect(() => {
    if (id) {
      // Si hay un ID, estamos en modo edición; obtener los datos de la festividad
      const fetchFestividad = async () => {
        try {
          const response = await api.get(`/festividades/${id}`);
          setFestividad(response.data);
        } catch (error) {
          console.error('Error al obtener la festividad:', error);
        }
      };

      fetchFestividad();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFestividad({ ...festividad, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (id) {
        // Modo edición
        await api.put(`/festividades/${id}`, festividad);
      } else {
        // Modo creación
        await api.post('/festividades', festividad);
      }
      navigate('/festividades'); // Redirigir a la lista de festividades
    } catch (error) {
      console.error('Error al guardar la festividad:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {id ? 'Editar Festividad' : 'Añadir Festividad'}
      </Typography>
      <TextField
        label="Nombre Original"
        name="Nombre_Original"
        variant="outlined"
        fullWidth
        margin="normal"
        value={festividad.Nombre_Original}
        onChange={handleChange}
      />
      <TextField
        label="Fecha"
        name="Fecha"
        variant="outlined"
        fullWidth
        margin="normal"
        value={festividad.Fecha}
        onChange={handleChange}
      />
      <TextField
        label="Actividades"
        name="Actividades"
        variant="outlined"
        fullWidth
        margin="normal"
        value={festividad.Actividades}
        onChange={handleChange}
      />
      <TextField
        label="Quién Puede Asistir"
        name="Quien_Puede_Asistir"
        variant="outlined"
        fullWidth
        margin="normal"
        value={festividad.Quien_Puede_Asistir}
        onChange={handleChange}
      />
      <TextField
        label="Implicaciones"
        name="Implicaciones"
        variant="outlined"
        fullWidth
        margin="normal"
        value={festividad.Implicaciones}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: '20px' }}
      >
        {id ? 'Guardar Cambios' : 'Añadir Festividad'}
      </Button>
    </Container>
  );
};

export default AddEditFestividad;
