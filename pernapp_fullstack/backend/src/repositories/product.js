import { Op } from 'sequelize'
import Model from '../models/product.js'
import VendorModel from '../models/vendor.js'

const include = [{ model: VendorModel, as: 'vendor' }]

const count = async () => {
  try {
    return await Model.count()
  } catch (error) {
    throw error
  }
}

const find = async ({ page, limit, status, price, keyword, publish, vendors, sort }) => {
  try {
    let _page = page ? (parseInt(page) >= 1 ? parseInt(page) : 1) : 1
    let _limit = limit ? (parseInt(limit) >= 1 ? parseInt(limit) : 20) : 20
    let _vendors = vendors ? vendors.split('-') : ''
    let _price = price ? price.split(['-']) : [1, 100000000]
    let _sort = sort ? sort.split(':') : ['updatedAt', 'DESC']

    let where = {}
    if (status) {
      where = { ...where, status }
    }

    if (_price) {
      where = {
        ...where,
        price: {
          [Op.gte]: parseInt(_price[0]),
          [Op.lte]: parseInt(_price[1]),
        },
      }
    }

    if (keyword) {
      where = {
        ...where,
        [Op.or]: [
          { title: { [Op.like]: `%${keyword}%` } },
          { description: { [Op.like]: `%${keyword}%` } },
        ],
      }
    }

    if (publish !== undefined) {
      where = { ...where, publish: publish }
    }

    if (vendors) {
      where = { ...where, vendorId: { [Op.in]: _vendors } }
    }

    const count = await Model.count({ where })
    const items = await Model.findAll({
      where,
      limit: _limit,
      offset: (_page - 1) * _limit,
      include,
      order: [_sort],
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
