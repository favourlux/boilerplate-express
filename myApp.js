var express = require('express');
var app = express();
console.log("Hello World");

//app.get("/", function(req, res) {
 // res.send("Hello Express");
//})

app.get("/", function(req, res) {  
  var absolutePath = "/views/index.html";
  res.sendFile(__dirname + absolutePath);
})





































 module.exports = app;
