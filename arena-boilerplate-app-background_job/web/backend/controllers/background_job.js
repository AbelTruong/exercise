import getCurrentSession from '../../auth/getCurrentSession.js'
import ResponseHandler from '../helpers/responseHandler.js'
import BackgroundJob from '../middlewares/background_job.js'

export default {
  getProgress: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const { group } = req.query

      let data = await BackgroundJob.getProgress(group)

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      let where = JSON.parse(req.query.where || '{}')
      where = { ...where, shop }

      let data = await BackgroundJob.find({ ...req.query, where })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
