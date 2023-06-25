import apiCaller from '../helpers/apiCaller'

const StoreSettingApi = {
  auth: async () => await apiCaller('/api/store-settings'),
  update: async (data) => await apiCaller('/api/store-settings', 'PUT', data),
}

export default StoreSettingApi
