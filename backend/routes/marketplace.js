const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
    createItem,
    getSellerItems,
    updateItem,
    deleteItem,
    searchItems,
    purchaseItem,  // Add this line
    getItemById    // Add this if not already included
} = require('../controllers/marketplaceController');

// Create and manage items (protected routes)
router.post('/items', authMiddleware, createItem);
router.get('/seller/items', authMiddleware, getSellerItems);
router.put('/items/:id', authMiddleware, updateItem);
router.delete('/items/:id', authMiddleware, deleteItem);

// Search and view items (public routes)
router.get('/search', searchItems);
router.get('/items/:id', getItemById);

// Purchase route (protected)
router.post('/purchase/:id', authMiddleware, purchaseItem);

module.exports = router;