const { Admin } = require("../models/admin");

const addNewAdmin = async (req, res, next) => {
  try {
    await Building.create({
      name: req.body.name,
      password: req.body.password
    })
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
};


module.exports = { addNewBuilding, addNewAdmin };
