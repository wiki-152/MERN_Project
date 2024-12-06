import React from 'react';

export function Filters({ propertyType }) {
  return (
    <div className="mt-6 grid gap-6 border-t border-gray-700 pt-6 text-white md:grid-cols-2 lg:grid-cols-4">
      {/* Property Type */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Property Type</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" />
            <span>Apartment</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" />
            <span>House</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" />
            <span>Condo</span>
          </label>
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Amenities</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" />
            <span>Parking</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" />
            <span>Balcony</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" />
            <span>Garden</span>
          </label>
        </div>
      </div>

      {/* Floor Area */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Floor Area (m²)</h3>
        <input
          type="range"
          min="0"
          max="200"
          step="10"
          defaultValue="50"
          className="w-full appearance-none bg-gray-600 h-2 rounded-full"
        />
        <div className="flex justify-between text-sm">
          <span>0 m²</span>
          <span>200 m²</span>
        </div>
      </div>

      {/* Furnished (only for rent) */}
      {propertyType === 'rent' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Furnished</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="furnished" 
                value="any" 
                defaultChecked 
                className="border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" 
              />
              <span>Any</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="furnished" 
                value="yes" 
                className="border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" 
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="furnished" 
                value="no" 
                className="border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400" 
              />
              <span>No</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

