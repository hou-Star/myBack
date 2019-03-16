var express = require('express');
var router = express.Router();
var userModel = require("../model/user") 

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('req', req);
  console.log('req.session', req.session);
  req.session.destroy();
  console.log('req.session2', req.session);
  console.log('注销咯');
  res.send({
  	ok:1
  })
});

module.exports = router;
