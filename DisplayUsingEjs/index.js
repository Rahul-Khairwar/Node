const express = require("express");
const EmpRoutes=require("./Routes/EmpRoutes")
const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const app = express();

mongoose.connect("mongodb://localhost:27017/EmpData").then(()=>{
    console.log("DB - Successfully Connected!");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set("view engine", "ejs")

app.use("/",EmpRoutes)
app.listen(3000,()=>{
    console.log("Server is Running on Port no 3000");
})