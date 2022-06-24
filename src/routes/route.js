const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController = require("../controllers/WeatherController")
const meme = require("../controllers/meme")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/getVSBId", CowinController.getVSBDId)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/LondonWeather", WeatherController.getWeather)
router.get("/LondonTemp", WeatherController.getTempOnly)
router.get("/cityWeather", WeatherController.getCityWeather)
router.get("/getMeme",meme.getMeme)
router.post("/meme",meme.meme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;