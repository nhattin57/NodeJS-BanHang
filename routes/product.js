import express from 'express'

import {
    memberController,
    productController
} from '../controller/index.js'

const router = express.Router()
router.get('/', productController.getAllProduct)

 router.get('/:id', productController.getProductById)

// //put or patch
 router.put('/', productController.updateProduct)

 router.post('/insert',productController.insertproduct)
router.delete('/:id',productController.deleteProductById)

export default router