const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require ("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",userController.createUser  )

router.post("/login", mid.middlewar,userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId",mid.middlewar, userController.updateUser)

router.delete("deleteData/:userId",mid.middlewar,userController.deleteData)

module.exports = router;