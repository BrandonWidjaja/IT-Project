const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
var cors = require('cors');
const path = require("path");
var userRouter = require("./routes/userRouter");
var buildingRouter = require("./routes/buildingRouter");
var adminRouter = require("./routes/adminRouter");

var clubRouter = require("./routes/clubRouter");

const eventRouter = require("./routes/eventRouter.js");

const postRouter = require("./routes/postRouter");
const dotenv = require("dotenv");
dotenv.config();
__dirname = path.resolve();

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
app.use("/user", userRouter);
app.use("/building", buildingRouter);
app.use("/post", postRouter);
app.use("/admin", adminRouter)
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "/client/build")));
} 
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log("Demo app is listening on port " + PORT);
});

//app.use("/test", testRouter);

app.use("/user", userRouter);
app.use("/building", buildingRouter);
app.use("/post", postRouter);
app.use("/admin", adminRouter);
app.use("/event", eventRouter);
app.use("/club", clubRouter);
