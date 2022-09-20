const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }

};

module.exports = {userToAdmin, addNewAdmin };
