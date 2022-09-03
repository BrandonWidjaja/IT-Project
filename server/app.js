const express = require('express') 
var testRouter = require("./routes/test");
const app = express() 
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose')

// database
const connectionURL = '';
mongoose.connect(connectionURL)
    const db = mongoose.connection
    // event handlers
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
    console.log('connected to Mongo')
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => { 
    console.log('Demo app is listening on port ' + PORT) 
}); 

app.use("/test", testRouter);