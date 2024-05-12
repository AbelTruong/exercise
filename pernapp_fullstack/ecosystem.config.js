require('dotenv').config({ path: './backend/.env' })

const {
  PORT,
  POSTGRES_USER,
  POSTGRES_PWD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  JWT_EXPIRATION,
  JWT_SECRET,
  CLOUDINARY_FOLDER,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET_KEY,
} = process.env

module.exports = {
  apps: [
    {
      name: 'fullstack-app',
      script: 'npm',
      args: 'run serve',
      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT,
        POSTGRES_USER,
        POSTGRES_PWD,
        POSTGRES_HOST,
        POSTGRES_PORT,
        POSTGRES_DB,
        JWT_EXPIRATION,
        JWT_SECRET,
        CLOUDINARY_FOLDER,
        CLOUDINARY_NAME,
        CLOUDINARY_API_KEY,
        CLOUDINARY_SECRET_KEY,
      },
    },
  ],
}
