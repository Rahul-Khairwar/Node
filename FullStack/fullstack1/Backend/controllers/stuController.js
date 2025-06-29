const StuModel=require("../models/stuModel")
const stuSave=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;

const student=await StuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
})
res.send({msg:"Data Save!!",myData:student});
}
module.exports={
    stuSave
}