import React from 'react';

const PropertyCardLayout = ({ children }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-gray-700 shadow-lg transition-transform hover:scale-[1.02]">
      <div className="flex flex-row h-[250px]">
        {children}
      </div>
    </div>
  );
};

export default PropertyCardLayout;
