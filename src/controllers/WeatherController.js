let axios = require('axios')

let getWeather = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=8061d83c28733fdf649e2d472bd91372'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getTempOnly = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=8061d83c28733fdf649e2d472bd91372'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data.main, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getCityWeather = async function(req,res){
try {
    const cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    const data = []
    for(let value of cities){
        const options = {
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=8061d83c28733fdf649e2d472bd91372`
        }
        const result = await axios(options);
        data.push({city:value,temp: result.data.main.temp})
    }
    // console.log(data)
   let y = data.sort(function (a,b) {return a.temp-b.temp})
    res.status(200).send({msg:y})
}
catch (error){
res.status(500).send({msg:error.message})
}
}
module.exports.getWeather = getWeather
module.exports.getTempOnly = getTempOnly
module.exports.getCityWeather = getCityWeather