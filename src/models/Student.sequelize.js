const Cohort = require('./Cohort.sequelize')
const Sequelize = require('sequelize')

const sequelize = require('../data/db')

const Student = sequelize.define('student', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  enrolled: {
    type: Sequelize.BOOLEAN,
    default: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

Student.belongsTo(Cohort, { constraints: true, onDelete: 'CASCADE' })
Cohort.hasMany(Student)

module.exports = Student
