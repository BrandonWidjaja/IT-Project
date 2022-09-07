const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
//var testRouter = require("./routes/test");
var userRouter = require("./routes/userRouter");
var buildingRouter = require("./routes/buildingRouter");
const postRouter = require("./routes/postRouter");
require("dotenv").config({ path: __dirname + "/../.env" });

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
console.log(process.env.DB_CONN);
const connectionURL = process.env.DB_CONN;
mongoose.connect(connectionURL);
const db = mongoose.connection;
// event handlers
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to Mongo");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log("Demo app is listening on port " + PORT);
});

//app.use("/test", testRouter);
app.use("/user", userRouter);
app.use("/building", buildingRouter);
app.use("/post", postRouter);
