import { DataTypes } from 'sequelize'
import PostgresSequelize from '../connector/postgres/index.js'

import CountryModel from './country.js'

const Model = PostgresSequelize.define('customers', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!')
    },
  },
  age: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.birthday
        ? Math.ceil(
            new Date(Date.now() - new Date(this.birthday).getTime()).getTime() / 31536000000,
          )
        : null
    },
    set(value) {
      throw new Error('Do not try to set the `age` value!')
    },
  },
})

Model.prototype.toJSON = function () {
  var values = Object.assign({}, this.get())

  return values
}

Model.belongsTo(CountryModel)

Model.sync()

export default Model
