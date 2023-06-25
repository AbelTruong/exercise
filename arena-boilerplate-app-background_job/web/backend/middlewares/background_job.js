import Repository from '../repositories/background_job.js'

const Status = {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELED: 'CANCELED',
}

const BackgroundJob = {
  Status,

  getProgress: async (group) => {
    let backgroundJobs = await Repository.getAll({ group })

    let progress =
      backgroundJobs.length == 1
        ? backgroundJobs[0].progress
        : Math.ceil(
            (backgroundJobs.filter(
              (item) => ![Status.PENDING, Status.RUNNING].includes(item.status)
            ).length /
              backgroundJobs.length) *
              100
          )

    return { progress }
  },

  getAll: async (where) => await Repository.getAll(where),
  count: async (where) => await Repository.count(where),
  find: async (filter) => await Repository.find(filter),
  findById: async (id) => await Repository.findById(id),
  findOne: async (where) => await Repository.findOne(where),
  create: async (data) => await Repository.create(data),
  update: async (id, data) => await Repository.update(id, data),
  delete: async (id) => await Repository.delete(id),
}

export default BackgroundJob
