const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('success')
})

app.post('/login', (req, res) => {
    if(req.body.password === 'cook' && req.body.email === 'cook@gmail.com') {
        res.json('success')
    } else {
        res.json('failure') 
    } 
})

app.listen(3001, () => {
    console.log('app running on port:3001')
})