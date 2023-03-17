const express = require("express");

const route = express.Router();

let arr = [];
route.get("/", (req, res) => {
  res.send(JSON.stringify(arr));
});
route.post("/", (req, res) => {
  let task = req.body.task;
  arr.push(task);
  res.send(JSON.stringify(arr));
});
route.delete("/", (req, res) => {
  arr = [];
  res.send(JSON.stringify(arr));
});
module.exports = route;
