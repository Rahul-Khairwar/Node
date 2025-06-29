const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
    empId: Number,
    empName: String,
    empPosition: String,
    empSalary: Number,
})

module.exports = mongoose.model("empModels", EmpSchema);