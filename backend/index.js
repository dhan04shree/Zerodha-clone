require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002
const DBURL = process.env.MONGO_URL;

mongoose.connect(DBURL);

const app = express();

app.listen(PORT,()=>{
    console.log("DB connected");
});
