import express from 'express'
import Controller from '../controllers/product.js'
import MulterUpload from '../connector/multer/index.js'
import Validator from '../validator/product.js'

const router = express.Router()

router.get('/count', Controller.count)
router.get('/', Controller.find)
router.get('/:id', Controller.findById)
router.post('/', MulterUpload.none(), Validator.create, Controller.create)
router.put('/:id', MulterUpload.none(), Validator.update, Controller.update)
router.delete('/:id', Controller.delete)

export default router
