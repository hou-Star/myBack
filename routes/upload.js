var express = require('express');
var router = express.Router();
var productModel = require("../model/product")

var multer = require("multer");
var upload = multer({ dest: 'public/uploads/'});
/* GET users listing. */
router.post('/',upload.single('productImg'), function(req, res, next) {
  console.log('reqsssss');
  console.log(req);
  console.log(req.file);
  console.log(req.session.whatever,'ssssssssssssss');
  productModel.create({
    userid:req.session.whatever._id,
    productName:req.body.productName,
    productType:req.body.productType,
    newDegree:req.body.newDegree,
    productDescription:req.body.productDescription,
    productPrice:req.body.productPrice,
    productImg:'/uploads/' + req.file.filename
  }).then(result=>{
    console.log('suncess');
  	res.send({ok:3});
  }).catch(error=>{
    console.log('fail');
	res.send({ok:4});
  })
});

module.exports = router;
