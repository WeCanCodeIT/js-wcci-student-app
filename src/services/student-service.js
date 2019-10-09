const Student = require('../models/Student.sequelize')

module.exports = {
  findAll (callback) {
    Student.findAll().then(callback);
  },
  findById (id, callback) {
    Student.findByPk(id).then(callback)
  },
  save (student, callback) {
    Student.create(student).then(callback)
  }
};
