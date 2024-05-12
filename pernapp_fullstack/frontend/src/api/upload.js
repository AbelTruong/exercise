import apiCaller from '../helpers/apiCaller.js'

const upload = async (images) => {
  const formData = new FormData()
  images.forEach((item) => formData.append('images', item))

  return await apiCaller(`/api/upload`, 'POST', formData)
}

const UploadApi = { upload }

export default UploadApi
