import Model from '../models/background_job.js'
import ErrorCodes from '../constants/errorCodes.js'

export default {
  getAll: async (where) => {
    try {
      let items = []
      let page = 1
      let limit = 100
      let res = null

      let count = await Model.count({ where: where || {} })

      let totalPages = Math.ceil(count / limit)

      while (page <= totalPages) {
        res = await Model.findAll({
          where: where || {},
          limit,
          offset: (page - 1) * limit,
          order: [['updatedAt', 'DESC']],
        })

        items = items.concat(res)

        page++
      }

      return items.map((item) => item.toJSON())
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },

  count: async (where) => {
    try {
      return await Model.count({ where })
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },

  find: async ({ page, limit, where }) => {
    try {
      let _page = parseInt(page) >= 1 ? parseInt(page) : 1
      let _limit = parseInt(limit) >= 1 ? parseInt(limit) : 10
      let _where = where || {}

      let filter = {
        where: _where,
        limit: _limit,
        offset: (_page - 1) * _limit,
        order: [['updatedAt', 'DESC']],
      }

      let count = await Model.count({ where: _where })
      let items = await Model.findAll(filter)

      return {
        items: items.map((item) => item.toJSON()),
        page: _page,
        limit: _limit,
        totalPages: Math.ceil(count / _limit),
        totalItems: count,
      }
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },

  findById: async (id) => {
    try {
      let entry = await Model.findOne({ where: { id } })
      if (!entry) {
        throw new Error(ErrorCodes.NOT_FOUND)
      }

      return entry.toJSON()
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },

  findOne: async (where) => {
    try {
      let entry = await Model.findOne({ where })
      if (!entry) {
        throw new Error(ErrorCodes.NOT_FOUND)
      }

      return entry.toJSON()
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },

  create: async (data) => {
    try {
      const created = await Model.create(data)

      return created.toJSON()
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },

  update: async (id, data) => {
    try {
      let updated = await Model.update(data, {
        where: { id },
        returning: true,
        plain: true,
      })

      return updated[1].toJSON()
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },

  delete: async (id) => {
    try {
      return await Model.destroy({ where: { id } })
    } catch (error) {
      throw error.errors?.[0]?.message ? error.errors[0] : error
    }
  },
}
