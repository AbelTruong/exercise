import { createApp } from '@shopify/app-bridge'
import { getSessionToken } from '@shopify/app-bridge-utils'
import { Redirect } from '@shopify/app-bridge/actions'
import axios from 'axios'

/**
 * Shopify API response status and error codes
 * https://shopify.dev/api/usage/response-codes
 */

const apiCaller = async (endpoint, method = 'GET', data = undefined, extraHeaders = undefined) => {
  const app = createApp(window.SHOPIFY_APP_CONFIG)

  try {
    let token = await getSessionToken(app)

    let axiosConfig = {
      url: window.BACKEND_URL + endpoint,
      method: method || 'GET',
      data: data || undefined,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(extraHeaders ? extraHeaders : {}),
      },
    }

    const res = await axios(axiosConfig)

    return res.data
  } catch (error) {
    if (error.response?.status === 403) {
      /**
       * Check Forbidden
       */
      let reauthorize = error.response.headers['x-shopify-api-request-failure-reauthorize']
      let reauthorizeUrl = error.response.headers['x-shopify-api-request-failure-reauthorize-url']

      const redirect = Redirect.create(app)
      redirect.dispatch(Redirect.Action.REMOTE, `${window.BACKEND_URL}${reauthorizeUrl}`)

      await new Promise((resolve) => setTimeout(resolve, 10000))
    } else {
      return {
        success: false,
        error: {
          message: error.response?.data?.error?.message || error.message,
          code: error.response?.data?.error?.code || undefined,
        },
      }
    }
  }
}

export default apiCaller
