// server.js
const express = require('express');
const app = require('./app');
const PORT = process.env.PORT || 5000;

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something broke!'); // Send a 500 response
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
