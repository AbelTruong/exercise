import { Stack } from '@shopify/polaris'
import AppHeader from '../../components/AppHeader'
import SubmitionButton from '../../components/SubmitionButton'

function IndexPage(props) {
  return (
    <Stack vertical alignment="fill">
      <AppHeader
        {...props}
        title="Test API"
        onBack={() => props.navigate('')}
        primaryActions={[
          {
            label: 'Contact us',
            onClick: () => props.navigate('support'),
          },
        ]}
      />

      <SubmitionButton {...props} />
    </Stack>
  )
}

export default IndexPage
