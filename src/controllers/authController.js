// src/controladores/authController.js
/* const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM Users WHERE email = ?', [email], async (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else if (results.length === 0) {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    } else {
      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    }
  });
}; */

/* const createError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Buscar el usuario por email
    const [user] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
    if (user) {
      // Comprobar si la contraseña es correcta
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        // Crear y firmar el token
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );
        res.json({ token });
      } else {
        // Contraseña incorrecta
        throw new Error('Credenciales incorrectas');
      }
    } else {
      // Usuario no encontrado
      throw new Error('Credenciales incorrectas');
    }
  } catch (error) {
    next(error);
  }
}; */
/* 
exports.register = async (req, res) => {
  // Extraer datos del cuerpo de la solicitud
  const { name, email, password } = req.body;

  try {
    // Validar los datos del usuario (por ejemplo, que el email no esté ya en uso)
    
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Guardar el usuario en la base de datos
    const result = await db.query('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

    // Enviar respuesta exitosa
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    // Manejar errores (por ejemplo, email ya en uso)
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
 */
// Función de registro de usuario
/* exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insertar el nuevo usuario en la base de datos
    await db.query('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

    // Enviar una respuesta exitosa
    res.status(201).json({ message: "Usuario registrado exitosamente." });
  } catch (error) {
    // Si hay un error, pase al middleware de manejo de errores
    next(error);
  }
}; */

/* const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Se requiere token para autenticación' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token no válido' });
    }
    req.user = decoded;
    next();
  });
}; */

const { User } = require('../models'); // Esto importaría todos tus modelos si los exportas desde un `index.js` en tu carpeta `models`.
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    next(error);
  }
}

exports.refreshToken = (req, res) => {
  const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}

exports.logout = (req, res) => {
  // refrescar el token
  
  res.json({ message: 'Logout exitoso' });
}