const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        required: true,
        type: ObjectId,
        ref: "Author"
    },
    price: Number,
    ratings: Number,
    


}, { timestamps: true });

db.bookSchema({isHardCover:{type:Boolean,default:true}})  

module.exports = mongoose.model('LibraryBook', bookSchema)
