import React from 'react';
import usePropertyStore from '../../stores/propertyStore';
import PropertyCard from '../../components/Properties/PropertyCard';

export default function PropertyResult() {
  const { searchResults, isLoading, error } = usePropertyStore();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          {searchResults.length} Properties Found
        </h2>

        <div className="flex flex-col space-y-6">
          {searchResults.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
