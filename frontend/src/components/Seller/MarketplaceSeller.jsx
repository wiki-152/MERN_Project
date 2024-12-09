//basic marketplace seller page

import React, { useState } from 'react';
import { Home, DollarSign, Tag, ShoppingCart, Menu, X } from 'lucide-react';
import MarketplaceListingManagement from './MarketplaceListings/MarketplaceListingManagement';
import MarketplaceSalesDashboard from './MarketplaceListings/MarketplaceSalesDashboard';
import NewMarketplaceListing from './MarketplaceListings/NewMarketplaceListing';
import UpdateMarketplaceListing from './MarketplaceListings/UpdateMarketplaceListing';

const MarketplaceSeller = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: Home, text: 'Dashboard' },
    { id: 'new', icon: Tag, text: 'New Listing' },
    { id: 'manage', icon: ShoppingCart, text: 'Manage Listings' },
    { id: 'sales', icon: DollarSign, text: 'Sales Overview' },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <MarketplaceSalesDashboard />;
      case 'new':
        return <NewMarketplaceListing />;
      case 'manage':
        return <UpdateMarketplaceListing />;
      case 'sales':
        return <MarketplaceSalesDashboard />;
      default:
        return <MarketplaceSalesDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Marketplace</h2>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`flex items-center w-full px-4 py-2 text-left ${
                activeComponent === item.id ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.text}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-800 lg:hidden">
          <div className="px-4 py-3">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </header>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default MarketplaceSeller;
