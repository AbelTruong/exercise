import Controller from './../controllers/store_setting.js'

export default function storeSettingRoute(app) {
  app.get('/api/store-settings', Controller.auth)
  app.put('/api/store-settings', Controller.update)
}
