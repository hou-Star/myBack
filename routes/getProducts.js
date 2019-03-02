var express = require('express');
var router = express.Router();
var productModel = require("../model/product") 

/* GET users listing. */
router.get('/', function(req, res, next) {
/*  productModel.find().then(result=>{
    console.log('result==', result);
    res.json(result);
  }).catch(error=>{
      console.log('errorrrrrrrrrr');
  })*/
  productModel.find().populate({path:'user_id', select:'website'}).then(result=>{
    console.log('result==', result);
    res.json(result);   
  }).catch(error=>{
      console.log('errorrrrrrrrrr');
  });
});

module.exports = router;
