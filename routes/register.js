var express = require('express');
var router = express.Router();
var userModel = require("../model/user")
/* GET users listing. */
router.post('/', function(req, res, next) {
  // console.log('req', req.body);
  userModel.create({
  	username:req.body.username,
  	password:req.body.password,
  	phone:req.body.phone,
	website:req.body.website,
	introduction:req.body.introduction	
  }).then(result=>{
  	res.send({ok:3});
  }).catch(error=>{
	res.send({ok:4});
  })
});

module.exports = router;
