import React from 'react';
import AppRouter from './AppRouter';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navbar />
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
