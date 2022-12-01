const mongoose= require("mongoose");

const addressSchema= new mongoose.Schema({
    name: String,
    locality:String,
    city:String,
    district:String,
    state:String,
    pinCode:String,
    contactNo:String,
    user:String
})

const AddressModel= mongoose.model("address",addressSchema);

module.exports={AddressModel}