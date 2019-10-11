const Cohort = require('../models/Cohort.sequelize')

module.exports = {
  async findAll () {
    return await Cohort.findAll()
  },
  async findById (id) {
    return await Cohort.findByPk(Number(id))
  },
  async save (cohort) {
    await Cohort.create(cohort)
  }
}
