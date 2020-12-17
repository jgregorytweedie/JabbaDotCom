// Here are my dependencies
const path = require("path");
const express = require("express");

// setting app as express
const app = express();
// Middleware
app.use(express.static(path.join(__dirname, "public")));
//This is to show an error message "404: file not found" if a person inputs an endpoint that hasn't been specified here
app.use(function(req, res, next) {
  res.status(404);
  res.send("404: File Not Found");
});
//setting up the environment variable
const PORT = process.env.PORT || 3000;
//when connected, it should display which port it is listening on.
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});