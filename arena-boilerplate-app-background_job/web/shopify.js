import dotenv from 'dotenv'
dotenv.config({ path: './../.env' })

import { BillingInterval, LATEST_API_VERSION } from '@shopify/shopify-api'
import { shopifyApp } from '@shopify/shopify-app-express'
import { PostgreSQLSessionStorage } from '@shopify/shopify-app-session-storage-postgresql'
import { restResources } from '@shopify/shopify-api/rest/admin/2023-04'

const { POSTGRES_USER, POSTGRES_PWD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB } = process.env
const DB_PATH = `postgres://${POSTGRES_USER}:${POSTGRES_PWD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`

// The transactions with Shopify will always be marked as test transactions, unless NODE_ENV is production.
// See the ensureBilling helper to learn more about billing in this template.
const billingConfig = {
  'My Shopify One-Time Charge': {
    // This is an example configuration that would do a one-time charge for $5 (only USD is currently supported)
    amount: 5.0,
    currencyCode: 'USD',
    interval: BillingInterval.OneTime,
  },
}

const shopify = shopifyApp({
  api: {
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: process.env.SCOPES,
    hostName: process.env.HOST.replace('https://', ''),
    hostScheme: 'https',
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: true,
    billing: undefined, // or replace with billingConfig above to enable example billing
  },
  auth: {
    path: '/api/auth',
    callbackPath: '/api/auth/callback',
  },
  webhooks: {
    path: '/api/webhooks',
  },
  // This should be replaced with your preferred storage strategy
  sessionStorage: new PostgreSQLSessionStorage(DB_PATH),
})

export default shopify
