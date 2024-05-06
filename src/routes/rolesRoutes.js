const express = require('express');
const rolesController = require('../controllers/rolesController');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/authMiddleware');
const { roleSchema } = require('../models/validation/validationSchemas');

const router = express.Router();

router.get('/', authMiddleware.verifyToken, rolesController.getRoles);
router.get('/:id', authMiddleware.verifyToken, rolesController.getRole);
router.post('/', authMiddleware.verifyToken, validate(roleSchema), rolesController.createRole);
router.put('/:id', authMiddleware.verifyToken, validate(roleSchema), rolesController.updateRole);
router.delete('/:id', authMiddleware.verifyToken, rolesController.deleteRole);

module.exports = router;