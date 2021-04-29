const mongoose = require('mongoose');

const userdetailsschema = new mongoose.Schema({
    _id: {
        type: String
    },
    UserName: {
        type: String
    },
    Password: {
        type: String
    }
})

module.exports = UserDetails = mongoose.model('UserDetails' , userdetailsschema);