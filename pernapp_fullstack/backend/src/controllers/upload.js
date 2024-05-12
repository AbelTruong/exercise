import ResponseHandler from '../helpers/responseHandler.js'
import Service from '../services/upload.js'

export default {
  upload: async (req, res) => {
    try {
      const data = await Service.upload(req)
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
