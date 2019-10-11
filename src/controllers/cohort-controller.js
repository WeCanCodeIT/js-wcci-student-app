const cohortService = require('../services/cohort-service')
const Cohort = require('../models/Cohort')

class CohortController {
  static async renderAll (req, res) {
    res.render("cohorts/all", { cohorts: await cohortService.findAll() })
  }
  static async renderSingle (req, res) {
    const cohort = await cohortService.findById(req.params.id)
    const students = await cohort.getStudents()
    res.render("cohorts/single", { cohort, students })
  }
  static async addCohort (req, res) {
    const language = req.body.language
    await cohortService.save(new Cohort(language))
    res.redirect('/cohorts')
  }
}

module.exports = CohortController
