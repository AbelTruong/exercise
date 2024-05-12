import Repository from '../repositories/product.js'
import generateSlug from '../helpers/generateSlug.js'

const count = async () => {
  try {
    return await Repository.count()
  } catch (error) {
    throw error
  }
}

const find = async (req) => {
  try {
    return await Repository.find(req.query)
  } catch (error) {
    throw error
  }
}

const findById = async (req) => {
  try {
    const { id } = req.params
    return await Repository.findById(id)
  } catch (error) {
    throw error
  }
}

const create = async (req) => {
  try {
    const data = { ...req.body }
    const handle = `${generateSlug(data.title)}-${Date.now()}`

    let newData = { ...data, handle: handle }
    return await Repository.create(newData)
  } catch (error) {
    throw error
  }
}

const update = async (req) => {
  try {
    const { id } = req.params
    const data = { ...req.body }
    const handle = `${generateSlug(data.title)}-${Date.now()}`

    let newData = { ...data, handle: handle }

    return await Repository.update(id, newData)
  } catch (error) {
    throw error
  }
}

const _delete = async (req) => {
  try {
    const { id } = req.params
    return await Repository.delete(id)
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
