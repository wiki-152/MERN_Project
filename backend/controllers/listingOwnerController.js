const yup = require('yup');
const listingOwnerService = require('../services/listingOwnerService');

// Validation Schemas
const registerListingOwnerSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long').required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const loginListingOwnerSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

// Register Listing Owner
exports.registerListingOwner = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Validate input
        await registerListingOwnerSchema.validate({ name, email, password }, { abortEarly: false });

        const { token, message } = await listingOwnerService.registerListingOwner(name, email, password);
        res.json({ token, message });
        console.log("LO Registration Successful");
    } catch (error) {
        console.error('Validation Error:', error); // Log the complete error object
        if (error.name === 'ValidationError') {
            console.error('Validation Errors:', error.errors); // Log `error.errors`
            return res.status(400).json({ message: Array.isArray(error.errors) ? error.errors.join(', ') : 'Validation error occurred' });
        }
        console.error('Error during registration:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};

// Login Listing Owner
exports.loginListingOwner = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        await loginListingOwnerSchema.validate({ email, password }, { abortEarly: false });

        const { token, message } = await listingOwnerService.loginListingOwner(email, password);
        res.json({ token, message });
        console.log("LO Login Successful");
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error during login:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};

// ---------------------------------------------------------PROFILE---------------------------------------------------------

// Get Listing Owner Profile
exports.getListingOwnerProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const listingOwner = await listingOwnerService.getListingOwnerProfile(id);
        
        if (!listingOwner) {
            return res.status(404).json({ message: 'Listing Owner not found' });
        }
        res.json(listingOwner);
        console.log("LO Profile Fetched Successfully");
    } catch (error) {
        console.error('Error fetching Listing Owner profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


// Validation Schema------------------------------------------------------------------------------------------------------------ needs to be updated
const updateListingOwnerProfileSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long').optional(),
    email: yup.string().email('Invalid email format').optional(),
    phone: yup.string().optional(),
    profilePicture: yup.string().optional(),
    password: yup.string().min(6, 'Password must be at least 6 characters long').optional(),
});

// Update Listing Owner Profile
exports.updateListingOwnerProfile = async (req, res) => {
    try {
        // Validate input
        await updateListingOwnerProfileSchema.validate(req.body, { abortEarly: false });

        const { id } = req.user;
        const { name, email, password, phone, profilePicture } = req.body;
        
        const updatedListingOwner = await listingOwnerService.updateListingOwnerProfile(id, { name, email, password, phone, profilePicture });
        
        if (!updatedListingOwner) {
            return res.status(404).json({ message: 'Listing Owner not found' });
        }

        res.json({ message: 'Profile updated successfully', listingOwner: updatedListingOwner });
        console.log("LO Profile Updated Successfully");
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error updating Listing Owner profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete Listing Owner Profile
exports.deleteListingOwnerProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const deletedListingOwner = await listingOwnerService.deleteListingOwnerProfile(id);
        
        if (!deletedListingOwner) {
            return res.status(404).json({ message: 'Listing Owner not found' });
        }

        res.json({ message: 'Profile deleted successfully' });
        console.log("LO Profile Deleted Successfully");
    } catch (error) {
        console.error('Error deleting Listing Owner profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};
