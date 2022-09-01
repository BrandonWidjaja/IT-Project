const express = require('express') 
var testRouter = require("./routes/test");
const app = express() 
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => { 
    console.log('Demo app is listening on port ' + PORT) 
}); 

app.use("/test", testRouter);