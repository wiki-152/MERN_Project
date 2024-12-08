const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register User Service
exports.registerUser = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        const error = new Error('User already exists');
        error.status = 400;
        throw error;
    }

    const user = new User({ name, email, password });
    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, message: 'Registration successful' };
};

// Login User Service
exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error('User not found');
        error.status = 404;
        throw error;
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        const error = new Error('Invalid credentials');
        error.status = 400;
        throw error;
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, message: 'Login successful' };
};

// Get User by Email
exports.getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// ------------------------------------------------------------------------------------------------------------PROFILE------------------------------------------------------------------------------------------------------------


// Get User Profile
exports.getUserProfile = async (userId) => {
    return await User.findById(userId).select('-password');
};

// Update User Profile------------------------------------------------------------------------------------------------------------ needs to be updated
exports.updateUserProfile = async (userId, updateData) => {
    // Hash the password if it's being updated
    if (updateData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    // Use findByIdAndUpdate to directly update the user document
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
};



// Delete User Profile
exports.deleteUserProfile = async (userId) => {
    return await User.findByIdAndDelete(userId);
};
 