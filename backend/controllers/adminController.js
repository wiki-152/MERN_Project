const yup = require('yup');
const adminService = require('../services/adminService');

// Validation Schemas
const createAdminSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long').required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    secret: yup.string().required('Admin secret is required'),
});

const loginAdminSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

// Create Admin
exports.createAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    const { secret } = req.query;

    try {
        // Validate input
        await createAdminSchema.validate({ name, email, password, secret }, { abortEarly: false });

        const result = await adminService.createAdmin(name, email, password, secret);
        res.json({ message: 'Admin created successfully', admin: result });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error creating admin:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};

// Get All Admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await adminService.getAllAdmins();
        res.json(admins);
    } catch (error) {
        console.error('Error fetching admins:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update Admin
exports.updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const updatedAdmin = await adminService.updateAdmin(id, name, email);
        res.json({ message: 'Admin updated successfully', admin: updatedAdmin });
    } catch (error) {
        console.error('Error updating admin:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};

// Delete Admin
exports.deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        await adminService.deleteAdmin(id);
        res.json({ message: 'Admin deleted successfully' });
    } catch (error) {
        console.error('Error deleting admin:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};

// Login Admin
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        await loginAdminSchema.validate({ email, password }, { abortEarly: false });

        const { token, adminKey } = await adminService.loginAdmin(email, password);
        res.json({ token, adminKey });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error during login:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};