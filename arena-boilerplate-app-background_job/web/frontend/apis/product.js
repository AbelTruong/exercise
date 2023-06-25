import apiCaller from '../helpers/apiCaller'

const ProductApi = {
  getProductTypes: async () => await apiCaller(`/api/products/product-types`),
  getProductVendors: async () => await apiCaller(`/api/products/product-vendors`),
  count: async () => await apiCaller(`/api/products/count`),
  find: async (query) => await apiCaller(`/api/products${query || ''}`),
  findById: async (id) => await apiCaller(`/api/products/${id}`),
  create: async (data) => await apiCaller(`/api/products`, 'POST', data),
  update: async (id, data) => await apiCaller(`/api/products/${id}`, 'PUT', data),
  delete: async (id) => await apiCaller(`/api/products/${id}`, 'DELETE'),
}

export default ProductApi
