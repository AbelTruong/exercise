import { Card, Stack } from '@shopify/polaris'
import { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import qs from 'query-string'

import CountryApi from '../../api/country'
import UploadApi from '../../api/upload'
import UserApi from '../../api/user'
import AppHeader from '../../components/AppHeader/index.jsx'
import MyPagination from '../../components/MyPagination'
import PagePreloader from '../../components/PagePreloader'
import ConfirmDelete from './ConfirmDelete'
import CreateForm from './CreateForm'
import Table from './Table.jsx'
import Filter from './Filter'

function UsersPage(props) {
  const { actions } = props

  const location = useLocation()

  const [searchParams, setSearchParams] = useSearchParams()

  const [isReady, setIsReady] = useState(false)
  const [users, setUsers] = useState(null)
  const [countries, setCountries] = useState(null)
  const [created, setCreated] = useState(null)
  const [deleted, setDeleted] = useState(null)

  useEffect(() => {
    if (!isReady && users && countries) {
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
    getCountries('?page=1&limit=1000')
  }, [])

  const getUsers = async (query) => {
    try {
      actions.showAppLoading()

      let res = await UserApi.find(query)
      if (!res.success) {
        throw res.error
      }

      setUsers(res.data)
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
    getUsers(location.search)
  }, [location])

  const handleFilter = (filter) => {
    let params = qs.parse(location.search) || {}
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
    if ('gender' in filter) {
      if (filter.gender) {
        params = { ...params, gender: filter.gender }
      } else {
        delete params.gender
      }
    }
    if ('countryId' in filter) {
      if (filter.countryId) {
        params = { ...params, countryId: filter.countryId }
      } else {
        delete params.countryId
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

      // handle upload images
      if (formData['avatar'].value) {
        let images = await UploadApi.upload([formData['avatar'].value])
        if (!images.success) {
          actions.showNotify({ error: true, message: images.error.message })
        }
        formData['avatar'].value = images.data[0]
      } else if (formData['avatar'].originValue) {
        formData['avatar'].value = formData['avatar'].originValue
      }

      if (formData['photos'].value.length) {
        let images = await UploadApi.upload(formData['photos'].value)
        if (!images.success) {
          actions.showNotify({ error: true, message: images.error.message })
        }
        formData['photos'].value = [...images.data, ...formData['photos'].originValue]
      } else if (formData['photos'].originValue.length) {
        formData['photos'].value = formData['photos'].originValue
      }

      let data = {}
      Object.keys(formData)
        .filter((key) => !['confirmPassword', 'photos'].includes(key))
        .forEach((key) => (formData[key].value ? (data[key] = formData[key].value) : null))
      if (formData['photos'].value.length) {
        data['photos'] = formData['photos'].value
      }

      let res = null
      if (created?.id) {
        // update
        res = await UserApi.update(created.id, data)
      } else {
        // create
        res = await UserApi.create(data)
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

      let res = await UserApi.delete(deleted.id)
      if (!res.success) {
        throw res.error
      }

      actions.showNotify({ message: 'Deleted' })

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
        countries={countries.items || []}
      />
    )
  }

  return (
    <Stack vertical alignment="fill">
      <AppHeader
        title="Users"
        actions={[
          {
            label: 'Add user',
            primary: true,
            onClick: () => setCreated({}),
          },
        ]}
      />

      <Card>
        <Card.Section>
          <Filter
            filter={qs.parse(location.search)}
            onChange={(filter) => handleFilter(filter)}
            countries={countries.items}
          />
        </Card.Section>
        <Card.Section>
          <div>
            Total items: <b>{users.totalItems}</b>
          </div>
        </Card.Section>
        <Table
          {...props}
          {...users}
          onEdit={(item) => setCreated(item)}
          onDelete={(item) => setDeleted(item)}
        />
        <Card.Section>
          <MyPagination
            page={users.page}
            limit={users.limit}
            totalPages={users.totalPages}
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

export default UsersPage
