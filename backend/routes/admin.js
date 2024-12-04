const express = require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Routes
router.post('/create', adminController.createAdmin);
router.get('/', adminMiddleware, adminController.getAllAdmins);
router.put('/:id', adminMiddleware, adminController.updateAdmin);
router.delete('/:id', adminMiddleware, adminController.deleteAdmin);
router.post('/login', adminController.loginAdmin);

module.exports = router;
