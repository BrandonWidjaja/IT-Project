const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// const isAuth = async (req,res,next) => {
//   const sessUser = req.session.user;
//   if(sessUser) {
//       next();
//   }
//   else {
//       err = res.status(401).json("Access Denied ")
//       return err;
//   }
// };

// register endpoint
const register = async (req, res, next) => {
  try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			displayName: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
};

// login endpoint
const login = async (req, res, next) => {
    const user = await User.findOne({
      email: req.body.email,
    })
  
    if (!user) {
      return { status: 'error', error: 'Invalid login' }
    }
  
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    )
  
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        'secret123'
      )
  
      return res.json({ status: 'ok', user: token })
    } else {
      return res.json({ status: 'error', user: false })
    }
};

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



module.exports = { createUser, getUser, register, login};

