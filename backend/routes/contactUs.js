const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/adminMiddleware');
const contactUsController = require('../controllers/contactUsController');

// POST: Create a new contact message (admin only)
router.post('/add', contactUsController.createContactMessage);

// GET: Retrieve all contact messages (admin only)
router.get('/', contactUsController.getAllContactMessages);

// PUT: Update a contact message by ID (admin only)
router.put('/:id', adminMiddleware, contactUsController.updateContactMessage);

// DELETE: Delete a contact message by ID (admin only)
router.delete('/:id', adminMiddleware, contactUsController.deleteContactMessage);

module.exports = router;