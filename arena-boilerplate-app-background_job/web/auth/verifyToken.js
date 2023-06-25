import StoreSetting from '../backend/middlewares/store_setting.js'
import getCurrentSession from './getCurrentSession.js'

export default async function verifyToken(req, res, next) {
  try {
    let session = getCurrentSession(req, res)

    let storeSetting = await StoreSetting.init(session)

    next()
  } catch (error) {
    return res.status(403).send(error.message)
  }
}
