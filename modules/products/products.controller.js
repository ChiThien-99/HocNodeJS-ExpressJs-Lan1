const ResponseType = require("../../dto/response.type");
require("../../models/category.model");
const productEntity = require("../../models/products.model");
exports.getAllProducts = async (req, res) => {
  let products = await productEntity.find().populate("category");
  res.render("products/index", {
    title: "Trang chủ sản phẩm",
    products,
  });
};
exports.getDetailProductsById = async (req, res) => {
  let { id } = req.params;
  let product = await productEntity.findById(id);
  res.render("products/detail", { product });
};
exports.createProduct = (req, res) => {
  res.render("products/create");
};
exports.postCreateProduct = (req, res) => {
  try {
    let { name, price, image, category } = req.body;
    let newProduct = new productEntity({ name, price, image, category });
    newProduct.save();
    res.json(new ResponseType(newProduct).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
exports.getDetailProductByApi = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productEntity.findById(id).populate("category");
    res.json(new ResponseType(product).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
exports.updateProduct = async (req, res) => {
  try {
    let { name, price, image, category } = req.body;
    let { id } = req.id;
    let updateProduct = await productEntity.findByIdAndUpdate(
      id,
      {
        name,
        price,
        image,
        category: category.id,
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );
    if (!updateProduct) {
      res.json(new ResponseType(null).success());
    }
    res.json(new ResponseType(updateProduct).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
