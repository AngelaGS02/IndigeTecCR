import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditarPoblacion: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [poblacion, setPoblacion] = useState({
    name: '',
    location: {
      geographic_area: '',
      province: '',
    },
    population: {
      year: 0,
      number: 0,
    },
    languages_spoken: [''],
    social_structure: {
      clans: [''],
      leadership: '',
      cultural_practices: '',
    },
  });

  useEffect(() => {
    // Obtener datos de la población para editar
    const fetchPoblacion = async () => {
      try {
        const response = await api.get(`/poblaciones/${id}`);
        setPoblacion(response.data);
      } catch (error) {
        console.error('Error al obtener población:', error);
      }
    };
    fetchPoblacion();
  }, [id]);

  // Manejador de cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      // Para campos anidados (por ejemplo, location.geographic_area)
      const [section, key] = name.split('.');
      setPoblacion((prev) => ({
        ...prev,
        [section]: {
            //@ts-ignore
          ...prev[section as keyof typeof poblacion],
          [key]: value,
        },
      }));
    } else {
      // Para campos que no están anidados
      setPoblacion({ ...poblacion, [name]: value });
    }
  };

  // Actualizar población en el backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/poblaciones/${id}`, poblacion);
      navigate('/poblaciones'); // Redirigir a la página de poblaciones
    } catch (error) {
      console.error('Error al actualizar la población:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Editar Población</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          value={poblacion.name}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <Typography variant="h6">Ubicación</Typography>
        <TextField
          name="location.geographic_area"
          label="Área Geográfica"
          variant="outlined"
          fullWidth
          value={poblacion.location.geographic_area}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          name="location.province"
          label="Provincia"
          variant="outlined"
          fullWidth
          value={poblacion.location.province}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <Typography variant="h6">Población</Typography>
        <TextField
          name="population.year"
          label="Año"
          variant="outlined"
          type="number"
          fullWidth
          value={poblacion.population.year}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          name="population.number"
          label="Número"
          variant="outlined"
          type="number"
          fullWidth
          value={poblacion.population.number}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />

        <Button variant="contained" color="primary" type="submit">
          Guardar Cambios
        </Button>
      </form>
    </Container>
  );
};

export default EditarPoblacion;
