var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/user.models");

router.post('/register', function(req, res) {

  try {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
  res.status(201).send({ responseMessage: "Signup success!" })

  } catch (err) {
    res.status(404).send({ responseMesage: "Error" });
  }
});

router.post('/login', async function(req, res) {

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        responseMesage: "Credentials invalid!",
      });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordMatch) {
      req.session.userid = user;
      return res
        .status(201).send({
          responseMessage: "Login success!"
        });
    }
    return res.status(404).send("Invalid password");
  } catch (err) {
    res.status(404).send({
      responseMesage: "Credentials invalid!",
    });
  }
});

module.exports = router;
