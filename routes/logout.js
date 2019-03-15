var express = require('express');
var router = express.Router();
var userModel = require("../model/user") 

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('注销咯');
  res.send({
  	ok:1
  })
});

module.exports = router;
