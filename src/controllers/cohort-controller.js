const cohortService = require('../services/cohort-service')

class CohortController {
  static renderAll (req, res) {
    cohortService.findAll()
    res.render("cohorts/all", { cohorts: [] })
  }
}

module.exports = CohortController
