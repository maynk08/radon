const publisherControl = require("../models/newPublisher")

const createPublisher = async function(req,res){
    let data = req.body
    let putData = await publisherControl.create(data)
    res.send({msg: putData})
}

module.exports.createPublisher = createPublisher