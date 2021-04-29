const express = require('express');

const PatentPublishedDetails = require('../DataBase/PatentPublishedSchema');
const router = express.Router();

router.get('/getPatentPublishedDetails', async(req,res) => {
    const data = await PatentPublishedDetails.find();
    res.json(data);
})

router.post('/putPatentPublishedDetails', async(req,res) => {
    const data = new PatentPublishedDetails({
        _id:2,
        PatentPublished: [
            {
                Title:"Automatic detection of human health and transferring health information",
                Year: "2016"
            },
            {
                Title:"Segmentation, detection and classification of psoriasis skin infection using image processing",
                Year: "2018"
            }
        ]
    });
    data.save().then((response) => {
        res.send("Patent Published Details Saved Successfully");
    }).catch((err) => {
        res.send(err.message);
    })
})

module.exports = router;