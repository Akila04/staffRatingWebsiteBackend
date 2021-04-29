const mongoose = require('mongoose');

let patentpublisheddetails = new mongoose.Schema({
    _id: {
        type: Number
    },
    PatentPublished:{
        type: Array
    }
})

module.exports = PatentPublished = mongoose.model('PatentPublishedDetails' , patentpublisheddetails);