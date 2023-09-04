const express = require('express');
const { AddToListModel } = require('../models/addToList');



const addToListRoute = express.Router();



addToListRoute.post('/addtolist', async (request, response) => {
    const { name, date, email, contact } = request.body;

    try {
        const oldUser = await AddToListModel.find({ email });
        if (oldUser.length > 0) {
            response.send(`${name}, you are email address already exists, try another`);
        } else {
            const data = new AddToListModel({ name, date, email, contact });
            await data.save();
            response.send(`${name}'s data was successfully added`);
        }
    } catch (error) {
        response.send(`Cannot able to add the data ${error}`);
    }
});



module.exports = { addToListRoute };