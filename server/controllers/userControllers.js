const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      displayName: req.body.name,
      email: req.body.email,
      password: newPassword,
      role: "User",
      status: "Active",
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
};

// login endpoint
const login = async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token, role: "User" });
  } else {
    return res.json({ status: "error", user: false });
  }
};

const editProfile = async (req, res, next) => {
  try {
    // find the user
    const user = await User.findOne({
      email: req.body.email,
    });

    // initialise editable info
    var newDispName = user.displayName;
    var newCourse;
    var newBio;

    // if these exists, will make the new info equal to the original one. otherwise, leave them blank
    if (user.newBio) {
      newBio = user.bio;
    } else {
      newBio = "";
    }
    if (user.course) {
      newCourse = user.course;
    } else {
      newCourse = "";
    }

    // update editable info if found in request
    if (req.body.newdisplayName) {
      newDispName = req.body.newdisplayName;
    }
    if (req.body.newbio) {
      newBio = req.body.newbio;
    }
    if (req.body.newcourse) {
      newCourse = req.body.newcourse;
    }

    // update the specified user with new info
    await User.findOneAndUpdate(
      { email: req.body.email },
      { displayName: newDispName, bio: newBio, course: newCourse }
    );

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
};

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


module.exports = { register, login, editProfile, getProfile };
