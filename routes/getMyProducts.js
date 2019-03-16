var express = require('express');
var router = express.Router();
var productModel = require("../model/product")
var userModel = require("../model/user") 
/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log('req.query.userid===',req.query.userid);

  productModel.find({userid:req.query.userid}).then(result=>{
    // console.log('result==', result);
    res.json(result);   
  }).catch(error=>{
      console.log('errorrrrrrrrrr');
  })
})

module.exports = router;
