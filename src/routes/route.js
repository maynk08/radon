const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const controller = require("../controllers/controller.js")


router.post("/createBookData", controller.createBookData)

router.post("/createAuthorData", controller.createAuthor)

router.get("/getBookByChetanBhagat", controller.getBookByChetanBhagat)

router.get("/getAuthor",controller.findAuthor)

router.get("/getBookByAuthorId/:authorId", controller.getBooksByAuthorId)

router.get("/findBook",controller.findBook)
module.exports = router;