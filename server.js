// imports
const express = require('express');
const mongoose = require('mongoose');

// local imports
require('dotenv').config({path: 'variables.env'});

// connecting to the database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))
.catch(err => console.log("The error is: ", err))

// running our express application
const app = express();

// using environmental vairable port or the default port 
const PORT = process.env.PORT || 4444;

// listening to port changes
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})