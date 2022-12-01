const {Router}= require("express");
const { Authentication } = require("../Middlewares/Authentication");
const { Authorization } = require("../Middlewares/Authorization");
const { ProdModel } = require("../models/productModel");

const ProductController= Router();

ProductController.get("/",async(req,res)=>{
    const {view,order,category}= req.query;
    if(view && order){
        if(view=="price" && order=="asc"){
            let products= await ProdModel.find().sort({price:1}).collation({locale:"en", caseLevel:true});
            res.status(200).send(products)
        } else if(view=="price" && order=="desc"){
            let products= await ProdModel.find().sort({price:-1}).collation({locale:"en", caseLevel:true});
            res.status(200).send(products)
        }
        else if(view=="rating" && order=="asc"){
            let products= await ProdModel.find().sort({rating:1}).collation({locale:"en", caseLevel:true});
            res.status(200).send(products)
        }
        else if(view=="rating" && order=="desc"){
            let products= await ProdModel.find().sort({rating:-1}).collation({locale:"en", caseLevel:true});
            res.status(200).send(products)
        }
    }
    else if(category){
        let products= await ProdModel.find({category});
        res.status(200).send(products)
    }
    else{
        const products= await ProdModel.find();
        res.status(200).send(products)
    }
})

ProductController.get("/:id",async(req,res)=>{
    const {id}= req.params;
    const product= await ProdModel.findOne({_id:id});
    res.status(200).send(product)
})

ProductController.post("/create",Authentication,Authorization(["Admin","Seller"]),async(req,res)=>{
    const {img,title,price,details,category,rating}= req.body;

    const newProduct= new ProdModel({img,title,price,details,category,rating});
    await newProduct.save();
    res.status(200).send("Product added Successfully")

})


module.exports={ProductController}