const FeedbackComp = require('../models/FeedbackCompModel');

// Service to create a new feedback
const createFeedback = async (data) => {
  const feedback = new FeedbackComp(data);
  return await feedback.save();
};

// Service to retrieve all feedback
const getAllFeedback = async () => {
  return await FeedbackComp.find();
};

// Service to update a feedback by ID
const updateFeedback = async (id, data) => {
  return await FeedbackComp.findByIdAndUpdate(id, data, { new: true });
};

// Service to delete a feedback by ID
const deleteFeedback = async (id) => {
  return await FeedbackComp.findByIdAndDelete(id);
};

module.exports = {
  createFeedback,
  getAllFeedback,
  updateFeedback,
  deleteFeedback,
};