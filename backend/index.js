require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3002
const DBURL = process.env.MONGO_URL;
mongoose.connect(DBURL);

const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingModel} = require("./model/HoldingModel");
const {PositionsModel} = require("./model/PositionsModel");

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
    
})
app.get("/allPositions",async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
    
})
app.listen(PORT,()=>{
    console.log("app listeninig to port",PORT);
});
