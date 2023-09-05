const mongoose = require('mongoose');



const participantSchema = new mongoose.Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    versionKey: false
});



const eventSchema = new mongoose.Schema({
    title: String,
    selectedUsers: [participantSchema]
}, {
    versionKey: false
});



const EventModel = mongoose.model('event', eventSchema);



module.exports = { EventModel };
