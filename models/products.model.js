const mongoose=require("mongoose");
const productsSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"categoryEntity",
       required:true,
    }
});
module.exports=mongoose.model("productEntity",productsSchema,"product");