const stuModel = require("../models/stuModel");

const homePage = (req, res) => {
  // res.send("Okk");

  res.render("home");
};

const aboutPage = (req, res) => {
  // res.send("Okk");

  res.render("about");
};

const servicesPage = (req, res) => {
  // res.send("Okk");

  res.render("services");
};

const galleryPage = (req, res) => {
  // res.send("Okk");

  res.render("gallery");
};

const placementPage = (req, res) => {
  // res.send("Okk");

  res.render("placement");
};

const joinPage = (req, res) => {
  // res.send("Okk");

  res.render("join");
};

const contactPage = (req, res) => {
  // res.send("Okk");

  res.render("contact");
};

const dataSave=async (req,res)=>{
 
    const { rno, name,city,fees}=req.body;

    await stuModel.create({


        rollno:rno,
        name:name,
        city:city,
        fees:fees
    })


    console.log(req.body)

    res.send("okokok")
}



module.exports = {
  homePage,
  aboutPage,
  servicesPage,
  galleryPage,
  placementPage,
  joinPage,
  contactPage,
dataSave
};
