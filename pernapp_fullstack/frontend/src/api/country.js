import apiCaller from '../helpers/apiCaller.js'

const getCount = async () => {
  return await apiCaller(`/api/countries/count`)
}

const find = async (query) => {
  return await apiCaller(`/api/countries${query}`)
}

const findById = async (id) => {
  return await apiCaller(`/api/countries/${id}`)
}

const create = async (data) => {
  const formData = new FormData()
  Object.keys(data).forEach((name) => formData.append(name, data[name]))

  return await apiCaller(`/api/countries`, 'POST', formData)
}

const update = async (id, data) => {
  const formData = new FormData()
  Object.keys(data).forEach((name) => formData.append(name, data[name]))

  return await apiCaller(`/api/countries/${id}`, 'PUT', formData)
}

const _delete = async (id) => {
  return await apiCaller(`/api/countries/${id}`, 'DELETE')
}

const CountryApi = { getCount, find, findById, create, update, delete: _delete }

export default CountryApi
