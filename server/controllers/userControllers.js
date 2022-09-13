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
      role: "User"
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
  
      return res.json({ status: 'ok', user: token, role: "User" })
    } else {
      return res.json({ status: 'error', user: false })
    }
};



module.exports = { register, login};

