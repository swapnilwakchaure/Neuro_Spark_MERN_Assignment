const express = require('express');
const { AddToListModel } = require('../models/addToList');
const { EventModel } = require('../models/eventList');



const addToListRoute = express.Router();


// --------------- GET REQUEST ADD TO LIST PARTICIPANTS DATA --------------- //
addToListRoute.get('/', async (request, response) => {
    const query = request.query;

    try {
        const participants = await AddToListModel.find(query);
        response.send(participants);
    } catch (error) {
        response.send(`Cannot able to get the participants ${error}`);
    }
});


// --------------- POST REQUEST ADD TO LIST PARTICIPANTS DATA --------------- //
addToListRoute.post('/addtolist', async (request, response) => {
    const { name, date, email, contact } = request.body;

    try {
        const oldUser = await AddToListModel.find({ email });
        if (oldUser.length > 0) {
            response.send(`${name}, you are email address already exists, try another`);
        } else {
            const data = new AddToListModel({ name, date, email, contact });
            await data.save();
            response.send({
                'message': `${name}'s data was successfully added`,
                'data': data
            });
        }
    } catch (error) {
        response.send(`Cannot able to add the data ${error}`);
    }
});


// --------------- POST REQUEST TO ADD EVENT DATA --------------- //
addToListRoute.post('/addevent', async (request, response) => {
    const { title, selectedUsers } = request.body;

    try {
        const oldEvent = await EventModel.find({ title });
        if (oldEvent.length > 0) {
            response.send(`${title}, event is already created. please create another`);
        } else {
            const newEvent = new EventModel({ title, selectedUsers });
            await newEvent.save();
            response.send({
                'message': `${title}, event is created successfully`,
                'data': newEvent
            })
        }
    } catch (error) {
        response.send(`Cannot able to add the event data ${error}`);
    }
});


// --------------- GET REQUEST FOR EVENTS DATA --------------- //
addToListRoute.get('/getevent', async (request, response) => {
    const query = request.query;

    try {
        const eventData = await EventModel.find(query);
        response.send(eventData);
    } catch (error) {
        response.send(`Cannot able to get the participants ${error}`);
    }
});


// --------------- DELETE REQUEST FOR DELETE EVENT DATA --------------- //
addToListRoute.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await EventModel.findByIdAndDelete({ _id: ID });
        response.send({ "message": `Event is successfully deleted.` });
    } catch (error) {
        response.send('Cannot able to delete the event');
    }
});


module.exports = { addToListRoute };