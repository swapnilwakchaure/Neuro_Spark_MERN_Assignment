require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.port || 8080;

const { connection } = require('./connect/db.connect');
const { addToListRoute } = require('./routes/route');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
    const query = request.query;

    response.send('Welcome to Event Management App');
});

app.use('/create', addToListRoute);


app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is runnig at port ${port}`);
    } catch (error) {
        console.log(`Cannot able to start the server ${error}`);
    }
});
