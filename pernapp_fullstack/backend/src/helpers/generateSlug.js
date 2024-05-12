import removeVietnameseTones from './removeVietnameseTones.js'

/**
 *
 * @param {String} value
 * @param {Number} length
 * @returns String
 */
const generateSlug = (value, length) => {
  try {
    if (value) {
      let slug = value
      slug = removeVietnameseTones(slug)
      slug = slug.slice(0, length || value.length)
      slug = slug
        .toLowerCase()
        .trim()
        .replace(/\./g, '')
        .replace(/\s/g, '-')
        .replace(/---+/g, '-')
        .replace(/--+/g, '-')

      return slug
    }

    return ''
  } catch (error) {
    console.log('generateSlug error', error)
    return ''
  }
}

export default generateSlug
