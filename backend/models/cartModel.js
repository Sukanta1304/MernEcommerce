const mongoose= require("mongoose");

const cartSchema= new mongoose.Schema({
    productId:String,
    img:String,
    title:String,
    price:String,
    user:String,
    qty:Number
})

const CartModel= mongoose.model("cart",cartSchema)

module.exports={CartModel}