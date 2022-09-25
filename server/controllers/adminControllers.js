const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Building } = require("../models/building");
const { Post } = require("../models/post");

const userToAdmin = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { email: req.body.email },
      { role: "Admin"}
    );
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
};

const addNewAdmin = async (req, res, next) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      displayName: req.body.name,
      email: req.body.email,
      password: newPassword,
      role: "Admin",
      status: "Active",
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
};

const deleteBuilding = async (req, res, next) => {
  try {
    await Building.deleteOne({name: req.body.name} );
    res.json({ status: "ok" });
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
}

const deletePost = async (req, res, next) => {
  try {
    await Post.deleteOne({_id: req.body._id} );
    res.json({ status: "ok" });
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
}

const banUser = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { email: req.body.email },
      { status: "Banned"},
    );
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
}


module.exports = {userToAdmin, addNewAdmin, deleteBuilding, deletePost, banUser};
