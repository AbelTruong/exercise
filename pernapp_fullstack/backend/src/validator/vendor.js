import Joi from 'joi'
import ResponseHandler from '../helpers/responseHandler.js'

const schema = {
  name: Joi.string().min(2).max(50).required(),
}

let createSchema = {}
Array.from(['name']).forEach((key) => (createSchema[key] = schema[key]))
createSchema = Joi.object(createSchema)

let updateSchema = {}
Array.from(['name']).forEach((key) => (updateSchema[key] = schema[key]))
updateSchema = Joi.object(updateSchema)

export default {
  create: async (req, res, next) => {
    try {
      await createSchema.validateAsync(req.body)

      next()
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  update: async (req, res, next) => {
    try {
      await updateSchema.validateAsync(req.body)

      next()
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}
