import axios from 'axios'
import CONFIG from '../config/index.js'

/**
 *
 * @param {String} endpoint
 * @param {String} method
 * @param {Object} data
 * @param {Object} extraHeaders
 * @returns Object
 */
const apiCaller = async (endpoint, method, data, extraHeaders) => {
  try {
    let axiosConfig = {
      url: CONFIG.BACKEND_URL + endpoint,
      method: method || 'GET',
      data: data || undefined,
      headers: {
        // Authorization: `Bearer ${token}`,
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        ...(extraHeaders || {}),
      },
    }

    const res = await axios(axiosConfig)

    return res.data
  } catch (error) {
    let message = error.message

    if (error.response?.data?.message) {
      message = error.response.data.message
    }

    return {
      success: false,
      error: { message },
    }
  }
}

export default apiCaller
