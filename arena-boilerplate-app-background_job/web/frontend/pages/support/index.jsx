import { Stack } from '@shopify/polaris'
import AppHeader from '../../components/AppHeader'

function SupportPage(props) {
  return (
    <Stack vertical alignment="fill">
      <AppHeader {...props} title="Support" onBack={() => props.navigate('')} />
    </Stack>
  )
}

export default SupportPage
