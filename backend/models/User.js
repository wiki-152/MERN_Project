const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String }, // required: true
    profilePicture: { type: String }, // URL for user's profile picture
    isHost: { type: Boolean, default: false }, // Indicates if the user is a host
    properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }], // Properties listed by the user
    itemsForSale: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }], // Items listed for sale by the user
    bookedProperties: [
        {
            propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
            startDate: { type: Date },
            endDate: { type: Date },
        },
    ], // Properties booked by the user
    purchasedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }], // Items purchased by the user
    reviews: [
        {
            reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comment: { type: String, required: true },
            rating: { type: Number, required: true },
            createdAt: { type: Date, default: Date.now },
        },
    ], // Reviews given by others to this user
    notifications: [
        {
            type: { type: String, enum: ['booking', 'sale', 'general'], required: true }, // Type of notification
            message: { type: String, required: true },
            isRead: { type: Boolean, default: false },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    emailNotificationsEnabled: { type: Boolean, default: true },
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);
