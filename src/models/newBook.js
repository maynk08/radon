const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: ObjectId,
        ref: "new Author",
        required: [true,'This field is required'],
    },
    
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "Publisher",
        required: [true,'This detail is required']
    }
})


module.exports = mongoose.model("New Book",newBookSchema)