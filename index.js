const express=require("express");
const app=express();
const port=3000;
const bodyParser=require("body-parser");
const connectDB=require("./database.js");
connectDB();
const productRouter=require("./modules/products/products.router.js");
const categoryRouter=require("./modules/category/category.router.js");


app.set("view engine","ejs");
app.set("views","./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/",productRouter);
app.use("/",categoryRouter);
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});