const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

// register endpoint
const register = async (req, res, next) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      displayName: req.body.name,
      email: req.body.email,
      password: newPassword,
      pic: req.body.pic,
      role: "User",
      status: "Active",
      bio: req.body.bio
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
      "secretkey", 
      {
        expiresIn: 86400
      }
    );

    return res.send({status: "ok", data : user, accessToken: token});
  } else {
    return res.send({status: "error", error: "Incorrect Password" });
  }
};

const editProfile = async (req, res, next) => {
  try {
    // find the user
    const user = await User.findOne({
      email: req.params.email,
    });

    // initialise editable info
    var newDisplayName = user.displayName;
    var newCourse;
    var newBio;
    var newPassword;
    var newPic;

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
    if (user.pic) {
      newPic = user.pic;
    } else {
      newPic = "";
    }

    // update editable info if found in request
    if (req.body.newDisplayName) {
      newDisplayName = req.body.newDisplayName;
    }
    if (req.body.newBio) {
      newBio = req.body.newBio;
    }
    if (req.body.newCourse) {
      newCourse = req.body.newCourse;
    }
    if (req.body.newPassword) {
      newPassword = await bcrypt.hash(req.body.newPassword, 10);
    }
    if (req.body.pic) {
      newPic = req.body.pic;
    }

    // update the specified user with new info
    await User.updateOne(
      { email: req.params.email },
      {$set: {displayName: newDisplayName, bio: newBio, course: newCourse, password: newPassword, pic: newPic}}
    );
    
    res.json({ status: "ok" });
  } catch (err) {
      next(err);
  }
}

const getProfile = async (req, res, next) => {
  try {
    // retrieve object id of user from request
    let req_email = req.params.email;
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
