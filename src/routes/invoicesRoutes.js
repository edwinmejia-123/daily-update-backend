//Este el archivo para los informes

const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/authMiddleware');
const { invoiceSchema } = require('../models/validation/validationSchemas');

const router = express.Router();

router.get('/', authMiddleware.verifyToken, invoiceController.getInvoices);
router.get('/:id', authMiddleware.verifyToken, invoiceController.getInvoice);
router.post('/', authMiddleware.verifyToken, validate(invoiceSchema), invoiceController.createInvoice);
router.put('/:id', authMiddleware.verifyToken, validate(invoiceSchema), invoiceController.updateInvoice);
router.delete('/:id', authMiddleware.verifyToken, invoiceController.deleteInvoice);

module.exports = router;