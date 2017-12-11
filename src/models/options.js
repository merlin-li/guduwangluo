let mongoose = require('mongoose');
let OptionsSchema = mongoose.Schema;

module.exports = new OptionsSchema({
    name: String,
    value: Object
}, {versionKey: false});