const express = require("express");

const App = express();

let PORT = process.env.PORT || 8000;

var bodyParser = require("body-parser");
App.use(express.json());
App.use(bodyParser.urlencoded({ extended: false }));

App.get("/", (req, res) => {
  res.send("Digikull");
});
App.use("/calculator", require("./Routes/Calculatorroute"));
App.use("/user", require("./Routes/Userroute"));
App.use("/todo", require("./Routes/Todoroute"));
App.listen(8000, (req, res) => {
  console.log(`Listening to the ${PORT}...`);
});
