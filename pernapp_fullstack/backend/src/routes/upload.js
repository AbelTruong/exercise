import express from 'express'
import Controller from '../controllers/upload.js'
import MulterUpload from '../connector/multer/index.js'

const router = express.Router()

router.post('/', MulterUpload.array('images', 10), Controller.upload)

export default router
