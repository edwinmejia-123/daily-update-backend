//este archivo es para el reporte del empleado

const express = require('express');
const reportController = require('../controllers/reportsController');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/authMiddleware');
const { reportSchema } = require('../models/validation/validationSchemas');

const router = express.Router();

router.get('/', authMiddleware.verifyToken, reportController.getReports);
router.get('/:id', authMiddleware.verifyToken, reportController.getReport);
router.post('/', authMiddleware.verifyToken, validate(reportSchema), reportController.createReport);
router.put('/:id', authMiddleware.verifyToken, validate(reportSchema), reportController.updateReport);
router.delete('/:id', authMiddleware.verifyToken, reportController.deleteReport);

module.exports = router;