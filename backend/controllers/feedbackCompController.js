// same like contactUsController.js
const feedbackCompService = require('../services/feedbackCompService');

// Controller to handle creating a new feedback
const createFeedback = async (req, res) => {
  try {
    const feedback = await feedbackCompService.createFeedback(req.body);
    res.status(201).send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to handle retrieving all feedback
const getAllFeedback = async (req, res) => {
  try {
    const messages = await feedbackCompService.getAllFeedback();
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Controller to handle updating a feedback by ID
const updateFeedback = async (req, res) => {
  try {
    const message = await feedbackCompService.updateFeedback(req.params.id, req.body);
    if (!message) {
      return res.status(404).send();
    }
    res.send(message);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to handle deleting a feedback by ID
const deleteFeedback = async (req, res) => {
  try {
    const message = await feedbackCompService.deleteFeedback(req.params.id);
    if (!message) {
      return res.status(404).send();
    }
    res.send(message);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createFeedback,
  getAllFeedback,
  updateFeedback,
  deleteFeedback,
}; 

