const bookSchema= require("../Book/books.js")
const authorSchema= require("../Book/author.js")

const createBookData= async function (req, res) {
    let data= req.body
    let savedData= await bookSchema.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorSchema.create(data)
    res.send({msg: savedData})
}

const getBookByChetanBhagat= async function (req, res) {
    let allBooks= await authorSchema.find({author_name:"Chetan Bhagat"}).select("author_id")
    let getBook = await bookSchema.find({"author_id": allBooks[0].author_id})
    console.log(allBooks)
    res.send({msg: getBook})
}

const findAuthor = async function(req,res){
    let getId = await bookSchema.findOneAndUpdate({name:"Two States"},{$set:{Price:"100"}},{new:true})
    let author = await authorSchema.find({author_id:getId.author_id}).select({author_name: 1, _id : 0})
    res.send(author)
}

const findBook = async function(req,res){
    let book = await bookSchema.find( { Price: { $gte: 50, $lte: 100} } ).select({author_id :1, _id:0})
    console.log(book)
    let arr = book.map(ele=>ele.author_id)
    // console.log(arr)
    let authName = await authorSchema.find({author_id:arr}).select({author_name:1,_id:0})
    res.body(authName);
    // res.send("done")
}

const getBooksByAuthorId = async function(req,res){
    let x = req.params.authorId
    let book = await bookSchema.find({author_id:1}).select({Name:1})
    res.send(book)
}

const findAuthor2 = async function(req,res){
    let x = await authorSchema.find({age:{$gte:50}})
    
}

module.exports.createBookData= createBookData
module.exports.createAuthor= createAuthor
module.exports.getBookByChetanBhagat= getBookByChetanBhagat
module.exports.findAuthor= findAuthor
module.exports.findBook= findBook
module.exports.getBooksByAuthorId= getBooksByAuthorId