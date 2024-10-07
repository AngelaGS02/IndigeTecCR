import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Herencias
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/recetas">Recetas</Button>
        <Button color="inherit" component={Link} to="/poblaciones">Poblaciones</Button>
        <Button color="inherit" component={Link} to="/ingredientes">Ingredientes</Button>
        <Button color="inherit" component={Link} to="/festividades">Festividades</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/investigador">Investigadores</Button>
        <Button color="inherit" component={Link} to="/colaborador">Colaborador</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
