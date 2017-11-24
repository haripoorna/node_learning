var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    firstname: String,
    lastname: String,
    gender: String
});

module.exports = mongoose.model('User', user);