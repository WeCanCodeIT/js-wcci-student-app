const Sequelize = require('sequelize')
const Student = require('./Student.sequelize')

const sequelize = require('../data/db')

const Assignment = sequelize.define('assignment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Assignment.belongsToMany(Student, { through: 'student_assignment' })
Student.belongsToMany(Assignment, { through: 'student_assignment' })

module.exports = Assignment
