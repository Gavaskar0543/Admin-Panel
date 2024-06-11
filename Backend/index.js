const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app  = express();
const db = require('./Config/mongoose');
const monitor = require('./Config/Monitor');
const logger = require('morgan');
const cors = require('cors');

//setup
app.set('view engine','ejs');
app.set('views','./View')

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(logger(monitor.morgan.mode,monitor.morgan.options))
app.use(cors())


//router
app.use('/',require('./Router'))

app.listen(port, (err) => {
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`http://localhost:${port}/`);
})