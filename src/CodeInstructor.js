const Student = require("./Student");

class CodeInstructor {
  constructor(cohort) {
    this.cohort = cohort;
  }

  addStudentToCohort(studentToAdd) {
    this.cohort.addStudent(studentToAdd);
  }

  getCohortStudents() {
    return this.cohort.getStudentsArray();
  }

  giveAssignment(studentToGiveAssignment, assignment) {
    if (!(studentToGiveAssignment instanceof Student)) {
      throw new Error("giveAssignment needs to receive a student");
    }
    studentToGiveAssignment.receiveAssignment(assignment);
  }

  giveAssignmentToCohort(assignment) {
    this.cohort.getStudentsArray().forEach(student => {
      this.giveAssignment(student, assignment);
    });
  }
}

module.exports = CodeInstructor;
