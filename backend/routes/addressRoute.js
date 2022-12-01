const {Router}= require("express");
const { Authentication } = require("../Middlewares/Authentication");
const { AddressModel } = require("../models/addressModel");

const addressController= Router();

addressController.get("/",Authentication,async(req,res)=>{
    const {user}= req.body;
    const addresses= await AddressModel.find({user});
    res.status(200).send(addresses)
})
addressController.get("/:id",Authentication,async(req,res)=>{
    const {id}= req.params;
    const {user}= req.body;
    const addresses= await AddressModel.find({_id:id,user});
    res.status(200).send(addresses)
})

addressController.put("/edit/:id",Authentication,async(req,res)=>{
    const {id}= req.params;
    const {user}= req.body;
    const addresses= await AddressModel.findOneAndUpdate({_id:id,user},{...req.body});
    if(addresses){
        res.status(200).send("Address successfully updated")
    }
})

addressController.post("/newAddress",Authentication,async(req,res)=>{
    const {name,locality,city,district,state,pinCode,contactNo,user}= req.body;
    const newAdd= new AddressModel({
        name,
        locality,
        city,
        district,
        state,
        pinCode,
        contactNo,
        user
    })
    await newAdd.save();
    res.status(200).send("New Address added successfully")
})

addressController.delete("/delete/:id",Authentication,async(req,res)=>{
const {id}= req.params;
const {user}= req.body;
const delAd= await AddressModel.findOneAndDelete({_id:id, user});
if(delAd){
    res.status(200).send("Address deleted Successfully")
}
})


module.exports={addressController}