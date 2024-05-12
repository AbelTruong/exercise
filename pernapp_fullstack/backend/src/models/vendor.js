import { DataTypes } from 'sequelize'
import PostgresSequelize from '../connector/postgres/index.js'

const Model = PostgresSequelize.define('vendors', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
})

Model.sync()

export default Model
