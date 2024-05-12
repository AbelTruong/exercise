import apiCaller from '../helpers/apiCaller.js'

const count = async () => {
  return await apiCaller(`/api/users/count`)
}

const find = async (query) => {
  return await apiCaller(`/api/users${query}`)
}

const findById = async (id) => {
  return await apiCaller(`/api/users/${id}`)
}

const create = async (data) => {
  const formData = new FormData()
  Object.keys(data)
    .filter((name) => !['photos'].includes(name))
    .forEach((name) => formData.append(name, data[name]))

  if (data['photos']?.length) {
    data['photos'].forEach((item) => formData.append('photos', item))
  }

  return await apiCaller(`/api/users`, 'POST', formData)
}

const update = async (id, data) => {
  const formData = new FormData()
  Object.keys(data)
    .filter((name) => !['photos'].includes(name))
    .forEach((name) => formData.append(name, data[name]))

  if (data['photos']?.length) {
    data['photos'].forEach((item) => formData.append('photos', item))
  }

  return await apiCaller(`/api/users/${id}`, 'PUT', formData)
}

const _delete = async (id) => {
  return await apiCaller(`/api/users/${id}`, 'DELETE')
}

const UserApi = { count, find, findById, create, update, delete: _delete }

export default UserApi
