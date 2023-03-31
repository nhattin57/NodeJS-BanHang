import Exception from "../Exceptions/Exception.js"
import { Product } from "../models/index.js"

const getAllProducts = async () =>{
    let Products = await Product.find()
    return Products
}

const getProductById = async (productId) =>{
    let product = await Product.findById(productId)
    if(!product) {
        throw new Exception("Cannot find Product with id"+productId)
    }
    return product
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

const updateProduct =async({
    id,
    name,
    quantity,
    price
}) =>{
    const product = await Product.findById(id)
    product.name = name ?? product.name
    product.quantity = quantity ?? product.quantity
    product.price = price ?? product.price
    await product.save()
    return product

}

async function deleteProduct(productId) {
    let product = await Product.findById(productId)
    if(!product) {
        throw new Exception("Cannot find Product with id"+productId)
    }
    await Product.deleteOne(product)
    return true
}
export default {
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
   
}