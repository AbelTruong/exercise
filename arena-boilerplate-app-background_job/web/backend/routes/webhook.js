import Controller from '../controllers/webhook.js'

export default function webhookRoute(app) {
  app.post(/\/api\/webhooks([\/a-zA-Z]?)+/, Controller.post)
}
