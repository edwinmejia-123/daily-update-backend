const express = require('express');
const companiesController = require('../controllers/companiesController');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/authMiddleware');
const { companySchema } = require('../models/validation/validationSchemas');

const router = express.Router();

router.get('/', authMiddleware.verifyToken, companiesController.getCompanies);
router.get('/:id', authMiddleware.verifyToken, companiesController.getCompany);
router.post('/', authMiddleware.verifyToken, validate(companySchema), companiesController.createCompany);
router.put('/:id', authMiddleware.verifyToken, validate(companySchema), companiesController.updateCompany);
router.delete('/:id', authMiddleware.verifyToken, companiesController.deleteCompany);

module.exports = router;