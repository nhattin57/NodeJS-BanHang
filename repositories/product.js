import Exception from "../Exceptions/Exception.js"
import { Product } from "../models/index.js"

const getAllProducts = async () =>{
    let Products = await Product.find()
    return Products
}

const getProductById = async (productId) =>{
    let Product = await Product.findById(productId)
    if(!Product) {
        throw new Exception("Cannot find Product with id"+productId)
    }
    return Product
}

const insertProduct = async ({name, quantity, price}) =>{
    quantity = parseInt(quantity)
    price = parseFloat(price)
   try{
        const product = await Product.create({
            name,
            quantity,
            price
        })
        return product
   }catch(exception){
    if(!!exception.errors) {
        throw new Exception("Input error")
    }
   }
    
}

export default {
    getAllProducts,
    getProductById,
    insertProduct
   
}