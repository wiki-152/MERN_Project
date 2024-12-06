import React from 'react';
import { Heart, MapPin } from 'lucide-react';

export default function PropertyHeader({ title, location, price, isPremium }) {
  return (
    <div className="space-y-4 bg-gray-800">
      <div className="flex items-start justify-between text-gray-100">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="mt-2 flex items-center text-gray-100">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {isPremium && (
            <span className="rounded-md bg-emerald-500 px-3 py-1 text-sm font-semibold">
              Premium
            </span>
          )}
          <button className="rounded-full p-2 hover:bg-emerald-500">
            <Heart className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-100">{price}</div>
    </div>
  );
}

