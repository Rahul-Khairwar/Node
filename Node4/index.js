const express = require("express");
const app = express();
const mongoose=require("mongoose")
const bodyParser = require("body-parser");
const EmpRoute= require("./routes/empRoute");

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/vijay").then(()=>{

  console.log("mongodb successfully connected")

})

app.set("view engine", "ejs");

app.use("/data", EmpRoute);

app.listen(9000, () => {
  console.log("server is on port 9000");
});     
