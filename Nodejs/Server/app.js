// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const port =8080 
const app = express()
app.use(cors());
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}


// This is connection of MongoDb to connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("conntected")
    })
    .catch((err) => {
        console.log("error", err)
    })

// /Setting up of Database Schema
const DbSchema = new mongoose.Schema({
    Task:String
})
const Dbmodel = mongoose.model("Book", DbSchema,"Book")


// Router
app.get("/Db", (req, res) => {
    Dbmodel.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
               console.log("Error",err)
        })
})


app.listen(port, () => {
    console.log(`This is app is running ${port}`)
})