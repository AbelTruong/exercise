import { Toast } from '@shopify/polaris'
import { useSelector, useDispatch } from 'react-redux'

import { selectNotify, hideNotify, showNotify } from './redux/reducers/notify.js'
import { selectAppLoading, hideAppLoading, showAppLoading } from './redux/reducers/appLoading.js'
import { selectVendors, setVendors } from './redux/reducers/vendorSlice.js'
import {
  setProducts,
  setParams,
  selectParams,
  selectProducts,
} from './redux/reducers/productSlice.js'
import App from './App'
import LoadingPage from './components/LoadingPage/index.jsx'

function AppContainer(props) {
  const dispatch = useDispatch()

  const appLoading = useSelector(selectAppLoading)
  const notify = useSelector(selectNotify)
  const vendors = useSelector(selectVendors)
  const products = useSelector(selectProducts)
  const params = useSelector(selectParams)

  const reduxState = { appLoading, notify, vendors, products, params }

  const reduxActions = {
    showAppLoading: () => dispatch(showAppLoading()),
    hideAppLoading: () => dispatch(hideAppLoading()),

    showNotify: (notify) => dispatch(showNotify(notify)),
    hideNotify: () => dispatch(hideNotify()),

    setVendors: (data) => dispatch(setVendors(data)),

    setProducts: (data) => dispatch(setProducts(data)),
    setParams: (data) => dispatch(setParams(data)),
  }

  const appProps = {
    ...props,
    ...reduxState,
    actions: reduxActions,
  }

  const toastMarkup = notify?.show && (
    <Toast
      error={notify.error}
      content={notify.message}
      onDismiss={() => {
        if (notify.onDismiss) {
          notify.onDismiss()
        }
        dispatch(hideNotify())
      }}
    />
  )

  return (
    <div>
      <App {...appProps} />

      {appLoading?.loading && <LoadingPage />}

      {toastMarkup}
    </div>
  )
}

export default AppContainer
