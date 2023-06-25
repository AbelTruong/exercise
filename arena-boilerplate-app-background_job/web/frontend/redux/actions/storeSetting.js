import StoreSettingApi from '../../apis/store_setting'
import slices from '../slices'

export const setStoreSetting = async (dispatch, data) => {
  try {
    return dispatch(slices.storeSetting.actions.setData(data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}

export const getStoreSetting = async (dispatch) => {
  try {
    let res = await StoreSettingApi.auth()
    if (!res.success) throw res.error

    return dispatch(slices.storeSetting.actions.setData(res.data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}

export const updateStoreSetting = async (dispatch, data) => {
  try {
    let res = await StoreSettingApi.update(data)
    if (!res.success) throw res.error

    return dispatch(slices.storeSetting.actions.setData(res.data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}
