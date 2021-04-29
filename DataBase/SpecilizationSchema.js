const mongoose = require('mongoose');

let specilizationdata = new mongoose.Schema({
    _id: {
        type: Number
    },
    Specilizations: {
        type: Array
    }
})

module.exports = SpecilizationData = mongoose.model('SpecilizationDetails' , specilizationdata);