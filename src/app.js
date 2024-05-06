// app.js
require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

const { sequelize } = require('./models');

sequelize.sync({ force: false }) // Utiliza { force: true } SOLO si quieres que reinicie la DB
  .then(() => {
    console.log("Tablas creadas y actualizadas");
    app.listen(3000, () => {
      console.log("Servidor ejecutándose en el puerto 3000");
    });
  })
  .catch(error => {
    console.error("Error al sincronizar las tablas de la base de datos:", error);
  });
// Middleware para analizar las solicitudes JSON
app.use(express.json());

// Rutas de autenticación
app.use('/auth', authRoutes);

// Rutas de empleados (protegidas por autenticación) y por role de empleados
app.use('/user', userRoutes);

app.use((error, req, res, next) => {
  // Log del error para el servidor
  console.error(error);

  // Responde con el código de estado del error si está disponible, o un 500 de otra forma
  res.status(error.status || 500);
  
  // Enviar mensaje de error
  res.json({
    error: {
      message: error.message || 'Ha ocurrido un error en el servidor'
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});