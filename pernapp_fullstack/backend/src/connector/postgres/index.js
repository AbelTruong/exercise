import 'dotenv/config'

import { Sequelize } from 'sequelize'

const { POSTGRES_USER, POSTGRES_PWD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB } = process.env

console.log('process.env', process.env)

const PostgresSequelize = new Sequelize(
  // `postgres://${POSTGRES_USER}:${POSTGRES_PWD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`,
  `postgres://postgres:123456$@127.0.0.1:5432/pern_app`,
  { logging: false },
)

export default PostgresSequelize
