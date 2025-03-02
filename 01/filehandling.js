//fs is inbuilt module for file handling fs stands for file system
const fs = require('fs');
//writeFileSync is used to write the content in the file
// fs.writeFile('./test.txt',"Welcome to Nodejs",(err)=> "");

//readFileSync is used to read the content from the file
// const data = fs.readFileSync("./contact.txt", "utf-8");
// console.log(data);

//readFile is used to read the content from the file
// fs.readFile("./contact.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }

// })

fs.appendFileSync("./test.txt",` ${Date.now()}I am appending the data \n` );