import { useEffect, useState } from 'react'
import { useDimension } from './useDimension'

export const useScreen = () => {
  const dimension = useDimension()

  const [screen, setScreen] = useState('mobile')

  useEffect(() => {
    setScreen(dimension.width >= 600 ? 'desktop' : 'mobile')
  }, [dimension])

  return screen
}
