import PostgresSequelize from './../connector/postgres/index.js'
import { DataTypes } from 'sequelize'

const Model = PostgresSequelize.define('store_settings', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  shop: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'compositeIndex',
  },
  accessToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scopes: {
    type: DataTypes.STRING,
  },
  webhooks: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING, // INSTALLED, RUNNING, UNINSTALLED, LOCKED
    defaultValue: 'INSTALLED',
  },
  acceptedAt: {
    type: DataTypes.DATE,
  },
  appPlan: {
    type: DataTypes.STRING, // BASIC, PRO, PLUS
    defaultValue: 'BASIC',
  },
  testStore: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  credits: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  billings: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: null,
  },
  permissions: {
    type: DataTypes.STRING,
  },
  storeName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  storePlan: {
    type: DataTypes.STRING,
  },
  storeOwner: {
    type: DataTypes.STRING,
  },
})

Model.prototype.toJSON = function () {
  let values = Object.assign({}, this.get())

  values.billings = values.billings ? values.billings : []
  values.plusStore = ['shopify_plus'].includes(values.plan)

  return values
}

Model.sync()

export default Model
