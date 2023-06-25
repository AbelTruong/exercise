import Controller from './../controllers/background_job.js'

export default function backgroundJobRoute(app) {
  app.get('/api/background-jobs', Controller.find)
}
