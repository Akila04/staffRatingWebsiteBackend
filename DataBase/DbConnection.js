const mongoose = require('mongoose');

const url = "mongodb+srv://Akila:Akila@cluster0.enfa1.mongodb.net/RatingWebsite?retryWrites=true&w=majority";

const Dbconnection = async() => {
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Db Connected.....");
}

module.exports = Dbconnection;