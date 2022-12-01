const jwt= require("jsonwebtoken");
require("dotenv").config();

const Authentication=(req,res,next)=>{
    if(!req.headers.token){
        res.status(401).send("Please Login First")
    }
    else{
        const token= req.headers?.token?.split(" ")[1];

        jwt.verify(token,process.env.SECRET,(error,decode)=>{
            if(error){
                res.status(401).send("Authentication failed")
            }else{
                req.body.user= decode.id ;
                next()
            }
        })
    }

}

module.exports={Authentication}