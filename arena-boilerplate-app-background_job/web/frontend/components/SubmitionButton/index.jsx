import PropTypes from 'prop-types'
import SubmitionApi from '../../apis/submition'
import { Button } from '@shopify/polaris'

SubmitionButton.propTypes = {
  // ...appProps
}

function SubmitionButton(props) {
  const { actions } = props

  const handleSubmit = async () => {
    try {
      actions.showAppLoading({ action: 'submition_test' })

      let res = await SubmitionApi.submit()
      if (!res.success) throw res.error

      console.log('\n--------------------')
      console.log('Submition test :')
      console.log(res.data)
      console.log('--------------------\n')

      actions.showNotify({ message: 'Submition successful' })
    } catch (error) {
      actions.showNotify({ message: error.message, error: true })
    } finally {
      actions.hideAppLoading()
    }
  }

  return (
    <Button
      onClick={handleSubmit}
      disabled={props.appLoading.action === 'submition_test'}
      loading={props.appLoading.action === 'submition_test'}
    >
      Submit test
    </Button>
  )
}

export default SubmitionButton
