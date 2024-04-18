// controladores/usuariosController.js
const Usuario = require('../models/usuarioModelo');

exports.obtenerUsuarios = (req, res) => {
  Usuario.obtenerTodos((err, usuarios) => {
    if (err) {
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json(usuarios);
    }
  });
};