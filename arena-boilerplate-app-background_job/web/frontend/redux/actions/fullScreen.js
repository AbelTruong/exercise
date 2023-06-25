import slices from '../slices'

export const setFullScreen = async (dispatch, data) => {
  try {
    return dispatch(slices.fullScreen.actions.setData(data))
  } catch (error) {
    dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
  }
}
