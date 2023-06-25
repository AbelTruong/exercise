import moment from 'moment'

/**
 *
 * @param {String | Number} datetime
 * @param {String} type
 * @returns String
 */
const formatDateTime = (datetime, type = 'YYYY-MM-DD') => {
  let date = new Date(datetime)

  let yyyy = date.getFullYear()
  let mm = date.getMonth() + 1
  mm = (mm < 10 ? '0' : '') + mm
  let dd = date.getDate()
  dd = (dd < 10 ? '0' : '') + dd

  switch (type) {
    case 'MM/DD/YYYY':
    case 'L':
      return moment(date).format('L')

    case 'Month DD, YYYY':
    case 'LL':
      return moment(date).format('LL')

    case 'LLL':
      // Month DD, YYYY HH:MM AM
      return moment(date).format(type)

    case 'LLLL':
      // Day, Month DD, YYYY HH:MM AM
      return moment(date).format(type)

    case 'YYYY/MM/DD':
      return `${yyyy}/${mm}/${dd}`

    default:
      // YYYY-MM-DD
      return `${yyyy}-${mm}-${dd}`
  }
}

export default formatDateTime
