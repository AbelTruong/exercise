import ResponseHandler from '../helpers/responseHandler.js'
import Joi from 'joi'

const schema = {
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  phone: Joi.any(),
  gender: Joi.any(),
  birthday: Joi.any(),
  avatar: Joi.any(),
  photos: Joi.any(),
  countryId: Joi.any(),
}

let createSchema = {}
Array.from([
  'firstName',
  'lastName',
  'email',
  'phone',
  'gender',
  'birthday',
  'avatar',
  'photos',
  'countryId',
]).forEach((key) => (createSchema[key] = schema[key]))
createSchema = Joi.object(createSchema)

let updateSchema = {}
Array.from([
  'firstName',
  'lastName',
  'email',
  'phone',
  'gender',
  'birthday',
  'avatar',
  'photos',
  'countryId',
]).forEach((key) => (updateSchema[key] = schema[key]))
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
