const empModel = require("../models/empModel");
const EmpModel = require("../models/empModel");

const homePage = (req, res) => {
  // res.send("Okk");

  res.render("home");
};

const insertPage = (req, res) => {
  // res.send("Okk");

  res.render("insert");
};

const updatePage = async (req, res) => {
  const Data = await EmpModel.find();

  res.render("update", { MyData: Data });
};

const deleteData = async (req, res) => {
  const { id } = req.query;
  await EmpModel.findByIdAndDelete(id);
  const Data = await empModel.find();
  res.render("update", { MyData: Data });
};

const dataSave = (req, res) => {
  const { eno, name, city, sal } = req.body;

  EmpModel.create({
    empno: eno,
    name: name,
    city: city,
    salary: sal,
  });
  res.render("insert");
};

const displayPage = async (req, res) => {
  const data = await EmpModel.find();
  res.render("display", { MyData: Data });
};

const editData= async(req,res)=>{
  const {id}=req.query
  const Data=await EmpModel.findById{id};
  console.log(Data)
res.render("editdata",{Data:Data})
}

editDataSave=async(req,res)=>{
      const {id,empno,name,city,salary}=req.body
      await EmpModel.findByIdAndUpdate(id,{


        empno:empno,
        name:name,
        city:city,
        salary:salary

      })
      
  
}

module.exports = {
  homePage,
  insertPage,
  dataSave,
  displayPage,
  updatePage,
  deleteData,

};
