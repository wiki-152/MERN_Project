import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertyGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-gray-800">
      {/* Main Image */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
        <img
          src={images[currentImage]}
          alt={`Property view ${currentImage + 1}`}
          className="h-full w-full object-contain"
        />
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 rounded bg-black/70 px-2 py-1 text-sm text-white">
          {currentImage + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={previousImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnails */}
      {/* <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`flex-shrink-0 ${
              currentImage === index ? 'ring-2 ring-emerald-500' : ''
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div> */}
    </div>
  );
}

