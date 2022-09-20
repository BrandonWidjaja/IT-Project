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

    // send new user
    return await res.send(newUser);
  } catch (e) {
    // send error
    console.error(e);
    return res.send(e);
  }
};

// get a post from their objectID
const getProfile = async (req, res, next) => {
  try {
    // retrieve object id of user from request
    let req_email = req.body.email;

    // find the user in the database
    let exists = await User.findOne({ email: req_email });
    if (exists) {
      return res.send({data : exists});
    }
    // user not found
    return res.send("profile does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }


}
module.exports = { register, login, getProfile};

<<<<<<< Updated upstream
// get a user from their objectID
const getUser = async (req, res, next) => {
  try {
    // retrieve object id of user from request
    let userID = req.body._id;

    // find the user in the database
    let exists = await User.findOne({ _id: userID});
    if (exists){
      return res.send(exists);
    }
    // user not found
    return res.send("user does not exist")

  } catch (e) {
    console.error(e);
    return res.send(e);
  }
}



module.exports = { createUser, getUser };
=======
>>>>>>> Stashed changes

