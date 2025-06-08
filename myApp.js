require('dotenv').config();
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
  const msg = process.env.MESSAGE_STYLE === "uppercase"
    ? "HELLO JSON"
    : "Hello json";
    
  res.json({ message: msg });
});

// app.get("/", function(req, res) {
//   res.send("Hello Express");
// });

const absolutePath = __dirname + "/views/index.html";

app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});


module.exports = app;
