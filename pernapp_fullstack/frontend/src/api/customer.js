import apiCaller from '../helpers/apiCaller.js'

const count = async () => {
  return await apiCaller(`/api/customers/count`)
}

const find = async (query) => {
  return await apiCaller(`/api/customers${query}`)
}

const findById = async (id) => {
  return await apiCaller(`/api/customers/${id}`)
}

const create = async (data) => {
  const formData = new FormData()
  Object.keys(data)
    .filter((name) => !['photos'].includes(name))
    .forEach((name) => formData.append(name, data[name]))

  if (data['photos']?.length) {
    data['photos'].forEach((item) => formData.append('photos', item))
  }

  return await apiCaller(`/api/customers`, 'POST', formData)
}

const update = async (id, data) => {
  const formData = new FormData()
  Object.keys(data)
    .filter((name) => !['photos'].includes(name))
    .forEach((name) => formData.append(name, data[name]))

  if (data['photos']?.length) {
    data['photos'].forEach((item) => formData.append('photos', item))
  }

  return await apiCaller(`/api/customers/${id}`, 'PUT', formData)
}

const _delete = async (id) => {
  return await apiCaller(`/api/customers/${id}`, 'DELETE')
}

const CustomerApi = { count, find, findById, create, update, delete: _delete }

export default CustomerApi
