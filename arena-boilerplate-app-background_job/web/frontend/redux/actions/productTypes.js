import ProductApi from '../../apis/product'
import slices from '../slices'

export const getProductTypes = async (dispatch) => {
  try {
    let res = await ProductApi.getProductTypes()
    if (!res.success) throw res.error

    return dispatch(slices.productTypes.actions.setData(res.data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}
