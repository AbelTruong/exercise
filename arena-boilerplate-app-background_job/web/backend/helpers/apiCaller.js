import axios from 'axios'
import validateParams from './validateParams.js'

/**
 * https://github.com/Shopify/shopify-api-node
 * https://github.com/Shopify/shopify-api-node/blob/main/docs/usage/rest.md
 */

/**
 *
 * @param {String} link
 * @returns Object
 */
const getPageInfo = (link) => {
  let initPageInfo = {
    hasNext: false,
    hasPrevious: false,
    nextPageInfo: '',
    previousPageInfo: '',
  }

  try {
    let pageInfo = { ...initPageInfo }

    if (link.indexOf('>; rel="previous"') >= 0) {
      pageInfo.hasPrevious = true
      pageInfo.previousPageInfo = link.slice(
        link.indexOf('page_info=') + 'page_info='.length,
        link.indexOf('>; rel="previous"')
      )
    }
    if (link.indexOf('>; rel="next"') >= 0) {
      pageInfo.hasNext = true
      pageInfo.nextPageInfo = link.slice(
        link.lastIndexOf('page_info=') + 'page_info='.length,
        link.indexOf('>; rel="next"')
      )
    }

    return pageInfo
  } catch (error) {
    return initPageInfo
  }
}

const apiCaller = async ({ shop, accessToken, endpoint, method, data, extraHeaders, pageInfo }) => {
  try {
    validateParams({ shop, accessToken, endpoint })

    const config = {
      url: `https://${shop}/admin/api/${process.env.API_VERSION}/${endpoint}`,
      method: method || 'GET',
      headers: {
        'X-Shopify-Access-Token': accessToken,
        'Content-type': 'application/json; charset=utf-8',
        ...(extraHeaders || {}),
      },
      data,
    }

    const res = await axios(config)

    let payload = res.data

    if (pageInfo) {
      payload.pageInfo = getPageInfo(res.headers.link)
    }

    return payload
  } catch (error) {
    /**
     * Ignore for webhooks
     */
    if (endpoint.includes('webhooks.json')) {
      return
    }

    let message = error.message

    if (error.response?.data?.errors) {
      switch (typeof error.response.data.errors) {
        case 'string':
          message = error.response.data.errors
          break

        case 'object':
          message = JSON.stringify(error.response.data.errors)
          break

        default:
          break
      }
    }

    /**
     * Rate limits
     * https://shopify.dev/api/admin-rest#rate_limits
     */
    if (message.includes('Exceeded')) {
      /**
       * delay 1s
       */
      await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))

      return await apiCaller({ shop, accessToken, endpoint, method, data, extraHeaders, pageInfo })
    }

    console.log('apiCaller error :>> ', { message })
    throw { message }
  }
}

export default apiCaller
