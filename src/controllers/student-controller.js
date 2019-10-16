const assignmentService = require('../services/assignment-service')
const cohortService = require('../services/cohort-service')
const studentService = require("../services/student-service");
const StudentDomainObject = require("../models/Student")

module.exports = {
  async addStudent (req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const imageUrl = req.body.imageUrl
    const cohortId = Number(req.body.cohort)

    // This is where I fucked up before
    let assignmentStringIds

    if (req.body.assignments === undefined) {
      assignmentStringIds = []
    } else if (typeof req.body.assignments === 'string') {
      assignmentStringIds = [req.body.assignments]
    } else {
      assignmentStringIds = [...req.body.assignments]
    }
    // Do that ^^^

    const assignmentIds = []
    assignmentStringIds.forEach(assignmentId => {
      assignmentIds.push(Number(assignmentId))
    })

    const studentToAdd = new StudentDomainObject(firstName, lastName, imageUrl)
    studentToAdd.cohortId = cohortId

    await studentService.save(studentToAdd, assignmentIds)
    res.redirect("/students")
  },
  async renderAll (req, res) {
    res.render("students/all", { assignments: await assignmentService.findAll(), cohorts: await cohortService.findAll(), students: await studentService.findAll() });
  },
  async renderSingle (req, res) {
    const studentId = Number(req.params.id);
    const student = await studentService.findById(studentId)
    const cohort = await student.getCohort()
    const assignments = await student.getAssignments()
    res.render("students/single", { assignments, cohort, student });
  }
}
