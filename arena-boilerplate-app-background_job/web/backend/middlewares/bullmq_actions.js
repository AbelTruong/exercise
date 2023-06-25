import BackgroundJob from './background_job.js'

const updateJobProgress = async (backgroundJobId, data = {}) => {
  let backgroundJob = await BackgroundJob.findById(backgroundJobId)

  // check running process
  if (
    ![BackgroundJob.Status.PENDING, BackgroundJob.Status.RUNNING].includes(backgroundJob.status)
  ) {
    throw { status: backgroundJob.status, message: backgroundJob.message }
  }

  backgroundJob = await BackgroundJob.update(backgroundJobId, {
    status: data.status || backgroundJob.status,
    message: data.message || backgroundJob.message,
    progress: data.progress || backgroundJob.progress,
    result: JSON.stringify(data.result || backgroundJob.result),
  })

  console.log(`${backgroundJob.queue} ${backgroundJob.type} progress ${backgroundJob.progress}%`)
  if (backgroundJob.status == BackgroundJob.Status.COMPLETED) {
    console.log('backgroundJob :>> ', backgroundJob)
  }
}

const BullmqActions = { updateJobProgress }

export default BullmqActions
