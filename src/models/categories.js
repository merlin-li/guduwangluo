let mongoose = require('mongoose');
let CategoriesSchema = mongoose.Schema;

module.exports = new CategoriesSchema({
    name: String,
    path: String,
    keywords: String,
    description: String,
    mixed: Object
}, {versionKey: false});
