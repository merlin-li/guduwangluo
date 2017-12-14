let mongoose = require('mongoose');
let ContactsSchema = mongoose.Schema;

module.exports = new ContactsSchema({
    companyName: String,
    name: String,
    telphone: String,
    qq: String,
    message: String
}, {versionKey: false});