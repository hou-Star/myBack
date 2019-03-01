
var mongoose =require("mongoose");
// 用schema 约束模型 存储的域（字段） 还有每个域存储的类型
var Schema = mongoose.Schema;


var obj = {
	productName:String,
	productType:String,
	newDegree:String,
	productDescription:String,
	productImg:String,
	productPrice:String	
	// Array Number , Date,Object
}

var productModel = mongoose.model("product",new Schema(obj))

//user 这个模型， 将来会 映射成users 这个集合
module.exports = productModel;