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
  // console.log(req.query.type);
  if(req.query.type==0){
    productModel.find().populate({path:'userid',select:'website'}).then(result=>{
      // console.log('result==', result);
      res.json(result);   
    }).catch(error=>{
        console.log('errorrrrrrrrrr');
    })
  }else{
    productModel.find({productType:req.query.type}).populate({path:'userid',select:'website'}).then(result=>{
      // console.log('result==', result);
      res.json(result);   
    }).catch(error=>{
        console.log('errorrrrrrrrrr');
    })    
  }
})

module.exports = router;
