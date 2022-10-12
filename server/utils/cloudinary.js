const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dm13bguzr",
    api_key: "156962833513551",
    api_secret: "NcOqt2lFGe4otJBA99STBXrmIiQ"
});

module.exports = cloudinary;