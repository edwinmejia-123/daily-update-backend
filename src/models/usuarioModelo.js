// modelos/usuarioModelo.js
const mysql = require('mysql');
const dbConfig = require('../config/database');

const db = mysql.createConnection(dbConfig);

const Usuario = {};

Usuario.obtenerTodos = (callback) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (err, usuarios) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, usuarios);
    }
  });
};

module.exports = Usuario;