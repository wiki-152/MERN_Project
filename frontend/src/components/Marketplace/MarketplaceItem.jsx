import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketplaceItem({ item }) {
  return (
    <Link to={`/marketplace/item/${item._id}`}>
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
  );
} 