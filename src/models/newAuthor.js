const mongoose = require('mongoose');

const newAuthorSchema = new mongoose.Schema( {
    author_Name: String,
    age : Number,
    address : String,
    ratings : Number,
})

module.exports = mongoose.model('new Author', newAuthorSchema)