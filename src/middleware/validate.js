// src/middleware/validate.js
const createError = require('http-errors');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const message = error.details[0].message;
    return next(createError(400, message));
  }
  next();
};

module.exports = validate;