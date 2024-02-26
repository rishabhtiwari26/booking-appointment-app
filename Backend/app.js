const express = require('express')
const app = express()
const  userRoute=require('./Router/userRouter')
const cors=require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const sequelize = require('./util/database');
app.use(cors())

app.use('/users',userRoute)

sequelize.sync()
    .then(result => {
        // console.log(result);
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });