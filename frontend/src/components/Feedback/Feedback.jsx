import React, { useState } from 'react';
import axios from 'axios';
import { MessageSquare } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
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
      const response = await axios.post('https://mern-projectb.vercel.app/api/feedback/add', formData);
      console.log('Feedback sent successfully:', response.data);
      setSuccessMessage('Your feedback has been sent successfully!');
      setFormData({ name: '', email: '', feedbackType: '', message: '' });
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Give Us Your Feedback</h2>
        {successMessage && (
          <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
            {successMessage}
          </div>
        )}
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" name="name" placeholder="Name" className="w-full p-2 bg-gray-800 rounded" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-800 rounded" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <select name="feedbackType" className="w-full p-2 bg-gray-800 rounded" value={formData.feedbackType} onChange={handleChange} required>
              <option value="">Select Feedback Type</option>
              <option value="general">General Feedback</option>
              <option value="bug">Report a Bug</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-8">
            <textarea name="message" placeholder="Your Feedback" rows="4" className="w-full p-2 bg-gray-800 rounded" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <div className="mb-12">
            <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
          </div>
          <button type="submit" className="w-full bg-gray-800 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center">
            <MessageSquare className="mr-2" /> Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;

