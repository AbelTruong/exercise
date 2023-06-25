import backgroundJobRoute from './background_job.js'
import productRoute from './product.js'
import storeSettingRoute from './store_setting.js'
import submitionRoute from './submition.js'

export default function adminRoute(app) {
  storeSettingRoute(app)
  productRoute(app)
  submitionRoute(app)
  backgroundJobRoute(app)
}
