import { DataTypes } from 'sequelize'
import PostgresSequelize from '../connector/postgres/index.js'

import VendorModel from './vendor.js'

const Model = PostgresSequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  handle: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  publish: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'DRAFT', 'ARCHIVED'),
    defaultValue: 'ACTIVE',
  },
  thumbnail: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
})

Model.belongsTo(VendorModel)

Model.sync()

export default Model
