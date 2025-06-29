const express=require("express")
const route=express.Router()

route.get("/home",(req,res)=>{
    res.send("<h1>This is teacher home page</h1>")
})
route.get("/about",(req,res)=>{
    res.send("<h1>This is  teacher about page</h1>")
})
route.get("/subject",(req,res)=>{
    res.send("<h1>This is  teacher subject page</h1>")
})


module.exports=route