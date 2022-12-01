const {Router}= require("express");
const { Authentication } = require("../Middlewares/Authentication");
const { CartModel } = require("../models/cartModel");

const cartController= Router();

cartController.get("/",Authentication,async(req,res)=>{
    const {user}= req.body;
    const cartItems= await CartModel.find({user});
    res.status(200).send(cartItems)
})


cartController.get("/:id",Authentication,async(req,res)=>{
    const {id}= req.params;
    const {user}= req.body;
    const cartItems= await CartModel.find({_id:id,user});
    res.status(200).send(cartItems);
})

cartController.post("/add",Authentication,async(req,res)=>{
    const {productId,img,title,price,qty,user}= req.body;
    const newItem= new CartModel({productId,img,title,price,qty,user});
    await newItem.save();
    res.status(200).send("Successfully added to cart")
})
cartController.delete("/cartdelete/:id",Authentication,async(req,res)=>{
    const {id}= req.params;
    const {user}= req.body;
    const delItem= await CartModel.findOneAndDelete({_id:id,user});
    if(delItem){
        res.status(200).send("Cart Item remove successfully")
    }
})
module.exports={cartController}