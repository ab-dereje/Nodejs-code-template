const mongoose = require('mongoose');
const express = require('express');
const config = require("./src/config/config")
const app = express();
const { errorHandler, errorConverter } = require('./src/middlewares/error');
const ApiError = require('./src/utils/ApiError');
const httpStatus = require('http-status');

// const port = process.env.PORT || 3000;

// mongoose.connect('mongodb://abdi:abdi@ac-vodhc71-shard-00-00.8y7a2c4.mongodb.net:27017,ac-vodhc71-shard-00-01.8y7a2c4.mongodb.net:27017,ac-vodhc71-shard-00-02.8y7a2c4.mongodb.net:27017/?ssl=true&replicaSet=atlas-10rfpx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB', err);
//     });

mongoose
    .connect(config.dbConnection)
    .then(() => {
        console.log('connected to mongodb');
    })
    .catch((err) => {
        console.error(err);
    });

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});