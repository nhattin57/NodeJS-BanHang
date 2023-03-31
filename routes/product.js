import express from 'express'

import {
    memberController,
    productController
} from '../controller/index.js'

const router = express.Router()
router.get('/', productController.getAllProduct)

 router.get('/:id', productController.getProductById)

// //put or patch
// router.patch('/', studentController.updateStudent)

 router.post('/insert',productController.insertproduct)
//router.post('/generateFakeStudents',studentController.generateFakeStudents)

export default router