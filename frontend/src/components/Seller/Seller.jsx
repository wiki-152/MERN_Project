import React, { useState } from 'react';
import { Home, DollarSign, Tag, ShoppingCart, MessageSquare, Calendar, PenToolIcon as Tool, CreditCard, FileText, TrendingUp, BarChart2, FileBarChart, Menu, X } from 'lucide-react';

const SellerPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { icon: <Home size={20} />, text: 'Listing Management' },
    { icon: <DollarSign size={20} />, text: 'Sales Dashboard' },
    { icon: <Tag size={20} />, text: 'Promotions and Discounts' },
    { icon: <ShoppingCart size={20} />, text: 'Order Management' },
    { icon: <MessageSquare size={20} />, text: 'Feedback Overview' },
    { icon: <Calendar size={20} />, text: 'Reservation Management' },
    { icon: <Tool size={20} />, text: 'Maintenance Requests' },
    { icon: <CreditCard size={20} />, text: 'Payment Management' },
    { icon: <FileText size={20} />, text: 'Regulatory Compliance' },
    { icon: <TrendingUp size={20} />, text: 'Market Trends' },
    { icon: <BarChart2 size={20} />, text: 'Performance Metrics' },
    { icon: <FileBarChart size={20} />, text: 'Custom Reports' },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Seller Panel</h1>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
                  {item.icon}
                  <span className="ml-3">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-gray-800">
          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu size={24} />
          </button>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
              New Listing
            </button>
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
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
        </main>
      </div>
    </div>
  );
};

export default SellerPanel;

