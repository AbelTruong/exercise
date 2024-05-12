import './styles.css'
import ArenaLogo from './logo-sp-animation.svg'
import { useEffect } from 'react'

function Preloader(props) {
  useEffect(() => {
    const loadingBar = document.querySelector('#arc-loading-bar .mainline')
    let progress = 300
    const step = 300
    const max = 3000
    let progressInterval = setInterval(() => {
      if (progress >= max) {
        clearInterval(progressInterval)
      } else {
        progress += step
        loadingBar.style.width = `${parseInt((progress / max) * 100)}%`
      }
    }, step)
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
