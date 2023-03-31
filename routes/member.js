import express from 'express'

import {
    memberController,
    productController
} from '../controller/index.js'

const router = express.Router()
router.get('/', memberController.getAllMember)
router.post('/register', memberController.register)
router.post('/login', memberController.login)



export default router