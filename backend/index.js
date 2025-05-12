require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3002
const DBURL = process.env.MONGO_URL;

const cors = require("cors");

const {HoldingModel} = require("./model/HoldingModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");

var cookieParser = require('cookie-parser');
const authRoute = require("./routes/AuthRoute");

app.use(express.json()); 
// app.use(express.urlencoded({ extended: true })); 

mongoose.connect(DBURL)
  .then(() => console.log("db connected"))
  .catch((err) => console.error(err));

app.use(
    cors({
        origin:["https://localhost:3002/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
    
});

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
