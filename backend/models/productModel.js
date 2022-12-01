const mongoose= require("mongoose");

const prodSchema= new mongoose.Schema({
    img:String,
    title:String,
    price:String,
    details:String,
    category:String,
    rating:String,
})

const ProdModel= mongoose.model("products",prodSchema);

module.exports= {ProdModel}