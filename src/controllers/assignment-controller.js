const assignmentService = require('../services/assignment-service')
const Assignment = require('../models/Assignment')

module.exports = {
  async add (req, res) {
    const title = req.body.title
    await assignmentService.save(new Assignment(title))
    res.redirect('/assignments')
  },
  async renderAll (req, res) {
    res.render("assignments/all", { assignments: await assignmentService.findAll() })
  },
  async renderSingle (req, res) {
    const assignment = await assignmentService.findById(req.params.id)
    assignment.students = await assignment.getStudents()
    res.render("assignments/single", { assignment })
  }
}
