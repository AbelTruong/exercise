import getCurrentSession from '../../auth/getCurrentSession.js'
import ResponseHandler from '../helpers/responseHandler.js'
import BullmqJob from '../middlewares/bullmq_job.js'

const products = [
  {
    title: 'V8 Splash Strawberry Banana',
    body_html:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
  },
  {
    title: 'Sugar - Brown',
    body_html: 'Fusce consequat. Nulla nisl.',
  },
  {
    title: 'Chick Peas - Dried',
    body_html:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
  },
  {
    title: 'Creme De Cacao Mcguines',
    body_html: 'In hac habitasse platea dictumst.',
  },
  {
    title: 'Chocolate - Milk Coating',
    body_html: 'Pellentesque ultrices mattis odio.',
  },
  {
    title: 'Chef Hat 20cm',
    body_html: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
  },
  {
    title: 'Wine - Magnotta - Red, Baco',
    body_html: 'Phasellus id sapien in sapien iaculis congue.',
  },
  {
    title: 'Pastry - Chocolate Chip Muffin',
    body_html: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    title: 'Napkin Colour',
    body_html:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
  },
  {
    title: 'Beer - Blue',
    body_html: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  },
  {
    title: 'Pepper - Black, Ground',
    body_html: 'Suspendisse potenti.',
  },
  {
    title: 'Table Cloth 54x72 Colour',
    body_html: 'Vestibulum sed magna at nunc commodo placerat.',
  },
  {
    title: 'Tumeric',
    body_html:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
  },
  {
    title: 'Capicola - Hot',
    body_html:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
  },
  {
    title: 'Beef - Outside, Round',
    body_html: 'Nulla tellus.',
  },
  {
    title: 'Lamb - Shoulder, Boneless',
    body_html: 'Integer ac neque.',
  },
  {
    title: 'Cream Of Tartar',
    body_html: 'Sed ante. Vivamus tortor.',
  },
  {
    title: 'Chinese Foods - Plain Fried Rice',
    body_html: 'Etiam pretium iaculis justo.',
  },
  {
    title: 'Pike - Frozen Fillet',
    body_html:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  },
  {
    title: 'Nut - Chestnuts, Whole',
    body_html: 'Morbi non quam nec dui luctus rutrum.',
  },
]

export default {
  submit: async (req, res) => {
    console.log('\n----------------------------------------')
    console.log('/api/submition')
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      let data = {}

      /**
       * Basic background job
       */
      // data.job = await BullmqJob.create('bulk_product', { shop, products: products.slice(0, 10) })

      /**
       * Background job with group
       */
      let group = `bulk_product_group_${Date.now()}`
      data = { jobs: [], group }
      for (
        let page = 1, limit = 4, totalPages = Math.ceil(products.length / limit);
        page <= totalPages;
        page++
      ) {
        let job = await BullmqJob.create(
          'bulk_product',
          { shop, products: products.slice((page - 1) * limit, page * limit) },
          group
        )
        data.jobs.push(job)
      }

      console.log('/api/submition data :>> ', data)
      return ResponseHandler.success(res, data)
    } catch (error) {
      console.log('/api/submition error :>> ', error.message)
      return ResponseHandler.error(res, error)
    }
  },
}
