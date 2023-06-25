import PostgresSequelize from '../connector/postgres/index.js'
import { DataTypes } from 'sequelize'

const Model = PostgresSequelize.define('background_jobs', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  shop: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  queue: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELED'),
    defaultValue: 'PENDING',
  },
  message: {
    type: DataTypes.STRING,
  },
  progress: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  data: {
    type: DataTypes.JSON,
    defaultValue: null,
  },
  result: {
    type: DataTypes.JSON,
    defaultValue: null,
  },
  schedule: {
    type: DataTypes.STRING,
  },
  group: {
    type: DataTypes.STRING,
  },
})

Model.prototype.toJSON = function () {
  let values = Object.assign({}, this.get())

  values.data = values.data ? JSON.parse(values.data) : null
  values.result = values.result ? JSON.parse(values.result) : null

  return values
}

Model.sync()

export default Model
