import express from 'express'

import {
    memberController,
    productController
} from '../controller/index.js'

const router = express.Router()
router.get('/', memberController.getAllMember)

// router.get('/:id', studentController.getStudentById)

// //put or patch
// router.patch('/', studentController.updateStudent)

// router.post('/insert',studentController.insertStudent)
//router.post('/generateFakeStudents',studentController.generateFakeStudents)

export default router