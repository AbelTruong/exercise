import BackgroundJob from './background_job.js'
import BulkProduct from './bulk_products.js'
import BullmqActions from './bullmq_actions.js'
import StoreSettingMiddleware from './store_setting.js'

const create = async (job) => {
  console.log(`${job.queue.name} ${job.data.__type} ${job.id} run`)

  const { __type, backgroundJobId } = job.data

  let backgroundJob = null
  let storeSetting = null

  try {
    // get backgroundJob
    backgroundJob = await BackgroundJob.findById(backgroundJobId)

    // check running process
    if (
      ![BackgroundJob.Status.PENDING, BackgroundJob.Status.RUNNING].includes(backgroundJob.status)
    ) {
      throw { status: backgroundJob.status, message: backgroundJob.message }
    }

    // update backgroundJob
    backgroundJob = await BackgroundJob.update(backgroundJobId, {
      status: BackgroundJob.Status.RUNNING,
    })

    // get storeSetting
    storeSetting = await StoreSettingMiddleware.findOne({ shop: backgroundJob.data.shop })
    const { shop, accessToken, plusStore } = storeSetting

    /**
     * processing
     */
    switch (__type) {
      case 'bulk_product':
        await BulkProduct.create(backgroundJob.data, backgroundJob.id)
        break

      default:
        throw new Error('Invalid background job type')
        break
    }

    // // update backgroundJob
    // await BullmqActions.updateJobProgress(backgroundJobId, {
    //   status: BackgroundJob.Status.COMPLETED,
    //   progress: 100,
    //   message: '',
    // })
  } catch (error) {
    console.log(`${job.queue.name} ${job.data.__type} ${job.id} throw error: ${error.message}`)

    // update backgroundJob
    await BullmqActions.updateJobProgress(backgroundJobId, {
      status: error.status || BackgroundJob.Status.FAILED,
      progress: 0,
      message: error.message,
    })
  }
}

const BullmqWorker = { create }

export default BullmqWorker
