const ResponseType=require("../../dto/response.type");
require("../../models/category.model");
const productEntity=require("../../models/products.model");
exports.getAllProducts=async (req,res)=>{
    let products=await productEntity.find().populate("category");
    res.render("products/index",{
        title:"Trang chủ sản phẩm",
        products,
    });
};
exports.getDetailProductsById=async(req,res)=>{
  let {id}=req.params;
  let product=await productEntity.findById(id);
  res.render("products/detail",{product});
}