const authorModel = require("../models/authorModel")
const bookModel= require("../models/newBook")
const mongoose = require('mongoose')

const createBook= async function (req, res) {


    let book = req.body
    if(!mongoose.isValidObjectId(book.author))
    return res.send({msg:"Enter valid object Id"})
    if(!mongoose.isValidObjectId(book.publisher))
    return res.send({msg:"Enter valid object Id"})
    let bookCreated = await bookModel.create(book)
    console.log(bookCreated)
    res.send({data: bookCreated})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author").populate("publisher")   
     res.send({data: books})
}

// const addNewField = async function (req,res){
//     mongoose.bookSchema.updateMany({isHardCover:{type:Boolean,default:true}})
//     let updateField = await bookSchema.update({$or:[{publisher:'Penguin'},{publisher:'Harper Collins'}]},{$set:{isHardCover:false}})
//     res.send({msg:"done"})
// }


// $or:[ 
//     {'condition_1':param}, {'condition_2':param} 
//   ]}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.addNewField= addNewField
