const express=require("express")
const route=express.Router()

route.get("/home",(req,res)=>{
    res.send("<h1>This is home</h1>")
})
route.get("/about",(req,res)=>{
    res.send("<h1>This is about</h1>")
})
route.get("/subject",(req,res)=>{
    res.send("<h1>This is subject</h1>")
})


module.exports=route