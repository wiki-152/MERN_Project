const yup = require('yup');
const propertyService = require('../services/propertyService');

// Validation schema for property
const propertySchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required().positive(),
    location: yup.string().required(),
    propertyType: yup.string().required(),
    bedrooms: yup.number().required().positive().integer(),
    bathrooms: yup.number().required().positive(),
    area: yup.number().required().positive(),
    // Add more fields as needed
});

// Create new property
exports.createProperty = async (req, res) => {
    try {
        await propertySchema.validate(req.body);
        const property = await propertyService.createProperty(req.body);
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all properties
exports.getProperties = async (req, res) => {
    try {
        const properties = await propertyService.getAllProperties();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get property by ID
exports.getPropertyById = async (req, res) => {
    try {
        const property = await propertyService.getPropertyById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update property
exports.updateProperty = async (req, res) => {
    try {
        await propertySchema.validate(req.body);
        const property = await propertyService.updateProperty(req.params.id, req.body);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete property
exports.deleteProperty = async (req, res) => {
    try {
        const result = await propertyService.deleteProperty(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get properties with filters
exports.getPropertiesWithFilters = async (req, res) => {
    try {
        const filters = req.query; // Get filters from query parameters
        const properties = await propertyService.getPropertiesWithFilters(filters);
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

