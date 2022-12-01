const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    email:String,
    name:String,
    password:String,
    role:String
})

const UserModel= mongoose.model("user",userSchema);

module.exports={UserModel}