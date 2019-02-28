var express = require('express');
var router = express.Router();
var userModel = require("../model/user") 

/* GET users listing. */
router.post('/', function(req, res, next) {
   console.log('req====',req.body.username);
   console.log('req====',req.body.password);
  userModel.find({
    username:req.body.username,
    password:req.body.password
  }).then(result=>{
    console.log('result==', result);
    if(result.length==0){
      //用户名密码不匹配
      // res.render('login', { title: 'login',isShow:true })
       res.send({
         ok:0
       })
    }else{
      // console.log(result);
      //为钥匙 分配房间
      // req.cookies["kerwinNodeSessID"]
      req.session.whatever=result[0] //当前登陆用户的个人信息
      console.log(req.session.whatever);
      // res.redirect("/");
      
       res.json({
         ok:1,
         person:req.session.whatever
       })      
    }
  }).catch(error=>{
      console.log('errorrrrrrrrrr');
  })
});

module.exports = router;
