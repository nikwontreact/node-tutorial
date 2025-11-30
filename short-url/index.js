//!imports
const express = require("express");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const path = require("path");

const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");

//!Setting up express
const app = express();
const PORT = 8001;

//!connecting mongodb
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(console.log("mongodb connected"))
  .catch((err) => console.log("mongodb error", err));

//!setting template engine and then config path
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//!Middlewares

//!To support parsing diff types of data
app.use(express.json()); //* to parse json data
app.use(express.urlencoded({ extended: false })); //* to parse urlencoded data

//!Routes
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  if (!entry) return res.status(404).send("Short URL not found");
  return res.redirect(entry.redirectURL);
});

//!Port configuiration
app.listen(PORT, () => {
  console.log(`server started at Port ${PORT}`);
});
