const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://abdi:abdi@cluster0.8y7a2c4.mongodb.net/mydatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});