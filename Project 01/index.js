const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;

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

app
    .route('/app/user/:id')
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
    return res.json({ status: "pending" });
});

app.patch('/api/users/:id', (req, res) => {
    //TODO : Edit user the user with id 
    return res.json({ status: "pending" });
})

app.delete
app.listen(PORT, () => console.log(`Server Started at port no 8000`));