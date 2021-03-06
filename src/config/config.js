const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    database: process.env.DB_DEV_NAME,
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: 'andeladeveloper',
    database: 'locations_test',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DATABASE_USERNAME_PROD,
    database: process.env.DATABASE_PROD,
    password: process.env.DATABASE_PASSWORD_PROD,
    host: process.env.DATABASE_HOST_PROD,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  },
};
