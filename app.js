const express = require('express');
const connectDB = require('./config/db');
const expressListEndpoints = require('express-list-endpoints');

const userRoutes = require('./user_app/routes/user_routes');
const postRoutes = require('./post_app/routes/post_routes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', userRoutes);
// app.use('/api' , postRoutes);

app.get('/api' , (req , res) => {
    const endpoints = expressListEndpoints(app) ;
    res.status(200).send ({
        "message" : "Welcome to the SOCIAL MEDIA API !! " ,
        "app_endpoints" : endpoints
    });
});


module.exports = app;