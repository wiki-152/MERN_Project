const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    adminKey: { type: String, unique: true }, // Removed `required: true`
});

// Hash password and generate adminKey before saving
AdminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    // Generate a unique adminKey if not already set
    if (!this.adminKey) {
        this.adminKey = crypto.randomBytes(16).toString('hex'); // Generate a 32-character random key
    }

    next();
});

module.exports = mongoose.model('Admin', AdminSchema);
