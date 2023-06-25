import ErrorCodes from '../backend/constants/errorCodes.js'

export default function getCurrentSession(req, res) {
  let session = res.locals.shopify.session

  if (!session) throw new Error(ErrorCodes.UNAUTHORIZED)

  return session
}
