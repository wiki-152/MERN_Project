import React from 'react';
import { Plus, Edit, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NewListing from './Listings/NewListing';
import UpdateListings from './Listings/UpdateListings';
import { useState } from 'react';

const ListingManagement = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(null);

  const buttons = [
    { text: 'Post New Listing', icon: Plus, component: <NewListing /> },
    { text: 'Update Existing Listings', icon: Edit, component: <UpdateListings /> },
    { text: 'Set Pricing & Availability', icon: DollarSign, link: '/pricing-availability' },
  ];

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Listing Management</h2>
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
      <div className="mt-4">
        {activeComponent}
      </div>
    </div>
  );
};

export default ListingManagement;

