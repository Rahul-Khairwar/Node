
const StuModel = require("../models/stuModel")

const dataSave = async(req,res)=>{
  const { rollno , name, city, fees } = req.body;

  const student = await StuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
  })
  res.send({msg:"Data Save!",myData:student});
}

const datadisplay = async(req,res)=>{

  const Data = await StuModel.find();
    res.send(Data)
}

const updatedata = async(req,res)=>{
  const myData = await StuModel.find();
  res.send(myData)
}

const stuDelete =async(req, res)=>{
    const { StuId } = req.body ;
    await StuModel.findByIdAndDelete(StuId);
    res.send("Data deleted!!!");
}


const stuEditShow=async(req, res)=>{
  const { id }= req.query;
   const Data = await StuModel.findById(id);
   res.send(Data);
}


const stuEditSave=async(req, res)=>{
  const {_id } =req.body;
  const Data = await StuModel.findByIdAndUpdate(_id, req.body);
  res.send("Data succesfully updated!!!");
}

const SearchData = async (req, res)=>{
  const { sturno } = req.body;
  const Data = await   StuModel.find({rollno:sturno});
  res.send(Data);
}

module.exports={
    dataSave,
    datadisplay,
    updatedata,
    stuDelete,
    stuEditShow,
    stuEditSave,
    SearchData
}
