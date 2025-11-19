const express = require("express");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares/index");
const { connectMongoDb } = require("./connection");

const app = express();
const PORT = 8000;

//^connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube").then(() =>
  console.log("mongoDB connected")
);

//!Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//!Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server started at port : ${PORT} `);
});
