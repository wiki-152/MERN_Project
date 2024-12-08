import React from 'react';
import { Plus, Edit, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListingManagement = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: 'Post New Listing', icon: Plus, path: '/new-listing' },
    { text: 'Update Existing Listings', icon: Edit, path: '/update-listings' },
    { text: 'Set Pricing & Availability', icon: DollarSign, path: '/pricing-availability' },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Listing Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => navigate(button.path)}
            className="flex items-center justify-center bg-gray-800 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            <button.icon className="mr-2" />
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListingManagement;

