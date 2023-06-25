import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, `${process.cwd()}/uploads/`)
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  },
})

const MulterUpload = multer({ storage })

export default MulterUpload
