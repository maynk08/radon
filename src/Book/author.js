const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        author_id: {type: String, require:true},
        author_name: String,
        age : String,
        address : String 
    }
)

module.exports = mongoose.model('author', authorSchema)