// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(createError(403, "Se requiere token para autenticación"));
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(createError(401, "Token no válido"));
    }

    req.user = decoded;
    next();
  });
};

module.exports = {
  verifyToken,
};
