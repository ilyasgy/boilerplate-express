require('dotenv').config();
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/name", (req, res) => {
  const first = req.query.first;
  const last = req.query.last;
  res.json({ name: `${first} ${last}` });
});

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
next();
  
});app.get("/:word/echo", function(req, res) {
  const word = req.params.word;
  res.json({ echo: word });
});

app.get('/now',
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.json({ time: req.time });
  }
);

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
