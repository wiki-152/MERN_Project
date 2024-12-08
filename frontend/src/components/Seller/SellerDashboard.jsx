import React from 'react';

const SellerDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Sales Overview */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Total Sales</span>
          <span className="text-2xl font-bold">$12,345</span>
        </div>
        <div className="mt-4 h-32 bg-gray-700 rounded"></div>
      </div>

      {/* Recent Orders */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <ul className="space-y-2">
          {[1, 2, 3].map((order) => (
            <li key={order} className="flex justify-between items-center">
              <span>Order #{order}</span>
              <span className="text-green-500">Completed</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Feedback Summary */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Feedback Summary</h3>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-4xl font-bold">4.8</span>
          <div className="flex text-yellow-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation Calendar */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Reservation Calendar</h3>
        <div className="grid grid-cols-7 gap-2">
          {[...Array(31)].map((_, i) => (
            <div key={i} className="aspect-square flex items-center justify-center bg-gray-700 rounded">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Requests */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Maintenance Requests</h3>
        <ul className="space-y-2">
          {[1, 2, 3].map((request) => (
            <li key={request} className="flex justify-between items-center">
              <span>Request #{request}</span>
              <span className="text-yellow-500">Pending</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Market Trends */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Market Trends</h3>
        <div className="h-48 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default SellerDashboard;