const cohortService = require('../services/cohort-service')
const Cohort = require('../models/Cohort')

class CohortController {
  static async addCohort (req, res) {
    const language = req.body.language
    await cohortService.save(new Cohort(language))
    res.redirect('/cohorts')
  }
  static async renderAll (req, res) {
    res.render("cohorts/all", { cohorts: await cohortService.findAll() })
  }
  static async renderSingle (req, res) {
    const cohort = await cohortService.findById(req.params.id)
    cohort.students = await cohort.getStudents()
    res.render("cohorts/single", { cohort })
  }
}

module.exports = CohortController
