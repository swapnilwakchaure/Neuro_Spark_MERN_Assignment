const mongoose = require('mongoose');


// ADD TO LIST PARTICIPANTS SCHEMA
const addToListSchema = mongoose.Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    versionKey: false
});


// LIST MODEL
const AddToListModel = mongoose.model('addtolist', addToListSchema);



module.exports = { AddToListModel };
