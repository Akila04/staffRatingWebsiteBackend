const express = require('express');
const SpecilizationDetails = require('../DataBase/SpecilizationSchema');

const router = express.Router();

router.get('/getSpecilationdetails', async(req,res) => {
    const data = await SpecilizationDetails.find();
    res.json(data);
});

router.post('/putSpecilizationdetails', async(req,res) => {
    const data = new SpecilizationDetails({
        _id:1,
        Specilizations:['Network Security','Network and Information Security',' Design and Analysis of Algorithms','Programming and Data Structure II','Graph Theory and Algorithms']
    });
    data.save().then((response) => {
        res.send("Specilization details saved successfully");
    }).catch((err) => {
        res.send(err.message);
    })
})

module.exports = router;
