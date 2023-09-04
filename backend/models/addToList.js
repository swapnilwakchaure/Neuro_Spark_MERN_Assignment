const mongoose = require('mongoose');



const addToListSchema = mongoose.Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    versionKey: false
});



const AddToListModel = mongoose.model('addtolist', addToListSchema);



module.exports = { AddToListModel };
