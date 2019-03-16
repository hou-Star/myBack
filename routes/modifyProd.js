var express = require('express');
var router = express.Router();
var productModel = require("../model/product")

var multer = require("multer");
var upload = multer({ dest: 'public/uploads/'});
/* GET users listing. */
router.post('/',upload.single('productImg'), function(req, res, next) {
  console.log('修改修改修改');

  console.log(req.body.productName);
    
  // console.log(req.file);
  // console.log(req.session.whatever,'ssssssssssssss修改修改修改');
  console.log(req.body);
  console.log(req.body._id);
  productModel.update( {_id:req.body._id}, {$set: {
    productName:req.body.productName,
    productType:req.body.productType,
    newDegree:req.body.newDegree,
    productDescription:req.body.productDescription,
    productPrice:req.body.productPrice,
    productImg:'/uploads/' + req.file.filename
  } }).then(result=>{
    console.log(result);
  	res.send({ok:3});
  }).catch(error=>{
    console.log('fail');
	res.send({ok:4});
  });
});


module.exports = router;
