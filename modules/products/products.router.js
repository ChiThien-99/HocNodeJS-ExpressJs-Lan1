const express=require("express");
const router=express.Router();
const productsController=require("./products.controller");
const prefix="/products";

router.get(prefix,productsController.getAllProducts);
router.get(`${prefix}/detail/:id`,productsController.getDetailProductsById);
module.exports=router;