var express = require("express");
var userRouter = express.Router();
//const userController = require('../controllers/userControllers')

// hardcode user (testing)
const User = require('../models/user')
userRouter.get('/new', (req, res) => {
    const newUser = new User({
        email: "jiayao@gmail.com",
        password: "hahaha",
        lastName: "hahaha",
        firstName: "hahaha",
        displayName: "Jiayao",
    })

    // save in db
    newUser.save().catch(err => { res.send(err) })
});

module.exports = userRouter;