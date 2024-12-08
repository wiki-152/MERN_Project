const contactUsService = require('../services/contactUsService');

// Controller to handle creating a new contact message
const createContactMessage = async (req, res) => {
  try {
    const contactMessage = await contactUsService.createContactMessage(req.body);
    res.status(201).send(contactMessage);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to handle retrieving all contact messages
const getAllContactMessages = async (req, res) => {
  try {
    const messages = await contactUsService.getAllContactMessages();
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Controller to handle updating a contact message by ID
const updateContactMessage = async (req, res) => {
  try {
    const message = await contactUsService.updateContactMessage(req.params.id, req.body);
    if (!message) {
      return res.status(404).send();
    }
    res.send(message);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to handle deleting a contact message by ID
const deleteContactMessage = async (req, res) => {
  try {
    const message = await contactUsService.deleteContactMessage(req.params.id);
    if (!message) {
      return res.status(404).send();
    }
    res.send(message);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createContactMessage,
  getAllContactMessages,
  updateContactMessage,
  deleteContactMessage,
};   