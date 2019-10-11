const Sequelize = require('sequelize')

const sequelize = require('../data/db')

const Cohort = sequelize.define('cohort', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Cohort
