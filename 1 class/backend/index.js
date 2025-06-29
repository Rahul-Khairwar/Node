const express = require("express");
const app = express();
const StuRoute = require("./routes/stuRoute");
const bodyparser = require("body-parser");
const { default: mongoose } = require("mongoose");
const Port = 8000;
const cors = require("cors");

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/newfrontend").then(()=>{
    console.log("DB Connected!");
})

app.use(cors());
app.use(express.json());

app.use("/students",StuRoute);

app.listen(Port, ()=>{   
    console.log(`Server on run ${Port}`)
})



