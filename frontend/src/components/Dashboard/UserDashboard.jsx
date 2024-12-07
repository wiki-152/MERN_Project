import React from 'react';
import { BarChart, Users, DollarSign, Share2 } from 'lucide-react';

const UserDashboard = () => {
  const affiliateCode = "USER123"; // This would be dynamically generated
  const referralCount = 15; // This would be fetched from the backend

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Total Bookings</h3>
            <BarChart className="text-emerald-500" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">28</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">User Engagement</h3>
            <Users className="text-emerald-500" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">85%</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Total Earnings</h3>
            <DollarSign className="text-emerald-500" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">$1,234</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Referrals</h3>
            <Share2 className="text-emerald-500" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">{referralCount}</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Affiliate Program</h2>
        <p className="mb-2">Your unique affiliate code:</p>
        <div className="bg-gray-700 p-3 rounded flex justify-between items-center">
          <span className="font-mono text-lg">{affiliateCode}</span>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors">
            Copy
          </button>
        </div>
        <p className="mt-4">Share this code to earn rewards when new users sign up!</p>
      </div>
    </div>
  );
};

export default UserDashboard;

