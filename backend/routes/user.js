const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Profile
router.get('/profile', authMiddleware, userController.getUserProfile);
router.put('/profile', authMiddleware, userController.updateUserProfile);
router.delete('/profile', authMiddleware, userController.deleteUserProfile);

// Route to send email to all users
router.post('/send-emails', userController.sendEmailToAllUsers);

module.exports = router;
