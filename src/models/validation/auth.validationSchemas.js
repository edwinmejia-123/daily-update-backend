// src/validation/auth.validationSchemas.js
const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const logoutSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  loginSchema,
};
