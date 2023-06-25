import dotenv from 'dotenv'
dotenv.config({ path: './../.env' })

// @ts-check
import { join } from 'path'
import { readFileSync } from 'fs'
import express from 'express'
import serveStatic from 'serve-static'
import cors from 'cors'
import morgan from 'morgan'

import shopify from './shopify.js'
import GDPRWebhookHandlers from './gdpr.js'
import verifyToken from './auth/verifyToken.js'
import webhookRoute from './backend/routes/webhook.js'
import adminRoute from './backend/routes/index.js'

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10)

const STATIC_PATH =
  process.env.NODE_ENV === 'production'
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`

const app = express()

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin(), verifyToken)
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
)

// app.post(
//   shopify.config.webhooks.path,
//   shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
// )
webhookRoute(app)

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use('/api/*', shopify.validateAuthenticatedSession(), verifyToken)

app.use(cors())
app.use(morgan('tiny'))

app.use(express.json())

adminRoute(app)

app.use(shopify.cspHeaders())
app.use(serveStatic(STATIC_PATH, { index: false }))

app.use('/*', shopify.ensureInstalledOnShop(), async (req, res, _next) => {
  return res
    .status(200)
    .set('Content-Type', 'text/html')
    .send(readFileSync(join(STATIC_PATH, 'index.html')))
})

app.listen(PORT, () => {
  const { SHOP, SHOPIFY_API_KEY } = process.env

  const SHOP_UID = SHOP.replace('.myshopify.com', '')

  console.log('\n')
  console.log(` ++++++++++++++++++++++++++++++++++++`)
  console.log(` +                                  +`)
  console.log(` +   WELCOME TO ARENACOMMERCE APP   +`)
  console.log(` +                                  +`)
  console.log(` ++++++++++++++++++++++++++++++++++++`)
  console.log('')
  console.log(' Shopify App URL:')
  console.log(` https://admin.shopify.com/store/${SHOP_UID}/apps/${SHOPIFY_API_KEY}`)
  console.log('\n')
})
