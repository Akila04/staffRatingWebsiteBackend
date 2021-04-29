const express = require('express');
const UserDetails = require('../DataBase/UserDetailsSchema');
const bcrypt = require('bcrypt');
const router = express.Router();


router.get('/login', async(req, res) => {
    const id = req.body.id;
    const Password = req.body.Password;

    const data = UserDetails.findById(id, async function(err, docs){
        if(err){
            console.log("Error occured in receiving data");
            res.status(200).send("Error occured in receiving data");
        }
        else{
            if(docs){
                try{
                    if(await bcrypt.compare(Password, docs.Password)){
                        res.send("User Found").status(400);
                    }
                    else{
                        res.send("Incorrect password").status(300);
                    }
                }catch{
                    res.status(200).send("Error occured in receiving data");
                }
            }
            else{
                res.status(200).send("User Not Found");
            }
        }
    });
});

router.post('/signup', async(req, res) => {
    try{
        const id = req.body.id;
        const Username = req.body.UserName;
        const Password = req.body.Password;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(Password, salt);
        const data = new UserDetails({
            _id:id,
            UserName: Username,
            Password: hashedPassword
        });
        data.save().then((response) => {
            res.send("User Added Successfully").status(400);
        }).catch((err) => {
            res.send("Not Added").status(200);
        })
    }catch{
        res.send("Not Added").status(200);
    } 
});

module.exports = router;