const express= require("express")
const app= express()
const StuRoute=require("./routes/stuRoute")
const cors=require("cors")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const port=8000;
mongoose.connect("mongodb://0.0.1:27017/zakidb").then(()=>{
    console.log("db connected successfully!!!")
})

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())


app.use("/students",StuRoute)

app.listen(Port,()=>{
    console.log(`Server run on port ${Port}`)
})
