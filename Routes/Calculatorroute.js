const express = require("express");

const route = express.Router();
let x = 100;
route.get("/", (req, res) => {
  res.send(x.toString());
});
route.pull("/", (req, res) => {
  console.log(req.body.value);
  let a = req.body.value;
  x+=a;
  res.send(x.toString());
});
route.delete("/", (req, res) => {
  let a = 100;
  res.send(a.toString());
});

module.exports = route;
