var express = require('express');
var router = express.Router();
var productModel = require("../model/product")
var userModel = require("../model/user") 
/* GET users listing. */
router.get('/', function(req, res, next) {
  // productModel.find().then(result=>{
  //   console.log('result==', result);
  //   res.json(result);
  // }).catch(error=>{
  //     console.log('errorrrrrrrrrr');
  // })
  console.log(req.query);
  productModel.find({_id:req.query.id}).populate({path:'userid',select:['website','phone']}).then(result=>{
    console.log('result==', result);
    res.json(result);   
  }).catch(error=>{
      console.log('errorrrrrrrrrr');
  })
})

module.exports = router;
