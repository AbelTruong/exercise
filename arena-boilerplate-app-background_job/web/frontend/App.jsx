import { Stack } from '@shopify/polaris'
import Routes from './Routes'
import AppNavigation from './components/AppNavigation'

export default function App(props) {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

  let primaryActions = [
    {
      label: 'Home',
      pathname: '/',
    },
    {
      label: 'Products',
      pathname: '/products',
    },
  ]
  let secondaryMoreActions = {
    items: [
      { label: 'Settings', pathname: '/settings' },
      { label: 'FAQS', pathname: '/faqs' },
      { label: 'Support', pathname: '/support' },
      { label: 'Privacy', pathname: '/privacy' },
    ],
  }
  if (['hahalolo.myshopify.com'].includes(window.shopOrigin)) {
    secondaryMoreActions.items.push({ label: 'Test API', pathname: '/test-api' })
  }

  return (
    <Stack vertical alignment="fill">
      <AppNavigation
        {...props}
        primaryActions={primaryActions}
        secondaryActions={[]}
        secondaryMoreActions={secondaryMoreActions}
      />

      <Routes pages={pages} appProps={props} />
    </Stack>
  )
}
