const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
//var testRouter = require("./routes/test");
var userRouter = require("./routes/userRouter");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const connectionURL =
  "mongodb+srv://admin:admin@cluster0.jyt8v.mongodb.net/?retryWrites=true&w=majority";
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
