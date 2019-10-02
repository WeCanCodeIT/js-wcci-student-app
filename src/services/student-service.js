const db = require("../data/db-mock");

module.exports = {
  findAll() {
    const students = db.readAllStudents();
    return students;
  },
  findById(id) {
    const student = db.readSingleStudent(id);
    return student;
  }
};
