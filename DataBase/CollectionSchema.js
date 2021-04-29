const mongoose = require('mongoose');

let staffdata = new mongoose.Schema({
    _id: {
        type: Number
    },
    Name: {
        type:String
    },
    Department: {
        type: String
    },
    Designation: {
        type: String
    },
    NumberOfStars: {
        type: Number
    },
    Qualification: {
        type: Array
    }
})

module.exports = StaffData = mongoose.model('StaffData' , staffdata);