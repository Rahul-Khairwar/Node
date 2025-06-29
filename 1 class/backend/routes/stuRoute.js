const express = require("express");
const route = express.Router();
StuController = require("../controllers/stuController");

route.post("/save",StuController.dataSave);
route.get("/datadisplay",StuController.datadisplay);
route.get("/updatedata",StuController.updatedata);
route.post("/studelete",StuController.stuDelete);
route.post("/editdatashow", StuController.stuEditShow);
route.put("/editdatasave", StuController.stuEditSave);
route.post("/searchdata", StuController.SearchData);

module.exports = route;
