import React from 'react';
import { BarChart, Users, DollarSign, ShoppingBag } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total Users</span>
            <Users className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">10,245</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Revenue</span>
            <DollarSign className="text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">$52,869</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Active Listings</span>
            <ShoppingBag className="text-purple-500" />
          </div>
          <p className="text-3xl font-bold mt-2">1,337</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Site Traffic</span>
            <BarChart className="text-orange-500" />
          </div>
          <p className="text-3xl font-bold mt-2">25,498</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

