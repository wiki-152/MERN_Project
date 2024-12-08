import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../../assets/images/homeImage.jpg';

export default function SellerHome() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeImage}
          alt="Modern cityscape"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8 text-center">
          Welcome to{" "}
          <span className="inline-block bg-emerald-400 px-4 text-black">
            Tiefen Reich
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
          Welcome to your seller dashboard. Here you can manage your properties, orders, and promotions.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            to="/properties-seller" 
            className="px-8 py-3 bg-emerald-400 text-black text-lg font-semibold rounded-md hover:bg-emerald-500 transition duration-300 ease-in-out"
          >
            Properties
          </Link>
          <Link 
            to="/marketplace-seller" 
            className="px-8 py-3 bg-gray-700 text-white text-lg font-semibold rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}

