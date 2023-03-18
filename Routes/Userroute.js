const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
let User = {
  email: "abc@gmail.com",
  password: "123",
  id: "12",
};
router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;
  let existingUser;
  if (email == User.email) {
    existingUser = User;
  }
  console.log(existingUser);
  if (!existingUser || existingUser.password != password) {
    const error = Error("Wrong details please check at once");
    return next(error);
  }
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({
    success: true,
    data: {
      userId: existingUser.id,
      email: existingUser.email,
      token: token,
    },
  });
});
router.post("/signup", async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  let token;
  try {
    token = jwt.sign({ email: newUser.email }, "secretkeyappearshere", {
      expiresIn: "1h",
    });
  } catch (err) {
    //const error = new Error("Error! Something went wrong.");
    console.log(err);
  }
  res.status(201).json({
    success: true,
    data: {
      email: newUser.email,
      token: token,
    },
  });
});

module.exports = router;
