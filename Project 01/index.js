const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;
const fs = require('fs');
const { json } = require("stream/consumers");

//! Middleware - plugin
//~ whenever any form data comes it will put it in body ,it takes data and creates that data into JS object , and put that obj into body. 
app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res) => {
    return res.json(users);
})

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
    res.send(html);
});

app.route('/app/user/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)
    })
    .patch((req, res) => {
        //TODO : EDIT USER WITH ID
        res.json({ status: "pending" });
    })
    .delete((req, res) => {
        //TODO : DELETE USER WITH ID 
        res.json({ status: "pending" });
    })


app.post('/api/users', (req, res) => {
    //TODO : Create new User
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length + 1 });
    })
});



app.listen(PORT, () => console.log(`Server Started at port no 8000`));