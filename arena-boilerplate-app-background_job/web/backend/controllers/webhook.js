import crypto from 'crypto'
import ErrorCodes from '../constants/errorCodes.js'
import StoreSetting from '../middlewares/store_setting.js'

export default {
  post: (req, res) => {
    const hmac = req.headers['x-shopify-hmac-sha256']
    const domain = req.headers['x-shopify-shop-domain']
    const topic = req.headers['x-shopify-topic']

    try {
      const hash = crypto
        .createHmac('sha256', process.env.SHOPIFY_API_SECRET)
        .update(JSON.stringify(req.body), 'utf8', 'hex')
        .digest('base64')

      /**
       * Request not sent from Shopify
       */
      if (!hmac || hash !== hmac) {
        return res.status(401).send(ErrorCodes.UNAUTHORIZED)
      }

      const { id } = req.body

      console.log(`🚀 webhook ${domain} ${topic} ${id}`)

      switch (topic) {
        case 'app/uninstalled':
          StoreSetting.uninstall(domain)
          break

        default:
          break
      }

      res.status(200).send()
    } catch (error) {
      res.status(200).send()
    }
  },
}
