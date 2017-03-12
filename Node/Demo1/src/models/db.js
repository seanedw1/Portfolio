// set constant of sequelize for orm
const Sequelize = require('sequelize');

// load in env file
if (!process.env.DB_HOST) require('dotenv').config();

// setting constant for envs
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,

// how many connections are happening to our system
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
// turn of logging
  logging: false,
});

// In db user table will be displayed as users (plural)
const user = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

// In db course table will be displayed as courses (plural)
const beta = sequelize.define('beta', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.DATE,
  },
});

// establish relation in db for user and beta apps
user.hasMany(beta, {
  foreignKey: 'betaID',
});

// setup ability to reach to db to syncronize to this format
sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.beta = beta;
