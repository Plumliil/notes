const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let fruits = ['apple', 'banana', 'peach', 'plum'];


app.get('/', (req, res) => {
    res.send(fruits);
})
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    // res.write(fruits)
    res.render('./index')
})

app.post('/', (req, res) => {
    let flag=fruits.includes(req.body.fruit)
    if (!flag) {
        fruits.push(req.body.fruit)
        res.send(fruits)
    } else {
        res.send('该水果已存在')
    }
})
app.delete('/', (req, res) => {
    let flag=fruits.includes(req.query.fruit)
    if (flag) {
        fruits = fruits.filter(fruit => fruit !== req.query.fruit);
        res.send(fruits)
    } else {
        res.send('该水果不存在')
    }
})
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
})