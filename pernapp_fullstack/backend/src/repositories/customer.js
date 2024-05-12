import Model from '../models/customer.js'
import CountryModel from '../models/country.js'
import { Op } from 'sequelize'

const include = [{ model: CountryModel, as: 'country' }]

const count = async () => {
  try {
    return await Model.count()
  } catch (error) {
    throw error
  }
}

const find = async ({ page, limit, keyword, gender, countryId }) => {
  try {
    let _page = page ? (parseInt(page) >= 1 ? parseInt(page) : 1) : 1
    let _limit = limit ? (parseInt(limit) >= 1 ? parseInt(limit) : 20) : 20

    let where = {}
    if (keyword) {
      where = {
        [Op.or]: [
          {
            firstName: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            lastName: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            email: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            phone: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      }
    }
    if (gender !== undefined) {
      where = { ...where, gender }
    }
    if (countryId) {
      where = { ...where, countryId }
    }

    const count = await Model.count({ where })
    const items = await Model.findAll({
      where,
      limit: _limit,
      offset: (_page - 1) * _limit,
      include,
      order: [['updatedAt', 'DESC']],
    })

    return {
      items,
      page: _page,
      limit: _limit,
      totalPages: Math.ceil(count / _limit),
      totalItems: count,
    }
  } catch (error) {
    throw error
  }
}

const findById = async (id) => {
  try {
    const entry = await Model.findOne({ where: { id }, include })
    if (!entry) {
      throw new Error('Not found')
    }

    return entry
  } catch (error) {
    throw error
  }
}

const create = async (data) => {
  try {
    const created = await Model.create(data)

    return findById(created.id)
  } catch (error) {
    throw error
  }
}

const update = async (id, data) => {
  try {
    const updated = await Model.update(data, { where: { id }, returning: true, plain: true })

    return findById(updated[1].id)
  } catch (error) {
    throw error
  }
}

const _delete = async (id) => {
  try {
    return await Model.destroy({ where: { id } })
  } catch (error) {
    throw error
  }
}

export default {
  count,
  find,
  findById,
  create,
  update,
  delete: _delete,
}
