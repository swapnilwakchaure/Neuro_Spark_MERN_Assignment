const mongoose = require('mongoose');


// PARTICIPANTS SCHEMA TO ADD INTO EVENT LIST
const participantSchema = new mongoose.Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    versionKey: false
});


// EVENT SCHEMA
const eventSchema = new mongoose.Schema({
    title: String,
    selectedUsers: [participantSchema]
}, {
    versionKey: false
});


// EVENT MODEL
const EventModel = mongoose.model('event', eventSchema);



module.exports = { EventModel };
