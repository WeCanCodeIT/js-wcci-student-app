const studentService = require("../services/student-service");
const Student = require("../models/Student.sequelize")
const StudentDomainObject = require("../models/Student")

class StudentController {
  static addStudent (req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const imageUrl = req.body.imageUrl

    studentService.save(new StudentDomainObject(firstName, lastName, imageUrl))

    res.redirect("/students")
  }
  static renderAll (req, res) {
    res.render("students/all", { students: studentService.findAll() });
  }
  static renderStudent (req, res) {
    const studentId = Number(req.params.id);
    res.render("students/single", {
      student: studentService.findById(studentId)
    });
  }
}

module.exports = StudentController;
