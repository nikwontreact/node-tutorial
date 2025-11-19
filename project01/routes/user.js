const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const {
  handleCreateNewUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router.route("/:id").get(handleGetUserById).delete(handleDeleteUserById);

module.exports = router;
