const { Building } = require("../models/building");

const addNewBuilding = async (req, res, next) => {
  try {
		await Building.create({
      name: req.body.name,
      description: req.body.description,
      location: req.body.location
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
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

// get a building from their objectID
const getBuildingDetail = async (req, res, next) => {
  try { 
    const buildingDetail = await Building.findOne( {name: req.params.name} ).lean()
    return res.send({ name: req.params.name, data: buildingDetail })
  } catch (err) { 
      next(err) 
  }
};

module.exports = { addNewBuilding, getBuildings, getBuildingDetail };
