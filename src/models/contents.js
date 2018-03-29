let mongoose = require('mongoose');
let ContentsSchema = mongoose.Schema;

module.exports = new ContentsSchema({
    _id: ContentsSchema.Types.ObjectId,
    category: ContentsSchema.Types.ObjectId,
    title: String,
    alias: String,
    content: String,
    thumbnail: ContentsSchema.Types.ObjectId,
    abstract: String,
    date: Date,
    reading: Object
}, {versionKey: false});