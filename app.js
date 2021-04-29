const express = require('express');
const mongoose = require('mongoose');
const staffdatarouter = require('./Api/StaffDataRouters');
const educationdatarouter = require('./Api/EducationDetailsRoutes');
const specilizationrouter = require('./Api/SpecilizationRoutes');
const patentpublishedrouter = require('./Api/PatentPublishedRoutes');
const userdetailsrouter = require('./Api/UserDetailsRoutes');
const Dbconnection = require('./DataBase/DbConnection');

const app = express();
Dbconnection();

app.use(express.json());
//Staff Details
app.use('/staffdata',staffdatarouter);

//Staff - Education details
app.use('/educationDetails', educationdatarouter);

//Staff - Specilization details
app.use('/specilizationDetails', specilizationrouter);

//Staff - Patent Published details
app.use('/patentpublishedDetails', patentpublishedrouter);

//User Details
app.use('/user', userdetailsrouter);

app.listen(process.env.PORT || 8080,() => {
    console.log("Server Running........")
})