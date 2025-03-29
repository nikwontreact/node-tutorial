// const { log } = require('console');
// const http = require('http');
// const fs = require('fs');
// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url}New Request Received \n`;
//     fs.appendFile("log.txt", log, (err, data) => { res.end('Hello form server'); });

// });

// myServer.listen(8000, () => console.log('Server Started At Port 8000'));


const http = require('http');
const fs = require('fs');
const { callbackify } = require('util');
const myServer = http.createServer((req, res) => {
fs.appendFile("nik.txt","hello form nikhil \n",(err,data)=>{res.end('hello world')})
});
myServer.listen(3000,console.log("server started at port 3000"))