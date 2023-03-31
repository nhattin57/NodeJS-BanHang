import { productRepository } from "../repositories/index.js"

async function getAllProduct (req, res) {
    try {
        const product = await productRepository.getAllProducts()
        res.status(200).json({
            message: "get all successfully",
            data: product
        })
        
    } catch (exception) {
        res.status(500).json({
            message: "Cannot get all product "+exception
        })
    }
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

async function updateProduct(req, res){
    const {
        id,
        name,
        quantity,
        price
    } = req.body
    try {
        const product = await productRepository.updateProduct(req.body)
        res.status(200).json({
            message: 'update product successfully',
            size: product,    
        })    
    }catch(exception) {
        res.status(400).json({
            message: exception.message, 
        })
    }
}

async function deleteProductById(req, res){
    let productId = req.params.id
    try {
        const product = await productRepository.deleteProduct(productId)
        res.status(200).json({
            message: 'delete product successfully',
            data: product,    
        })    
    }catch(exception) {
        res.status(400).json({
            message: exception.message, 
        })
    }
}

export default {
    getAllProduct,
    insertproduct,
    getProductById,
    updateProduct,
    deleteProductById
}