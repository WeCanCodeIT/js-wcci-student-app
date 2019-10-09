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

  giveAssignment(assignmentReceiver, assignment) {
    if (typeof assignmentReceiver.receiveAssignment !== "function") {
      // is an AssignmentReceiver
      throw new Error(
        "giveAssignment method must be passed an AssignmentReceiver"
      );
    }
    assignmentReceiver.receiveAssignment(assignment);
  }

  giveAssignmentToCohort(assignment) {
    this.cohort.getStudentsArray().forEach(student => {
      this.giveAssignment(student, assignment);
    });
  }
}

module.exports = CodeInstructor;
