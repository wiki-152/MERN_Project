const express = require('express');
const propertyController = require('../controllers/propertyController');
const authMiddleware = require('../middleware/authMiddleware'); // For authentication TBD

const router = express.Router();


// Routes
// old router.post('/property', authMiddleware, propertyController.createProperty);
//router.post('/property', authMiddleware, upload.fields([{ name: 'images', maxCount: 10 }, { name: 'virtualTourImages', maxCount: 5 }]), propertyController.createProperty);
router.get('/property', propertyController.getProperties);
router.get('/property/:id', propertyController.getPropertyById);
// router.put('/property/:id', authMiddleware, propertyController.updateProperty);
// router.delete('/property/:id', authMiddleware, propertyController.deleteProperty);

// Routes same as above but without authentication
router.post('/propertyNoAuth', propertyController.createProperty);
router.get('/propertyNoAuth', propertyController.getProperties);
router.get('/propertyNoAuth/:id', propertyController.getPropertyById);
router.put('/propertyNoAuth/:id', propertyController.updateProperty);
router.delete('/propertyNoAuth/:id', propertyController.deleteProperty);

router.get('/property/:id', propertyController.getPropertyById);

// Routes without authentication
router.get('/propertyNoAuth', propertyController.getProperties);
router.get('/propertyNoAuth/:id', propertyController.getPropertyById);
// Route with no auth and optional filters used post request
router.post('/propertyNoAuth/filters', propertyController.getPropertiesWithFilters);

module.exports = router;