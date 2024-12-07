import React from 'react';
import { Mail, Tag, BarChart } from 'lucide-react';

const MarketingTools = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Marketing Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Email Campaigns</h3>
            <Mail className="text-blue-500" />
          </div>
          <p className="text-gray-600 mb-4">Create and manage email marketing campaigns.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Create Campaign</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Discount Codes</h3>
            <Tag className="text-green-500" />
          </div>
          <p className="text-gray-600 mb-4">Generate and manage promotional discount codes.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full">Create Discount</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Campaign Analytics</h3>
            <BarChart className="text-purple-500" />
          </div>
          <p className="text-gray-600 mb-4">View performance metrics for your marketing efforts.</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full">View Analytics</button>
        </div>
      </div>
    </div>
  );
};

export default MarketingTools;

