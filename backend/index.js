const express= require("express");
const cors= require("cors");
const { connection } = require("./config/db");
const { userController } = require("./routes/userRoute");
const { ProductController } = require("./routes/productRoute");
const { cartController } = require("./routes/cartRoute");
const { addressController } = require("./routes/addressRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.use("/user",userController);
app.use("/product",ProductController);
app.use("/cart",cartController);
app.use("/address",addressController);
app.listen(8080 , async()=>{
    try {
        await connection;
        console.log("DB connected successfully")
    } catch{
        console.log("DB connection failed")
    }
    console.log("app started")
})