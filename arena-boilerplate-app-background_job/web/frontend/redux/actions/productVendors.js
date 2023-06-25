import ProductApi from '../../apis/product'
import slices from '../slices'

export const getProductVendors = async (dispatch) => {
  try {
    let res = await ProductApi.getProductVendors()
    if (!res.success) throw res.error

    return dispatch(slices.productVendors.actions.setData(res.data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}
