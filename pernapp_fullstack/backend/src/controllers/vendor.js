import ResponseHandler from '../helpers/responseHandler.js'
import Service from '../services/vendor.js'

const count = async (req, res) => {
  try {
    const data = await Service.count(req)
    return ResponseHandler.success(res, data)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const find = async (req, res) => {
  try {
    const data = await Service.find(req)
    return ResponseHandler.success(res, data)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const findById = async (req, res) => {
  try {
    const data = await Service.findById(req)
    return ResponseHandler.success(res, data)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const create = async (req, res) => {
  try {
    const data = await Service.create(req)
    return ResponseHandler.success(res, data)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const update = async (req, res) => {
  try {
    const data = await Service.update(req)
    return ResponseHandler.success(res, data)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const _delete = async (req, res) => {
  try {
    const data = await Service.delete(req)
    return ResponseHandler.success(res, data)
  } catch (error) {
    return ResponseHandler.error(res, error)
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
