const {Router}= require("express");
const { UserModel } = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt= require("jsonwebtoken");
const { Authentication } = require("../Middlewares/Authentication");
require("dotenv").config();

const userController= Router();

userController.get("/",Authentication,async(req,res)=>{
    const {user}= req.body;
    const Euser= await UserModel.findOne({_id:user});
    if(Euser){
        res.status(200).send(Euser);
    }else{
        res.status(404).send("No user found")
    }
})

userController.get("/:id",async(req,res)=>{
    const {id}= req.params;
    const user= await UserModel.findOne({_id:id});
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send("No user found")
    }
})

userController.post("/signup",async(req,res)=>{
    const {email,name,password}= req.body;
    const user=await UserModel.findOne({email});
    if(user){
        res.status(403).send("User already exist")
    }else{
        bcrypt.hash(password,6,async(err,hash)=>{
            if(err){
                res.status(400).send("Something went Wrong")
            }else{
                const newUser= new UserModel({name,email,password:hash,role:"Customer"});
                await newUser.save();
                res.status(200).send("User successfully registered")
            }
        })   
    }
})

userController.post("/signin",async(req,res)=>{
    const {email,password}= req.body;
    const user= await UserModel.findOne({email});
    
    if(user){
        const hash= user.password;
        bcrypt.compare(password,hash,(error,result)=>{
            if(error){
                res.status(500).send("Something went wrong")
            }else{
                if(result){
                    const token= jwt.sign({id:user._id}, process.env.SECRET,{ expiresIn: '1h' });
                    res.status(200).send({message:"Login Successful" , token:token})
                }else{
                    res.status(404).send("Wrong Credentials")
                }
            }
        })
    }else{
        res.status(404).send("No user found for this email")
    }
})

// userController.post("/forgotpassword",async(req,res)=>{
//     const {email}= req.body;
//     const Exist= await UserModel.findOne({email});
//     if(!Exist){
//         res.status(404).send("You are not registered yet!")
//     }else{

//     }
// })


module.exports= {userController}