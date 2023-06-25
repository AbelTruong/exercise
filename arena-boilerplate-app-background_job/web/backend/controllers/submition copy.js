import getCurrentSession from '../../auth/getCurrentSession.js'
import ResponseHandler from '../helpers/responseHandler.js'
import Product from '../middlewares/product.js'

export default {
  submit: async (req, res) => {
    console.log('\n----------------------------------------')
    console.log('/api/submition')
    try {
      const { shop, accessToken } = getCurrentSession(req, res)

      let data = {}

      data.count = await Product.count({ shop, accessToken })
      data.all = await Product.getAll({ shop, accessToken })
      data.items = await Product.find({ shop, accessToken })
      data.item = await Product.findById({ shop, accessToken, id: data.items.products[0].id })
      data.created = await Product.create({
        shop,
        accessToken,
        data: { product: { title: 'Sample product' } },
      })
      data.updated = await Product.update({
        shop,
        accessToken,
        id: data.created.product.id,
        data: { product: { body_html: 'sample product' } },
      })
      data.deleted = await Product.delete({
        shop,
        accessToken,
        id: data.created.product.id,
      })
      data.types = await Product.getProductTypes({ shop, accessToken })
      data.vendors = await Product.getProductVendors({ shop, accessToken })

      console.log('/api/submition data :>> ', data)
      return ResponseHandler.success(res, data)
    } catch (error) {
      console.log('/api/submition error :>> ', error.message)
      return ResponseHandler.error(res, error)
    }
  },
}
