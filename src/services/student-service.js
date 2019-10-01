const db = require("../data/db-mock");

module.exports = {
  findAll() {
    const students = db.readAllStudents();
    return students;
  }
};
