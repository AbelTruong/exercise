import getCurrentSession from '../../auth/getCurrentSession.js'
import ResponseHandler from '../helpers/responseHandler.js'
import StoreSetting from '../middlewares/store_setting.js'

export default {
  auth: async (req, res) => {
    try {
      const session = getCurrentSession(req, res)

      let storeSetting = await StoreSetting.init(session)

      console.log('/auth storeSetting :>> ', storeSetting)

      return ResponseHandler.success(res, storeSetting)
    } catch (error) {
      return ResponseHandler.error(res, error, 403)
    }
  },

  update: async (req, res) => {
    try {
      const session = getCurrentSession(req, res)

      const { acceptedAt } = req.body

      let storeSetting = await StoreSetting.init(session)

      storeSetting = await StoreSetting.update(storeSetting.id, {
        acceptedAt,
        status: StoreSetting.Status.RUNNING,
      })

      return ResponseHandler.success(res, storeSetting)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
