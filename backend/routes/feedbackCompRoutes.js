const express = require('express');
const router = express.Router();
const feedbackCompController = require('../controllers/feedbackCompController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/add', feedbackCompController.createFeedback);

router.get('/', adminMiddleware, feedbackCompController.getAllFeedback);

router.put('/:id', adminMiddleware, feedbackCompController.updateFeedback);

router.delete('/:id', adminMiddleware, feedbackCompController.deleteFeedback);

module.exports = router;

