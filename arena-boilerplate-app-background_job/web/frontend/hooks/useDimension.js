import { useEffect, useState } from 'react'

export const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const resizeScreen = () => {
      let root = window.document.querySelector('#app div.Polaris-Page__Content')
      let width = root ? root.offsetWidth : 0
      let height = root ? root.offsetHeight : 0
      setDimension({ width, height })
    }
    resizeScreen()
    window.addEventListener('resize', resizeScreen)
  }, [])

  return dimension
}
