import React from 'react';
import { Link } from 'react-router-dom';
import useMarketplaceStore from '../../stores/marketplaceStore';
import MarketplaceItem from './MarketplaceItem';

const MarketplaceResults = () => {
  const { items, isLoading, error } = useMarketplaceStore();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 px-4 py-8 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 px-4 py-8 flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          {items.length} Items Found
        </h2>

        <div className="flex flex-col space-y-6">
          {items.map((item) => (
            <Link key={item._id} to={`/marketplace/item/${item._id}`}>
              <div className="flex overflow-hidden rounded-lg bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors">
                {/* Image Section */}
                <div className="w-1/4 relative">
                  {item.images && item.images.length > 0 ? (
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-[200px] w-full object-cover"
                    />
                  ) : (
                    <div className="h-[200px] w-full bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-2xl font-bold text-emerald-400">
                      CHF {item.price}
                    </span>
                  </div>

                  <p className="mt-2 text-gray-300">{item.description}</p>

                  <div className="mt-4 flex items-center space-x-4">
                    <span className="text-sm text-gray-400">{item.condition}</span>
                    <span className="text-sm text-gray-400">{item.category}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceResults; 