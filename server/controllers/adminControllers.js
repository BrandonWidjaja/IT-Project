const User = require("../models/user");

const Club = require("../models/club")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Building } = require("../models/building");
const { Post } = require("../models/post");
const { Event } = require("../models/event");

const cloudinary = require("../utils/cloudinary");


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
    const building = await Building.findOne({name: req.body.name});
    if (building.pic_id) {
      await cloudinary.uploader.destroy(building.pic_id);
    }
    
    await Building.deleteOne({name: req.body.name} );
    
    return res.json({ status: "ok" });
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

const deleteEvent = async (req, res, next) => {
  try {
    await Event.deleteOne({_id: req.body._id} );
    res.json({ status: "ok" });
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
}

const banUser = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { _id:  req.body.id },
      { status: "Banned"},
    );
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error'})
	}
}

const unBanUser = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { _id:  req.body.id },
      { status: "Active"},
    );
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error'})
	}
}

const banClub = async (req, res, next) => {
  try {
    await Club.findOneAndUpdate(
      { email: req.body.email },
      { status: "Banned"},
    );
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
}

const approveBuilding = async (req, res, next) => {
  try {
    await Building.findOneAndUpdate(
      { _id:  req.body.id },
      { approved: true}
    );
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error'})
	}
}

module.exports = {userToAdmin, addNewAdmin, deleteBuilding, deletePost, banUser, approveBuilding, banClub, unBanUser};