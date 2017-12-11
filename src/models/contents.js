let mongoose = require('mongoose');
let ContentsSchema = mongoose.Schema;

module.exports = new ContentsSchema({
    title: String,
    alias: String,
    content: String
}, {versionKey: false});