const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }], // URLs of item images
    category: { type: String, required: true }, // e.g., Electronics, Furniture, etc.
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who listed the item
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // User who purchased the item
    isSold: { type: Boolean, default: false }, // Flag to indicate if the item is sold
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', ItemSchema);
