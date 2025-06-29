const homepage=(req,res)=>{


    //res.send("home")
    res.render("home")
}
const aboutpage=(req,res)=>{


    //res.send("home")
    res.render("about")
}
const coursespage=(req,res)=>{


    //res.send("home")
    res.render("courses")
}
const facultypage=(req,res)=>{


    //res.send("home")
    res.render("faculty")
}
const contactpage=(req,res)=>{


    //res.send("home")
    res.render("contact")
}
module.exports={

    homepage,
    aboutpage,
    coursespage,
    facultypage,
    contactpage
}