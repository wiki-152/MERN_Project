import React, { useState } from 'react';
import { Plus, Edit, DollarSign } from 'lucide-react';
import NewMarketplaceListing from './NewMarketplaceListing';
import UpdateMarketplaceListing from './UpdateMarketplaceListing';

const MarketplaceListingManagement = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  // Using the same categories as in Marketplace.jsx
  const categories = ['Furniture', 'Electronics', 'Home Appliances', 'Personal Items'];

  const buttons = [
    { text: 'Post New Item', icon: Plus, component: <NewMarketplaceListing /> },
    { text: 'Update Existing Items', icon: Edit, component: <UpdateMarketplaceListing /> },
    { text: 'Set Pricing', icon: DollarSign, link: '/pricing' },
  ];

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Marketplace Listing Management</h2>
      
      {/* Category Selection */}
      <div className="mb-6 border-b border-gray-700">
        <div className="flex gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className="pb-2 font-medium text-gray-400 hover:text-white"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button.component)}
            className="flex items-center justify-center bg-gray-800 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            <button.icon className="mr-2" />
            {button.text}
          </button>
        ))}
      </div>

      {/* Active Component Display */}
      <div className="mt-4">
        {activeComponent}
      </div>
    </div>
  );
};

export default MarketplaceListingManagement; 