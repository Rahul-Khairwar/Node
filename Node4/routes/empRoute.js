const express=require("express");

const route=express.Router();

const EmpController=require("../controllers/empController");

route.get("/",EmpController.homePage);
route.get("/insert",EmpController.insertPage);
route.post("/save",EmpController.dataSave);
route.get("/display",EmpController.displayPage);
route.get("/update",EmpController.updatePage);
route.get("/delete",EmpController.deleteData)
route.get("/editdata",EmpController.editData)
route.post("/editsave",EmpController.editDataSave)


module.exports=route;