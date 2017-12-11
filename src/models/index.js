let mongoose = require('mongoose')
let categorySchema = require('./categories')
let optionSchema = require('./options')

module.exports = {
    category: mongoose.model('category', categorySchema),
    option: mongoose.model('option', optionSchema)
}