// REQUIRED PACKAGES
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const expressWinston = require('express-winston');
const port = process.env.port || 8080;

// LOCAL MODULES
const { connection } = require('./connect/db.connect');
const { addToListRoute } = require('./routes/route');
const logger = require('./logger');

const app = express();

// logger or logging process
app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
}));


app.use(express.json());
app.use(cors());

// HOME API ROUTE
app.get('/', (request, response) => {
    const query = request.query;

    response.send('Welcome to Event Management App');
});

// EVENT CREATE PART API ROUTE
app.use('/create', addToListRoute);

// BAD REQUEST
app.get('/400', (request, response) => {
    response.sendStatus(400);
});

// INTERNAL SERVER ERROR
app.get('/500', (request, response) => {
    response.sendStatus(500);
});


// SERVER CONNECT TO DATABASE AND RUN ON PORT
app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is runnig at port ${port}`);
    } catch (error) {
        console.log(`Cannot able to start the server ${error}`);
    }
});
