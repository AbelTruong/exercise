import { DataTypes } from 'sequelize'
import PostgresSequelize from '../connector/postgres/index.js'

import CountryModel from './country.js'

const Model = PostgresSequelize.define('users', {
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
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
  },
  role: {
    type: DataTypes.ENUM('GUEST', 'MEMBERSHIP', 'ADMIN'),
    defaultValue: 'GUEST',
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

  delete values.password

  return values
}

Model.belongsTo(CountryModel)

Model.sync()

export default Model
