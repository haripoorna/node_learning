var express = require('express');
var app = express();
var ejs = require('ejs'); //ejs needed to render html files
var path = require('path');
var bodyParser = require('body-parser')
var apiroutes = require('./routes/apiroutes');
var user = require('./models/user')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }))

var connection = require('./config/config.js');
console.log('connected successfully')
    //these two as well to render html, setting view engine to html
app.engine('html', ejs.renderFile)
app.set('view engine', 'html');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello, here we are!")
})

app.get('/home', (req, res) => {
    res.render('index')
})

// app.get('/profile', (req, res) => {
//     res.render('profile')
// })


app.use('/', apiroutes)
app.listen(2345, () => {
    console.log("Server started at 2345")
})