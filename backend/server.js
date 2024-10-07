require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const poblacionRoutes = require('./routes/poblacionRoutes');
const recetasRoutes = require('./routes/recetaRoutes');
const ingredienteRoutes = require('./routes/ingredienteRoutes');
const festividadRoutes = require('./routes/festividadRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Usar las rutas
app.use('/api/poblaciones', poblacionRoutes);
app.use('/api/recetas', recetasRoutes);
app.use('/api/ingredientes', ingredienteRoutes);
app.use('/api/festividades', festividadRoutes);


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
