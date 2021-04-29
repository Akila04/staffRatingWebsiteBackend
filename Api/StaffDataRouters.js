const express = require('express');
const StaffData = require('../DataBase/CollectionSchema.js');

const router = express.Router();


router.get('/',(req, res) => {
    res.send("Hello This is Akila");
});

router.get('/getstaffdata', async(req,res) => {
    let datas = await StaffData.find();
    res.json(datas);
});

router.post('/putstaffdata', async(req,res) => {
    const data = new StaffData({
        _id:2,
        Name: "Dr G MOHAN RAJ",
        Department: "Department of Computer Science",
        Designation: "Professor",
        NumberOfStars: "8",
        Qualification: ["M.E"]
    });
    data.save().then((response)=>{
        res.send("Data Saved succesfully");

    }).catch((err) => {
        res.send(err.message);
    });
});


module.exports = router;