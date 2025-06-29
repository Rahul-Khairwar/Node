
const EmpModels = require("../Models/EmpModels")
const Home = (req, res) => {
    res.render("home");
}
const Insert = (req, res) => {
    res.render("insert");
}

const SaveData = (req, res) => {
    console.log(req.body);
    const { id, name, position, salary } = req.body;

    EmpModels.create({
        empId: id,
        empName: name,
        empPosition: position,
        empSalary: salary
    })


    res.render("insert");
}
const DisplayData = async (req, res) => {
    const empData = await EmpModels.find();
    console.log(empData);

    res.render("display", { empData })
}

const Update = async (req, res) => {
    const empData = await EmpModels.find();
    console.log(empData);

    res.render("update", { empData })

}
const Delete = async (req, res) => {
    const { id } = req.query;

    await EmpModels.findByIdAndDelete(id)

    const empData = await EmpModels.find();

    res.render("display", { empData })
}
const EditData = async (req, res) => {
    console.log(req.query);
    const { id } = req.query;

    const editData = await EmpModels.findById(id)
    res.render("edit", { editData });

}
const EditSave = async (req, res) => {
    console.log(req.body);
    const { id, empId, name, position, salary } = req.body;

    await EmpModels.findByIdAndUpdate(id, {
        empId: empId,
        empName: name,
        empPosition: position,
        empSalary: salary,
    })

    const empData = await EmpModels.find();
    res.render("update", { empData })

}


module.exports = {
    Home,
    Insert,
    SaveData,
    DisplayData,
    Update,
    Delete,
    EditData,
    EditSave
}