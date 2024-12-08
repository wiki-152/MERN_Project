const mongoose = require('mongoose');

const feedbackCompSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedbackType: { type: String, required: true },
  message: { type: String, required: true },
  markedRead: { type: Boolean, default: false }, // Field to track if the message has been read
}, { timestamps: true });

const FeedbackComp = mongoose.model('FeedbackComp', feedbackCompSchema);

module.exports = FeedbackComp;