const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ListingOwner = require('../models/ListingOwner');

// Register Listing Owner Service
exports.registerListingOwner = async (name, email, password) => {
    const existingListingOwner = await ListingOwner.findOne({ email });
    if (existingListingOwner) {
        const error = new Error('Listing owner already exists');
        error.status = 400;
        throw error;
    }

    const listingOwner = new ListingOwner({ name, email, password });
    await listingOwner.save();

    const token = jwt.sign({ id: listingOwner.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, message: 'Registration successful' };
};

// Login Listing Owner Service
exports.loginListingOwner = async (email, password) => {
    const listingOwner = await ListingOwner.findOne({ email });
    if (!listingOwner) {
        const error = new Error('Listing owner not found');
        error.status = 404;
        throw error;
    }

    const isMatch = await bcrypt.compare(password, listingOwner.password);
    if (!isMatch) {
        const error = new Error('Invalid credentials');
        error.status = 400;
        throw error;
    }

    const token = jwt.sign({ id: listingOwner.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, message: 'Login successful' };
};

// ------------------------------------------------------------------------------------------------------------PROFILE------------------------------------------------------------------------------------------------------------

// Get Listing Owner Profile
exports.getListingOwnerProfile = async (id) => {
    return await ListingOwner.findById(id).select('-password');
};

// Update Listing Owner Profile
exports.updateListingOwnerProfile = async (id, updateData) => {
    // Hash the password if it's being updated
    if (updateData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    // Use findByIdAndUpdate to directly update the listing owner document
    return await ListingOwner.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete Listing Owner Profile
exports.deleteListingOwnerProfile = async (id) => {
    return await ListingOwner.findByIdAndDelete(id);
};
