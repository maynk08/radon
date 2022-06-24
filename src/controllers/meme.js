let axios = require('axios')

const getMeme = async function(req,res){
    try{
        let options={
            method:"get",
            url:'https://api.imgflip.com/get_memes'
        }
        const result = await axios(options)
        res.status(200).send({msg:result.data})
    }
    catch(error)
    {
        console.log(error.message)
        res.status(500).send({msg:error.message})
    }
}
const meme = async function(req,res){
    try{
        const template_id = req.query.template_id
        const text0 = req.query.text0
        const text1 = req.query.text1
        const username = req.query.username
        const password = req.query.password

        let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        const result = await axios(options)
        res.status(200).send({msg:result.data})
    }

    catch(error)
    {
        console.log(error.message)
        res.status(500).send({msg:error.message})
    }
}

module.exports.getMeme = getMeme
module.exports.meme = meme