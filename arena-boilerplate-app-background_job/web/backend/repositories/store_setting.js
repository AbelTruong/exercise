import Model from '../models/store_setting.js'
import ErrorCodes from '../constants/errorCodes.js'

export default {
  count: async (where) => await Model.count(where),

  find: async ({ page, limit, where }) => {
    let _page = parseInt(page) >= 1 ? parseInt(page) : 1
    let _limit = parseInt(limit) >= 1 ? parseInt(limit) : 20
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
  },

  findById: async (id) => {
    let entry = await Model.findOne({ where: { id } })
    if (!entry) {
      throw new Error(ErrorCodes.NOT_FOUND)
    }

    return entry.toJSON()
  },

  findOne: async (where) => {
    try {
      let entry = await Model.findOne({ where })
      if (!entry) {
        throw new Error(ErrorCodes.NOT_FOUND)
      }

      return entry.toJSON()
    } catch (error) {
      throw error
    }
  },

  create: async (data) => {
    const created = await Model.create(data)

    return created.toJSON()
  },

  update: async (id, data) => {
    let updated = await Model.update(data, {
      where: { id },
      returning: true,
      plain: true,
    })

    return updated[1].toJSON()
  },

  delete: async (id) => await Model.destroy({ where: { id } }),
}
