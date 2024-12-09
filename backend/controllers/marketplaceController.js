const Item = require('../models/Item');
const ListingOwner = require('../models/ListingOwner');
const User = require('../models/User');
// Create new item
exports.createItem = async (req, res) => {
    try {
        let itemData = req.body;
        
        // Find the listingOwner by email
        const listingOwner = await ListingOwner.findOne({ email: itemData.seller });
        if (!listingOwner) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        
        // Replace email with listingOwner ID
        itemData.seller = listingOwner._id;
        
        const item = new Item(itemData);
        await item.save();
        
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get seller's items
exports.getSellerItems = async (req, res) => {
    try {
        const listingOwner = await ListingOwner.findOne({ email: req.user.email });
        if (!listingOwner) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        const items = await Item.find({ seller: listingOwner._id });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update item
exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        // Verify ownership
        const listingOwner = await ListingOwner.findOne({ email: req.user.email });
        if (item.seller.toString() !== listingOwner._id.toString()) {
            return res.status(403).json({ error: 'Not authorized' });
        }

        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete item
exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        // Verify ownership
        const listingOwner = await ListingOwner.findOne({ email: req.user.email });
        if (item.seller.toString() !== listingOwner._id.toString()) {
            return res.status(403).json({ error: 'Not authorized' });
        }

        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get single item details
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
            .populate('seller', 'username email createdAt');
        
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchItems = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, query, condition } = req.query;
        console.log('Search Query Params:', req.query);
        
        const searchQuery = {};

        if (category && category !== 'any') {
            searchQuery.category = category.toLowerCase();
        }

        // Fix price handling
        if (maxPrice && !isNaN(maxPrice)) {
            searchQuery.price = {
                ...searchQuery.price,
                $lte: Number(maxPrice)
            };
        }

        if (minPrice && !isNaN(minPrice)) {
            searchQuery.price = {
                ...searchQuery.price,
                $gte: Number(minPrice)
            };
        }

        if (query) {
            searchQuery.$or = [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ];
        }

        if (condition && condition !== 'any') {
            searchQuery.condition = condition;
        }

        searchQuery.isSold = false;

        console.log('MongoDB Query:', searchQuery);

        const items = await Item.find(searchQuery)
            .populate('seller', 'username email createdAt')
            .sort('-createdAt');

        console.log('Found Items:', items.length);
        res.status(200).json(items);
    } catch (error) {
        console.error('Search Error:', error);
        res.status(500).json({ error: error.message });
    }
};


// ... existing exports ...

// Add purchase controller
exports.purchaseItem = async (req, res) => {
    console.log('Purchase request received');
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            console.log('Item not found');
            return res.status(404).json({ error: 'Item not found' });
        }
        console.log('Item found:', item);
        if (item.isSold) {
            console.log('Item is already sold');
            return res.status(400).json({ error: 'Item is already sold' });
        }
        console.log(req.user);
        // Get buyer information
        const id = req.user.id;
        const buyer = await User.findById(id);
        console.log('Buyer found:', buyer);
        if (!buyer) {
            return res.status(404).json({ error: 'Buyer not found' });
        }
        console.log('Buyer found:', buyer);

        // Don't allow buying your own items
        if (item.seller.toString() === buyer._id.toString()) {
            return res.status(400).json({ error: 'Cannot purchase your own item' });
        }
        console.log('Buyer found:', buyer);

        
        // Update item status
        item.isSold = true;
        item.buyer = buyer._id;
        console.log(item.buyer);
        console.log(item.isSold);
        item.soldAt = new Date();
        await item.save();

        // Here you would typically integrate with a payment processor
        // For now, we'll just mark it as sold

        res.status(200).json({ 
            message: 'Purchase successful',
            item: {
                ...item.toObject(),
                buyer: {
                    email: buyer.email,
                    username: buyer.username
                }
            }
        });
    } catch (error) {
        console.error('Purchase Error:', error);
        res.status(500).json({ error: error.message });
    }
};