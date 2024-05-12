import { Stack, Navigation } from '@shopify/polaris'
import { Link, useLocation } from 'react-router-dom'

function Layout(props) {
  const { children, routes } = props

  const location = useLocation()

  return (
    <Stack wrap={false}>
      <Stack.Item>
        {/* <Navigation location={location.pathname}>
          <Navigation.Section
            items={routes.map((item) => ({
              url: item.path,
              label: item.title,
              icon: item.icon,
              selected: location.pathname === item.path,
            }))}
          />
        </Navigation> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vendors">Vendors</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </Stack.Item>
      <Stack.Item fill>{children}</Stack.Item>
    </Stack>
  )
}

export default Layout
