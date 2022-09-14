const { Building } = require("../models/building");

const addNewBuilding = async (req, res, next) => {
  try {
		await Building.create({
      name: req.body.name,
      description: req.body.description,
    })
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate building' })
	}
};

// get a building from their objectID
const getBuildings = async (req, res, next) => {
  try {
    // find the user in the database
    let buildings = await Building.find();
    if (buildings) {
      return res.send({data: buildings});
    }
    // user not found
    return res.send("no bulding");

module.exports = { addNewBuilding, getBuildings };

