//!code using http to understand the working under the hood
//* due to drawbacks of http we use express framework

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()} : New Request Received  at :  ${req.method}  ${req.url}\n`;
//   const myUrl = url.parse(req.url);
//   console.log = myUrl;
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("home page");
//         break;
//       case "/about":
//         res.end("hello i am nikhil ");
//         break;
//       case "/contact":
//         res.end("thanks for contacting me");
//         break;
//       case "default":
//         res.end("error 404");
//         break;
//     }
//   });
// });

// myServer.listen(8000, () => {
//   console.log("server started at port 8000");
// });

//!creating server using express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello form home page");
});

app.get("/about",(req,res)=>{
  return res.send("hello i'm nikhil ")
})

app.listen(8000,()=>{
  console.log("server started at port 8000")
})