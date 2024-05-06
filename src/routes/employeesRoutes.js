const express = require('express');
const employeesController = require('../controllers/employeesController');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/authMiddleware');
const { employeeSchema } = require('../models/validation/validationSchemas');

const router = express.Router();

router.get('/', authMiddleware.verifyToken, employeesController.getEmployees);
router.get('/:id', authMiddleware.verifyToken, employeesController.getEmployee);
router.post('/', authMiddleware.verifyToken, validate(employeeSchema), employeesController.createEmployee);
router.put('/:id', authMiddleware.verifyToken, validate(employeeSchema), employeesController.updateEmployee);
router.delete('/:id', authMiddleware.verifyToken, employeesController.deleteEmployee);

module.exports = router;