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
const {OrdersModel} = require("./model/OrdersModel");
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
app.get("/allOrders",async(req,res)=>{
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);    
})

app.post("/newOrder",async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        mode: req.body.mode
    });

    newOrder.save();
    res.send("Order Saved");
})
app.listen(PORT,()=>{
    console.log("app listeninig to port",PORT);
});
