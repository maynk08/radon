const bookSchema= require("../Book/books.js")

const createBookData= async function (req, res) {
    let data= req.body
    let savedData= await bookSchema.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allBooks= await bookSchema.find()
    res.send({msg: allBooks})
}

module.exports.createBookData= createBookData
module.exports.getBookData= getBookData