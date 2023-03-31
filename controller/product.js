import { productRepository } from "../repositories/index.js"

async function getAllProduct (req, res) {

}

async function getProductById(req, res){
    let productId = req.params.id
    
    try {
        const product = await productRepository.getProductById(productId)
        res.status(200).json({
            message: 'Get detail products successfully',
            data: product,    
        })    
    }catch(exception) {
        res.status(400).json({
            message: exception.message, 
        })
    }
}

async function insertproduct(req, res){
    try {
        const product = await productRepository.insertProduct(req.body)
        res.status(200).json({
            message: "insert product successfully",
            data: product
        })
    } catch (exception) {
        res.status(500).json({
            message: "Cannot insert product "+exception
        })
    }
}

export default {
    getAllProduct,
    insertproduct,
    getProductById
}