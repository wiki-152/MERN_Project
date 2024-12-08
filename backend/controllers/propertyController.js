const yup = require('yup');
const propertyService = require('../services/propertyService');
const listingOwnerService = require('../services/listingOwnerService');

// Validation schema for property
const propertySchema = yup.object().shape({
    title: yup.string().required("Title is required."),
    description: yup.string().required("Description is required."),
    location: yup.string().required("Location is required."),
    pricePerNight: yup.number().nullable().positive("Price per night must be positive."),
    rentPrice: yup.number().required("Rent price is required.").positive("Rent price must be positive."),
    images: yup.array().of(yup.string().url("Each image must be a valid URL.")),
    amenities: yup.array().of(yup.string("Each amenity must be a string.")),
    availabilityDate: yup.date().nullable(),
    listedBy: yup.string().matches(/^[a-f\d]{24}$/i, "ListedBy must be a valid ObjectId."),
    assignedTo: yup.string().nullable().matches(/^[a-f\d]{24}$/i, "AssignedTo must be a valid ObjectId."),
    createdAt: yup.date().default(() => new Date()),
    numberOfRooms: yup.number().required("Number of rooms is required.").positive("Rooms must be positive.").integer("Rooms must be an integer."),
    address: yup.object().shape({
        street: yup.string().required("Street is required."),
        propertyNumber: yup.string().nullable(),
        area: yup.string().required("Area is required."),
        city: yup.string().required("City is required."),
        state: yup.string().required("State is required."),
        postalCode: yup.string().required("Postal code is required."),
    }),
    propertyType: yup.string()
        .required("Property type is required.")
        .oneOf([
            "single-family-home", "multi-family-home", "apartment", "condo", "townhouse", "villa", "cottage", "mobile-home", 
            "mansion", "co-living-space", "penthouse", "office-buildings-high-rise", "office-buildings-low-rise", 
            "office-buildings-business-park", "retail-shopping-mall", "retail-supermarket", "retail-standalone-store", 
            "hotel", "resort", "industrial-park", "factory", "warehouse", "distribution-center", "cold-storage", 
            "farmland", "ranch", "orchard", "vineyard", "mixed-use-development", "live-work-space", "vacation-home", 
            "cabin", "recreational-resort", "campground", "hospital", "clinic", "school", "church", "stadium", 
            "cemetery", "private-island", "estate", "floating-home", "raw-land", "developed-land", "subdivision", 
            "shared-room"
        ], "Invalid property type."),
    areaInSquareMeters: yup.number().required("Area in square meters is required.").positive("Area must be positive."),
    yearBuilt: yup.number().nullable().positive("Year built must be positive."),
    parkingSpaces: yup.number().nullable().integer("Parking spaces must be an integer.").positive("Parking spaces must be positive."),
});


// Create new property
exports.createProperty = async (req, res) => {
    //console.log("req.body froxc<dc<sdm backend: ", req.body.property);
    
    // Check if the request is coming in as FormData
    let propertyData;
    if (req.body.property) {
        // If it's FormData, parse the property field
        propertyData = JSON.parse(req.body.property);
        // Use images and virtualTourImages directly from the request body
        propertyData.images = propertyData.images || [];
        propertyData.virtualTourImages = propertyData.virtualTourImages || [];
    } else {
        // If it's JSON, use it directly
        propertyData = req.body;
    }

    // find the listingOwner by email and add the object id to the propertyData
    const listingOwner = await listingOwnerService.getListingOwnerByEmail(propertyData.listedByEmail);
    propertyData.listedBy = listingOwner._id;
    //console.log("propertyDataMail: ", propertyData.listedBy);



    try {
        // No more needed as done from frontend 
        // await propertySchema.validate(propertyData);
        const property = await propertyService.createProperty(propertyData);
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
        console.log("property from backend"+JSON.stringify(property));
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
        const filters = req.body;
        //console.log("filters from backend"+JSON.stringify(filters));
        const properties = await propertyService.getPropertiesWithFilters(filters);
        //console.log("from backend properties after filter"+properties);
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

