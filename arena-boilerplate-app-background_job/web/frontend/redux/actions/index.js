import * as storeSetting from './storeSetting'
import * as appLoading from './appLoading'
import * as notify from './notify'
import * as fullScreen from './fullScreen'
import * as productVendors from './productVendors'
import * as productTypes from './productTypes'

export default {
  ...storeSetting,
  ...appLoading,
  ...notify,
  ...fullScreen,
  ...productVendors,
  ...productTypes,
}
