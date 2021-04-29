const express = require('express');
const EducationDetails = require('../DataBase/EducationDetailsScheme.js');

const router = express.Router();

router.get('/getEducationDetails', async(req,res) => {
    const data = await EducationDetails.find();
    res.json(data);
})

router.post('/putEducationDetails', async(req,res) => {
    const data = new EducationDetails({
        _id:2,
        Education: [
            {
                Degree: 'B.E Computer Science and Engineering',
                University: 'Bharathidasan University',
                Year:'April 1998'
            },
        ]
    });
    data.save().then((response) => {
        res.send("Education Details Saved Successfully");
    }).catch((err) => {
        res.send(err.message);
    })
})

module.exports = router;