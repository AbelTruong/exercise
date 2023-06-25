import getCurrentSession from '../../auth/getCurrentSession.js'
import ResponseHandler from '../helpers/responseHandler.js'
import Product from '../middlewares/product.js'

export default {
  getProductTypes: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const data = await Product.getProductTypes({ shop, accessToken })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  getProductVendors: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const data = await Product.getProductVendors({ shop, accessToken })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  count: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const data = await Product.count({ shop, accessToken })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const data = await Product.find({ ...req.query, shop, accessToken })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  findById: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const { id } = req.params

      const data = await Product.findById({ shop, accessToken, id })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const data = await Product.create({ shop, accessToken, data: req.body })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const { id } = req.params

      const data = await Product.update({
        shop,
        accessToken,
        id,
        data: req.body,
      })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      const { id } = req.params

      const data = await Product.delete({ shop, accessToken, id })

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
