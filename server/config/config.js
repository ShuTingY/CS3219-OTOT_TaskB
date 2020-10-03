require('dotenv').config();


module.exports = {

  // If using online database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'todo',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'todo_test',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};