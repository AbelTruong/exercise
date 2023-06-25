import apiCaller from '../helpers/apiCaller'

const SubmitionApi = {
  submit: async () => await apiCaller(`/api/submition`),
}

export default SubmitionApi
