import BackgroundJob from './background_job.js'
import BullmqActions from './bullmq_actions.js'
import Product from './product.js'
import StoreSetting from './store_setting.js'

const create = async (data, backgroundJobId) => {
  try {
    const { shop, products } = data

    let result = []

    // get storeSetting
    let storeSetting = await StoreSetting.findOne({ shop })
    const { accessToken, plusStore } = storeSetting

    // create many products
    await new Promise((resolve, reject) => {
      let count = 0
      let total = products.length
      if (!total) resolve()
      for (let i = 0; i < total; i++) {
        setTimeout(() => {
          Product.create({
            shop,
            accessToken,
            data: { product: products[i] },
          })
            .then((res) => {
              console.log(`[${i + 1}/${total}] success`)

              // add to result
              result.push({ id: res.product.id })
            })
            .catch((err) => {
              console.log(`[${i + 1}/${total}] failed:`, err.message)
            })
            .then(() => {
              count++
              if (count == total) resolve()

              // update background job progress
              let progress = Math.ceil((count / total) * 100)
              let status =
                progress == 100 ? BackgroundJob.Status.COMPLETED : BackgroundJob.Status.RUNNING
              BullmqActions.updateJobProgress(backgroundJobId, { progress, status, result })
            })
        }, i * 500)
      }
    })
  } catch (error) {
    console.log('BulkProduct.create error :>> ', error)
    throw error
  }
}

const BulkProduct = { create }

export default BulkProduct
