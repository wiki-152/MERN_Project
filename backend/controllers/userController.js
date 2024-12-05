const yup = require('yup');
const userService = require('../services/userService');

// Validation Schemas
const registerSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long').required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        await registerSchema.validate({ name, email, password }, { abortEarly: false });

        const { token, message } = await userService.registerUser(name, email, password);
        res.json({ token, message });
        console.log("Registration Successful");
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

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        await loginSchema.validate({ email, password }, { abortEarly: false });

        const { token, message } = await userService.loginUser(email, password);
        res.json({ token, message });
        console.log("Login Successful");
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error during login:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};

// ---------------------------------------------------------PROFILE---------------------------------------------------------

// Get User Profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await userService.getUserProfile(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
        console.log("Profile Fetched Successfully");
    } catch (error) {
        console.error('Error fetching profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Validation Schema------------------------------------------------------------------------------------------------------------ needs to be updated
const updateUserProfileSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long').optional(),
    phone: yup.string().optional(), // Allow phone number to be updated
    profilePicture: yup.string().optional(), // Allow profile picture URL to be updated
    isHost: yup.boolean().optional(), // Allow isHost status to be updated
    emailNotificationsEnabled: yup.boolean().optional(),
    password: yup.string().min(6, 'Password must be at least 6 characters long').optional(),
});

// Update User Profile
exports.updateUserProfile = async (req, res) => {
    try {
        // Validate input
        await updateUserProfileSchema.validate(req.body, { abortEarly: false });

        const updatedUser = await userService.updateUserProfile(req.user.id, req.body);
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error updating profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete User Profile
exports.deleteUserProfile = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUserProfile(req.user.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'Profile deleted successfully' });
        console.log("Profile Deleted Successfully");
    } catch (error) {
        console.error('Error deleting profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

