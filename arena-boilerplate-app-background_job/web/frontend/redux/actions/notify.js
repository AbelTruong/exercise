import slices from '../slices'

export const showNotify = (dispatch, data) => {
  dispatch(slices.notify.actions.hideNotify())

  setTimeout(() => dispatch(slices.notify.actions.showNotify(data)), 100)
}

export const hideNotify = (dispatch) => {
  dispatch(slices.notify.actions.hideNotify())
}
