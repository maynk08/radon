const express = require('express');
const router = express.Router();
const UserModel= require("../Book/books.js")
const controller= require("../controller/controller.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBookData", controller.createBookData)

router.get("/getBookData", controller.getBookData)

module.exports = router;