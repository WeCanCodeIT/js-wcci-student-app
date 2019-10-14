const cohortService = require('../services/cohort-service')
const studentService = require("../services/student-service");
const StudentDomainObject = require("../models/Student")

module.exports = {
  async addStudent (req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const imageUrl = req.body.imageUrl
    const cohortId = Number(req.body.cohort)

    const studentToAdd = new StudentDomainObject(firstName, lastName, imageUrl)
    studentToAdd.cohortId = cohortId

    await studentService.save(studentToAdd)
    res.redirect("/students")
  },
  async renderAll (req, res) {
    res.render("students/all", { cohorts: await cohortService.findAll(), students: await studentService.findAll() });
  },
  async renderSingle (req, res) {
    const studentId = Number(req.params.id);
    const student = await studentService.findById(studentId)
    const cohort = await student.getCohort()
    res.render("students/single", { cohort, student });
  }
}
