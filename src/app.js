// app.js
const express = require('express');
const authRoutes = require('./routes/authRutas');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar las solicitudes JSON
app.use(express.json());

// Rutas de autenticación
app.use('/auth', authRoutes);

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