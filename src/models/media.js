let mongoose = require('mongoose');
let MediaSchema = mongoose.Schema;

module.exports = new MediaSchema({
    _id: MediaSchema.Types.ObjectId,
    type: String,
    fileName: String,
    quotes: [MediaSchema.Types.ObjectId],
    date: Date
}, {versionKey: false});