const Building = require("../models/building");

const addNewBuilding = async (req, res, next) => {
  try {

    // create new building from req
    const newBuilding = await new Building(req.body);
    await newBuilding.save();

    // send new building
    return await res.send(newBuilding);
  } catch (e) {
    // send error
    console.error(e);
    return res.send(e);
  }
};

// get a building from their objectID
const getBuilding = async (req, res, next) => {
  try {
    // retrieve object id of user from request
    let buildingID = req.body._id;

    // find the user in the database
    let exists = await Building.findOne({ _id: buildingID});
    if (exists){
      return res.send(exists);
    }
    // user not found
    return res.send("building does not exist")

  } catch (e) {
    console.error(e);
    return res.send(e);
  }
}



module.exports = { addNewBuilding, getBuilding };

