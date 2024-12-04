const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    images: [{ type: String }], // URLs of property images
    amenities: [{ type: String }], // List of amenities (e.g., WiFi, Pool, etc.)
    availability: [
        {
            startDate: { type: Date },
            endDate: { type: Date },
        },
    ],
    listedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who listed the property
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // User who rented the property
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', PropertySchema);
