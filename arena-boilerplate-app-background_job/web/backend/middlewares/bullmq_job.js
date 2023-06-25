import { Queue, Worker } from 'bullmq'
import BackgroundJob from './background_job.js'
import BullmqWorker from './bullmq_worker.js'

let MyQueues = []

/**
 *
 * @param {String} queueName
 * @returns Object
 */
const createNewQueue = (queueName) => {
  const myQueue = new Queue(queueName, {
    connection: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  })

  const worker = new Worker(queueName, async (job) => await BullmqWorker.create(job), {
    concurrency: 1,
    connection: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  })

  worker.on('completed', async (job) => {
    console.log(`${job.queue.name} ${job.data.__type} ${job.id} has completed`)

    job.remove()
  })

  worker.on('failed', async (job, err) => {
    console.log(`${job.queue.name} ${job.data.__type} ${job.id} has failed: ${err.message}`)

    job.remove()
  })

  worker.on('removed', async (job) => {})

  return myQueue
}

/**
 *
 * @param {String} __type
 * @param {Object} data
 * @param {String} group
 * @returns Object
 */
const create = async (__type, data, group) => {
  // console.log('*********************************')
  // console.log('BullmqJob.create')
  // console.log('__type :>> ', __type)
  // for (const key of Object.keys(data)) {
  //   console.log(` | ${key} :>> ${data[key]}`)
  // }
  // console.log('*********************************')

  try {
    /**
     * Validate params
     */
    if (!'shop' in data) throw new Error('Shop cannot be blank')

    /**
     * Create new queue
     */
    let myQueue = null
    let queueName = data.shop.replace(/.myshopify.com/g, '__queue')
    for (let i = 0; i < MyQueues.length; i++) {
      if (MyQueues[i].name === queueName) {
        myQueue = MyQueues[i]
        break
      }
    }
    if (!myQueue) {
      myQueue = createNewQueue(queueName)
      MyQueues.push(myQueue)
    }

    /**
     * Create backgroundJob
     */
    let backgroundJob = null
    let GROUP = group || `${__type}_${Date.now()}`
    if (data.backgroundJobId) {
      backgroundJob = await BackgroundJob.findOne({
        id: data.backgroundJobId,
        shop: data.shop,
      })
      backgroundJob = await BackgroundJob.update(data.backgroundJobId, {
        status: BackgroundJob.Status.PENDING,
        message: '',
        progress: 0,
        result: null,
        schedule: data.schedule,
        group: GROUP,
      })
    }
    if (!backgroundJob) {
      backgroundJob = await BackgroundJob.create({
        type: __type,
        shop: data.shop,
        queue: queueName,
        data: JSON.stringify(data),
        schedule: data.schedule,
        group: GROUP,
      })
    }

    /**
     * Add job to queue
     */
    let jobName = `${queueName}_${Date.now()}`
    let jobData = { __type, backgroundJobId: backgroundJob.id }
    let jobOptions = undefined

    let job = await myQueue.add(jobName, jobData, jobOptions)
    console.log(`${job.queue.name} ${job.data.__type} ${job.id} has added`)

    return { jobId: job.id, backgroundJobId: backgroundJob.id, group: GROUP }
  } catch (error) {
    console.log('BullmqJob.create error :>> ', error)
    throw error
  }
}

const BullmqJob = { create }

export default BullmqJob
