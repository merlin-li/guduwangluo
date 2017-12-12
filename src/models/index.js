let mongoose = require('mongoose')
let categorySchema = require('./categories')
let optionSchema = require('./options')
let contentSchema = require('./contents')
let mediaSchema = require('./media')

module.exports = {
    category: mongoose.model('categories', categorySchema),
    option: mongoose.model('options', optionSchema),
    content: mongoose.model('contents', contentSchema),
    media: mongoose.model('media', mediaSchema)
}