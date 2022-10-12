const Club = require("../models/club");
const bcrypt = require("bcryptjs");
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
    req.clubId = decoded.id;
    next();
  });
};

// register endpoint
const register = async (req, res, next) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await Club.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
      pic: req.body.pic,
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
  
  const club = await Club.findOne({
    email: req.body.email,
  });

  if (!club) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    club.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: club.name,
        email: club.email,
      },
      "secretkey", 
      {
        expiresIn: 86400
      }
    );

    return res.send({status: "ok", data : club, accessToken: token});
  } else {
    return res.send({status: "error", error: "Incorrect Password" });
  }
};

const editProfile = async (req, res, next) => {
  try {
    // find the club
    const club = await Club.findOne({
      "_id": req.params.id,
    });

    // initialise editable info
    var newName = club.name;
    var newBio;
    var newPassword;
    var newPic;

    // if these exists, will make the new info equal to the original one. otherwise, leave them blank
    if (club.newBio) {
      newBio = club.bio;
    } else {
      newBio = "";
    }

    if (club.pic) {
      newPic = club.pic;
    } else {
      newPic = "";
    }
    
    // update editable info if found in request
    if (req.body.newName) {
      newName = req.body.newName;
    }
    if (req.body.newBio && req.body.newBio != "") {
      newBio = req.body.newBio;
    }

    if (req.body.newPassword) {
      newPassword = await bcrypt.hash(req.body.newPassword, 10);
    }
    if (req.body.pic) {
      newPic = req.body.pic;
    }

    // update the specified club with new info
    await Club.updateOne(
      { "_id" : req.params.id },
      {$set: {name: newName, bio: newBio, password: newPassword, pic: newPic}}
    );
    
    res.json({ status: "ok" });
  } catch (err) {
      next(err);
  }
}

const getProfile = async (req, res, next) => {
  try {
    // find the club in the database
    let exists = await Club.findOne({"_id": req.params.id});
    if (exists) {
      return res.send({data : exists});
    }
    // club not found
    return res.send("club profile does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
}

module.exports = { register, login, editProfile, getProfile };
