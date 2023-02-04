const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    
}).then(() => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DB Connection Error: ", err)
});

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes

//port
const port = process.env.PORT || 5000;


//listener
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
