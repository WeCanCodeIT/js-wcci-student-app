const Student = require('../models/Student.sequelize')

module.exports = {
  async findAll () {
    return await Student.findAll()
  },
  async findById (id) {
    return await Student.findByPk(id)
  },
  async save (student, assignmentIds) {
    const newStudent = await Student.create(student)
    newStudent.addAssignments(assignmentIds)
  }
};
