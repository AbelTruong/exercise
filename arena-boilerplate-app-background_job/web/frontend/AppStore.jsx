import { useDispatch, useSelector } from 'react-redux'
import AppContainer from './AppContainer'
import reducer from './redux/reducer'
import actions from './redux/actions'
import { useEffect } from 'react'
import { useScreen, useDimension } from './hooks'

export default function AppStore(props) {
  const dispatch = useDispatch()

  const screen = useScreen()
  const dimension = useDimension()

  let reduxState = { screen, dimension }
  Object.keys(reducer).forEach((key) => (reduxState[key] = useSelector((state) => state[key].data)))

  let reduxActions = {}
  Object.keys(actions).forEach((key) => {
    reduxActions[key] = async (data) => await actions[key](dispatch, data)
  })

  return <AppContainer {...reduxState} actions={reduxActions} dispatch={dispatch} />
}
