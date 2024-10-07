import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Recetas from './pages/Recetas';
import Poblaciones from './pages/Poblaciones';
import Ingredientes from './pages/Ingredientes';
import Festividades from './pages/Festividades';
import AddEditFestividad from './pages/AddEditFestividad';
import Investigador from './pages/Investigador';
import Colaborador from './pages/Colaborador';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recetas" element={<Recetas />} />
      <Route path="/poblaciones" element={<Poblaciones />} />
      <Route path="/ingredientes" element={<Ingredientes />} />
      <Route path="/festividades" element={<Festividades />} />
      <Route path="/festividades/add" element={<AddEditFestividad />} />
      <Route path="/festividades/edit/:id" element={<AddEditFestividad />} />
      {/* Nuevas rutas */}
      <Route path="/investigador" element={<Investigador />} />
      <Route path="/colaborador" element={<Colaborador />} />
    </Routes>
  );
};

export default AppRouter;
