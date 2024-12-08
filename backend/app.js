const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/admin', require('./routes/admin'));
app.use('/api/user', require('./routes/user'));
app.use('/api/listingOwner', require('./routes/listingOwner'));
app.use('/api/property', require('./routes/property'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/contactUs', require('./routes/contactUs'));
app.use('/api/feedback', require('./routes/feedbackCompRoutes'));

// Example route
app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
