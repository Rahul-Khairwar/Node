const express=require("express")
const route= express.Router()
const stuController=require("../controllers/stuController")

route.get("/home",stuController.homepage)
route.get("/about",stuController.aboutpage)
route.get("/courses",stuController.coursespage)
route.get("/faculty",stuController.facultypage)
route.get("/contact",stuController.contactpage)


module.exports=route