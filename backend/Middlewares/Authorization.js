const { UserModel } = require("../models/userModel");


const Authorization = (roles)=>{
    return async (req,res,next)=>{
        const {user}= req.body;
        const Exist= await UserModel.findOne({_id:user});
        if(Array.isArray(roles)){
            if(roles.includes(Exist.role)){
                next()
            }else{
                res.status(401).send("You are not Authorized")
            }
        }else{
            if(roles===Exist.role){
                next()
            }else{
                res.status(401).send("You are not Authorized")
            }
        }
    }
}


module.exports={Authorization}