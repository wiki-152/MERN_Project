import React from 'react';
import useMarketplaceSellerStore from '../../../stores/marketplaceSellerStore';

const MarketplaceSalesDashboard = () => {
  const { items } = useMarketplaceSellerStore();

  const totalListings = items.length;
  const soldItems = items.filter(item => item.isSold).length;
  const activeListings = totalListings - soldItems;
  const totalRevenue = items
    .filter(item => item.isSold)
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sales Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400">Total Listings</h3>
          <p className="text-2xl font-bold">{totalListings}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400">Active Listings</h3>
          <p className="text-2xl font-bold">{activeListings}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400">Sold Items</h3>
          <p className="text-2xl font-bold">{soldItems}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400">Total Revenue</h3>
          <p className="text-2xl font-bold">CHF {totalRevenue}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSalesDashboard; 