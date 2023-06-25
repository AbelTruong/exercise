import slices from '../slices'

export const showAppLoading = (dispatch, data) => {
  data
    ? dispatch(slices.appLoading.actions.setData(data))
    : dispatch(slices.appLoading.actions.showAppLoading())
}

export const hideAppLoading = (dispatch) => {
  dispatch(slices.appLoading.actions.hideAppLoading())
}
