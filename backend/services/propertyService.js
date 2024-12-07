const Property = require('../models/Property');

// Create new property
exports.createProperty = async (propertyData) => {
    try {
        const property = new Property(propertyData);
        return await property.save();
    } catch (error) {
        throw new Error('Error creating property: ' + error.message);
    }
};

// Get all properties
exports.getAllProperties = async () => {
    try {
        return await Property.find({});
    } catch (error) {
        throw new Error('Error fetching properties: ' + error.message);
    }
};

// Get property by ID
exports.getPropertyById = async (id) => {
    try {
        return await Property.findById(id);
    } catch (error) {
        throw new Error('Error fetching property: ' + error.message);
    }
};

// Update property
exports.updateProperty = async (id, propertyData) => {
    try {
        return await Property.findByIdAndUpdate(
            id,
            propertyData,
            { new: true, runValidators: true }
        );
    } catch (error) {
        throw new Error('Error updating property: ' + error.message);
    }
};

// Delete property
exports.deleteProperty = async (id) => {
    try {
        return await Property.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting property: ' + error.message);
    }
};

// Get properties with filters
exports.getPropertiesWithFilters = async (filters) => {
    try {
        let query = {};
        
        // Apply filters
        if (filters.minPrice) query.price = { $gte: parseFloat(filters.minPrice) };
        if (filters.maxPrice) query.price = { ...query.price, $lte: parseFloat(filters.maxPrice) };
        if (filters.propertyType) query.propertyType = filters.propertyType;
        if (filters.location) query.location = { $regex: filters.location, $options: 'i' };
        if (filters.bedrooms) query.bedrooms = parseInt(filters.bedrooms);
        if (filters.bathrooms) query.bathrooms = parseInt(filters.bathrooms);
        if (filters.minArea) query.area = { $gte: parseFloat(filters.minArea) };
        if (filters.maxArea) query.area = { ...query.area, $lte: parseFloat(filters.maxArea) };

        return await Property.find(query);
    } catch (error) {
        throw new Error('Error fetching filtered properties: ' + error.message);
    }
};
