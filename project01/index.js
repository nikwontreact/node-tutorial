const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { error, log } = require("console");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id == id);
  return res.send(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  // find user index
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  // update the user (merge old + new data)
  users[userIndex] = { ...users[userIndex], ...body };

  // save updated array to file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Failed to update user" });
    }
    return res.json({
      status: "success",
      updatedUser: users[userIndex],
    });
  });
});


app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  // find the index of the user
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  // remove the user
  const deletedUser = users.splice(userIndex, 1)[0];

  // write updated data back to file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Failed to delete user" });
    }
    return res.json({ status: "success", deletedUser });
  });
});

app.listen(PORT, () => {
  console.log(`server started at port : ${PORT} `);
});
