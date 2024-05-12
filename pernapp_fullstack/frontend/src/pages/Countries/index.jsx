import { Card, Stack } from '@shopify/polaris'
import { useState, useEffect } from 'react'
import CountryApi from '../../api/country'
import AppHeader from '../../components/AppHeader/index.jsx'
import MyPagination from '../../components/MyPagination'
import PagePreloader from '../../components/PagePreloader'
import ConfirmDelete from './ConfirmDelete'
import CreateForm from './CreateForm'
import Table from './Table.jsx'
import { useLocation, useSearchParams } from 'react-router-dom'
import qs from 'query-string'
import Filter from './Filter'

function CountriesPage(props) {
  const { actions } = props

  const location = useLocation()

  const [searchParams, setSearchParams] = useSearchParams()

  const [isReady, setIsReady] = useState(false)
  const [countries, setCountries] = useState(null)
  const [created, setCreated] = useState(null)
  const [deleted, setDeleted] = useState(null)

  useEffect(() => {
    if (!isReady && countries) {
      setIsReady(true)
    }
  })

  const getCountries = async (query) => {
    try {
      actions.showAppLoading()

      let res = await CountryApi.find(query)
      if (!res.success) {
        throw res.error
      }

      setCountries(res.data)
    } catch (error) {
      console.log(error)
      actions.showNotify({ error: true, message: error.message })
    } finally {
      actions.hideAppLoading()
    }
  }

  useEffect(() => {
    console.log('useEffect location')
    console.log(qs.parse(location.search))
    getCountries(location.search)
  }, [location])

  const handleFilter = (filter) => {
    let params = qs.parse(location.search)

    if ('page' in filter) {
      if (filter.page) {
        params = { ...params, page: filter.page }
      } else {
        delete params.page
      }
    }
    if ('limit' in filter) {
      if (filter.limit) {
        params = { ...params, limit: filter.limit }
      } else {
        delete params.limit
      }
    }
    if ('keyword' in filter) {
      if (filter.keyword) {
        params = { ...params, keyword: filter.keyword }
      } else {
        delete params.keyword
      }
    }

    setSearchParams(params)
  }

  const handleSubmit = async (formData) => {
    try {
      actions.showAppLoading()

      let data = {}
      Object.keys(formData).forEach((key) =>
        formData[key].value ? (data[key] = formData[key].value) : null,
      )

      let res = null
      if (created?.id) {
        // update
        res = await CountryApi.update(created.id, data)
      } else {
        // create
        res = await CountryApi.create(data)
      }
      if (!res.success) {
        throw res.error
      }

      actions.showNotify({ message: created?.id ? 'Saved' : 'Added' })

      setCreated(null)
      setSearchParams({})
    } catch (error) {
      console.log(error)
      actions.showNotify({ error: true, message: error.message })
    } finally {
      actions.hideAppLoading()
    }
  }

  const handleDelete = async (deleted) => {
    try {
      actions.showAppLoading()

      let res = await CountryApi.delete(deleted.id)
      if (!res.success) {
        throw res.error
      }

      actions.showNotify({ message: 'Deleted' })

      getCountries(location.search)
      setSearchParams(qs.parse(location.search))
    } catch (error) {
      console.log(error)
      actions.showNotify({ message: error.message, error: true })
    } finally {
      actions.hideAppLoading()
    }
  }

  if (!isReady) {
    return <PagePreloader />
  }

  if (created) {
    return (
      <CreateForm
        {...props}
        created={created}
        onDiscard={() => setCreated(null)}
        onSubmit={(formData) => handleSubmit(formData)}
      />
    )
  }

  return (
    <Stack vertical alignment="fill">
      <AppHeader
        title="Countries"
        actions={[
          {
            label: 'Add country',
            primary: true,
            onClick: () => setCreated({}),
          },
        ]}
      />

      <Card>
        <Card.Section>
          <Filter filter={qs.parse(location.search)} onChange={(filter) => handleFilter(filter)} />
        </Card.Section>
        <Card.Section>
          <div>
            Total items: <b>{countries.totalItems}</b>
          </div>
        </Card.Section>
        <Table
          {...props}
          {...countries}
          onEdit={(item) => setCreated(item)}
          onDelete={(item) => setDeleted(item)}
        />
        <Card.Section>
          <MyPagination
            page={countries.page}
            limit={countries.limit}
            totalPages={countries.totalPages}
            onChange={({ page, limit }) => handleFilter({ page, limit })}
          />
        </Card.Section>
      </Card>

      {deleted && (
        <ConfirmDelete
          onDiscard={() => setDeleted(null)}
          onSubmit={() => handleDelete(deleted) & setDeleted(null)}
        />
      )}
    </Stack>
  )
}

export default CountriesPage
