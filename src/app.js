// app.js
const express = require('express');
const usuariosRutas = require('./src/routes/usuariosRutas');
const app = express();
const port = process.env.PORT || 3000;

app.use('/usuarios', usuariosRutas);

app.listen(port, () => {
  console.log(`Servidor API en ejecución en http://localhost:${port}`);
});