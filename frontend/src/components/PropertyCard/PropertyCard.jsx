import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/property_sample_1.jpg';
import img2 from '../../assets/images/property_sample_2.jpg';
import img3 from '../../assets/images/property_sample_3.jpg';

const PropertyCard = ({ images, title, price, location, description, rooms, area, isPremium, href }) => {

    images = [
        img1,
        img2,
        img3,
    ]

  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer" style={{ height: '300px' }}>
        <div className="flex h-full">
          {/* Left side - Images */}
          <div className="w-[300px] flex-shrink-0">
            <div className="relative h-[200px]">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover"
              />
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
                {currentImage + 1} / {images.length}
              </div>
            </div>
            <div className="flex gap-1 mt-1 px-1">
              {images.slice(0, 3).map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className="flex-1"
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-[98px] object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 p-4 relative">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">
                {rooms}, {area}, {price}
              </h2>
              <div className="flex items-center gap-2">
                {isPremium && (
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Premium
                  </span>
                )}
                <button
                  onClick={toggleFavorite}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <Heart 
                    className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1 text-gray-600 mb-2">
              <MapPin className="h-3 w-3" />
              <span className="text-xs">{location}</span>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-sm text-gray-900">{title}</p>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

