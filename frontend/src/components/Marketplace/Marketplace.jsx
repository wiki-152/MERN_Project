import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useMarketplaceStore from '../../stores/marketplaceStore';
import InsuranceModal from './InsuranceModal';

const Marketplace = () => {
  const navigate = useNavigate();
  const { searchItems, setSearchParams } = useMarketplaceStore();
  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState('any');
  const [showInsuranceInfo, setShowInsuranceInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('any');
  const [condition, setCondition] = useState('any');
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    try {
      const maxPrice = priceRange !== 'any' ? parseInt(priceRange, 10) : undefined;

      const searchParams = {
        category: category !== 'any' ? category : undefined,
        maxPrice,
        condition: condition !== 'any' ? condition : undefined,
        query: searchQuery.trim() || undefined,
        location: location.trim() || undefined,
      };

      // Remove undefined or empty values
      Object.keys(searchParams).forEach((key) => {
        if (!searchParams[key]) delete searchParams[key];
      });

      console.log('Final Search Params:', searchParams);

      await searchItems(searchParams);
      navigate('/marketplace/results');
    } catch (error) {
      console.error('Search Handler Error:', error);
    }
  };

  useEffect(() => {
    // Fetch all items on initial render
    searchItems({});
  }, [searchItems]);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/marketplace-bg.jpg"
          alt="Marketplace background"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-20 sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Buy and Sell{" "}
          <span className="relative inline-block px-4">
            <span className="relative z-10 text-black">Used Items</span>
            <span
              className="absolute -inset-2 -rotate-2 bg-emerald-400 transform"
              style={{
                clipPath: "polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)",
              }}
            ></span>
          </span>{" "}
          Safely
        </h1>

        {/* Search Form */}
        <div className="mx-auto mt-12 max-w-6xl rounded-lg bg-gray-800 p-4 shadow-lg">
          {/* Category Tabs */}
          <div className="mb-6 border-b border-gray-700">
            <div className="flex gap-6">
              <button
                className={`pb-2 font-medium ${
                  category === 'any'
                    ? 'border-b-2 border-emerald-400 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setCategory('any')}
              >
                All Items
              </button>
              {['Furniture', 'Electronics', 'Home Appliances', 'Personal Items'].map((cat) => (
                <button
                  key={cat}
                  className={`pb-2 font-medium ${
                    category === cat.toLowerCase()
                      ? 'border-b-2 border-emerald-400 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setCategory(cat.toLowerCase())}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Query */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="searchQuery"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white"
              />
            </div>
          </div>

          {/* Search Fields */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-md bg-gray-700 py-2 pl-3 text-white"
              />
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Price Range</label>
              <select
                name="priceRange"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full rounded-md bg-gray-700 py-2 pl-3 text-white"
              >
                <option value="any">Any</option>
                <option value="100">Under $100</option>
                <option value="500">Under $500</option>
                <option value="1000">Under $1000</option>
              </select>
            </div>

            {/* Condition */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Condition</label>
              <select
                name="condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full rounded-md bg-gray-700 py-2 pl-3 text-white"
              >
                <option value="any">Any</option>
                <option value="new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
          </div>

          {/* Search and Filter Buttons */}
          <div className="mt-4 flex gap-4">
            <button
              className="flex flex-1 items-center justify-center rounded-md border border-gray-600 bg-gray-700 py-2 text-white hover:bg-gray-600"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </button>
            <button
              className="flex flex-1 items-center justify-center rounded-md bg-emerald-400 py-2 text-black hover:bg-emerald-500"
              onClick={handleSearch}
            >
              <Search className="mr-2 h-4 w-4" />
              Search Items
            </button>
          </div>

          {/* Insurance Option */}
          <div className="mt-4 p-4 bg-gray-700 rounded-md">
            <h3 className="text-white font-semibold mb-2">Protect Your Purchase</h3>
            <p className="text-gray-300 text-sm">
              Get insurance coverage for high-value items. Protect against damage during shipping and handling.
            </p>
            <button
              className="mt-2 text-emerald-400 text-sm hover:text-emerald-300"
              onClick={() => setShowInsuranceInfo(true)}
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* Insurance Modal */}
      <InsuranceModal
        isOpen={showInsuranceInfo}
        onClose={() => setShowInsuranceInfo(false)}
        itemPrice={1000} // Example price
        onSelectPlan={(plan) => {
          console.log('Selected plan:', plan);
          setShowInsuranceInfo(false);
        }}
      />
    </div>
  );
};

export default Marketplace;
