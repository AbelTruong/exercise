import Controller from '../controllers/submition.js'

export default function submitionRoute(app) {
  app.get('/api/submition', Controller.submit)
}
