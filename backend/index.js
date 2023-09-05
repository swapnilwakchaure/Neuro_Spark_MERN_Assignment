// REQUIRED PACKAGES
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.port || 8080;

// LOCAL MODULES
const { connection } = require('./connect/db.connect');
const { addToListRoute } = require('./routes/route');

const app = express();

app.use(express.json());
app.use(cors());

// HOME API ROUTE
app.get('/', (request, response) => {
    const query = request.query;

    response.send('Welcome to Event Management App');
});

// EVENT CREATE PART API ROUTE
app.use('/create', addToListRoute);


// SERVER CONNECT TO DATABASE AND RUN ON PORT
app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is runnig at port ${port}`);
    } catch (error) {
        console.log(`Cannot able to start the server ${error}`);
    }
});
