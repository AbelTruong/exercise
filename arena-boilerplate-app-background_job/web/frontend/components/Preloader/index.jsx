import { useEffect } from 'react'
import ArenaLogo from './logo-sp-animation.svg'
import './styles.css'

function Preloader() {
  useEffect(() => {
    if (window.__progressInterval) {
      clearInterval(window.__progressInterval)
    }

    const loadingBar = document.querySelector('#arc-loading-bar .mainline')

    let progress = 500,
      step = 500,
      max = 10000

    window.__progressInterval = setInterval(() => {
      if (progress >= max) {
        clearInterval(window.__progressInterval)
      } else {
        progress += step
        loadingBar.style.width = `${parseInt((progress / max) * 100)}%`
      }
    }, step)

    return () => {
      if (window.__progressInterval) {
        clearInterval(window.__progressInterval)
      }
    }
  }, [])

  return (
    <div className="arc-preloader">
      <img alt="Arena Commerce" src={ArenaLogo} />
      <div id="arc-loading-bar">
        <div className="mainline"></div>
        <div className="baseline"></div>
      </div>
    </div>
  )
}

export default Preloader
