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
    //console.log("filters from bacddddkend"+JSON.stringify(filters));
    try {
        const query = {};

        // If the location filter is provided, use a case-insensitive regular expression to match the location
        if (filters.location) {
            query.location = { $regex: filters.location, $options: 'i' };
            // console.log("query location"+query.location);
        }

        

        //console.log("queryyyy"+ query.location);

        // Add more filter conditions as needed

        const properties = await Property.find(query);

        //console.log("properties from query"+properties);
            

        return properties;
    } catch (error) {
        throw new Error(`Error getting properties with filters: ${error.message}`);
    }
};
