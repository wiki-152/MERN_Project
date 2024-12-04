const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const adminMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    const adminKey = req.header('X-Admin-Key'); // Admin's unique key

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    if (!adminKey) {
        return res.status(401).json({ message: 'Admin key is required' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin || admin.adminKey !== adminKey) {
            return res.status(403).json({ message: 'Invalid admin credentials' });
        }

        req.admin = admin; // Attach admin to the request
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token or admin key' });
    }
};

module.exports = adminMiddleware;
