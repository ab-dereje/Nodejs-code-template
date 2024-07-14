const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://abdi:abdi@ac-vodhc71-shard-00-00.8y7a2c4.mongodb.net:27017,ac-vodhc71-shard-00-01.8y7a2c4.mongodb.net:27017,ac-vodhc71-shard-00-02.8y7a2c4.mongodb.net:27017/?ssl=true&replicaSet=atlas-10rfpx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
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