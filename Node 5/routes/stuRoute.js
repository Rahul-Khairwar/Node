const express=require("express");

const route=express.Router();

const stuController=require("../controllers/stuController");

route.get("/home",stuController.homePage);
route.get("/about",stuController.aboutPage);
route.get("/services",stuController.servicesPage);

route.get("/gallery",stuController.galleryPage);
route.get("/placement",stuController.placementPage);
route.get("/join",stuController.joinPage);
route.get("/contact",stuController.contactPage);

route.post ("/dataSave",stuController.dataSave)



module.exports=route