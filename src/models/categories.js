let mongoose = require('mongoose');
let CategoriesSchema = mongoose.Schema;

module.exports = new CategoriesSchema({
    _id: CategoriesSchema.Types.ObjectId,
    name: String,
    path: String,
    keywords: String,
    description: String,
    mixed: CategoriesSchema.Types.Mixed
}, {versionKey: false});
