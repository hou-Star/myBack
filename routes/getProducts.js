var express = require('express');
var router = express.Router();
var productModel = require("../model/product") 

/* GET users listing. */
router.get('/', function(req, res, next) {
  productModel.find().then(result=>{
    console.log('result==', result);
    res.json(result);
    // if(result.length==0){
    //   //用户名密码不匹配
    //   // res.render('login', { title: 'login',isShow:true })
    //    res.send({
    //      ok:0
    //    })
    // }else{
    //   // console.log(result);
    //   //为钥匙 分配房间
    //   // req.cookies["kerwinNodeSessID"]
    //   // req.session.whatever=result[0] //当前登陆用户的个人信息
    //   // res.redirect("/");
      
    //    res.json({
    //      ok:1
    //    })      
    // }
  }).catch(error=>{
      console.log('errorrrrrrrrrr');
  })
});

module.exports = router;
