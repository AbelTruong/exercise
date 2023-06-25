import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import AppStore from './AppStore'

import './styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <AppStore />
  </Provider>,
  document.getElementById('app')
)
