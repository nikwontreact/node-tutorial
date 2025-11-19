const User = require("../models/user");

//^HANDLE GET ALL USERS
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

//^HANDLE GET USER BY ID
async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json({ message: "user not found" });
  }
  return res.send(user);
}

//^HANDLE DELETE USER BY ID
async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ message: "deleted sucessfully" });
}

//^HANDLE CREATE NEW USER
async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(404).json({ message: "all fields are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });
  console.log(result);
  return res.status(201).json({ message: "created successfully", userId : result.id });
}

module.exports = {
  handleCreateNewUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
};
