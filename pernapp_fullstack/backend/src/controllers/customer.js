import ResponseHandler from '../helpers/responseHandler.js'
import Service from '../services/customer.js'

export default {
  count: async (req, res) => {
    try {
      const data = await Service.count(req)
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const data = await Service.find(req)
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  findById: async (req, res) => {
    try {
      const data = await Service.findById(req)
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await Service.create(req)
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const data = await Service.update(req)
      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      await Service.delete(req)
      return ResponseHandler.success(res)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
