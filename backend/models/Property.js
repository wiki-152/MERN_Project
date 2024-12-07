const mongoose = require('mongoose');

// Add required fields

const PropertySchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    location: { type: String },
    pricePerNight: { type: Number },
    images: [{ type: String }], // URLs of property images
    amenities: [{ type: String }], // List of amenities (e.g., WiFi, Pool, etc.)
    availabilityDate: { 
        type: Date,
        default: null
    },
    listedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User who listed the property
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // User who rented the property
    createdAt: { type: Date, default: Date.now },
    numberOfRooms: { type: Number },
    rentPrice: { type: Number},
    address: {
        street: { type: String, trim: true },
        propertyNumber: { type: String, trim: true }, // e.g., "12A"
        area: { type: String, trim: true }, // e.g., "Downtown"
        city: { type: String, trim: true }, // e.g., "New York"
        state: { type: String, trim: true }, // e.g., "NY"
        postalCode: { type: String, trim: true }, // e.g., "10001"
    },
    propertyType: {
        type: String,
        enum: [
            // Residential
            'single-family-home',
            'multi-family-home',
            'apartment',
            'condo',
            'townhouse',
            'villa',
            'cottage',
            'mobile-home',
            'mansion',
            'co-living-space',
            'penthouse',
    
            // Commercial
            'office-buildings-high-rise',
            'office-buildings-low-rise',
            'office-buildings-business-park',
            'retail-shopping-mall',
            'retail-supermarket',
            'retail-standalone-store',
            'hotel',
            'resort',
            'industrial-park',
    
            // Industrial
            'factory',
            'warehouse',
            'distribution-center',
            'cold-storage',
    
            // Agricultural
            'farmland',
            'ranch',
            'orchard',
            'vineyard',
    
            // Mixed-Use
            'mixed-use-development',
            'live-work-space',
    
            // Recreational
            'vacation-home',
            'cabin',
            'recreational-resort',
            'campground',
    
            // Special-Purpose
            'hospital',
            'clinic',
            'school',
            'church',
            'stadium',
            'cemetery',
    
            // Luxury
            'private-island',
            'estate',
            'floating-home',
    
            // Land
            'raw-land',
            'developed-land',
            'subdivision',
    
            // Shared Spaces
            'shared-room',
        ],
        areaInSquareMeters: { type: Number }, // Area of the room in square meters
    },
});

module.exports = mongoose.model('Property', PropertySchema);
