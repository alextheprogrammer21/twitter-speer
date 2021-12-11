var express = require('express');
const { response } = require('../app');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  return res.json({obj: 123})
});

module.exports = router;
