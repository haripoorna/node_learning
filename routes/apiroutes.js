var express = require('express');
var app = express();

var router = express.Router();
let User = require('../models/user.js');


router.get('/registration', (req, res) => {
    res.render('registration')
})
router.post('/registration', (req, res) => {
    console.log(res)
    let user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result);
        }
    })
})


module.exports = router;