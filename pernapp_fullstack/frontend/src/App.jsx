import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import UsersPage from './pages/Users'
import ProductsPage from './pages/Products'
import { Page } from '@shopify/polaris'
import CustomersPage from './pages/Customers'
import CountriesPage from './pages/Countries'
import VendorsPage from './pages/Vendors'
import { HomeMinor, CustomersMinor, ProductsMinor, LocationsMinor } from '@shopify/polaris-icons'

export const routes = [
  {
    path: '/',
    title: 'Home',
    exact: false,
    component: HomePage,
    icon: HomeMinor,
  },
  {
    path: '/countries',
    title: 'Countries',
    exact: false,
    component: CountriesPage,
    icon: LocationsMinor,
  },
  {
    path: '/customers',
    title: 'Customers',
    exact: false,
    component: CustomersPage,
    icon: CustomersMinor,
  },
  {
    path: '/users',
    title: 'Users',
    exact: false,
    component: UsersPage,
    icon: CustomersMinor,
  },
  {
    path: '/vendors',
    title: 'Vendors',
    exact: false,
    component: VendorsPage,
    icon: CustomersMinor,
  },
  {
    path: '/products',
    title: 'Products',
    exact: false,
    component: ProductsPage,
    icon: ProductsMinor,
  },
]

function App(props) {
  return (
    <Layout {...props} routes={routes}>
      <Page>
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component {...props} />} />
          ))}
        </Routes>
      </Page>
    </Layout>
  )
}

export default App
