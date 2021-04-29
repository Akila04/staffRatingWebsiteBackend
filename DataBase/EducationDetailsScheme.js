const mongoose = require('mongoose');

let educationdetails = new mongoose.Schema({
    _id: {
        type: Number
    },
    Education:{
        type: Array
    }
})

module.exports = EducationDetails = mongoose.model('EducationDetails' ,educationdetails);