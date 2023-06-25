import { Stack } from '@shopify/polaris'
import AppHeader from '../../components/AppHeader'

function IndexPage(props) {
  return (
    <Stack vertical alignment="fill">
      <AppHeader
        {...props}
        title="Settings"
        onBack={() => props.navigate('')}
        primaryActions={[
          {
            label: 'Contact us',
            onClick: () => props.navigate('support'),
          },
        ]}
      />
    </Stack>
  )
}

export default IndexPage
