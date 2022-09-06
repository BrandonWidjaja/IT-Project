const User = require("../models/user");

const createUser = async (req, res, next) => {
  try {
    // data from the body
    let bodydata = req.body;

    // check if a user with that email already exists, if not, continue
    let exists = await User.findOne({ email: bodydata.email });

    if (exists) {
      return res.send("email already exists");
    }

    // create new user from req
    const newUser = await new User(req.body);
    await newUser.save();

    return await res.send(newUser);
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const getUser = async (req, res, next) => {

  try {
    let id = req.body._id;
    let exists = await User.findOne({ _id: id});
    if (exists){
      return await res.send(exists);
    }

  } catch (e) {
    console.error(e);
    return res.send(e);
  }
}



module.exports = { createUser, getUser };

