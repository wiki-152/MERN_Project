import React from 'react';
import { BarChart2, PieChart, TrendingUp, Users } from 'lucide-react';

const SiteAnalytics = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Site Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Page Views</span>
            <BarChart2 className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">45,678</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Unique Visitors</span>
            <Users className="text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">12,345</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Bounce Rate</span>
            <PieChart className="text-yellow-500" />
          </div>
          <p className="text-3xl font-bold mt-2">35%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Avg. Session Duration</span>
            <TrendingUp className="text-purple-500" />
          </div>
          <p className="text-3xl font-bold mt-2">3m 45s</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">User Behaviour</h3>
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Chart Placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default SiteAnalytics;

