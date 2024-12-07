import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCardLayout from './PropertyCardLayout';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function PropertyCard({ property }) {
  const {
    _id,
    title,
    rentPrice,
    location,
    rooms,
    area,
    images,
    propertyType,
  } = property;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const selectImage = (index, e) => {
    e.preventDefault();
    setCurrentImageIndex(index);
  };

  return (
    <Link to={`/properties/${_id}`}>
      <PropertyCardLayout>
        <div className="w-1/4 relative">
          {/* Upper Section: Main Image and Navigation Arrows */}
          <div className="h-[200px] relative">
            <img
              src={images?.[currentImageIndex] || '/placeholder.svg'}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="h-full w-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 hover:bg-black/75"
            >
              <ChevronLeftIcon className="h-5 w-5 text-white" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 hover:bg-black/75"
            >
              <ChevronRightIcon className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Lower Section: Thumbnail Preview */}
          <div className="absolute bottom-0 left-0 right-0 flex h-[40px] gap-1 bg-black/30 p-1">
            {Array.from({ length: 3 }).map((_, index) => {
              const url = images?.[index] || '/placeholder.svg'; // Use placeholder if no image
              return (
                <button
                  key={index}
                  onClick={(e) => selectImage(index, e)}
                  className={`h-full flex-1 overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-emerald-400' : ''
                  }`}
                >
                  <img
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-2/3 p-6">
          <h3 className="mb-2 text-xl font-semibold text-emerald-400">{title}</h3>
          
          <div className="mb-4 text-2xl font-bold text-emerald-400">
            {rentPrice ? `CHF ${rentPrice.toLocaleString()}` : "NULL"}
            <span className="text-sm text-emerald-300 ml-1">
              {propertyType === 'rent' ? '/month' : ''}
            </span>
          </div>
          
          <div className="space-y-2 text-emerald-300">
            <div className="text-lg">{location}</div>
            <div className="flex justify-between text-emerald-200">
              <span>{rooms} Rooms</span>
              <span>{area} m²</span>
            </div>
          </div>
        </div>
      </PropertyCardLayout>
    </Link>
  );
}

