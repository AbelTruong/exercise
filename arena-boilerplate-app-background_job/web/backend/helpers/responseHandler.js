/**
 * HTTP response status codes
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

const ResponseHandler = {
  success: (res, data) => {
    res.status(200).json({ success: true, data })
  },
  error: (res, error, status) => {
    res.status(status || 400).json({
      success: false,
      error: { ...error, message: error.message, code: error.code },
    })
  },
}

export default ResponseHandler
