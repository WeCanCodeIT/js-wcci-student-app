const studentService = require("../services/student-service");

class StudentController {
  static renderAll(req, res) {
    res.render("students/all", { students: studentService.findAll() });
  }
}

module.exports = StudentController;
