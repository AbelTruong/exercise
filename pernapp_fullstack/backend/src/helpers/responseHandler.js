const success = (res, data) => {
  return res.status(200).json({
    success: true,
    data,
  })
}

const error = (res, error, status) => {
  let message = error.message

  if (error.errors?.[0]?.message) {
    message = error.errors[0].message
  }

  return res.status(status || 200).json({
    success: false,
    error: { message },
  })
}

const ResponseHandler = {
  success,
  error,
}

export default ResponseHandler
