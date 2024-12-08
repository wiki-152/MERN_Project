const express = require('express');
const router = express.Router();
const feedbackCompController = require('../controllers/feedbackCompController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/add', feedbackCompController.createFeedback);

router.get('/', feedbackCompController.getAllFeedback);

router.put('/:id', feedbackCompController.updateFeedback);

router.delete('/:id', feedbackCompController.deleteFeedback);

module.exports = router;

