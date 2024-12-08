const ContactUs = require('../models/ContactUsModel');

// Service to create a new contact message
const createContactMessage = async (data) => {
  const contactMessage = new ContactUs(data);
  return await contactMessage.save();
};

// Service to retrieve all contact messages
const getAllContactMessages = async () => {
  return await ContactUs.find();
};

// Service to update a contact message by ID
const updateContactMessage = async (id, data) => {
  return await ContactUs.findByIdAndUpdate(id, data, { new: true });
};

// Service to delete a contact message by ID
const deleteContactMessage = async (id) => {
  return await ContactUs.findByIdAndDelete(id);
};

module.exports = {
  createContactMessage,
  getAllContactMessages,
  updateContactMessage,
  deleteContactMessage,
};