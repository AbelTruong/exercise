import apiCaller from '../helpers/apiCaller.js'

const count = async () => {
  return await apiCaller(`/api/vendors/count`)
}

const find = async (query) => {
  return await apiCaller(`/api/vendors${query}`)
}

const findById = async (id) => {
  return await apiCaller(`/api/vendors/${id}`)
}

const create = async (data) => {
  const formData = new FormData()
  Object.keys(data).forEach((name) => formData.append(name, data[name]))

  return await apiCaller(`/api/vendors`, 'POST', formData)
}

const update = async (id, data) => {
  const formData = new FormData()

  Object.keys(data).forEach((name) => formData.append(name, data[name]))

  return await apiCaller(`/api/vendors/${id}`, 'PUT', formData)
}

const _delete = async (id) => {
  return await apiCaller(`/api/vendors/${id}`, 'DELETE')
}

const VendorApi = { count, find, findById, create, update, delete: _delete }

export default VendorApi
