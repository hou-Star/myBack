
var mongoose =require("mongoose");
// 用schema 约束模型 存储的域（字段） 还有每个域存储的类型
var Schema = mongoose.Schema;


var obj = {
	username:String,
	password:String,
	phone:String,
	website:String,
	introduction:String	
	// Array Number , Date,Object
}

var userModel = mongoose.model("user",new Schema(obj))

//user 这个模型， 将来会 映射成users 这个集合
module.exports = userModel;