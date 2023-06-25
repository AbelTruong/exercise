/**
 *
 * @param {Object} data
 */
const validateParams = (data) => {
  let keys = Object.keys(data)

  for (let key of keys) {
    if (data[key] === undefined) {
      throw { message: `Bad request. Field ${keys[i]} is required`, field: keys[i] }
    }
  }
}

export default validateParams
