// components/HotspotContent.js
import React from 'react';
import './styles/virtualTour.css'

const HotspotContent = ({ title, description, price, area, features }) => {
  return (
    <div className="hotspot-content">
      <div className="hotspot-header">
        <h3>{title}</h3>
      </div>
      
      <div className="hotspot-body">
        <p className="description">{description}</p>
        
        {/* Property Details */}
        {(price || area) && (
          <div className="property-details">
            {price && <p className="price">Price: ${price}</p>}
            {area && <p className="area">Area: {area} sq ft</p>}
          </div>
        )}
        
        {/* Features List */}
        {features && features.length > 0 && (
          <div className="features">
            <h4>Features:</h4>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Call-to-action button */}
      <div className="hotspot-footer">
        <button 
          className="view-details-btn"
          onClick={() => window.location.href = `/property-details/${title}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// Default props
HotspotContent.defaultProps = {
  title: "Room Information",
  description: "No description available",
  features: []
};

export default HotspotContent;

// Usage Example:
/*
<HotspotContent 
  title="Master Bedroom"
  description="Spacious master bedroom with en-suite bathroom"
  price="150,000"
  area="250"
  features={[
    "Walk-in closet",
    "Natural lighting",
    "Ocean view"
  ]}
/>
*/