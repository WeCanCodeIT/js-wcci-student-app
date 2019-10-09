const Student = require('../models/Student.sequelize')

module.exports = {
  findAll () {
    let students
    Student.findAll().then((res) => {
      students = res.dataValues
      console.log(students)
    });
    return students;
  },
  findById (id) {
    const student = db.readSingleStudent(id);
    return student;
  },
  save (student) {
    Student.create(student)
  }
};
