const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello I am learning node and am excited and ready ');
});

const users = [
    { id: 1, name: 'kalu kha', email: 'kaluha@gmail.com', phone: '01788986598' },
    { id: 2, name: 'sabana', email: 'sabana@gmail.com', phone: '01788986598' },
    { id: 3, name: 'sabniur', email: 'sabniur@gmail.com', phone: '01788986598' },
    { id: 4, name: 'sabik khan', email: 'sabikkhan@gmail.com', phone: '01788986598' },
    { id: 5, name: 'surut mia', email: 'sabik khan@gmail.com', phone: '01788986598' },
    { id: 6, name: 'almas kaku', email: 'almaskaku@gmail.com', phone: '01788986598' },
]

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// search function  use query
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

// get specific user dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id - 1];
    res.send(user);
});

// random different test
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('falzli aammm')
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})

app.listen(port, () => {
    console.log('listning to port', port);
});