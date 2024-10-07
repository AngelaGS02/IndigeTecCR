import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar `createRoot` de `react-dom/client`
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Crear el root container
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

// Usar `root.render` en lugar de `ReactDOM.render`
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
