const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const SECRET_KEY = '8Yx6Pq2mLbZ3T9QrXj1C4Wd7Kn5HfGjRvN0A'; 

// Create Admin
exports.createAdmin = async (name, email, password, secret) => {
    if (secret !== SECRET_KEY) {
        const error = new Error('Invalid secret key');
        error.status = 403;
        throw error;
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
        const error = new Error('Admin already exists');
        error.status = 400;
        throw error;
    }

    const admin = new Admin({ name, email, password });
    await admin.save();

    return admin;
};

// Get All Admins
exports.getAllAdmins = async () => {
    return Admin.find().select('-password');
};

// Update Admin
exports.updateAdmin = async (id, name, email) => {
    const admin = await Admin.findByIdAndUpdate(id, { name, email }, { new: true });
    if (!admin) {
        const error = new Error('Admin not found');
        error.status = 404;
        throw error;
    }
    return admin;
};

// Delete Admin
exports.deleteAdmin = async (id) => {
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
        const error = new Error('Admin not found');
        error.status = 404;
        throw error;
    }
};

// Login Admin
exports.loginAdmin = async (email, password) => {
    const admin = await Admin.findOne({ email });
    if (!admin) {
        const error = new Error('Admin not found');
        error.status = 404;
        throw error;
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        const error = new Error('Invalid credentials');
        error.status = 400;
        throw error;
    }

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, adminKey: admin.adminKey };
};
