const express = require('express');
const { response } = require('../app');
const router = express.Router();

router.post("/", async function (req, res) {
    let email = req.session.userid.email;
    let message = req.body.text;
    console.log(`${email}: ${message}`);
    try {
      res.status(200).send({
        responseMesage: "Chat sent. Please check console for all chats.",
      });
    } catch (err) {
      res.status(400).send({
        responseMesage: "Error!",
      });
    }
  });
  module.exports = router;
  