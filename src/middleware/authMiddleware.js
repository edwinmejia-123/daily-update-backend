// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const verifyToken = (req, res, next) => {
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
};

module.exports = {
  verifyToken
};