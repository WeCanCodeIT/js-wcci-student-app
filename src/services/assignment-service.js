const Assignment = require('../models/Assignment.sequelize')

module.exports = {
  async findAll () {
    return await Assignment.findAll()
  },
  async findById (id) {
    return await Assignment.findByPk(Number(id))
  },
  async save (assignment) {
    await Assignment.create(assignment)
  }
}
