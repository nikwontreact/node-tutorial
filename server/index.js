//!without express framework.
// const { log } = require('console');
// const http = require('http');
// const fs = require('fs');
// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url}New Request Received \n`;
//     fs.appendFile("log.txt", log, (err, data) => { res.end('Hello form server'); });

// });

// myServer.listen(8000, () => console.log('Server Started At Port 8000'));


//!using express.
const express = require('express')

const app = express();
app.get("/", (req, res) => {
    return res.send('Hello from the Home page');
})

app.get("/about", (req, res) => {
    return res.send("Hello from the about page")
})



app.listen(3000, console.log("server started at port 3000"))

