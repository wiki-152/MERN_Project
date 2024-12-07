'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(false);
  const [propertyType, setPropertyType] = useState('rent');

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="Modern living room"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-20 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Advertise{" "}
          <span className="relative inline-block px-4">
            <span className="relative z-10 text-black">your property</span>
            <span 
              className="absolute -inset-2 -rotate-2 bg-emerald-400 transform"
              style={{
                clipPath: "polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)"
              }}
            ></span>
          </span>{" "}
          where most are searching
        </h1>

        {/* Search Form */}
        <div className="mx-auto mt-12 max-w-6xl rounded-lg bg-gray-800 p-4 shadow-lg">
          {/* Rent/Buy/Per Night Tabs */}
          <div className="mb-6 border-b border-gray-700">
            <div className="flex gap-6">
              <button
                className={`pb-2 font-medium ${
                  propertyType === 'rent'
                    ? 'border-b-2 border-emerald-400 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setPropertyType('rent')}
              >
                Rent
              </button>
              <button
                className={`pb-2 font-medium ${
                  propertyType === 'buy'
                    ? 'border-b-2 border-emerald-400 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setPropertyType('buy')}
              >
                Buy
              </button>
              <button
                className={`pb-2 font-medium ${
                  propertyType === 'perNight'
                    ? 'border-b-2 border-emerald-400 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setPropertyType('perNight')}
              >
                Per Night
              </button>
            </div>
          </div>

          {/* Search Fields */}
          <div className="grid gap-4 md:grid-cols-4">
            {/* Location */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-300">Where?</label>
              <div className="flex">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Bern"
                    className="w-full rounded-l-md border-r-0 bg-gray-700 py-2 pl-9 pr-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    defaultValue="Bern"
                  />
                </div>
                <select className="rounded-r-md border-l-0 bg-gray-700 py-2 pl-2 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  <option value="0">+ 0 km</option>
                  <option value="5">+ 5 km</option>
                  <option value="10">+ 10 km</option>
                  <option value="20">+ 20 km</option>
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                {propertyType === 'rent' ? 'CHF to' : 'CHF to'}
              </label>
              <select className="w-full rounded-md bg-gray-700 py-2 pl-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="any">any</option>
                <option value="1000">1,000</option>
                <option value="2000">2,000</option>
                <option value="3000">3,000</option>
              </select>
            </div>

            {/* Rooms */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Rooms from
              </label>
              <select className="w-full rounded-md bg-gray-700 py-2 pl-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="any">any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>

            {/* Filters and Results */}
            <div className="flex items-end gap-4 md:col-span-4">
              <button
                className="flex flex-1 items-center justify-center rounded-md border border-gray-600 bg-gray-700 py-2 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </button>
              <button className="flex flex-1 items-center justify-center rounded-md bg-emerald-400 py-2 text-black hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <Search className="mr-2 h-4 w-4" /> 481 results
              </button>
            </div>
          </div>

          {/* Filters Section */}
          {showFilters && <Filters propertyType={propertyType} />}
        </div>
      </div>
    </div>
  );
}

function Filters({ propertyType }) {
  return (
    <div className="mt-6 grid gap-6 border-t border-gray-700 pt-6 text-white md:grid-cols-2 lg:grid-cols-4">
      {/* Property Type */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Property Type</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400"
            />
            <span>Apartment</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400"
            />
            <span>House</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400"
            />
            <span>Condo</span>
          </label>
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Amenities</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400"
            />
            <span>Parking</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400"
            />
            <span>Balcony</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-400 bg-gray-700 text-emerald-400 focus:ring-emerald-400"
            />
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
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>0 m²</span>
          <span>200 m²</span>
        </div>
      </div>

      {/* Furnished */}
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
