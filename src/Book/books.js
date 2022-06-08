const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    Name: String,
    author_id:{type : String, require: true},
    Price : String,
    rating : String
    })

module.exports = mongoose.model('NewBook', bookSchema)