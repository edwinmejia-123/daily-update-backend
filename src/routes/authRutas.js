// src/rutas/authRutas.js
const express = require('express');
const authController = require('../controllers/authController');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/authMiddleware');
const { loginSchema } = require('../models/validation/validationSchemas');

const router = express.Router();

router.post('/login', validate(loginSchema), authController.login);
router.get('/logout', authMiddleware.verifyToken, authController.logout);
router.post('/register',validate(loginSchema), authController.register);

module.exports = router;