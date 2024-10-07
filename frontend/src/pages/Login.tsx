import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import api from '../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { email, password });
      // Manejar la respuesta y almacenar la sesión
      console.log("Login response: ", response);
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
      <TextField 
        label="Correo electrónico" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <TextField 
        label="Contraseña" 
        type="password" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleLogin}>
        Iniciar Sesión
      </Button>
    </Container>
  );
};

export default Login;
