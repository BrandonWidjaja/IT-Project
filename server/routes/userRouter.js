var express = require("express");
var userRouter = express.Router();
//const userController = require('../controllers/userControllers')

// hardcode user (testing)
const User = require("../models/user");

userRouter.post("/new", async function (req, res) {
  try {
    let bodydata = req.body;
    let exists = await User.findOne({ email: bodydata.email });

    if (exists) {
      return res.send("email exists");
    }

    const newUser = await new User(req.body);
    await newUser.save();
    return await res.send(newUser);
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
});

module.exports = userRouter;
