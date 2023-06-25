/**
 *
 * @param {String | Number} value
 * @returns String
 */
const numberWithCommas = (value) => {
  try {
    if (value === 0 || value === '0') return '0'

    if (!value) return ''

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } catch (error) {
    return ''
  }
}

export default numberWithCommas
