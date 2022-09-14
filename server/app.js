const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
var cors = require('cors')

var userRouter = require("./routes/userRouter");
var buildingRouter = require("./routes/buildingRouter");

const postRouter = require("./routes/postRouter");
require("dotenv").config({ path: __dirname + "/../.env" });


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// // Express-Session
// app.use(
//   session({
//     name: "UniRec", //name to be put in "key" field in postman etc
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     store: mongoDBstore,
//     cookie: {
//       maxAge: MAX_AGE,
//       sameSite: false,
//       secure: rocess.env.NODE_ENV === 'production'
//     }
//   })
// );

app.listen(PORT, () => {
  console.log("Demo app is listening on port " + PORT);
});

//app.use("/test", testRouter);
app.use("/user", userRouter);
app.use("/building", buildingRouter);
app.use("/post", postRouter);

