import express from 'express'
import Controller from './../controllers/user.js'
import Validator from './../validator/user.js'
import AuthValidator from './../validator/auth.js'
import MulterUpload from './../connector/multer/index.js'

const router = express.Router()

router.get('/count', Controller.count)
router.get('/', Controller.find)
router.get('/:id', Controller.findById)
router.post('/', MulterUpload.none(), Validator.create, Controller.create)
router.put('/:id', MulterUpload.none(), Validator.update, Controller.update)
router.delete('/:id', Controller.delete)
router.post('/login', Validator.login, Controller.login)
router.post('/auth', AuthValidator.verifyToken, Controller.getByToken)

export default router
