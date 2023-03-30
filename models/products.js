import mongoose from "mongoose"
//import product from "../repositories/product";
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });
  
  // Create a mongoose model for the products collection
  const Product = mongoose.model("products", productSchema);
  
  // Export the product model for use in other parts of the application
  //module.exports = Product;
  export default Product;