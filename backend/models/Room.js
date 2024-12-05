const mongoose = require('mongoose');

// required: true to be checked 

const RoomSchema = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property', // Foreign key reference to Property model
        required: true,
    },
    title: { type: String, required: true }, // Room title
    description: { type: String, required: true }, // Room description
    roomType: { 
        type: String, 
        enum: [
            // General Room Types for Renting or Selling
            'single-room',
            'double-room',
            'shared-room',
            'studio',
            'suite',
            'loft-room',
            'dormitory-room',
            'serviced-room',
            'furnished-room',
            'unfurnished-room',
            'pg-accommodation',
    
            // Room Types for Selling
            'master-bedroom',
            'guest-room',
            'childs-room',
            'office-study-room',
            'maids-room',
            'basement-room',
            'attic-room',
            'garage-room',
            'panoramic-room',
            'game-room',
    
            // Special-Purpose Room Types
            'luxury-suite',
            'penthouse-room',
            'balcony-room',
            'poolside-room',
            'eco-friendly-room',
            'themed-room'
        ], // Comprehensive list of room types
        required: true,
    },    
    pricePerNight: { type: Number, required: true }, // Price per night for the room
    numberOfBeds: { type: Number, default: 1 }, // Number of beds in the room
    amenities: [{ type: String }], // List of room-specific amenities (e.g., WiFi, TV)
    availabilityDate: [
        {
            startDate: { type: Date, required: true }, // Start of the availability period
            endDate: { type: Date, required: true }, // End of the availability period
        }
    ],    
    createdAt: { 
        type: Date, 
        default: Date.now, // Timestamp when the room was created
    },
    updatedAt: { 
        type: Date, 
        default: Date.now, // Timestamp when the room was last updated
    },
    images: [{ 
        type: String 
    }], // URLs of room-specific images
    areaInSquareMeters: { type: Number }, // Area of the room in square meters
});

module.exports = mongoose.model('Room', RoomSchema);
