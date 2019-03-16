var express = require('express');
var router = express.Router();
var productModel = require("../model/product")

var multer = require("multer");
var upload = multer({ dest: 'public/uploads/'});
/* GET users listing. */
router.post('/',upload.single('productImg'), function(req, res, next) {
  console.log('删除删除');
  // res.send({ok:1});
  // console.log(req.body.productName);
    
  // console.log(req.file);
  // console.log(req.session.whatever,'ssssssssssssss修改修改修改');
  // console.log(req.body);
  // console.log(req.body._id);
  productModel.remove( {_id:req.body._id}).then(result=>{
    console.log(result);
  	res.send({ok:1});
  }).catch(error=>{
    console.log('fail');
	res.send({ok:0});
  });
});


module.exports = router;
