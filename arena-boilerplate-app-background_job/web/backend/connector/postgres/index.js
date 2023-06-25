import dotenv from 'dotenv'
dotenv.config({ path: './../.env' })

import { Sequelize } from 'sequelize'

const { POSTGRES_USER, POSTGRES_PWD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB } = process.env

const PostgresSequelize = new Sequelize(
  `postgres://${POSTGRES_USER}:${POSTGRES_PWD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`,
  { logging: false }
)

export default PostgresSequelize
