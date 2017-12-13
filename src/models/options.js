let mongoose = require('mongoose');
let OptionsSchema = mongoose.Schema;

module.exports = new OptionsSchema({
    _id: OptionsSchema.Types.ObjectId,
    name: String,
    value: Object
}, {versionKey: false});