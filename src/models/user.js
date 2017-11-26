var mongoose = require('mongoose');
var User = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 18},
    time: {type: Date, default: Date.now},
    email: {type: String, default: ''}
});