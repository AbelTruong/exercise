import { Spinner } from '@shopify/polaris'
import './styles.css'

function LoadingPage(props) {
  const { loading, action } = props

  return (
    <div className="arc-loading">
      <div>{!Boolean(action) && <Spinner size="large" color="teal" />}</div>
    </div>
  )
}

export default LoadingPage
