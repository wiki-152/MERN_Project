import React from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

const AdminListingsManagement = () => {
  const listings = [
    { id: 1, title: 'Cozy Apartment', type: 'Accommodation', price: '$100/night' },
    { id: 2, title: 'Vintage Bicycle', type: 'Marketplace', price: '$250' },
    { id: 3, title: 'Beach House', type: 'Accommodation', price: '$200/night' },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Admin Listings Management</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="mr-2" /> Add New Listing
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {listings.map((listing) => (
              <tr key={listing.id}>
                <td className="px-6 py-4 whitespace-nowrap">{listing.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminListingsManagement;

