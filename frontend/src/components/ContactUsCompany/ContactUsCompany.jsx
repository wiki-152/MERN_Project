import React, { useState } from 'react';
import axios from 'axios';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactUsCompany = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mern-projectb.vercel.app/api/contactUs/add', formData);
      console.log('Message sent successfully:', response.data);
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        {successMessage && (
          <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
            {successMessage}
          </div>
        )}
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <User className="mr-2 mb-2" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 bg-gray-800 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Mail className="mr-2 mb-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Phone className="mr-2 mb-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-2 bg-gray-800 rounded"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <MessageSquare className="mr-2 mb-2" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-2 bg-gray-800 rounded"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full p-2 bg-gray-800 rounded"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
          >
            <Send className="mr-2" /> Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsCompany;

