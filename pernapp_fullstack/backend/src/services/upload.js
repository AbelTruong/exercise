import CloudinaryUploader from '../connector/cloudinary/index.js'

export default {
  upload: async (req) => {
    try {
      let images = []

      if (req.files) {
        // upload to cloudinary
        for (let i = 0; i < req.files.length; i++) {
          let image = await CloudinaryUploader.upload(req.files[i])
          images.push(image.secure_url)
        }
      }

      return images
    } catch (error) {
      throw error
    }
  },
}
