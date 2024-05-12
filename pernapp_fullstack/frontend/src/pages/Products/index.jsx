import { Card, Stack } from '@shopify/polaris'
import { useEffect, useState } from 'react'
import qs from 'query-string'
import { useLocation, useSearchParams } from 'react-router-dom'

import ProductApi from '../../api/product.js'
import UploadApi from '../../api/upload.js'
import VendorApi from '../../api/vendor.js'

import AppHeader from '../../components/AppHeader/index.jsx'
import MyPagination from '../../components/MyPagination/index.jsx'
import PagePreloader from '../../components/PagePreloader/index.jsx'
import ConfirmDelete from './ConfirmDelete.jsx'
import CreateForm from './CreateForm.jsx'
import Filter from './Filter.jsx'
import Table from './Table.jsx'

function ProductsPage(props) {
  const { actions, products, vendors, params } = props
  const location = useLocation()

  const [searchParams, setSearchParams] = useSearchParams()
  const [isReady, setIsReady] = useState(false)
  const [created, setCreated] = useState(null)
  const [deleted, setDeleted] = useState(null)

  useEffect(() => {
    if (!isReady && products) {
      setIsReady(true)
    }
  })

  const getVendors = async (query = `?page=1&limit=1000`) => {
    try {
      actions.showAppLoading()
      let res = await VendorApi.find(query)

      if (!res.success) {
        throw res.error
      }

      actions.setVendors(res.data)
    } catch (error) {
      console.log(error)
      actions.showNotify({ error: true, message: error.message })
    } finally {
      actions.hideAppLoading()
    }
  }

  const getProducts = async (query = '?page=1&limit=10') => {
    try {
      actions.showAppLoading()
      let res = await ProductApi.find(query)

      if (!res.success) {
        throw res.error
      }

      actions.setProducts(res.data)
      actions.setParams(query)
    } catch (error) {
      console.log(error)
      actions.showNotify({ error: true, message: error.message })
    } finally {
      actions.hideAppLoading()
    }
  }

  useEffect(() => {
    if (!vendors) {
      getVendors()
    }
  }, [])

  useEffect(() => {
    if (!products) {
      console.log('getProducts useEffect')
      getProducts()
    }
    if (params) {
      setSearchParams(params)
    }
  }, [])

  useEffect(() => {
    if (products && location.search) {
      console.log('getProducts with location.search')
      getProducts(location.search)
    }
  }, [location.search])

  if (!isReady) {
    return <PagePreloader />
  }

  const handleDelete = async () => {
    try {
      actions.showAppLoading()

      let res = await ProductApi.delete(deleted.id)

      if (!res.success) {
        throw res.error
      }

      actions.showNotify({ message: 'Deleted' })

      setDeleted(null)
      getProducts(location.search)
    } catch (error) {
      console.log(error)
      actions.showNotify({ message: error.message, error: true })
    } finally {
      actions.hideNotify()
    }
  }

  const handleSubmit = async (formData) => {
    try {
      actions.showAppLoading()

      // handle upload images and thumbnail
      if (formData['thumbnail'].value) {
        let images = await UploadApi.upload([formData['thumbnail'].value])
        if (!images.success) {
          actions.showNotify({ error: true, message: images.error.message })
        }
        formData['thumbnail'].value = images.data[0]
      } else if (formData['thumbnail'].originValue) {
        formData['thumbnail'].value = formData['thumbnail'].originValue
      }

      if (formData['images'].value.length) {
        let images = await UploadApi.upload(formData['images'].value)
        if (!images.success) {
          actions.showNotify({ error: true, message: images.error.message })
        }
        formData['images'].value = [...images.data, ...formData['images'].originValue]
      } else if (formData['images'].originValue.length) {
        formData['images'].value = formData['images'].originValue
      }

      let data = {}

      Object.keys(formData)
        .filter((key) => !['images', 'thumbnail'].includes(key))
        .forEach((key) =>
          formData[key].value || key === 'publish' ? (data[key] = formData[key].value) : null,
        )

      if (formData['images'].value.length) {
        data['images'] = formData['images'].value
      } else {
        data['images'] = []
      }

      if (formData['thumbnail'].value) {
        data['thumbnail'] = formData['thumbnail'].value
      } else {
        data['thumbnail'] = null
      }

      let res = null
      if (created?.id) {
        // update
        res = await ProductApi.update(created?.id, data)
      } else {
        // create
        res = await ProductApi.create(data)
      }
      if (!res.success) {
        throw res.error
      }

      actions.showNotify({ message: created?.id ? 'Saved' : 'Added' })

      setCreated(null)
      setSearchParams({})
      getProducts()
    } catch (error) {
      console.log(error)
      actions.showNotify({ error: true, message: error.message })
    } finally {
      actions.hideAppLoading()
    }
  }

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

    if ('keyword' in filter) {
      if (filter.keyword) {
        params = { ...params, keyword: filter.keyword }
      } else {
        delete params.keyword
      }
    }

    if ('publish' in filter) {
      if (filter.publish) {
        params = { ...params, publish: filter.publish }
      } else {
        delete params.publish
      }
    }

    if ('vendors' in filter) {
      if (filter.vendors) {
        params = { ...params, vendors: filter.vendors }
      } else {
        delete params.vendors
      }
    }

    if ('status' in filter) {
      if (filter.status) {
        params = { ...params, status: filter.status }
      } else {
        delete params.status
      }
    }

    if ('price' in filter) {
      if (filter.price) {
        params = { ...params, price: filter.price }
      } else {
        delete params.price
      }
    }

    if ('sort' in filter) {
      if (filter.sort) {
        params = { ...params, sort: filter.sort }
      } else {
        delete params.sort
      }
    }

    setSearchParams(params)
    if (JSON.stringify(params) === '{}') {
      getProducts()
    }
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
        title="Products nha"
        actions={[
          {
            label: 'Add product',
            primary: true,
            onClick: () => {
              setCreated({})
            },
          },
        ]}
      />

      <Card>
        <Card.Section>
          <Filter
            vendors={vendors}
            filter={qs.parse(location.search)}
            onChange={(filter) => handleFilter(filter)}
          />
        </Card.Section>
        <Card.Section>
          <div>
            Total items: <b>{products?.totalItems}</b>
          </div>
        </Card.Section>
        <Table
          {...props}
          onEdit={(item) => setCreated(item)}
          onDelete={(item) => setDeleted(item)}
        />
        <Card.Section>
          <MyPagination
            page={products.page}
            limit={products.limit}
            totalPages={products.totalPages}
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

export default ProductsPage
