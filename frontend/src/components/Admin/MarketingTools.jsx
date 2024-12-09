import React, { useState } from 'react';
import { Mail, Tag, BarChart } from 'lucide-react';
import axios from 'axios';

// New components for each button
const EmailCampaigns = () => {
  const [message, setMessage] = useState(''); // State for message input

  const handleSendCampaign = async () => {
    try {
        const response = await axios.post('https://mern-projectb.vercel.app/api/user/send-emails', {
            subject: 'Your Campaign Subject', // Replace with your desired subject
            body: message // Use the message from the input
        });
        console.log(response.data.message); // Log success message
    } catch (error) {
        console.error('Error sending campaign:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <h4 className="text-white mt-4 mb-4">Email Campaigns Details</h4>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} // Update message state
        placeholder="Enter your message here" 
        className="bg-gray-800 border p-2 mb-4 w-full"
      />
      <button 
        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-500"
        onClick={handleSendCampaign} // Call the new function on button click
      >
        Send
      </button>
      {/* Add additional fields for Email Campaigns if needed */}
    </div>
  );
};

const DiscountCodes = () => {
  const [message, setMessage] = useState(''); // State for message input

  const handleSendDiscount = async () => {
    try {
        const response = await axios.post('https://mern-projectb.vercel.app/api/user/send-emails', {
            subject: 'Your Discount Code', // Replace with your desired subject
            body: message // Use the message from the input
        });
        console.log(response.data.message); // Log success message
    } catch (error) {
        console.error('Error sending discount code:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <h4 className="text-white mt-4 mb-4">Discount Codes Details</h4>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} // Update message state
        placeholder="Enter your discount code here" 
        className="bg-gray-800 border p-2 mb-4 w-full"
      />
      <button 
        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-500"
        onClick={handleSendDiscount} // Call the new function on button click
      >
        Send
      </button>
      {/* Add additional fields for Discount Codes if needed */}
    </div>
  );
};

const CampaignAnalytics = () => (
  <div>
    <h4>Campaign Analytics Details</h4>
    {/* Add fields for Campaign Analytics */}
  </div>
);

const MarketingTools = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="p-6 bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Marketing Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Email Campaigns</h3>
            <Mail className="text-blue-500" />
          </div>
          <p className="text-gray-600 mb-4">Create and manage email marketing campaigns.</p>
          <button 
            className="bg-gray-500 text-gray-800 px-4 py-2 rounded-lg w-full hover:bg-emerald-500"
            onClick={() => setActiveComponent('email')}
          >
            Create Campaign
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Discount Codes</h3>
            <Tag className="text-green-500" />
          </div>
          <p className="text-gray-600 mb-4">Generate and manage promotional discount codes.</p>
          <button 
            className="bg-gray-500 text-gray-800 px-4 py-2 rounded-lg w-full hover:bg-emerald-500"
            onClick={() => setActiveComponent('discount')}
          >
            Create Discount
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Campaign Analytics</h3>
            <BarChart className="text-purple-500" />
          </div>
          <p className="text-gray-600 mb-4">View performance metrics for your marketing efforts.</p>
          <button 
            className="bg-gray-500 text-gray-800 px-4 py-2 rounded-lg w-full hover:bg-emerald-500"
            onClick={() => setActiveComponent('analytics')}
          >
            View Analytics
          </button>
        </div>
      </div>
      {activeComponent === 'email' && <EmailCampaigns />}
      {activeComponent === 'discount' && <DiscountCodes />}
      {activeComponent === 'analytics' && <CampaignAnalytics />}
    </div>
  );
};

export default MarketingTools;

