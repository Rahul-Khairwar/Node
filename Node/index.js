// const http=require("http")

// http.createServer((req,res)=>{

// res.write("<h1> welcome to cybrom</h1>")
// res.end()

// }).listen(8080)

// const http=require("http")
// http.createServer((req,res)=>{

//     res.write("<h1>welcome to node class</h1>")
//     res.end("<h1>response is stopped!!</h1>")
// }).listen(8080,()=>{


//     console.log("<h1>server run on 8080 server!!</h1>")
// })

// const http=require("http")


// const nameDetailes=require("./cybrom")

// http.createServer((req,res)=>{

// res.write("<h1>Hello</h1>")
// res.write(nameDetailes.stuDetail())
// res.write(nameDetailes.stuFees())
// res.write(nameDetailes.stuRoll())
// res.end()

// }).listen(8000,()=>{

//     console.log("<h1>Hello My name is Rahul Sharma</h1>")
// })


// const http=require("http")

// const uc=require("uppercase")

// http.createServer((req,res)=>{

// res.write(uc("Welcome to cybrom , we learn mern stack"))

// }).listen(8000,()=>{

//     console.log("server is run on 8000")
// })

// const  http = require("http")

// const fs=require("fs")


// http.createServer((req,res)=>{

// fs.readFile("raj.text",(err,data)=>{

//     res.write(data)
//     res.end()
// })

// }).listen(8000,()=>{

//     console.log("server is run on 8000 port !!")
// })

// 

// 
// const express=require("express")
// const app =express()
// const stuRoute=require("./routes/stuRoutes")
// const teacherRoutes=require("./routes/teacherRoutes")

// app.use("/students",stuRoute)
// app.use("/teacher",teacherRoutes)


// app.listen(9000,()=>{

//     console.log("<h1>Run on server</h1>")
// })
