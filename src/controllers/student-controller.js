const studentService = require("../services/student-service");

class StudentController {
  static renderAll(req, res) {
    res.render("students/all", { students: studentService.findAll() });
  }
  static renderStudent(req, res) {
    const studentId = Number(req.params.id);
    res.render("students/single", {
      student: studentService.findById(studentId)
    });
  }
}

module.exports = StudentController;
