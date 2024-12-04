const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// required fields: name, email, password more to be added for registration

const ListingOwnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String }, // Contact number for the owner
    profilePicture: { type: String }, // URL for owner's profile picture
    address: { type: String }, // Owner's physical address (optional, for verification purposes)
    propertiesForRent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }], // Properties listed for rent
    itemsForSale: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }], // Items listed for sale (new/second-hand)
    listingHistory: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
            propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
            type: { type: String, enum: ['property', 'item'], required: true }, // Specifies if the listing is for a property or item
            action: { type: String, enum: ['listed', 'sold', 'rented'], required: true }, // Action on the listing
            date: { type: Date, default: Date.now }, // Date of the action (listing, renting, selling)
        }
    ], // History of properties or items listed, sold, or rented
    reviewsGiven: [
        {
            reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comment: { type: String, required: true },
            rating: { type: Number, required: true },
            createdAt: { type: Date, default: Date.now },
        }
    ], // Reviews given to the Listing Owner (from renters/buyers)
    rating: { type: Number, default: 0 }, // Average rating from reviews (based on rating of listings)
    verified: { type: Boolean, default: false }, // Flag to indicate if the owner has been verified
    isPremium: { type: Boolean, default: false }, // Premium account for priority listing, additional features, etc.
    notificationPreferences: {
        booking: { type: Boolean, default: true }, // Whether to receive booking-related notifications
        sale: { type: Boolean, default: true }, // Whether to receive sale-related notifications
        general: { type: Boolean, default: true }, // General notifications
    },
    emailNotificationsEnabled: { type: Boolean, default: true },
    // These fields help to handle the categorization and management of listings.
    propertyCategories: [{ type: String, enum: ['apartment', 'house', 'studio', 'villa', 'shared-room'], required: true }], // Categories for rent
    itemCategories: [{ type: String, enum: ['electronics', 'furniture', 'clothing', 'vehicles', 'books', 'toys'], required: true }], // Categories for sale
    password: { type: String, required: true }, // Owner's password (for secure login)
});

// Hash password before saving
ListingOwnerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('ListingOwner', ListingOwnerSchema);
