// const express=require("express")
// const app=express()
// const dRoute= require("./routes/emoRoutes")


// app.use("/doctor",dRoute)

// app.listen(9000,()=>{
//     console.log("server run on server!!!")
// })

const express=require("express")
const app=express()
const stuRoute= require("./routes/stuRoute")

app.set("view engine","ejs")
app.use("/students",stuRoute)

app.listen(9000,()=>{
    console.log("server run on server!!!")
})

