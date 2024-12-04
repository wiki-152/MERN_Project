const express = require('express');
const listingOwnerController = require('../controllers/listingOwnerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', listingOwnerController.registerListingOwner);
router.post('/login', listingOwnerController.loginListingOwner);

// Profile
router.get('/profile', authMiddleware, listingOwnerController.getListingOwnerProfile);
router.put('/profile', authMiddleware, listingOwnerController.updateListingOwnerProfile);
router.delete('/profile', authMiddleware, listingOwnerController.deleteListingOwnerProfile);

module.exports = router;

