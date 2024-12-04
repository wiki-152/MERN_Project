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

// Example route
app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
