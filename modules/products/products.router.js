const express = require("express");
const router = express.Router();
const productsController = require("./products.controller");
const prefix = "/products";

router.get(prefix, productsController.getAllProducts);
router.get(`${prefix}/detail/:id`, productsController.getDetailProductsById);
router.get(`${prefix}/create`, productsController.createProduct);
router.get(`/api${prefix}/detail/:id`, productsController.getDetailProductByApi);
router.post(`${prefix}/create`, productsController.postCreateProduct);
router.put(`${prefix}/create/:id`, productsController.updateProduct);
router.delete(`${prefix}/delete/:id`,productsController.deleteProduct)
module.exports = router;
