const express = require("express");

const route = express.Router();
let x = 100;
route.get("/", (req, res) => {
  res.send(x.toString());
});
route.post("/", (req, res) => {
  console.log(req.body.value);
  let a = req.body.value;
  let result = x + a;
  res.send(result.toString());
});
route.delete("/", (req, res) => {
  let a = 100;
  res.send(a.toString());
});

module.exports = route;
