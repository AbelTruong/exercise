import { useAppBridge } from '@shopify/app-bridge-react'
import { Fullscreen } from '@shopify/app-bridge/actions'
import { useEffect } from 'react'

function AppFullscreen(props) {
  const { isFullscreen, children } = props

  const app = useAppBridge()
  const fullscreen = Fullscreen.create(app)

  useEffect(() => {
    if (isFullscreen) {
      fullscreen.dispatch(Fullscreen.Action.ENTER)
    } else {
      fullscreen.dispatch(Fullscreen.Action.EXIT)
    }
  }, [isFullscreen])

  return children
}

export default AppFullscreen
