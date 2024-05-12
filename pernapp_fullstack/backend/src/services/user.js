import CloudinaryUploader from '../connector/cloudinary/index.js'
import Repository from './../repositories/user.js'

export default {
  count: async (req) => {
    try {
      return await Repository.count()
    } catch (error) {
      throw error
    }
  },

  find: async (req) => {
    try {
      return await Repository.find(req.query)
    } catch (error) {
      throw error
    }
  },

  findById: async (req) => {
    try {
      const { id } = req.params

      return await Repository.findById(id)
    } catch (error) {
      throw error
    }
  },

  create: async (req) => {
    try {
      let data = { ...req.body }

      return await Repository.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async (req) => {
    try {
      const { id } = req.params
      let data = { ...req.body }

      return await Repository.update(id, data)
    } catch (error) {
      throw error
    }
  },

  delete: async (req) => {
    try {
      const { id } = req.params

      return await Repository.delete(id)
    } catch (error) {
      throw error
    }
  },

  login: async (req) => {
    try {
      const { username, password } = req.body

      return await Repository.login(username, password)
    } catch (error) {
      throw error
    }
  },

  getByToken: async (req) => {
    try {
      const { authorization } = req.headers

      return await Repository.getByToken(authorization)
    } catch (error) {
      throw error
    }
  },
}
