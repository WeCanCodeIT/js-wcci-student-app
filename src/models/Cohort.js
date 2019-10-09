class Cohort {
  constructor() {
    this.students = new Map();
  }

  addStudent(studentToAdd) {
    this.students.set(studentToAdd.getId(), studentToAdd);
  }

  getStudent(studentId) {
    const student = this.students.get(studentId);
    return student;
  }

  getStudentsArray() {
    return [...this.students.values()];
  }
}

module.exports = Cohort;
