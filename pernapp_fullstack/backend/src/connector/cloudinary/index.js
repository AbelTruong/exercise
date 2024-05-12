import 'dotenv/config'

import cloudinary from 'cloudinary'
import fs from 'fs'

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY, CLOUDINARY_FOLDER } =
  process.env

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET_KEY,
})

const CloudinaryUploader = {
  upload: async (file) => {
    console.log(`🚀 ~ cloudinary uploading..`)
    return await cloudinary.v2.uploader
      .upload(file.path, {
        folder: CLOUDINARY_FOLDER,
      })
      .then((result) => {
        if (result) {
          fs.unlinkSync(file.path)
        }
        return result
      })
  },
}

export default CloudinaryUploader
