const studentService = require("../services/student-service");
const StudentDomainObject = require("../models/Student")

class StudentController {
  static addStudent (req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const imageUrl = req.body.imageUrl

    studentService.save(new StudentDomainObject(firstName, lastName, imageUrl), (savedStudent) => {
      res.redirect("/students")
    })
  }
  static renderAll (req, res) {
    studentService.findAll((students) => {
      res.render("students/all", { students: students });
    })
  }
  static renderStudent (req, res) {
    const studentId = Number(req.params.id);
    studentService.findById(studentId, (student) => {
      res.render("students/single", { student });
    })
  }
}

module.exports = StudentController;
