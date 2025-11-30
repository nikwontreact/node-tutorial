//*static router is used for frontend routing
const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get("/", async (req, res) => {
  const allurls = await URL.find({});
  return res.render("home", { urls: allurls });
});

module.exports = router;
