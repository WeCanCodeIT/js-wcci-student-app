class Cohort {
  constructor() {
    this.students = new Map();
  }

  addStudent(studentToAdd) {
    this.students.set(studentToAdd.getId(), studentToAdd);
  }

  getStudent(studentId) {
    return this.students.get(studentId);
  }

  getStudentsArray() {
    return [...this.students.values()];
  }
}

module.exports = Cohort;
