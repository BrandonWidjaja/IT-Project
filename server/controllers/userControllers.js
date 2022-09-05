const { User } = require("../models/user");

const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const email = req.body.email;
    user.dateCreated = getDateTime();
    user.onModel = req.body.accType;

    await newUser.save().catch((err) => {
      res.send(err);
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = { createUser };
