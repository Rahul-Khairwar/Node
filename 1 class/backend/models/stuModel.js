const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:String
})

module.exports = mongoose.model("StudentRecords",stuSchema);