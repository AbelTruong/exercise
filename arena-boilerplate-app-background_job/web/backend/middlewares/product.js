import apiCaller from '../helpers/apiCaller.js'
import graphqlCaller from '../helpers/graphqlCaller.js'

const getProductTypes = async ({ shop, accessToken }) => {
  let query = `
    query productTypes {
      shop {
        productTypes(first: 250) {
          edges {
            node
          }
        }
      }
    }
  `

  let res = await graphqlCaller({
    shop,
    accessToken,
    query,
  })

  return res.shop['productTypes'].edges.map((item) => item.node)
}

const getProductVendors = async ({ shop, accessToken }) => {
  let query = `
    query productVendors {
      shop {
        productVendors(first: 250) {
          edges {
            node
          }
          pageInfo {
            hasNextPage
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
    }
  `

  let res = await graphqlCaller({
    shop,
    accessToken,
    query,
  })

  return res.shop['productVendors'].edges.map((item) => item.node)
}

const getAll = async ({ shop, accessToken, count }) => {
  let items = []
  let res = null
  let hasNextPage = true
  let nextPageInfo = ''

  while (hasNextPage) {
    res = await apiCaller({
      shop,
      accessToken,
      endpoint: `products.json?limit=250&page_info=${nextPageInfo}`,
      pageInfo: true,
    })

    items = items.concat(res.products)

    hasNextPage = res.pageInfo.hasNext
    nextPageInfo = res.pageInfo.nextPageInfo

    if (!isNaN(count) && parseInt(count) && items.length >= parseInt(count)) {
      hasNextPage = false
      nextPageInfo = ''

      items = items.slice(0, count)
    }
  }

  return items
}

const count = async ({ shop, accessToken }) => {
  return await apiCaller({ shop, accessToken, endpoint: `products/count.json` })
}

const find = async ({ shop, accessToken, limit, pageInfo, order, filter }) => {
  let _limit = limit ? parseInt(limit) : 20

  let endpoint = `products.json?limit=${_limit}${filter || ''}`
  if (pageInfo) {
    endpoint += `&page_info=${pageInfo}`
  } else {
    if (order) {
      endpoint += `&order=${order}`
    } else {
      endpoint += `&order=updated_at+desc`
    }
  }

  return await apiCaller({
    shop,
    accessToken,
    endpoint,
    pageInfo: true,
  })
}

const findById = async ({ shop, accessToken, id }) => {
  return await apiCaller({ shop, accessToken, endpoint: `products/${id}.json` })
}

const create = async ({ shop, accessToken, data }) => {
  return await apiCaller({ shop, accessToken, endpoint: `products.json`, method: 'POST', data })
}

const update = async ({ shop, accessToken, id, data }) => {
  return await apiCaller({
    shop,
    accessToken,
    endpoint: `products/${id}.json`,
    method: 'PUT',
    data,
  })
}

const _delete = async ({ shop, accessToken, id }) => {
  return await apiCaller({
    shop,
    accessToken,
    endpoint: `products/${id}.json`,
    method: 'DELETE',
  })
}

const Product = {
  getProductTypes,
  getProductVendors,
  getAll,
  count,
  find,
  findById,
  create,
  update,
  delete: _delete,
}

export default Product
